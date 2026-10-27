# PiBtw 来源与开发说明

本仓库由 De0ta 独立维护：https://github.com/De0ta/PiBtw 。它是从上游子包导入后继续开发的独立仓库，不是 GitHub 平台上的正式 Fork；未包含上游 Git 提交历史。

- 上游：https://github.com/yceachan/ea-pi-extensions
- 子目录：`packages/pi-better-btw`
- 包版本：`1.1.0`
- 导入来源：GitHub 官方 `main` 源码压缩包（Git 连接不可用，因此未保留上游提交历史）。
- 导入时 API 返回的 main 提交：`806c034a03d47c2a0e24f5f34ea361ed1c43016b`。
- 许可证：MIT，原始版权与许可证保留于 `LICENSE`。

原包名、作者及包发布元数据暂予保留，用于追溯来源；上游 npm 包不包含本仓库的定制改动。如需独立发布到 npm，应先调整包名、维护者和仓库信息。

## 本仓库的主要改动

- 主界面旁路状态指示，独立模型／思考级别选择与快捷键。
- 实时浮层布局切换、消息跳转、快捷键帮助及原生消息渲染。
- 跟随主题和终端颜色的面板、用户消息卡片与轻量输入框。
- 多行输入、鼠标选择、后台生成与生命周期回归测试。

原 MIT 许可证及 Nico Bailon、yceachan 的版权声明保持不变。个人反馈截图不包含在此次上传中。

## 开发

依赖安装、类型检查和测试命令见 `README.zh-CN.md` 的开发章节。
当前验证：`npm run typecheck`、`npx --yes bun test test/*.test.ts`（87 项测试）均通过。若本机已安装 Bun，也可使用 `bun test test/*.test.ts`。

可以在本目录通过 `pi -e ./srcs/index.ts` 临时加载插件，改完后在 Pi 中执行 `/reload`。
若已安装其他提供 `/btw`、`/side` 或 `Alt+W` 的插件，应先停用它们，避免冲突。
