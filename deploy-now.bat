@echo off
echo ============================================
echo   SARWAR PORTFOLIO - CLOUDFLARE DEPLOY
echo ============================================
echo.
echo Step 1: Logging into Cloudflare...
echo (Your browser will open - log in there)
echo.
cd /d "C:\Users\subha\OneDrive\Desktop\My portfolio\sarwar-portfolio"
npx wrangler login
echo.
echo Step 2: Deploying to Cloudflare Pages...
npx wrangler pages deploy out --project-name=sarwarahikari --commit-dirty=true
echo.
echo ============================================
echo   DONE! Your site is live!
echo ============================================
pause

