@echo off
FOR /F "tokens=1 delims=." %%i IN ('node -v') DO SET NODE_MAJOR=%%i
SET NODE_MAJOR=%NODE_MAJOR:~1%

IF %NODE_MAJOR% LSS 21 (
    echo ❌ Node.js version must be 20 or higher. Current version: %NODE_MAJOR%
    exit /b 1
)

echo ✅ Node.js version is %NODE_MAJOR%
echo Running npm run setup...
npm run setup