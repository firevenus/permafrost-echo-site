# 部署到 Cloudflare Pages 的步骤

## 1. 推送代码到 GitHub

```bash
# 添加 GitHub 远程仓库
git remote add origin https://github.com/您的用户名/permafrost-echo-website.git
git branch -M main
git push -u origin main
```

## 2. 在 Cloudflare Pages 创建项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 点击 "Pages"
3. 点击 "创建项目"
4. 选择 "连接到 Git"
5. 选择您的 GitHub 仓库 "permafrost-echo-website"

## 3. 配置构建设置

在 Cloudflare Pages 设置中填写：

- **项目名称**: permafrost-echo
- **构建命令**: hugo --minify
- **构建输出目录**: public
- **构建系统版本**: Ubuntu (最新版本)
- **Hugo 版本变量**:
  - 变量名: HUGO_VERSION
  - 值: 0.110.0 (或您使用的版本)

## 4. 连接自定义域名

1. 部署完成后，在项目页面点击 "自定义域"
2. 添加您的域名: permafrost-echo.com
3. 按照 Cloudflare 的指示配置 DNS 记录
4. 如果您的域名已经在 Cloudflare 管理，系统会自动配置

## 5. 启用 HTTPS

- Cloudflare Pages 默认提供 SSL 证书
- 确保在域名设置中启用了 HTTPS

## 注意事项

- 确保 Hugo 主题作为 Git 子模块正确包含
- 如果使用 GitHub Actions，请设置必要的 Secrets
- 首次部署可能需要 1-5 分钟