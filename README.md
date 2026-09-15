# my-blog

Rona Dev Log — https://happy-rona.github.io/my-blog/

## 글 쓰기

`src/content/blog/`에 `.md` 파일을 추가하고 `main`에 push하면 GitHub Actions가 자동으로 배포합니다.

```md
---
title: '제목'
description: '한 줄 요약'
pubDate: '2026-09-15'
---

본문
```

## 로컬 실행

```bash
pnpm install
pnpm dev   # http://localhost:4321/my-blog/
```
