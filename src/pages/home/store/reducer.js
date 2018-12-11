import { fromJS } from "immutable"

const defaultState = fromJS({
  ArticleList: [
    {
      id: 0,
      author: "雨落文染丶",
      likes: 12,
      comments: 20,
      title: "古力娜扎亲密视频曝光：暴露女生隐私的都是渣男！",
      desc: "1. 万万没想到，我一直很喜欢的女神古力娜扎会以这种方式上了热搜。 事件起因于一段娜扎和某男子的亲密互动视频曝光网络。视频里，古力娜扎依偎在该男...",
      imgUrl: "//upload-images.jianshu.io/upload_images/1669869-9ca6a3a9b7f2c623.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 1,
      author: "王晓瘦",
      likes: 14,
      comments: 2,
      title: "这道菜简单方便，各种食材一锅炖，好吃到爆！",
      desc: "砂锅烧菜是广东多数家庭喜爱的一种烹调方式。砂锅的最大优点在于受热、散热均匀，可长时间保温，容易入味以及内循环比较好，冷飕飕的冬天，吃着有汤汁的凉...",
      imgUrl: "//upload-images.jianshu.io/upload_images/12095765-0c317389077d72eb.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      author: "画星星高手",
      likes: 31,
      comments: 42,
      title: "为什么智商越高越不喜欢与人交往",
      desc: "马云在一次演讲中说：“情商高的人容易成功，大家都喜欢他，他机会就多，而读书好的人又不太愿意跟人交朋友，所以智商高的人情商偏低。” 看看...",
      imgUrl: "//upload-images.jianshu.io/upload_images/4417736-beffae580c604d10?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      author: "51reboot",
      likes: 3,
      comments: 8,
      title: "为什么推荐程序员买一台属于自己的服务器",
      desc: "1.服务器可以做什么 说为什么要买服务器之前，咱们先来聊聊服务器可以做什么，对一个公司来说，服务器可以用来传输文件，存储数据，部署公司的网站，还...",
      imgUrl: "//upload-images.jianshu.io/upload_images/6375263-902fb5242ba6fb16.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 4,
      author: "狂妃",
      likes: 9,
      comments: 18,
      title: "别催了，90后真“结不了婚” ",
      desc: "【80后的结婚热潮刚开始？】 今天上午微博崩了，因为赵丽颖微博官方宣布了她和冯绍峰的婚事。 新浪微博每次都是以系统崩溃来庆祝这样的喜事，** 每...",
      imgUrl: "//upload-images.jianshu.io/upload_images/2321684-b285049487c46473?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ],
  recommendList: [
    {
      id: 0,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
    },
    {
      id: 1,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
    },
    {
      id: 2,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id: 3,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id: 4,
      imgUrl: "https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }
  ],
  authorList: [
    {
      id: 0,
      imgUrl: "//upload.jianshu.io/users/upload_avatars/2558050/7761b285-2805-4534-9870-ba7dcc7538ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "阿栈",
      desc: "写了408.8k字 · 806喜欢"
    },
    {
      id: 1,
      imgUrl: "//upload.jianshu.io/users/upload_avatars/2631077/dc99c361412c?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "木清琳",
      desc: "写了215k字 · 2k喜欢"
    },
    {
      id: 2,
      imgUrl: "//upload.jianshu.io/users/upload_avatars/4802366/4f86b75d-b61b-4126-8be4-87a151c9cd28.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "宇文歡",
      desc: "写了274.8k字 · 1.4k喜欢"
    },
    {
      id: 3,
      imgUrl: "//upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "汪波_偶遇科学",
      desc: "写了235.7k字 · 1.8k喜欢",
    },
    {
      id: 4,
      imgUrl: "//upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
      name: "遛遛心情的溜妈",
      desc: "写了545k字 · 2.1k喜欢"
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}