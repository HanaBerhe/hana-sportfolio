@echo off
echo Building portfolio for deployment...
echo.

cd client

echo Building production version...
echo.
call npm run build

echo.
echo Build complete! The production files are in the 'dist' folder.
echo.
echo To preview the production build, run:
echo   npm run preview
echo.
pause