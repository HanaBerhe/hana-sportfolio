# PowerShell script to prepare your portfolio for GitHub
Write-Host "Preparing Portfolio for GitHub..." -ForegroundColor Green
Write-Host "===============================" -ForegroundColor Green

# Initialize git repository if it doesn't exist
if (!(Test-Path -Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Create .gitignore if it doesn't exist
if (!(Test-Path -Path ".gitignore")) {
    Write-Host "Creating .gitignore file..." -ForegroundColor Yellow
    @"
node_modules/
dist/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
*.log
.env
.env.build
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
Thumbs.db
client/node_modules/
client/dist/
server/node_modules/
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
}

# Add all files
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Check if there are changes to commit
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "Committing changes..." -ForegroundColor Yellow
    git commit -m "Initial commit for portfolio deployment"
    Write-Host "Changes committed successfully!" -ForegroundColor Green
} else {
    Write-Host "No changes to commit." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Repository prepared successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Create a new repository on GitHub" -ForegroundColor White
Write-Host "2. Follow GitHub's instructions to push an existing repository" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/yourusername/your-repo-name.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")