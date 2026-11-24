@echo off
title FLOREE FASHION — Luxury E-Commerce Server
echo =======================================================
echo          FLOREE FASHION — Luxury E-Commerce
echo              Elegance in Every Step.
echo =======================================================
echo.
echo Starting server on all network interfaces (0.0.0.0)...
echo.
call "%~dp0node.bat" "%~dp0server.js"
pause
