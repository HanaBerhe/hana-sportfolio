# PowerShell script to upload your portfolio to GitHub
Write-Host "GitHub Repository Setup" -ForegroundColor Green
Write-Host "=====================" -ForegroundColor Green

Write-Host ""
Write-Host "Step 1: Create a new repository on GitHub" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Sign in to your GitHub account" -ForegroundColor White
Write-Host "3. Enter a repository name (e.g., 'hana-portfolio')" -ForegroundColor White
Write-Host "4. Choose 'Public' visibility" -ForegroundColor White
Write-Host "5. Do NOT initialize with a README" -ForegroundColor White
Write-Host "6. Click 'Create repository'" -ForegroundColor White

Write-Host ""
Write-Host "Step 2: Push your local repository to GitHub" -ForegroundColor Yellow
Write-Host "After creating the repository, run these commands in your terminal:" -ForegroundColor Cyan
Write-Host ""
Write-Host "cd c:\Users\hp\Downloads\portfolio\myportfolio" -ForegroundColor White
Write-Host "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git" -ForegroundColor White
Write-Host "git branch -M main" -ForegroundColor White
Write-Host "git push -u origin main" -ForegroundColor White
Write-Host ""

Write-Host "Replace YOUR_USERNAME with your GitHub username" -ForegroundColor Magenta
Write-Host "Replace YOUR_REPOSITORY_NAME with your repository name" -ForegroundColor Magenta

Write-Host ""
Write-Host "Example:" -ForegroundColor Yellow
Write-Host "If your GitHub username is 'HanaBerhe' and repository name is 'portfolio':" -ForegroundColor White
Write-Host "git remote add origin https://github.com/HanaBerhe/portfolio.git" -ForegroundColor White

Write-Host ""
Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")