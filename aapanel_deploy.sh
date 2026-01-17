#!/bin/bash
# aaPanel Webhook Deployment Script for Mivo
# Path: /www/wwwroot/<your_project_path>

PROJECT_PATH="/www/wwwroot/<your_project_path>"

# Set HOME at the beginning - essential for git and npm
export HOME="$PROJECT_PATH"

echo "---------------------------------------"
echo "Starting Deployment: $(date)"
echo "---------------------------------------"

if [ ! -d "$PROJECT_PATH" ]; then
    echo "Error: Project directory $PROJECT_PATH not found."
    exit 1
fi

cd $PROJECT_PATH || exit

# 1. Pull latest changes
echo "Step 1: Pulling latest changes from Git..."
# Fix for dubious ownership error - now works because HOME is set
git config --global --add safe.directory $PROJECT_PATH
git pull origin main

# 2. Install PHP dependencies
if [ -f "composer.json" ]; then
    echo "Step 2: Installing PHP dependencies..."
    # Set COMPOSER_HOME to avoid environment variable errors
    export COMPOSER_HOME="$PROJECT_PATH/.composer"
    composer install --no-interaction --optimize-autoloader --no-dev
fi

# 3. Build Assets
if [ -f "package.json" ]; then
    echo "Step 3: Building assets..."
    # If node_modules doesn't exist, install first
    if [ ! -d "node_modules" ]; then
        echo "node_modules not found, installing..."
        npm install
    fi
    
    # Force permissions on the tailwind binary and its target
    echo "Ensuring node_modules permissions..."
    chmod -R 755 node_modules
    find node_modules/.bin/ -type l -exec chmod -h 755 {} +
    find node_modules/tailwindcss/ -type f -name "tailwindcss" -exec chmod +x {} +
    
    # Try running build
    npm run build
fi

# 4. Set Permissions
echo "Step 4: Setting permissions..."
chown -R www:www .
chmod +x mivo
chmod -R 755 public
# If there's a storage directory (MVC style usually has one)
if [ -d "storage" ]; then
    chmod -R 775 storage
fi
# Cleanup composer home if created
if [ -d ".composer" ]; then
    rm -rf .composer
fi

echo "---------------------------------------"
echo "Deployment Finished Successfully!"
echo "---------------------------------------"
