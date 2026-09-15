# my-blog

Rona Dev Log — https://happy-rona.github.io/my-blog/

[AstroPaper](https://github.com/satnaing/astro-paper) 테마를 Notion 느낌으로 다듬어 사용합니다.

## 글 쓰기

`src/content/posts/`에 `.md` 파일을 추가하고 `main`에 push하면 GitHub Actions가 자동으로 배포합니다.

```md
---
title: 제목
pubDatetime: 2026-09-15T09:00:00+09:00
description: 한 줄 요약
tags:
  - react
featured: false # true면 홈의 추천 글에 표시
draft: false # true면 배포에서 제외
---

본문
```

- `> 인용문`은 회색 콜아웃 박스로, `> [!note]` / `> [!tip]` / `> [!warning]`은 아이콘이 붙은 콜아웃으로 표시됩니다.
- 소개 페이지는 `src/content/pages/about.md`, 사이트 설정은 `astro-paper.config.ts`에서 바꿉니다.

## 로컬 실행

```bash
pnpm install
pnpm dev   # http://localhost:4321/my-blog/
```

검색은 `pnpm build`를 한 번 실행한 뒤부터 로컬에서도 동작합니다.
