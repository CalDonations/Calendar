## 安裝與運行

### 1. 安裝前置工具

在開始之前，請確保你已經安裝以下工具：

- [Node.js](https://nodejs.org/) (20.x 或以上)

### 2. 下載專案

透過 Git 將專案下載至本地：

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 3. 前置設定
#### 安裝所需Dependencies
在根目錄執行：
```
npm install
```
#### 設定環境變數
1. 修改 backend 目錄的 .env 文件。
2. 在 .env 文件中，按照範例填入 MongoDB 連接字串及 Port：
```
# MongoDB 連接字串 (本地端) or (Atlas)
MONGODB_URI="mongodb+srv://..."
# 後端伺服器運行的端口
PORT=3000
```
#### 設定API_URL
1. 修改 frontend 目錄的 .env 文件。
2. 在 .env 文件中，按照範例填入 API_URL：
```
# API URL 
VITE_API_URL="your-api-url"
```
3. 進入 frontend 目錄的 vite.config.ts
4. 修改第7行 base: 並填入你github repository的名字
```
base: "/你的Github repository名字/",
```

### 4. 將網頁部署
在frontend目錄下輸入
```
npm run build
npm run deploy
```
