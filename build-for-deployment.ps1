# PowerShell script to build the portfolio for deployment
Write-Host "Building Portfolio for Deployment..." -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

Set-Location -Path "c:\Users\hp\Downloads\portfolio\myportfolio\client"

Write-Host "Installing dependencies..." -ForegroundColor Yellow
& "C:\Program Files\nodejs\npm.cmd" install

Write-Host "Building client application..." -ForegroundColor Yellow
& "C:\Program Files\nodejs\npm.cmd" run build

Write-Host ""
Write-Host "Build complete!" -ForegroundColor Green
Write-Host "The built files are located in client/dist/" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Push your code to GitHub" -ForegroundColor White
Write-Host "2. Import your repository to Vercel" -ForegroundColor White
Write-Host "3. Vercel will automatically deploy your portfolio" -ForegroundColor White
Write-Host ""

Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")