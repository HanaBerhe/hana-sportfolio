# PowerShell script to deploy your portfolio to Vercel
Write-Host "Portfolio Deployment to Vercel" -ForegroundColor Green
Write-Host "=============================" -ForegroundColor Green

Write-Host ""
Write-Host "Step 1: Final Build Test" -ForegroundColor Yellow
Set-Location -Path "c:\Users\hp\Downloads\portfolio\myportfolio\client"
Write-Host "Building portfolio..." -ForegroundColor Cyan
& "C:\Program Files\nodejs\npm.cmd" run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
} else {
    Write-Host "Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 2: GitHub Repository Setup" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Create a new repository (e.g., 'hana-portfolio')" -ForegroundColor White
Write-Host "3. Make sure to NOT initialize with a README" -ForegroundColor White

Write-Host ""
Write-Host "Step 3: Push to GitHub" -ForegroundColor Yellow
Write-Host "Run these commands in your terminal:" -ForegroundColor Cyan
Write-Host "cd c:\Users\hp\Downloads\portfolio\myportfolio" -ForegroundColor White
Write-Host "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git" -ForegroundColor White
Write-Host "git branch -M main" -ForegroundColor White
Write-Host "git push -u origin main" -ForegroundColor White

Write-Host ""
Write-Host "Step 4: Deploy to Vercel" -ForegroundColor Yellow
Write-Host "1. Go to https://vercel.com" -ForegroundColor White
Write-Host "2. Sign up or sign in" -ForegroundColor White
Write-Host "3. Click 'New Project'" -ForegroundColor White
Write-Host "4. Import your GitHub repository" -ForegroundColor White
Write-Host "5. Use these settings:" -ForegroundColor White
Write-Host "   - Build Command: cd client && npm run build" -ForegroundColor White
Write-Host "   - Output Directory: client/dist" -ForegroundColor White
Write-Host "   - Install Command: npm install" -ForegroundColor White
Write-Host "6. Add Environment Variables in Project Settings:" -ForegroundColor White
Write-Host "   - VITE_EMAILJS_USER_ID = your EmailJS User ID" -ForegroundColor White
Write-Host "   - VITE_EMAILJS_SERVICE_ID = your EmailJS Service ID" -ForegroundColor White
Write-Host "   - VITE_EMAILJS_TEMPLATE_ID = your EmailJS Template ID" -ForegroundColor White

Write-Host ""
Write-Host "Deployment Complete!" -ForegroundColor Green
Write-Host "Your portfolio will be available at: https://your-project-name.vercel.app" -ForegroundColor Cyan

Write-Host ""
Write-Host "Press any key to continue..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")