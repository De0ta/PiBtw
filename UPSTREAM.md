# PiBtw 本地开发副本

- 上游：https://github.com/yceachan/ea-pi-extensions
- 子目录：`packages/pi-better-btw`
- 包版本：`1.1.0`
- 导入来源：GitHub 官方 `main` 源码压缩包（Git 连接不可用，因此未保留上游提交历史）。
- 导入时 API 返回的 main 提交：`806c034a03d47c2a0e24f5f34ea361ed1c43016b`。
- 许可证：MIT，原始版权与许可证保留于 `LICENSE`。

本目录是独立的本地 Git 仓库，并非已经在 GitHub 账号下创建的 fork。
原始功能和包名暂未修改；若将来发布，请先调整包名和仓库信息。

## 开发

依赖安装、类型检查和测试命令见 `README.zh-CN.md` 的开发章节。
需要 Bun；导入时本机未找到 Bun，尚未安装依赖或运行测试。

可以在本目录通过 `pi -e ./srcs/index.ts` 临时加载插件，改完后在 Pi 中执行 `/reload`。
若已安装其他提供 `/btw`、`/side` 或 `Alt+W` 的插件，应先停用它们，避免冲突。
