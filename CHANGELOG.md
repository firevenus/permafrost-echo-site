# Changelog

## 2026-07-07

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
