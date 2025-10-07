@echo off
echo Setting PowerShell Execution Policy to RemoteSigned
echo This will allow you to run npm scripts directly
echo.
echo IMPORTANT: This script needs to be run as Administrator
echo Right-click on this file and select "Run as administrator"
echo.
pause

powershell -Command "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force"

echo.
echo Execution policy has been updated.
echo You can now run npm scripts directly in PowerShell.
echo.
pause