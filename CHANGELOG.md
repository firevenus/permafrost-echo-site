# Changelog

## 2026-07-28

- 更新愿景表述："打造富有凝聚力的游戏文化社区，让开发者、艺术家与学者跨越国界，共享创意与未来"（原表述包含"东北亚地区""独立游戏创作网络""资源"等词）
- 更新使命为四点：促进区域内游戏开发者交流 / 向社会推广多元的游戏文化内容 / 协助产业链接高校，助力青年团队成长与发展 / 推动东北亚游戏文化的国际间交流与传播（原为三点）
- 删除关于我们页面「机核」社交卡片（暂未运营机核账号）
- 社交媒体链接（IndieLoop、LinkedIn、Bilibili）在新窗口打开
- 关于页、联系页社交卡片新增 Bilibili（链接指向 https://space.bilibili.com/3632304897395308）
- 更新 Bilibili logo 为官方蓝色 TV 图标（#23ADE5）
- 团队介绍统一角色描述为「核心团队成员」（中文），去掉原美术/策划/程序等分类（6 语言已同步）
- SSCA 内容更新：2025年10月首次承办沈阳第十七届 SSCA 动漫游戏博览会游戏展区（原为 2026年3月）
- 新增 Indienova 社交卡片，链接指向东北三省首届 Game Jam 报道：https://indienova.com/indie-game-development/the-first-game-jam-in-three-provinces-of-northeast-china/
- 替换 Indienova logo 为用户提供的官方宽屏版式（黑底 + 橙色手柄 + INDIE NOVA）
- WeChat 社交卡片优化：中文页面显示为「微信公众号」；点击弹出模态框显示二维码（支持点击背景 / ESC 关闭）；替换 logo 为微信气泡（双气泡）图标；新增 components/WechatQrModal.tsx 通用组件

### 文案更新
- 首页活动描述改为「GameJam · EXPO · 高校联盟 · 企业生态 / 我们为游戏业态提供全新的舞台」，page.tsx 添加 whitespace-pre-line 支持换行
- 联系邮箱描述改为「商务合作、媒体采访、活动咨询，我们期待来自您的消息」
- 微信公众号描述改为「关注「冻土回声」微信服务号，了解更多东北游戏行业与活动资讯」

### 二维码替换
- 替换全站微信服务号二维码图片（Footer、联系方式页、关于我们页）

### 社交媒体更新
- 删除 Bilibili 社交卡片（联系方式页、关于我们页）
- 新增 IndieLoop 社交卡片，链接指向 https://indieloop.com/#/journal/gameMedia?id=78
- 从 indieloop.com 获取官方 Logo（256×256 透明 PNG）
- 社交卡片渲染逻辑支持 emoji 图标和图片 Logo 两种方式

### Logo 更新
- 生成新版品牌 Logo（PNG + SVG），保留原始圆形徽章，英文文字替换为中文「冻土回声」

## 2026-07-19

### LinkedIn 社交集成
- Footer 新增 LinkedIn 图标链接（原生 SVG），指向公司页面 https://www.linkedin.com/company/permafrost-echo/
- Contact 页面社交媒体区首位替换为 LinkedIn
- SEO JsonLd 添加 sameAs 字段关联 LinkedIn 主页
- 6 语言消息文件同步添加 footer.linkedin 翻译

### 项目工程化
- 添加 `.nvmrc` 锁定 Node 版本（22.20.0）
- 新增 `scripts/setup.ps1` 一键初始化脚本

## 2026-07-09

### 游戏作品页增强
- Game Jam 诞生分类下展示全部 26 款 CIGA GameJam 2026 沈阳站作品（含截图、团队、描述、GMHub/B站/试玩链接）
- 合作伙伴新增戏壤科技（Xirang Games），同步 6 种语言
- 保留"游戏展展出"和"即将发行"分类占位卡片

### 多语言数据同步
- en/ja/ko/ru 语言文件团队数据统一为真实成员信息（L、成思/Enki、疯兔/FungTO、麻团/MattUan、漆玄/Akv_Qixuan、ZZK），替换原有的虚构人物数据

### 页面结构调整
- 关于我们页面全面重组：整合联系方式、发展路线图（品牌历程+阶段规划）、核心团队
- 删除创始人信息和品牌视觉 section，页面按现代叙事逻辑重新排序（Hero → 故事 → 业务 → 优势 → 使命愿景 → 历程 → 阶段 → 团队 → 联系）
- 导航栏移除联系方式、团队介绍、发展路线图三个独立入口

