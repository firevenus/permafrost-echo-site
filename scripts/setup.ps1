# ============================================================
# 冻土回声 - 新电脑一键初始化脚本
# 用法: .\scripts\setup.ps1
# ============================================================

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  冻土回声 · Permafrost Echo — 环境初始化" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# 1. 检查 node 版本
$requiredNode = Get-Content "$PSScriptRoot\..\.nvmrc" -ErrorAction SilentlyContinue
if (-not $requiredNode) { $requiredNode = "22" }
$currentNode = node -v 2>$null
Write-Host ""
Write-Host "[1/4] Node 版本: $currentNode (需要 ^$requiredNode)" -ForegroundColor Yellow
if ($currentNode) {
    Write-Host "  OK" -ForegroundColor Green
} else {
    Write-Host "  请安装 Node.js: https://nodejs.org" -ForegroundColor Red
    exit 1
}

# 2. 清除可能残留的旧代理配置（本次迁移的主要教训!）
Write-Host "[2/4] 检查代理配置..." -ForegroundColor Yellow
$hasProxy = $false
if ($env:HTTP_PROXY -or $env:HTTPS_PROXY -or $env:http_proxy -or $env:https_proxy) {
    Write-Host "  发现系统代理，正在临时清除..." -ForegroundColor Magenta
    $env:HTTP_PROXY = ''
    $env:HTTPS_PROXY = ''
    $env:http_proxy = ''
    $env:https_proxy = ''
    $env:ALL_PROXY = ''
    $env:all_proxy = ''
    $hasProxy = $true
}
git config --global --unset http.proxy 2>$null
git config --global --unset https.proxy 2>$null
npm config delete proxy 2>$null
npm config delete https-proxy 2>$null
Write-Host "  OK" -ForegroundColor Green

# 3. 安装依赖
Write-Host "[3/4] 安装依赖..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "  安装失败，请检查网络" -ForegroundColor Red
    exit 1
}
Write-Host "  OK" -ForegroundColor Green

# 4. 完成
Write-Host "[4/4] 初始化完成!" -ForegroundColor Yellow
Write-Host ""
Write-Host "  启动开发服务器: npm run dev" -ForegroundColor Cyan
Write-Host "  构建生产版本:   npm run build" -ForegroundColor Cyan
Write-Host ""
if ($hasProxy) {
    Write-Host "  | 检测到系统代理环境变量 (HTTP_PROXY/HTTPS_PROXY)" -ForegroundColor Red
    Write-Host "  | 这可能是旧电脑配置残留，建议在「系统环境变量」中永久删除它们" -ForegroundColor Red
    Write-Host "  | Windows: 设置 → 系统 → 关于 → 高级系统设置 → 环境变量" -ForegroundColor Red
}
Write-Host ""
