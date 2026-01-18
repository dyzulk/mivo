import { basicSetup } from "codemirror"
import { EditorView, keymap } from "@codemirror/view"
import { html } from "@codemirror/lang-html"
import { oneDark } from "@codemirror/theme-one-dark"
import { EditorState } from "@codemirror/state"
import { color } from "@uiw/codemirror-extensions-color"
import { abbreviationTracker, expandAbbreviation } from "@emmetio/codemirror6-plugin"
import { linter, lintGutter } from "@codemirror/lint"
import { syntaxTree } from "@codemirror/language"

// Simple linter that flags parser error nodes
const htmlLinter = linter(view => {
    const diagnostics = []
    syntaxTree(view.state).iterate({
        enter: (node) => {
            if (node.type.isError) {
                diagnostics.push({
                    from: node.from,
                    to: node.to,
                    severity: "error",
                    message: "Syntax error"
                })
            }
        }
    })
    return diagnostics
})

// Expose to window for easy integration in PHP views
window.MivoEditor = {
    init: (options) => {
        const { parent, initialValue, onChange, dark } = options;
        
        const extensions = [
            basicSetup,
            html(),
            color,
            htmlLinter,
            lintGutter(),
            abbreviationTracker({
                syntax: 'html'
            }),
            keymap.of([
                { key: 'Tab', run: expandAbbreviation },
            ]),
            EditorView.lineWrapping,
            EditorView.updateListener.of((update) => {
                if (update.docChanged && typeof onChange === 'function') {
                    onChange(update.state.doc.toString());
                }
            })
        ];

        if (dark) {
            extensions.push(oneDark);
        }

        const state = EditorState.create({
            doc: initialValue || "",
            extensions: extensions
        });

        const view = new EditorView({
            state,
            parent: parent
        });

        return view;
    },
    
    // Helper to toggle theme without re-init if needed
    // For simplicity now, we re-init or just use the initial state.
    // In Mivo, most pages reload or can be handled via state updates.
};
