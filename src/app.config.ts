export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/member/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // 加上后默认会生成底部导航栏
  tabBar: {
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      }, {
        "pagePath": "pages/member/index",
        "text": "我的"
      }]
  },
})
