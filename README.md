# cnode
**[预览地址](https://kekevvv.github.io/cnode/)**

## 技术栈
```
vue
vue-cli3
vue-router
vuex
stylus
ES6
```
[API提供地址](https://cnodejs.org/api)
## 完成功能
- [x] 登录账号
- [x] 退出账号
- [x] 浏览话题

## 完成页面
- [x] 主页
- [x] 话题详情页
- [x] 登录页面
- [x] 用户详细信息页面

部分功能需要先登录才会显示在页面上，登录请在登录页面的input框中输入自己的accesstoken

[如何获取自己的accesstoken](https://note.youdao.com/share/?id=6a2c41f0617d0ee82179f06206bd48bf&type=note#/)

## 如何在github中使用gh-pages展示vue页面
```
1.创建分支
git branch gh-pages
git push -u origin gh-pages
2.删除.gitignore中的/dist
3.新建vue.config.js文件，写入内容：
module.exports = {
     publicPath: '/cnode/'
}
4.git add .
git commit -m "信息"
git pull 
5.在github中新建仓库
6.npm run build
git add /dist
git commit -m "信息"
git pull
git subtree push --prefix=dist origin gh-pages
```
