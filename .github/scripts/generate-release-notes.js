const { GoogleGenerativeAI } = require("@google/generative-ai");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Configuration
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = process.env.GEMINI_MODEL || "gemini-2.5-flash"; 
const VERSION_TAG = process.argv[2]; // e.g., v1.2.0
// Fix for Windows: Avoid 2>/dev/null, handle error in try-catch block instead
const PREVIOUS_TAG_CMD = `git describe --abbrev=0 --tags ${VERSION_TAG}~1`;

if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY is not set.");
    process.exit(1);
}

if (!VERSION_TAG) {
    console.error("Error: Version tag must be provided as the first argument.");
    process.exit(1);
}

async function run() {
    try {
        console.log(`Generating release notes for ${VERSION_TAG} using ${MODEL_NAME}...`);

        // 1. Get Previous Tag
        let previousTag;
        try {
            previousTag = execSync(PREVIOUS_TAG_CMD).toString().trim();
        } catch (e) {
            console.log("No previous tag found, assuming first release.");
            previousTag = execSync("git rev-list --max-parents=0 HEAD").toString().trim();
        }
        console.log(`Comparing from ${previousTag} to ${VERSION_TAG}`);

        // 2. Get Commit Messages
        const commits = execSync(`git log ${previousTag}..${VERSION_TAG} --pretty=format:"- %s (%h)" --no-merges`).toString();
        
        if (!commits) {
            console.log("No commits found between tags.");
            return;
        }

        // 3. Generate Content with Gemini
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const prompt = `
            You are a release note generator for a software project named 'Mivo'.
            
            Here are the commits for the new version ${VERSION_TAG}:
            ${commits}

            Please generate a clean, professional release note in Markdown format.
            
            Strict Rules:
            1. **NO EMOJIS**: Do not use any emojis in headers, bullet points, or text.
            2. **Structure**: Group changes strictly into these headers (if applicable):
               - ### Features
               - ### Bug Fixes
               - ### Improvements
               - ### Maintenance
            3. **Format**: Use simple bullet points (-) for each item.
            4. **Content**: Keep it concise but descriptive. Do not mention 'Merge pull request' commits.
            5. **Header**: Start with a simple header: "# Release Notes ${VERSION_TAG}"
            6. **Output**: Output ONLY the markdown content.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // 4. Read Template (Optional) and Merge
        // For now, we just output the AI text. You can append this to a template if needed.
        
        // Write to file
        const outputPath = path.join(process.cwd(), ".github", "release_notes.md");
        fs.writeFileSync(outputPath, text);
        
        console.log(`Release notes generated at ${outputPath}`);
        console.log(text);

        // Export for GitHub Actions
        const githubOutput = process.env.GITHUB_OUTPUT;
        if (githubOutput) {
             // Multiline string for GitHub Output
             fs.appendFileSync(githubOutput, `RELEASE_NOTES<<EOF\n${text}\nEOF\n`);
        }

    } catch (error) {
        console.error("Failed to generate release notes:", error);
        process.exit(1);
    }
}

run();
