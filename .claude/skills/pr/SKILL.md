---
name: pr
description: 現在のブランチからPRを作成する。コミット履歴を分析してタイトルとサマリーを自動生成する。
allowed-tools: Bash(git *) Bash(gh pr *)
---

# PR 作成

現在のブランチの全コミットを分析し、PRを作成する。

## 手順

1. `git log` と `git diff main...HEAD` で変更内容を把握する
2. リモートにブランチがなければ `git push -u origin HEAD` でプッシュする
3. PRタイトル (70文字以内) とサマリーを生成する
4. `gh pr create` で PR を作成する

## PR フォーマット

```
gh pr create --title "タイトル" --body "$(cat <<'EOF'
## Summary
- 変更内容の箇条書き

## Changes
- 変更したファイル・機能の詳細

## Test plan
- [ ] テスト項目

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

## 注意事項

- base ブランチは main
- タイトルは日本語でも英語でも、コミットメッセージに合わせる
- 作成後、PR の URL を表示する
