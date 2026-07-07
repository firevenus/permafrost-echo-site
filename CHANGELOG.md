# Changelog

## 2026-07-07

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
