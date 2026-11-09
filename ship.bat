@echo off
cd /d "%~dp0"
echo ========================================================
echo Syncing Sarwar Adhikari Portfolio to GitHub
echo Remote: https://github.com/Sarwar088-byte/sarwaradhikari
echo ========================================================
git push -u origin main
echo.
echo ========================================================
echo Push complete!
echo ========================================================
pause
