# React + TypeScript + Vite + Tailwind CSS

```
npm i
npm run dev
```
[開発環境 http://localhost:5173](http://localhost:5173)<br>
[本番環境 https://kensaku-xy2e.vercel.app](https://kensaku-xy2e.vercel.app)

## DBについて

## お気に入り画像のデータストレージ
IndexedDBを利用してます。
keyval-store　⇒　keyval　⇒ hopesに格納されていきます。

IndexedDBでのデータ保存のためブラウザを変えることで保存情報が変わってくることに注意。

## 良く検索されるワードのデータストレージ
kensaku-expressのfrequent.jsonで管理してます。
「ワード追加」ページから単語の追加は可能ですが、一時的な保存であることに注意。

## vitestの実施

```
npm run test
npx vitest run --coverage
```