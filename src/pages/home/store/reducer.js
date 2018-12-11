import { fromJS } from "immutable"

const defaultState = fromJS({
  ArticleList: [
    {
      id: 0,
      title: "古力娜扎亲密视频曝光：暴露女生隐私的都是渣男！",
      desc: "1. 万万没想到，我一直很喜欢的女神古力娜扎会以这种方式上了热搜。 事件起因于一段娜扎和某男子的亲密互动视频曝光网络。视频里，古力娜扎依偎在该男...",
      imgUrl: "//upload-images.jianshu.io/upload_images/1669869-9ca6a3a9b7f2c623.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 1,
      title: "这道菜简单方便，各种食材一锅炖，好吃到爆！",
      desc: "砂锅烧菜是广东多数家庭喜爱的一种烹调方式。砂锅的最大优点在于受热、散热均匀，可长时间保温，容易入味以及内循环比较好，冷飕飕的冬天，吃着有汤汁的凉...",
      imgUrl: "//upload-images.jianshu.io/upload_images/12095765-0c317389077d72eb.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "为什么智商越高越不喜欢与人交往",
      desc: "马云在一次演讲中说：“情商高的人容易成功，大家都喜欢他，他机会就多，而读书好的人又不太愿意跟人交朋友，所以智商高的人情商偏低。” 看看...",
      imgUrl: "//upload-images.jianshu.io/upload_images/4417736-beffae580c604d10?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 3,
      title: "为什么推荐程序员买一台属于自己的服务器",
      desc: "1.服务器可以做什么 说为什么要买服务器之前，咱们先来聊聊服务器可以做什么，对一个公司来说，服务器可以用来传输文件，存储数据，部署公司的网站，还...",
      imgUrl: "//upload-images.jianshu.io/upload_images/6375263-902fb5242ba6fb16.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 4,
      title: "别催了，90后真“结不了婚” ",
      desc: "【80后的结婚热潮刚开始？】 今天上午微博崩了，因为赵丽颖微博官方宣布了她和冯绍峰的婚事。 新浪微博每次都是以系统崩溃来庆祝这样的喜事，** 每...",
      imgUrl: "//upload-images.jianshu.io/upload_images/2321684-b285049487c46473?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}