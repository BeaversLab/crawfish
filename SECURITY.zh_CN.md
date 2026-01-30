# 安全策略

如果您发现 OpenClaw 的安全问题，请私下报告。

## 报告

- 邮箱：`steipete@gmail.com`
- 需要包含：复现步骤、影响评估，以及（如果可能）最小化 PoC。

## 运维指南

有关威胁模型 + 加固指南（包括 `openclaw security audit --deep` 和 `--fix`），请参阅：

- `https://docs.openclaw.ai/gateway/security`

### Web 界面安全

OpenClaw 的 Web 界面仅供本地使用。**不要**将其绑定到公共互联网；它未针对公共暴露进行加固。

## 运行时要求

### Node.js 版本

OpenClaw 要求 **Node.js 22.12.0 或更高版本**（LTS）。此版本包含重要的安全补丁：

- CVE-2025-59466：async_hooks DoS 漏洞
- CVE-2026-21636：权限模型绕过漏洞

验证您的 Node.js 版本：

```bash
node --version  # 应该是 v22.12.0 或更高
```

### Docker 安全

在 Docker 中运行 OpenClaw 时：

1. 官方镜像以非 root 用户（`node`）运行，以减少攻击面
2. 尽可能使用 `--read-only` 标志以获得额外的文件系统保护
3. 使用 `--cap-drop=ALL` 限制容器能力

安全 Docker 运行示例：

```bash
docker run --read-only --cap-drop=ALL \
  -v openclaw-data:/app/data \
  openclaw/openclaw:latest
```

## 安全扫描

本项目使用 `detect-secrets` 进行 CI/CD 中的自动密钥检测。
有关配置，请参阅 `.detect-secrets.cfg`；有关基线，请参阅 `.secrets.baseline`。

本地运行：

```bash
pip install detect-secrets==1.5.0
detect-secrets scan --baseline .secrets.baseline
```

---

[English](SECURITY.md) | [中文](SECURITY.zh_CN.md)
