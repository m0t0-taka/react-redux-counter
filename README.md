## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run: `npm start`

## 本リポジトリの説明

Redux の基本の習得。

Redux を使用してカウンターを作る。

## Redux

[ドキュメント](https://redux.js.org/introduction/getting-started)

`npm install @reduxjs/toolkit`

`npm install react-redux`

## 手順

1. 必要ライブラリを install

2. store を作成。ファイルは、src/redux/store.js に作成

この store とは、状態をまとめたもの

3. slice の作成。ファイルは、src/redux/counterSlice.js に作成

slice とは、"state","reducer","action creator"の 3 つをまとめたもののことを言う

4. Provider を App コンポーネントに対し設定。src/index.js に記述

これにより全てのコンポーネントで store が使えるようにする

5. view を作成。src/App.js を編集
