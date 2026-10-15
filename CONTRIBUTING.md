# 参与维护「冻土回声」官网

感谢参与本项目。网站未来由多人共同维护，因此每次改动应当可核对、可回退、可由不熟悉代码的人理解。

## 开始之前

1. 阅读 `AGENTS.md`、`docs/website-maintenance/ARCHITECTURE.md` 和 `docs/website-maintenance/SOP.md`。
2. 从最新主分支创建主题分支，不直接在 `main` 上开发。
3. 一个分支只处理一个主题，例如“一场活动更新”或“一组文案校正”。
4. 涉及架构时，先在 Issue/讨论中说明方案、兼容性和迁移方式；使用 AI 工具时还必须遵守 `AGENTS.md` 的二次确认。

## 内容更新原则

- 先修改权威数据源，再检查引用页面；不要在页面组件内复制相同事实。
- 活动图片放入 `public/images/activities/<activity-id>/`，首图命名为 `<activity-id>-cover.webp`。
- 合作伙伴素材放入 `public/images/partners/`；没有正式素材时保留文字卡和待补标记。
- 文章只修改 `content/<locale>/articles/` 中的 Markdown 源文件。
- 所有数据、照片、Logo 和链接都应具有公开展示授权。

## 提交前检查

```bash
npm run validate:content
npm test
npm run build
```

涉及 UI 时，至少检查 1920×1080 和 390×844；确认导航、外链、图片、二维码、轮播、拖动、键盘操作和减少动画偏好可用。

## Pull Request 内容

请说明：

- 修改目的与页面；
- 数据或素材来源；
- 是否影响多语言、结构、依赖或部署；
- 已执行的检查；
- 截图或本地预览说明；
- 待补资料和已知限制。

维护者应重点检查事实准确性、素材授权、品牌规则、响应式以及权威数据源是否保持唯一。