### 网站全面优化
- 新增 not-found.tsx 和 error.tsx 全局错误/404 页面（深色主题 + 品牌色）
- 修复子页面 hreflang alternates 指向错误（移除根 layout 中的硬编码）
- 补全 zh.json 和 mn.json 缺失翻译（games.status, team.members role/bio, visitSteam 等）
- 拆分 src/lib/data.ts (106KB) 为 8 个模块文件（games/activities/universities/partners/timeline/roadmap/stats）
- 添加 vitest 测试框架 + 8 个单元测试（gtag + breadcrumbs）
- 清理空目录 src/components/home/

## 2026-07-08

### SEO 增强（第二轮）
- 集成 Google Analytics 4：`GoogleAnalytics` 组件使用 Google 原始 gtag 代码，已配置 G-0R5DCM2JEB
- Google Search Console 验证：所有 metadata 支持注入 GSC 验证码（`NEXT_PUBLIC_GSC_VERIFICATION`）
- 面包屑结构化数据（BreadcrumbList）：新增 `AutoBreadcrumb` 组件，自动为所有页面生成 Schema.org BreadcrumbList
- Content-Security-Policy 安全头：新增 CSP 头，允许 GA4/GTM 脚本，防御 XSS
- `.env.local` 新增 GA4 和 GSC 环境变量占位

### SEO 全面优化
- OG 图片从 SVG 改为 PNG（1200×630），兼容 Twitter/Facebook/LinkedIn 等社交平台
- CIGA GameJam 详情页新增 `layout.tsx` 提供完整 metadata（title/description/canonical/hreflang/OG）
- `<html lang>` 从客户端 JS 动态设置改为 SSR 移除，后续由服务端 layout 接管
- JSON-LD 结构化数据增强：新增 `WebSite`（SearchAction）、`logo` 字段
- Sitemap 新增 GameJam 详情页 + 动态文章列表，移除虚假 `lastModified`
- PWA manifest 新增 192×192 和 512×512 PNG 图标，`start_url` 改为 `/`，`lang` 移除硬编码
- `getPageMetadata` 补充 `og:type`/`og:locale`/`og:siteName`

### 全局字体调整
- 基准字号从 16px 调整为 17px（+6.25%），CSS 中 px 定值字体统一转 rem
- 西文字体从 Inter 更换为 Space Grotesk（几何感、科技感），中文保留 Noto Sans SC

### 多语言国际化
- CIGA GameJam 作品展示页完成多语言同步：zh, en, ko, ja, ru, mn 6 种语言
- 页面组件全部使用 `useTranslations` 替代硬编码中文

### CIGA GameJam 2026 沈阳站 · 作品展示页
- 新增 `/zh/activities/ciga-gamejam-2026-shenyang` 作品展示页，含 26 款作品卡片
- 每张卡片：截图、序号、作品名、团队名、简介、GMHub/B站/试玩链接
- 12 款 GMHub 链接、7 款 B站 链接、1 款试玩链接
- 26 张 webp 截图压缩至 ~1.8MB（sharp, max 1200px, q=80）
- 活动列表页 CIGA 卡片新增「查看全部 26 款作品 →」入口
- 活动列表页排序优化：已完成倒序在前，即将开始在后
- CIGA 作品集入口视觉增强（蓝色光环 + 独立按钮块）

### 活动图片子文件夹结构
为后续图片管理规范化，为所有活动创建专用子文件夹：
- `ssca-2026/`、`ggj-2026/`、`northern-anime-carnival-2026-05/`
- `beijing-expo-2026/`、`northern-anime-2026/`
- `ssca-2027/`、`ggj-2027/`
- 已有 `ciga-gamejam-2026-shenyang/`
- 图片命名规范：`{活动id}-01.webp`、`{活动id}-02.webp`...

### CIGA GameJam 活动图片压缩
Cloudflare Pages 部署因图片超过 25MB 限制而失败：
- `ciga-gamejam-2026-shenyang-01.webp` 31MB、`03.webp` 27MB 均超限
- 使用 `cwebp -resize 1920 0 -q 80` 统一缩放压缩所有 7 张图片
- 总计从 ~114MB 压缩至 ~1MB，全部通过 Cloudflare Pages 上传校验

### SSCA 名称修正
根据真实信息修正全站 SSCA 相关内容：
- SSCA 实际是"沈阳动漫游戏博览会"（Animation, Comic & Game Expo），是东北地区规模最大的动漫游戏综合展会，每年举办多届
- 冻土回声是其**游戏区承办方**，并非主办方
- 修正 `data.ts` 6 种语言的 SSCA 活动标题/描述、时间线事件、路线图条目
- 修正 `messages/*.json` 6 种语言的 about/business 描述
- 重写中英文 SSCA 公告文章（`content/zh|en/articles/ssca-2026-announcement.md`），补充 SSCA 博览会背景介绍
- 重新生成 `articles-data.ts`

