# 冻土回声 · Permafrost Echo

> 破土而出，回响世界 — 东北亚独立游戏生态平台

Permafrost Echo（冻土回声）是一个面向东北亚地区的独立游戏生态平台，致力于连接开发者、艺术家、高校社团与产业资源，共同推动区域独立游戏文化的发展。

## 🌐 网站

访问地址：[https://permafrost-echo.com](https://permafrost-echo.com)

## 🛠 技术栈

- **框架**: [Next.js 15](https://nextjs.org/) (App Router)
- **国际化**: [next-intl](https://next-intl-docs.vercel.app/)
- **样式**: [Tailwind CSS 3](https://tailwindcss.com/)
- **图标**: [Lucide React](https://lucide.dev/)
- **Markdown**: gray-matter + react-markdown + remark-gfm

## 🌍 支持语言

| 语言 | 代码 |
|------|------|
| 中文 | zh |
| English | en |
| 한국어 | ko |
| 日本語 | ja |
| Русский | ru |
| Монгол | mn |

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开浏览器访问
open http://localhost:3000
```

## 📦 构建

```bash
# 生产构建
npm run build

# 启动生产服务
npm start
```

构建产物位于 `.next/` 目录，部署使用 Cloudflare Pages + `@cloudflare/next-on-pages`。

## 📁 项目结构

```
├── content/          # Markdown 文章内容
│   ├── zh/articles/
│   └── en/articles/
├── messages/         # 国际化翻译文件（6 语言）
├── public/           # 静态资源
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   └── images/
│       ├── logo.png          # 品牌 Logo
│       ├── og-default.svg    # Open Graph 社交预览图
│       └── qr/
├── src/
│   ├── app/          # Next.js App Router
│   │   ├── [locale]/
│   │   │   ├── about/        # 关于我们
│   │   │   ├── activities/   # 活动
│   │   │   ├── articles/     # 文章
│   │   │   ├── community/    # 社群生态
│   │   │   ├── contact/      # 联系方式
│   │   │   ├── games/        # 游戏作品
│   │   │   ├── partners/     # 合作伙伴
│   │   │   ├── roadmap/      # 发展路线图
│   │   │   └── team/         # 团队介绍
│   │   ├── robots.ts         # SEO robots.txt
│   │   └── sitemap.ts        # SEO 站点地图
│   ├── components/
│   │   ├── layout/           # Header / Footer
│   │   └── seo/              # JSON-LD 结构化数据
│   ├── i18n/         # next-intl 配置
│   └── lib/          # 数据加载、SEO 元数据
├── tailwind.config.ts
└── next.config.mjs
```

## 📝 更新日志

### v2.2.0 (2026-07-07)

**视觉升级**
- 首页 Hero 重新设计，品牌名「冻土回声 · Permafrost Echo」居中突出显示
- 标语「破土而出，回响世界」作为辅助副标题
- 全新冻土科技风格：深蓝灰底色 + 冰晶网格纹理 + 极光渐变
- 新增冰蓝/松花江青/极光紫/白桦银品牌色系

**品牌 Logo**
- 集成品牌 PNG Logo 到 Header、Footer、关于页
- 更新 favicon、PWA manifest、OG 社交预览图

**导航体验**
- 新增 loading.tsx 冰晶加载动画，消除页面切换白屏
- 优化导航栏链接响应

**SEO 增强**
- 全站 robots.txt / sitemap.xml
- JSON-LD 结构化数据 (Organization)
- 多语言 Open Graph / Twitter Card 元数据
- hreflang 多语言标签、canonical URL
- 各子页面独立 SEO 元数据 (layout.tsx)

**项目清理**
- 移除 Hugo 残留文件（_index.md, posts/ 等）
- 修复 .gitignore：提交 next-env.d.ts
- 修复 Cloudflare Pages CI/CD 配置
- 添加 @cloudflare/next-on-pages 部署适配器

### v2.0.0
- 从 Hugo 迁移至 Next.js 15 (App Router)
- 6 语言国际化支持 (next-intl)
- Tailwind CSS 样式系统

## 🔗 相关链接

- 联系邮箱: contact@permafrost-echo.com
- 微信公众号: 冻土回声

## 📄 License

© 2026 冻土回声 Permafrost Echo. All rights reserved.
