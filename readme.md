

# 웹팩

---

### 1) 웹팩 설치

---

```bash
yarn add webpack webpack-cli html-webpack-plugin clean-webpack-plugin 

yarn add babel-loader
yarn add css-loader
yarn add style-loader
```



### 2) 웹팩 설정

---



```javascript
module.exports = {
  entry: "./scripts.js",
  output: {
    path: __dirname + "/build",
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```





# 깃허브 페이지 배포

---

### 1) 깃허브 deploy도구 설치

```bash
yarn add
```

### 2) 깃허브 도구 설정

```json
{
    ...
    // 					// 내 깃헙아이디       // repository 이름
    "homepage": "https://(jigglypop).github.io/(baminmonbanggu)/",
    
    ...
    "scripts" : {
        "deploy": "gh-pages -d build"
    }
}

```

### 3) deploy

```

```



