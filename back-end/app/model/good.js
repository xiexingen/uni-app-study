module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const GoodSchema = new Schema({
    // 主图地址
    main_image: {
      type: String,
    },
    // 商品标题
    title: {
      type: String,
    },
    // 单价
    price: {
      type: String,
    },
    // 之前的价格
    old_price: {
      type: String,
    },
  });
  // 映射到egg-mongo db 库的Goods表中（不区分大小写）
  const Good = mongoose.model("Goods", GoodSchema);

  // init方法放到这里
  initGood(Good);

  return Good;
};

function initGood(Good) {
  Good.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      console.log("init Good failed");
    } else if (!doc.length) {
      var goods = [
        {
          main_image:
            "https://img12.360buyimg.com/mobilecms/s519x519_jfs/t1/145825/5/10813/30659/5f884796E2505e04c/7777553fbe18a829.jpg!q70.dpg.webp",
          title:
            "索尼（SONY）Xperia1 II 5G智能手机 4K屏 骁龙865 12G+256G 微单技术 蔡司镀膜 拍照游戏 20帧/秒 青山绿",
          price: 7999,
          old_price: 8042,
        },
        {
          main_image:
            "https://img20.360buyimg.com/mobilecms/s519x519_jfs/t1/54085/1/13732/194509/5da6d50fE32d0191a/68d0ac29ce4a326d.jpg!q70.dpg.webp",
          title: "小米（MI） Redmi 8A",
          price: 699,
          old_price: 700,
        },
        {
          main_image:
            "https://img10.360buyimg.com/mobilecms/s519x519_jfs/t1/102600/33/3423/416682/5de0857aE886a013d/7c6b2e7a3f12c9bf.jpg!q70.dpg.webp",
          title: " 华为（HUAWEI） nova 5z",
          price: 1499,
          old_price: 1574,
        },
        {
          main_image:
            "https://img13.360buyimg.com/mobilecms/s519x519_jfs/t1/129887/36/392/108566/5eccc3e5E1c5fb0d7/c00a373623f3eb2e.jpg!q70.dpg.webp",
          title: "小米（MI） Redmi 10X 4G",
          price: 999,
          old_price: 1049,
        },
        {
          main_image:
            "https://img10.360buyimg.com/mobilecms/s519x519_jfs/t1/105732/27/17609/262062/5e8c49e0E88ebfa8b/3b57d0fc68f3baf1.jpg!q70.dpg.webp",
          title:
            "荣耀Play4T 全网通6GB+128GB大内存 幻夜黑 4000mAh大电池 4800万AI摄影 6.39英寸魅眼屏",
          price: 1199,
          old_price: 1219,
        },
        {
          main_image:
            "https://img14.360buyimg.com/mobilecms/s519x519_jfs/t1/65786/38/8555/351173/5d674913E0a3b51f6/8d2e3fadc4cfac3c.jpg!q70.dpg.webp",
          title: "小米（MI） Redmi Note8",
          price: 899,
          old_price: 923,
        },
        {
          main_image:
            "https://img14.360buyimg.com/mobilecms/s519x519_jfs/t1/127505/28/15191/50475/5f885627Ee213fece/5f58cfd26ee6de22.jpg!q70.dpg.webp",
          title:
            "索尼（SONY）Xperia5 II 5G智能手机 骁龙865 6.1英寸 21：9 2K+120HzOLED屏 游戏支持 微单技术 蓝色",
          price: 5999,
          old_price: 6087,
        },
        {
          main_image:
            "https://img13.360buyimg.com/mobilecms/s519x519_jfs/t1/99730/1/154/477811/5da833a6E814e6676/79c4d1ea436ed9ea.jpg!q70.dpg.webp",
          title:
            " 荣耀20青春版 AMOLED屏幕指纹 4000mAh大电池 20W快充 4800万 手机 6GB+64GB 蓝水翡翠",
          price: 1299,
          old_price: 1388,
        },
        {
          main_image:
            "https://img12.360buyimg.com/mobilecms/s519x519_jfs/t1/146723/14/1327/184448/5ef09479E3e33a015/38a379a4543151d1.jpg!q70.dpg.webp",
          title: "小米（MI） Redmi 9",
          price: 999,
          old_price: 1013,
        },
        {
          main_image:
            "https://img10.360buyimg.com/mobilecms/s519x519_jfs/t1/52252/35/10516/124064/5d7808e0E46202391/7100f3733a1c1f00.jpg!q70.dpg.webp",
          title: "Apple iPhone 11",
          price: 5899,
          old_price: 5925,
        },
        {
          main_image:
            "https://img12.360buyimg.com/mobilecms/s519x519_jfs/t1/102911/12/15632/121784/5e71ccd6E63b84804/592e58f2fc2acaae.jpg!q70.dpg.webp",
          title:
            "Redmi K30 5G双模 120Hz流速屏 骁龙765G 前置挖孔双摄 索尼6400万后置四摄 30W快充 6GB+128GB 深海微光 游戏智能手机 小米 红米",
          price: 1599,
          old_price: 1605,
        },
        {
          main_image:
            "https://img10.360buyimg.com/mobilecms/s519x519_jfs/t1/109383/15/11613/242507/5e8c4c3dE901f4367/723da17587f13bb7.jpg!q70.dpg.webp",
          title:
            "荣耀Play4T Pro 麒麟810芯片 OLED屏幕指纹 4800万高感光夜拍三摄 22.5W超级快充 全网通8GB+128GB 冰岛幻境",
          price: 1689,
          old_price: 1695,
        },
        {
          main_image:
            "https://img14.360buyimg.com/mobilecms/s519x519_jfs/t1/128787/16/15102/36120/5f88300cE32bfe07c/4fd4f96216cd8190.jpg!q70.dpg.webp",
          title:
            "索尼（SONY）Xperia1 II 5G智能手机 4K屏 骁龙865 12G+256G 微单技术 蔡司镀膜 拍照游戏 20帧/秒 夜砚黑",
          price: 7999,
          old_price: 8028,
        },
        {
          main_image:
            "https://img12.360buyimg.com/mobilecms/s519x519_jfs/t1/83202/24/524/298511/5cebc5cdE5f4759ac/4567583f90977277.jpg!q70.dpg.webp",
          title: "小米（MI） Redmi 7A",
          price: 549,
          old_price: 566,
        },
        {
          main_image:
            "https://img14.360buyimg.com/mobilecms/s519x519_jfs/t1/133134/17/636/258994/5ecfae42E7647fd35/f014714d0c8c1382.jpg!q70.dpg.webp",
          title:
            " 荣耀9X PRO 麒麟810液冷散热 4000mAh超强续航 4800万三摄 6.59英寸全网通6GB+64GB 幻影紫HLK-AL10",
          price: 1299,
          old_price: 1361,
        },
        {
          main_image:
            "https://img14.360buyimg.com/mobilecms/s519x519_jfs/t1/66991/40/8602/92821/5d6743d0Ed0eec544/f1b6954d52a2ff66.jpg!q70.dpg.webp",
          title: "小米（MI） Redmi Note8 Pro",
          price: 1299,
          old_price: 1318,
        },
        {
          main_image:
            "https://img13.360buyimg.com/mobilecms/s519x519_jfs/t1/92595/13/5590/90517/5dee4a12Ef3d605c9/f5e1a764e2632674.jpg!q70.dpg.webp",
          title:
            "Redmi K30 王一博同款 120Hz流速屏 前置挖孔双摄 索尼6400万后置四摄 4500mAh超长续航 27W快充 6GB+128GB 紫玉幻境 游戏智能手机 小米 红米",
          price: 1399,
          old_price: 1483,
        },
        {
          main_image:
            "https://img30.360buyimg.com/mobilecms/s519x519_jfs/t28822/35/1566945199/293949/86cf3f83/5ce44e3cN9f8622b3.jpg!q70.dpg.webp",
          title:
            " 荣耀20 PRO 4800万全焦段AI四摄 双光学防抖 麒麟980 全网通4G 8GB+128GB 幻夜星河 拍照手机",
          price: 2499,
          old_price: 2596,
        },
        {
          main_image:
            "https://img13.360buyimg.com/mobilecms/s519x519_jfs/t1/114121/31/1226/152024/5e95e4edE3b1b4669/cb2bead63ba8d643.jpg!q70.dpg.webp",
          title:
            "荣耀30 Pro 50倍远摄 麒麟990 5G 4000万超感光摄影 3200W美颜自拍 游戏手机 全网通版8GB+128GB 钛空银",
          price: 3989,
          old_price: 4062,
        },
        {
          main_image:
            "https://img13.360buyimg.com/mobilecms/s519x519_jfs/t1/136013/4/2911/444519/5ef32450Eb8ab3c52/1c233f664015b793.jpg!q70.dpg.webp",
          title: "vivo iQOO Neo3",
          price: 2998,
          old_price: 3005,
        },
        {
          main_image:
            "https://img12.360buyimg.com/mobilecms/s519x519_jfs/t1/111213/35/2159/191393/5e9fa9ebE129e2b1f/6c597a8be0cb7045.jpg!q70.dpg.webp",
          title: "诺基亚（NOKIA） 220",
          price: 289,
          old_price: 355,
        },
        {
          main_image:
            "https://img14.360buyimg.com/mobilecms/s519x519_jfs/t1/117516/19/11234/321017/5ef9c08dE19765e41/f12e794d4ecf208b.jpg!q70.dpg.webp",
          title: "vivo iQOO Z1",
          price: 2298,
          old_price: 2301,
        },
        {
          main_image:
            "https://img13.360buyimg.com/mobilecms/s519x519_jfs/t1/131613/12/1423/630553/5ed89c5bEe1b047a8/94d1805cbf70dcfd.jpg!q70.dpg.webp",
          title:
            "莜茉YOMO【2片装】华为nova 5z钢化膜nova5iPro钢化膜 自动吸附淡化指纹防爆高清全玻璃手机贴膜",
          price: 19.9,
          old_price: 65.9,
        },
        {
          main_image:
            "https://img10.360buyimg.com/mobilecms/s519x519_jfs/t1/98575/16/10651/285632/5e1ead9dEab837e00/0b0779a1629f3a84.jpg!q70.dpg.webp",
          title:
            "飞利浦 PHILIPS E258S 宝石蓝 直板按键 移动联通2G 老人手机 老年功能手机学生手机备用机",
          price: 165,
          old_price: 214,
        },
      ];
      goods.forEach((item) => {
        new Good({...item}).save();
      });
    } else {
      console.log("-------------init goods successfully--------------");
    }
  });
}
