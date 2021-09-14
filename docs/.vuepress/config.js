module.exports = {
  title: "Chauncey",
  description: "这个杀手不太冷",
  head: [
    ['meta', { name: "baidu_union_verify", content: "a0036ccf0b657813fb236f80f376c429" }],
    ["link", { rel: "icon", href: "/images/favicon.svg" }],
    // 百度统计
    ['script', {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?668842dc21c1b8f215b000531ec8f69e";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  theme: "reco",
  themeConfig: {
    // 博客配置
    type: "blog",
    fullscreen: true,
    logo: "/images/favicon.svg",// 左侧logo
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      }
    },
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    author: "Chauncey",
    authorAvatar: "/images/avatar.jpg", // 首页文章列表右边的头像
    mode: "light", //默认显示模式  modePicker: false 关闭该按钮
    codeTheme: "tomorrow", // default 'tomorrow' okaidia
    // record: "蜀ICP备20019955号",
    // recordLink: "https://icp.chinaz.com/home/info?host=pengsir.top",
    smooth: "true", //平滑滚动
    lastUpdated: '最后更新于',
    nav: [
      // 导航栏
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "工具箱",
        icon: "iconfont icon-tools",
        items: [
          { text: "在线PS", link: "https://ps.gaoding.com/#/" },
          { text: "奶牛快传", link: "https://cowtransfer.com/" },
          { text: "编程语言排行榜", link: "https://www.tiobe.com/tiobe-index/" },
        ]
      },
      {
        text: "项目",
        icon: 'iconfont icon-tools',
        items: [
          { text: 'Vue仿网易云音乐', link: 'https://music.bookbook.cc', icon: "iconfont icon-wangyiyunyinle" },
          { text: 'Vue电商后台管理系统 V：1.3.0', link: 'http://120.53.120.229:1921/#/login', icon: "iconfont icon-vue" },
          { text: 'Vue电商后台管理系统 V：1.2.0', link: 'http://120.53.120.229:1920/#/login', icon: "iconfont icon-vue" },
          { text: "Vue电商平台实时监控系统(Echarts)", link: "http://120.53.120.229:9989/#/home", icon: "iconfont icon-vue" },
          { text: "WebSocket仿微信聊天", link: "http://120.53.120.229:8100", icon: "reco-wechat" },
        ]
      },
      { text: "留言板", link: "/views/Others/message", icon: "reco-message" },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "关于我",
            link: "/views/About/author",
            icon: "reco-account"
          },
          {
            text: "简历",
            link: "/views/About/resume",
            icon: "reco-document"
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/weixin_43742708",
            icon: "reco-csdn",
          },
          {
            text: "GitHub",
            link: "https://github.com/penggang-home",
            icon: "reco-github",
          },
          {
            text: "Gitee",
            link: "https://gitee.com/penggang-home",
            icon: "reco-mayun",
          },
        ]
      }
    ],
    startYear: '2020',
  },
  // 项目开始时间
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页 ！',
  markdown: {
    lineNumbers: true, //代码显示行号
  }, // 搜索设置
  plugins: {
    //一键复制代码插件: "vuepress-plugin-code-copy": "^1.0.6",
    "vuepress-plugin-code-copy": true,
    // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
    "reading-progress": true,
    // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return moment(timestamp).format('LLLL')
      }
    }
  }
}