## 2026-07-07

### 蒙古语完整翻译
- `src/lib/data.ts` 中的蒙古语（mn）站点数据不再复用俄语，改为完整的西里尔蒙古语翻译
- 涵盖：12 款游戏、7 个活动、12 所大学、6 个合作伙伴、6 个时间线事件、4 个路线图阶段

### 新增活动
- 新增 2026 CiGA Game Jam 沈阳站（id: `ciga-gamejam-2026-shenyang`），含 7 张现场照片
- 活动图片采用子文件夹管理：`public/images/activities/{活动id}/`

### 图片命名简化
- 活动图片命名规则简化为 `{活动id}-{序号}.jpg`，如 `ssca-2026-01.jpg`

### 活动图片功能
- `ActivityInfo` 新增可选 `images?: string[]` 字段，支持每个活动关联多张照片
- 活动列表页（`/activities`）的已完成和即将举行活动卡片均支持展示封面图，多图时显示「N 张」计数
- 首页核心活动卡片同步支持图片展示，hover 时图片放大 1.05x
- 新增 `activity-card-image` CSS 工具类（16:10 比例、圆角、暗底衬图）
- 有图时卡片自动切换为 `overflow-hidden` + 图片上置 + 内容下置的布局

### 设计审计与视觉优化
- 全站添加噪点胶片纹理层 (`bg-noise`)，增加画面质感深度
- 首页 Hero 添加霜晶几何 SVG 动效（极光色渐变 + 光点脉冲），解决纯文字无视觉锚点问题
- 玻璃卡片增强：添加 `inset 0 1px 0 rgba(255,255,255,0.03)` 内发光模拟玻璃折射
- 全站 Section 标题、活动卡片添加 CSS `animation-timeline: view()` 滚动浮现动效（原生 GPU 加速，零 JS）
- Hero 使用 `min-h-[100dvh]` 替换 `h-screen`，防止 iOS Safari 地址栏跳动
- 首页 CTA 按钮区分意图：主按钮「联系我们」→ `/contact`，次按钮「了解更多」→ `/about`（修复重复 intent 违规）
- 6 个语言文件新增 `home.cta.learnMore` 翻译键

### Cloudflare 安全加固
- 新增 `public/.well-known/security.txt` 安全漏洞披露联系文件
- 新增 `public/_headers`，配置 HSTS（max-age=2年 + includeSubDomains + preload）、X-Content-Type-Options、X-Frame-Options、Referrer-Policy、Permissions-Policy
- 静态资源设置 `Cache-Control: public, max-age=31536000, immutable`
- `next.config.mjs` 添加安全响应头作为兜底方案

### 设计审计与 UI 优化
- 新增 `prefers-reduced-motion` 全站支持，尊重用户系统偏好
- 新增 `:focus-visible` 键盘焦点指示器（冰蓝色光环），提升无障碍体验
- 桌面/移动端导航添加 `aria-current="page"` 语义标注
- 移动端菜单改为平滑过渡动画（替换条件渲染为 CSS transition）
- 所有页面 emoji 图标替换为 Lucide React 图标（风格统一）
- 首页 Hero 修复 subtitle 文本重复显示的 bug
- 动画元素添加 `will-change-transform` 提示，4 个浮动光球减至 3 个，降低 GPU 开销

### Skills 安装
- 安装 `design-taste-frontend`（设计品味审计 / 反模板化）
- 安装 `ui-ux-pro-max`（UI/UX 设计系统数据库）

### SEO 全面优化
- 移除根 layout 的 metadata 冲突，所有 SEO 标签统一由 locale layout 管理
- 新增 `HtmlLangSetter` 组件，根据当前语言动态设置 `<html lang>` 属性（zh-CN/en/ja/ko/ru/mn）
- `getPageMetadata()` 为所有子页面生成 6 语言 hreflang alternates
- 全站添加多语言 keywords（游戏开发/中国游戏市场/中国东北/Game Jam）
- 文章详情页补全 openGraph(article 类型)、publishedTime、authors、tags、canonical、robots
- 根 layout robots: `max-snippet: -1, max-image-preview: large`

### 内容修正
- "北京独立游戏博览会"全局替换为"北境动漫游戏嘉年华"（含日文翻译）

### 团队页更新
- 移除成员数量统计
- 新增成员 ZZK
- 支持团队头图统一渲染（`.webp` 格式，降级为首字母）

---

之前版本: v2.2.2, v2.2.1, v2.2.0
