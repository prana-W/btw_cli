@echo off
cd /d %~dp0
setlocal enabledelayedexpansion

echo ========================================
echo btw_cli Setup Starting for Windows...
echo ========================================

REM Step 1: Check Node.js version
FOR /F "tokens=1 delims=." %%i IN ('node -v 2^>nul') DO SET NODE_MAJOR=%%i
SET NODE_MAJOR=!NODE_MAJOR:~1!

IF NOT DEFINED NODE_MAJOR (
    echo Node.js is not installed or not in PATH.
    goto end
)

IF !NODE_MAJOR! LSS 20 (
    echo Node.js version must be 20 or higher. Current version: !NODE_MAJOR!
    goto end
)

echo Node.js version is !NODE_MAJOR!

REM Step 2: Unlink and uninstall previous CLI
set CLI_NAME=btw_cli
set CLI_CMD=btw

echo Unlinking old CLI...
call npm unlink -g !CLI_NAME!

echo Uninstalling global package...
call npm uninstall -g !CLI_NAME!

REM Step 3: Remove stale symlinks
FOR /F "delims=" %%i IN ('npm bin -g') DO set NPMPATH=%%i

IF EXIST "!NPMPATH!\!CLI_CMD!.cmd" (
    echo Removing stale symlink: !NPMPATH!\!CLI_CMD!.cmd
    del /f /q "!NPMPATH!\!CLI_CMD!.cmd"
)

IF EXIST "!NPMPATH!\!CLI_CMD!" (
    echo Removing stale symlink: !NPMPATH!\!CLI_CMD!
    del /f /q "!NPMPATH!\!CLI_CMD!"
)

REM Step 4: Install & link
echo Installing dependencies... (Might take several minutes. Please be patient!)
call npm install || goto end

echo Linking CLI globally...
call npm link || goto end

echo Setup completed successfully!
goto end

:end
echo.
echo Press any key to close this window...
pause >nul
