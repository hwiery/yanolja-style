# OpenRouter MCP 서버 설치 가이드

이 문서는 Cursor에서 OpenRouter MCP 서버와 Sequential Thinking MCP 서버를 설치하는 방법을 안내합니다.

## 필요 조건

1. Node.js 및 npm 설치 (자세한 내용은 `MCN/setup_node_npm.md` 참조)
2. OpenRouter 계정 및 API 키 (https://openrouter.ai)

## 설치 방법

### 1. OpenRouter MCP 서버 설치

```powershell
npx -y @smithery/cli@latest install @mcpserver/openrouterai --client cursor --config "{\"openrouterApiKey\":\"YOUR_API_KEY\",\"openrouterDefaultModel\":\"deepseek/deepseek-chat-v3-0324:free\"}"
```

위 명령어에서 `YOUR_API_KEY` 부분을 OpenRouter에서 발급받은 실제 API 키로 대체하세요.

### 2. Sequential Thinking MCP 서버 설치

```powershell
npx -y @smithery/cli@latest install @smithery-ai/server-sequential-thinking --client cursor --key YOUR_API_KEY
```

마찬가지로 `YOUR_API_KEY` 부분을 OpenRouter API 키로 대체하세요.

## 설치 확인

Cursor 설정에서 MCP 서버 목록을 확인하는 방법:

1. Cursor 열기
2. 설정 메뉴 열기 (단축키: Ctrl + ,)
3. MCP 섹션으로 이동
4. 서버 목록에서 "openrouterai"와 "server-sequential-thinking"이 녹색 점으로 표시되는지 확인 