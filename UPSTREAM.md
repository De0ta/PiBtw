# 项目背景与开发

PiBtw 基于 [yceachan/pi-better-btw](https://github.com/yceachan/ea-pi-extensions/tree/main/packages/pi-better-btw) 改进。这个扩展最初源自 Nico Bailon 的 [pi-side-chat](https://github.com/nicobailon/pi-side-chat)，提供在 Pi 主会话旁打开独立聊天的能力。

项目仓库：https://github.com/De0ta/PiBtw

## 上游信息

- 仓库：https://github.com/yceachan/ea-pi-extensions
- 扩展目录：`packages/pi-better-btw`
- 起始版本：`1.1.0`
- 参考提交：`806c034a03d47c2a0e24f5f34ea361ed1c43016b`
- 许可证：[MIT](LICENSE)

## 主要改动

- 在主界面显示旁路状态，支持独立选择模型和思考级别。
- 实时切换全屏、大小浮窗和右半屏布局。
- 支持消息跳转、快捷键帮助和 Pi 原生消息渲染。
- 面板配色跟随主题和终端，输入区使用轻量卡片。
- 为多行输入、鼠标选择、后台生成和会话生命周期补充回归测试。

## 本地开发

安装依赖、检查类型并运行测试：

```bash
bun install
bun run typecheck
bun test test/*.test.ts
```

在项目目录临时加载扩展：

```bash
pi -e ./srcs/index.ts
```

修改后，在 Pi 中执行 `/reload` 重新加载。更多用法见 [中文说明](README.zh-CN.md)。
