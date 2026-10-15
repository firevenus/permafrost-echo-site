# 冻土回声 · Permafrost Echo

> 连接未知 · 超越已知 — 致力于成为东北亚游戏生态平台

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

## 🤝 参与维护

本项目面向多人开源协作。开始修改前请阅读：

- [`AGENTS.md`](./AGENTS.md)：AI 工具的权限边界、架构二次确认和发布规则；
- [`CONTRIBUTING.md`](./CONTRIBUTING.md)：人工贡献流程与 Pull Request 要求；
- [`docs/website-maintenance/ARCHITECTURE.md`](./docs/website-maintenance/ARCHITECTURE.md)：权威数据源与兼容层；
- [`docs/website-maintenance/SOP.md`](./docs/website-maintenance/SOP.md)：人工更新步骤；
- [`docs/website-maintenance/UPDATE_PROMPT.md`](./docs/website-maintenance/UPDATE_PROMPT.md)：可复用的 AI 增量更新提示词。

提交前至少运行：

```bash
npm run validate:content
npm test
npm run build
```

## 📝 更新日志

### v2.3.0 (2026-10-15)

- 更新首页、活动、游戏作品、社群生态、合作伙伴、关于我们与联系页面的内容和响应式表现
- 新增 2026 年活动资料、现场图片轮播与《散场以后》行业观察文章
- 合作伙伴展示升级为可拖动的 3D 球形环绕，并优化动画流畅度与清晰度
- 统一品牌 Logo、Slogan、微信服务号二维码、统计指标与多语言文案
- 建立活动、合作伙伴、品牌及统计数据的权威数据源，补充内容一致性测试
- 新增 `AGENTS.md`、贡献指南、维护架构、SOP 与增量更新 Prompt，支持多人开源维护

完整记录见 [`CHANGELOG.md`](./CHANGELOG.md)。

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
