## 说明
1. nodeJS  --8.11.4
# 使用react-create-app 搭建react开发环境
# 使用到的相关技术有 [react-router-dom, redux, react-redux, redux-actions, react-thunk]
## 以下是搭建步骤
# 项目初始化
1. create-react-app 初始化项目
2. npm run eject // error [Remove untracked files, stash or commit any changes, and try again]
3. 出现以上问题，解决方案是[cd my-react-app > git init > git add . > git commit -m ‘init’ > npm run eject] 因为脚手架添加.gitgnore文件，但是却没有本地仓库
4. npm run start // success  项目运行成功
# 项目模块化
1. 基本框架
   src
   --actions [驱动模块]
   --reducer [处理模块]
   --components [组件模块]
   --pages [页面模块]
   --styles [样式模块]
   --routes.js [路由文件]
   --store.js
2. 添加文件
    --pages
      --login.js
      --home.js
3. npm install react-router-dom [引入react路由插件]
4. 配置路由[router.js]
5. 修改index.js添加路由器
6. npm run start // success [路由能正常使用]
# 引入样式表 我是用的是sass [在config/paths.js下面添加scss到moduleFileExtensions]
# 引入redux
1. npm install redux --save
2. npm install react-redux --save
3. 创建store.js
# 最原始的使用redux的方法可以借鉴[src/store.old.js, src/componnents/Counter.old.js]
# 使用装饰器@来使用redux
1. cnpm install babel-plugin-transform-decorators-legacy --save // 引入装饰器插件
2. 修改package.json文件的babel
   <core>
    "babel": {
      "presets": [
        "react-app"
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-decorators",
          {
            "legacy": true
          }
        ]
      ]
    },
   </core>
3. 可以在home.js里面使用@connect来使用redux, npm run start // error: [Parsing error: Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead]这个报错是eslint报错, 需要在package.json的eslintConfig修改配置
4. 修改package.json的eslintConfig
  <core>
    "eslintConfig": {
      "extends": "react-app",
      "parserOptions": {
        "ecmaFeatures": {
          "legacyDecorators": true
        }
      }
    },
  </core>
5. npm run start // success
# 模块化使用redux
1. cnpm install redux-actions --save
2. cnpm install redux-thunk --save
3. 创建src/actions, src/reducers文件夹
4. 在src/utils下面创建connect.js装饰器用来统一管理redux
5. 在src/pages/login下面可以查看这种方式的redux