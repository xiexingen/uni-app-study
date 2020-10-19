'use strict';

const Controller = require('egg').Controller;
const mockData=[
    {
        id:1,
        title:'明星美女',
        pictures:[
            {
                url:'https://img14.360buyimg.com/n7/jfs/t1/133073/15/7311/489470/5f3b3e05Eb9a6f36f/e9a6f45bd6166ce2.jpg',
                desc:'Carey Kay品牌内衣女无钢圈聚拢文胸小胸加厚上托调整型少女文胸罩套装 藕粉色'
            },
            {
                url:'https://img11.360buyimg.com/n7/jfs/t1/127156/36/14210/185849/5f7b14abEab34564e/81763b30c11b10d4.jpg',
                desc:'KJ性感蕾丝内衣女无钢圈聚拢调整型上托收副乳文胸小胸罩 黄色-套装'
            },
            {
                url:'https://img14.360buyimg.com/n7/jfs/t1/132351/40/9738/204206/5f5a6c8fEdfc8acbf/17a703ed06188351.jpg',
                desc:'绮罗密语 聚拢文胸法式无钢圈夏季内衣女性感蕾丝套装美背胸罩 白色（单文胸）'
            },
            {
                url:'https://img13.360buyimg.com/n7/jfs/t1/34514/6/13267/100603/5d13b36cEe35b8110/367690cc0f9dd7b1.jpg',
                desc:'爱慕Aimer文胸微醺3/4罩杯性感蕾丝网眼超薄款聚拢女士内衣 AM13DF1酒红色B80'
            },
            {
                url:'https://img14.360buyimg.com/n7/jfs/t1/136957/35/8994/172415/5f4fa4f4E8c75a353/1b1e5dc6dbc0a273.jpg',
                desc:'帕兰妮卡 文胸套装2020新款情趣1/2半罩杯性感聚拢调整型小胸显大有钢圈上托黑'
            }
        ],
    },
    {
        id:2,
        title:'家居生活',
        pictures:[{"url":"https://img11.360buyimg.com/n7/jfs/t1/122284/37/14405/223796/5f7fdb6cEfc7eacf5/2c6f9fc8e4f3c25a.jpg","desc":"【佛山店有售】慕尼思丹 沙发 实木沙发 头层黄牛真皮沙发 中式全白蜡木沙发 客餐厅全屋家具套装 双扶手双人位【146*88*92cm】 【胡桃色进口白蜡木+皮布款】"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/131516/15/2791/163474/5ef07424Ee2b53ae9/9d98a01152baf6f3.jpg","desc":"京东超市\nJAJALIN 可拆成2个漱口杯洗漱杯简约家用刷牙杯创意可爱便携牙缸牙桶套装情侣牙刷杯子旅行套装 深蓝色"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/114762/8/9061/306335/5ed63484Edcf3388a/54a1136a684fb940.jpg","desc":"京东超市\nJAJALIN 创意简约风格肥皂洗衣皂盒肥皂盒沥水肥皂香皂盒 条纹蓝"},{"url":"https://img10.360buyimg.com/n7/jfs/t1/122876/39/11695/35532/5f512389Efc5a8191/650118c03dc66e26.jpg","desc":"京东超市\n家杰优品 曲杆马桶刷 家用长柄去死角 软毛洗厕所刷子卫生间无死角洁厕清洁刷（1只装）"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/124796/10/1138/81903/5eba0d89Ed4248b0c/352504126b851dc6.jpg","desc":"京东超市\n304不锈钢挂钩浴室免钉免打孔挂衣钩卫生间强力门后衣服挂钩排厨房墙上无痕挂衣架墙壁毛巾帽子粘钩贴 6钩"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/150317/9/5341/86545/5f3502d4Ed041661a/b397cc2b667dad1f.jpg","desc":"京东超市\nJAJALIN 创意树叶肥皂盒浴室免打孔吸盘香皂盒架卫生间沥水洗衣皂盒置物架"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/138446/38/11136/260489/5f8ceef8E3cfaf2ab/dbe8179addb96c9f.jpg","desc":"林氏木业 沙发 布艺沙发 简约小户型科技布北欧沙发客厅家具可自由组合让利款 【浅灰色】沙发 三人+贵妃"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/135295/18/10556/291900/5f67510dE927c99fb/886f09c2407e9f69.jpg","desc":"舒福佳 shufujia 卫生间置物架免打孔厕所洗手间浴室置物架生活用品收纳牙刷毛巾架挂钩"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/112955/37/16676/154200/5f4dfac0Ec320fb05/9265ce02d8933ee4.jpg","desc":"京东超市\nJAJALIN 儿童搓澡神器后背宝宝婴儿大人浴擦搓灰搓泥强力洗澡巾搓背海绵男小号1个装 颜色随机"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/128319/26/7363/132181/5f111d8fE81c84f8a/e8c4a43119180174.jpg","desc":"京东超市\n百初 晾衣夹袜子架晾衣架塑料衣架晾晒架袜子夹子内衣夹多头衣架裤架裤夹收纳架子3件同色装"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/133000/6/3771/146155/5f02db75Ee2a91620/166d18f6291847dc.jpg","desc":"京东超市\n家杰优品 鞋刷洗衣刷 浴室地板刷 多功能清洁塑料小刷子 通用洗鞋刷（1只装）"},{"url":"https://img11.360buyimg.com/n7/jfs/t26305/300/1737414507/62030/a1494c3e/5bf4bbe7N49174d0a.jpg","desc":"京东超市\nFOOJO镜子 高清折叠便携化妆镜 随身镜美妆镜 桌面大梳妆镜礼品"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/144661/23/1706/282291/5efa9c4cEca5a22a3/689c18e9c77e538f.jpg","desc":"林氏木业 布艺沙发 日式实木脚沙发经济型 北欧小户型客厅家具S023 【米黄色】S023沙发 三人"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/104589/31/18434/224411/5e94319fE68a2f29e/048681cda4210373.jpg","desc":"京东超市\n班哲尼 旅行肥皂盒 密封手工肥皂盒 出差旅游便携香皂盒 蓝色"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/145775/10/6663/129509/5f44d12bEff8a727b/0315f5d7fdf602d3.jpg","desc":"京东超市\n家杰优品 挂钩拉丝银粘钩 强力胶吸盘贴厨房防水无痕贴 浴室吸盘钩贴 橱柜门后挂衣钩可拆免钉胶 （12只装）"}]
    },
    {
        id:3,
        title:'影视设备',
        pictures:[{"url":"https://img14.360buyimg.com/n7/jfs/t1/10811/23/15613/148004/5c947c4cEbe6f5d1e/2e2c820a7cfa93c5.jpg","desc":"金贝SPARKII400W二代摄影棚套装摄影灯影棚器材服装静物摄影拍摄补光灯婚纱拍照影室闪光灯 400W三灯套 人像服装/箱包"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/116850/34/12865/126107/5f16830eE8acd7a0e/581f423b1a872bbb.jpg","desc":"斯丹德(sidande)X2049摄影LED全彩RGB补光灯染色轻薄拍照摄像外拍特效变色"},{"url":"https://img12.360buyimg.com/n7/jfs/t18553/111/1774106667/124974/c6b217da/5ad84e95N0becccf0.jpg","desc":"力飞摄影灯套装直播补光灯单反摄像灯主播人像柔光灯箱网店拍照影室灯 2个柔光箱+2个灯架 2个150瓦灯泡"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/139143/40/1224/320992/5ef06402E47cfdcf7/561802814e40f695.jpg","desc":"春影（CY）LED大型摄影棚套装160cm专业服装人像小型简易静物拍照摄影箱"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/74261/15/3796/172741/5d1f1e0fE9ac7c2c8/dfe33f7560df1896.jpg","desc":"贝阳黑色吸光布摄影背景布 不透光加厚黑绒布拍摄照相影棚摄影道具器材 1.5m*2.0m"}]
    },
    {
        id:4,
        title:'编程书籍',
        pictures:[{"url":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/119119/28/16355/390609/5f4870aaE11ee9a70/a3942abebcb6534a.jpg","desc":"JavaScript高级程序设计 第4版(图灵出品）"},{"url":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/21072/33/12467/90043/5c9854b6E46278aca/fe5e2d55c0d908ee.jpg","desc":"深入浅出Vue.js(图灵出品)"},{"url":"https://img14.360buyimg.com/n1/s200x200_jfs/t1/2387/37/10035/244618/5bc98f0fEd0031c63/cf9b8a4c93faecda.jpg","desc":"码农翻身：用故事给技术加点料(博文视点出品)"},{"url":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/105525/26/18558/217877/5e9456b3Ee97e4a66/6968202a0728cd48.jpg","desc":"程序员的数学第2版+程序员的数学2 概率统计+程序员的数学3 线性代数（套装共3册，京东）(图灵出品)"},{"url":"https://img10.360buyimg.com/n1/s200x200_jfs/t1/41570/5/1180/179278/5cc54479E7522cee3/d5b50e571ccc926e.jpg","desc":"疯狂Java讲义（第5版）（含DVD光盘一张）(博文视点出品)"}]
    },
    {
        id:5,
        title:'男装专场',
        pictures:[{"url":"https://img10.360buyimg.com/n7/jfs/t1/55187/19/7329/80064/5d4e5fefEef4b1fe8/8b4c875df4bc93c1.jpg","desc":"花花公子（PLAYBOY）衬衫男外套长袖衬衣工装2020新款秋冬新款韩版潮流宽松休闲男装加绒加厚 灰色 L"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/135269/24/8885/169698/5f4c9bbeEa2434767/c6dcce09b117353a.jpg","desc":"龙麦迪萨【严选专场】男士长袖T恤带领秋季薄款丅有刺绣保罗打底polo衫男潮流韩版 6636湖蓝 165/M"},{"url":"https://img10.360buyimg.com/n7/jfs/t1/145770/18/6037/228901/5f3fa6daEbdf531d7/cdf337dac1f20ec7.jpg","desc":"㏘【精品专场】兔先生兔先森的原创小铺方寸先生 原创男装休闲长袖体T恤衫潮 白色 M"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/5275/15/8976/291820/5bab30eeEb9c130c5/e2defda5b033628a.jpg","desc":"有斐BASIC：男士基本款"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/117659/15/11341/158988/5ef9a035Ec22c926d/f59b30025930f511.jpg","desc":"【花花公子中老年男装特价专场】新款短袖t恤男士纯棉商务polo衫纯色冰丝半袖上衣 绿色 165M"}]
    },
    {
        id:6,
        title:'电子设备',
        pictures:[{"url":"https://img14.360buyimg.com/n7/jfs/t1/127901/21/15515/148042/5f8d99c1E6ed889a8/8bf48b02c3b928c1.jpg","desc":"万宝（Wanbao）会议平板一体机4k超清电视触控一体机办公会议设备多媒体书写电子白板商用企业智慧屏 55英寸 专业双系统会议版（I3/4G)"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/124324/16/10119/19102/5f3ccdaaE01921aca/b1f8efd2181fda99.jpg","desc":"京东超市\n美的（Midea)智能体脂秤 体重秤脂肪秤家用健康秤电子秤 Led显示健身减肥运动 MS-CW4白色"},{"url":"https://img10.360buyimg.com/n7/jfs/t1/116920/22/13483/145187/5f1fc28dEe92beff7/b4ef0a551ba3451f.jpg","desc":"京东超市\n岡祈（Gangqi）GQ-M3门铃无线家用远距离无线门铃用电池一拖一电子遥控门铃老人呼叫迎宾器"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/116836/33/11769/212613/5f042b22Eac6711a8/90ac701e45c67543.jpg","desc":"毕亚兹 PPT翻页笔 投影笔 多媒体课件教学激光笔 教师演讲笔 红外无线演示器 电子教鞭 红光 bi1"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/120300/36/5383/71706/5ef04367Ebb115764/aaa46538c1dd493c.jpg","desc":"京东超市\n乔安 JOOAN 无线门铃 智能家用电子门铃 老人呼叫器 穿墙 一拖一门铃"}]
    },
    {
        id:7,
        title:'摄影器材',
        pictures:[[{"url":"https://img11.360buyimg.com/n7/jfs/t1/120438/29/15086/116071/5f89ce24E0fea9472/fd0826526f878509.jpg","desc":"SK-II神仙水75ml护肤品套装化妆品礼盒五步装体验装(礼盒内赠清莹露+洗面奶+面霜+眼霜) 面部精华 补水精华水"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/140806/39/11031/135645/5f8a6985E116b621b/2521333923156acd.jpg","desc":"玉兰油（OLAY）大红瓶15件套护肤品套装化妆品礼盒（面霜+眼霜+洗面奶+爽肤水赠面膜+洁面乳+大红水）礼物"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/130028/38/12193/171623/5f855ee1Ea5f76699/375dc7beeff87860.jpg","desc":"兰蔻（LANCOME）大粉水400ml+水份缘凝霜50ml 化妆品套装护肤 补水保湿 深层滋润 礼盒"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/135984/12/12591/133635/5f8c4c33Ecf8cc8f1/0b40839bb85dd5a0.jpg","desc":"京东超市\n韩束 护肤品化妆品套装女面膜补水保湿抗皱紧致 聚时光鎏金臻颜礼盒七件套洁面乳水乳霜精华眼霜"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/127428/39/15130/355191/5f89ab84E4ea4ac63/ba9d5ceed875ceaa.jpg","desc":"SK-II神仙水230ml精华液护肤品套装化妆品礼盒（礼盒内赠清莹露+洗面奶）SK2 补水保湿 均匀肤色"}]]
    },
    {
        id:8,
        title:'明星写真',
        pictures:[{"url":"https://img14.360buyimg.com/n1/s200x200_jfs/t8269/281/740299158/171283/f301d7f4/59ae3870N13aa58d7.jpg","desc":"京东国际\n板野友美写真集 释放 release 日文原版 明星写真集 板野友美 写真集"},{"url":"https://img12.360buyimg.com/n1/s200x200_jfs/t1/77741/31/314/126171/5ce799f2Ec02627e1/033528f754eb38b2.jpg","desc":"石原里美写真集别册encourage石原さとみ日文原版特别版2册 日本写真集美女明星艺术周边书籍"},{"url":"https://img13.360buyimg.com/n1/s200x200_jfs/t1/60733/9/14407/283668/5dbbfbc8E2ef300f4/bed15c7f9496b9c9.jpg","desc":"明星周边 同款礼盒送人生日礼物明信片卡贴海报书签珍藏歌词本专辑写真 周杰伦【大礼包】"},{"url":"https://img13.360buyimg.com/n1/s200x200_jfs/t5680/262/7161895105/211181/80100cb5/596f00c3N56390d97.jpg","desc":"京东国际\n斋藤飞鸟 乃木坂46 个人首本写真集 潮骚 日文原版 明星写真集 齋藤飛鳥ファースト写真集"},{"url":"https://img11.360buyimg.com/n1/s200x200_12278/7b0f7205-013c-4e80-8418-f9c83c3aca7b.jpg","desc":"动物明星写真馆：多姿的鸟儿"}]
    },
    {
        id:9,
        title:'清纯甜美',
        pictures:[{"url":"https://img13.360buyimg.com/n7/jfs/t1/107056/35/18630/112289/5e981185E29794d8b/a63433ffde4020ad.jpg","desc":"小清新两件套装女夏韩版学生姐妹闺蜜装裙子甜美仙女仙森系长裙 单上衣----绿色 M"},{"url":"https://img10.360buyimg.com/n7/jfs/t1/141783/29/6668/556205/5f44c45bE4cff00fb/1644c99a30dc8631.png","desc":"艾柔丹 连衣裙女法式新款女装甜美少女穿搭清纯套装裙春秋长袖裙子女收腰长裙两件套套装裙 白色连衣裙+粉色马甲 L"},{"url":"https://img11.360buyimg.com/n7/jfs/t6934/248/2573701515/220076/b520b212/598d1796N06283e3b.jpg","desc":"霏慕（Fee et moi） 情趣内衣套装 清纯甜美学生装 免脱开档性感角色扮演短裙 夜诱惑透视职业 深蓝-白（含学生娃）"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/148926/29/5724/190593/5f3ad92eE0fb37964/b0796b7684e59f61.jpg","desc":"凤泽熙秋冬名媛小香风御姐轻熟复古港风女职业清纯甜美泫雅两件套装裙子 白色衬衫+格子半身裙 S"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/131129/39/12122/187874/5f856de0Ed57784f2/e2066776625f1104.jpg","desc":"原苑职业套装裙韩版时髦小个子连衣裙气质街头宽松休闲时尚韩版2020年秋季新款清纯甜美套装/套裙矮个子 深色 M"}]
    },
    {
        id:10,
        title:'汽车用品',
        pictures:[{"url":"https://img14.360buyimg.com/n7/jfs/t1/109057/37/13523/80820/5ea14301Eb10f80bb/884b6f4401f2a047.jpg","desc":"【透气打孔皮革款】汽车头枕颈枕靠枕座椅靠枕车内用品腰靠套装"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/112165/14/779/139213/5e903ec3Ed673c21e/5c715aadc8d45330.jpg","desc":"京东超市\n3M 车载香水 汽车香水 车用固体香薰 车内除味空调出风口香水夹汽车用品车内饰品摆件自然散香38803"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/50929/12/16296/172015/5dd521f7E97d1153c/f3d6d80803414ceb.jpg","desc":"卡牧尼 车用车载充气床 分体式 汽车后排座儿童床 充气床垫睡垫 家用轿车自驾旅行床 自驾游装备用品 [加厚分体]-植绒黑无挡"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/53240/23/11152/182013/5d819adaE29938e57/89715f3ec9f89ea0.jpg","desc":"锐舞（RANVOO）车载手机支架 汽车导航支架车用出风口吸盘磁铁磁吸支架 车上支架汽车用品车内通用 【中控台粘帖式】全合金-含引磁片*2"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/29581/36/2911/52587/5c21dc3dE03adbd41/585f6c7ec3041caa.jpg","desc":"京东超市\n硕基 SUOTJIF 高品质超细纤维洗车毛巾 擦车毛巾吸水毛巾 40*40cm 蓝色 汽车用品"}]
    },
    {
        id:11,
        title:'电子数码',
        pictures:[{"url":"https://img12.360buyimg.com/n7/jfs/t1/145825/5/10813/30659/5f884796E2505e04c/7777553fbe18a829.jpg","desc":"索尼（SONY）Xperia1 II 5G智能手机 4K屏 骁龙865 12G+256G 微单技术 蔡司镀膜 拍照游戏 20帧/秒 青山绿"},{"url":"https://img10.360buyimg.com/n7/jfs/t1/130581/21/9044/80589/5f5089acEbefbfd41/7b0911a353a0ada4.jpg","desc":"荣耀Play4 Pro 5G双模 麒麟990 4000万超感光拍摄 40W超级快充 8GB+128GB 幻影蓝"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/104898/37/18627/138168/5e95e5c3E900d8936/8b6135c090ac7104.jpg","desc":"荣耀30 Pro 50倍远摄 麒麟990 5G 4000万超感光摄影 3200W美颜自拍 游戏手机 全网通版8GB+128GB 幻夜黑"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/2469/6/3535/142209/5b997c09E5262da83/d3273e91acc45417.jpg","desc":"京品手机\nApple iPhone XS (A2100) 256GB 深空灰色 移动联通电信4G手机"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/98217/20/19333/128969/5e9edb47E3a4be24f/e48c16ac218aafa4.jpg","desc":"努比亚 nubia Play 5G手机 8GB+128GB 5彩斑斓黑 144Hz超竞屏"}]
    },
    {
        id:12,
        title:'烧烤道具',
        pictures:[{"url":"https://img13.360buyimg.com/n7/jfs/t1/150184/29/11307/418096/5f8c69ceE366a0582/ed119de8cd77d9c4.jpg","desc":"莫 家（MO JIA）户外烧烤桌椅铸铝庭院休闲bbq烧烤架家用木炭烧烤炉 4张正格椅+106cm烧烤桌（送坐垫）"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/141494/26/867/176489/5ee97a1aEe97db312/4de5e0f23e5f1048.jpg","desc":"北极狼 BeiJiLang 烧烤炉户外不锈钢烧烤架便携式木炭烤炉家用烧烤架烤肉架煎烤炉烧烤箱含大号收纳包"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/114015/39/9681/203929/5edde17cEddf94b50/8aaf67a3ed497e56.jpg","desc":"京东超市\n岩谷（IWATANI）户外便携卡式炉 自驾游装备 野炊瓦斯炉 火锅燃气炉子 烧烤炉具 ZB-19M"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/105888/37/19092/175127/5e9bc8bcEbd6074d5/74ed52ecbfd67d8a.jpg","desc":"木柴柴火户外烧烤篝火野炊灶壁炉木柴客厅装饰柴荔枝木柴木头 50斤松木柴劈开"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/127470/18/10521/112039/5f436b13Ef39a9c8d/61ba2d59f16640d8.jpg","desc":"京东超市\n岩谷（IWATANI）户外便携卡式炉 自驾游装备 野炊瓦斯炉 火锅燃气炉子 烧烤炉具 ZB-19M+韩式烤盘"}]
    },
    {
        id:13,
        title:'精品服饰',
        pictures:[{"url":"https://img12.360buyimg.com/n7/jfs/t1/137552/14/609/447314/5ecf7067E5a3e4906/11e3fbe5c03889f4.jpg","desc":"惹火猫 性感情趣内衣 SM网衣制服镂空吊带睡裙丝袜内裤4件套女（送猫耳朵）R065"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/87872/21/14783/165242/5e699a46Ec0a6e8ed/ec61bec3b2636d58.jpg","desc":"霏慕 情趣内衣 复古立领刺透视旗袍装 露背开叉情趣睡裙 性感旗袍 丁字内裤6934灰色"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/75676/13/15592/148116/5dd22d40E2d0eab21/a41fc2dc5780eb7c.jpg","desc":"性感睡衣女士睡袍情趣雪纺内衣套装睡裙薄纱透明蕾丝诱惑家居服 （睡袍+腰带+T裤）黑色"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/142451/1/3696/110059/5f1ab0efE54d1ee50/be027a4a33e8c6f5.jpg","desc":"惹火猫 性感情趣内衣 SM蕾丝开裆内裤三点比基尼吊带丝袜套装R309黑"},{"url":"https://img10.360buyimg.com/n7/jfs/t1/126496/29/10573/127603/5f432734Edf324351/5e4dabcf6f6c983c.jpg","desc":"惹火猫 性感情趣内衣 水手制服角色扮演学院风睡裙4件套女R102（送学生袜）"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/117160/30/18572/89661/5f6dc53bE53376024/7fdaaec7d112fc97.jpg","desc":"惹火猫 性感情趣内衣 制服诱惑SM透明镂空低腰白上衣亮油短裙灰T裤睡衣裙套装女R326灰成人诱惑"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/114904/14/15160/527639/5f316dc8Eeffb3db6/41a98c23b2b69ee2.jpg","desc":"胖妹妹居家服豹纹睡衣女士睡衣春夏豹纹睡衣女夏网纱内衣春夏薄纱丝滑宽松大码家居性感冰丝吊带睡裙H 黑色豹纹Q12>清凉唾衣可爱微胖2020起居 170(XL)>显瘦ins女生休闲诱惑睡觉衣"},{"url":"https://img11.360buyimg.com/n7/jfs/t1/88935/2/18779/176700/5e981556E8a6705dc/7c8066b1b35cebf2.jpg","desc":"霏慕 霏慕 情趣内衣 复古立领刺透视旗袍装 露背开叉情趣睡裙 性感旗袍 丁字内裤 6934红色"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/137554/17/12394/136134/5f8540c7E28453365/033ae4b86418edee.jpg","desc":"惹火猫 性感情趣内衣 镂空透明开档免脱可爱兔女郎丝袜网衣制服套装 R400"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/127478/38/2185/88642/5ec348caEc929824f/50b0bef46507f52d.jpg","desc":"惹火猫 性感情趣内衣 SM开叉裙透明白衬衣秘书制服4件套女 R110"}]
    },
    {
        id:14,
        title:'笔记本电脑',
        pictures:[{"url":"https://img13.360buyimg.com/n7/jfs/t1/142739/20/10764/113602/5f8904f2Ec0bf3894/6f114fab1324c5f8.jpg","desc":"华硕(ASUS) 飞行堡垒8 英特尔酷睿i5 15.6英寸游戏笔记本电脑(i5-10200H 16G 512GSSD GTX1650Ti 4G 144Hz)"},{"url":"https://img13.360buyimg.com/n7/jfs/t1/124634/2/7763/58973/5f17d646Ef4bc5b8e/52bfe5c392cecfce.jpg","desc":"京品电脑\n联想(Lenovo)小新Pro13高性能轻薄本 英特尔酷睿i5 全面屏学生独显笔记本电脑(i5 16G 512G MX350高色域)银"},{"url":"https://img12.360buyimg.com/n7/jfs/t1/142853/29/10076/89474/5f7e82b5Ed27ab1c8/68bfdd2ea1ca6283.jpg","desc":"戴尔DELL灵越5000 14英寸酷睿i5网课学习轻薄笔记本电脑(十代i5-1035G1 8G 512G MX230 2G独显)银"},{"url":"https://img10.360buyimg.com/n7/jfs/t1/122541/33/11827/69513/5f520a77Ed953f83c/f9226fdaa62c853c.jpg","desc":"联想(Lenovo)小新Air14锐龙版轻薄本 14英寸全面屏办公笔记本电脑(6核R5-4600U 16G 512G 高色域)深空灰"},{"url":"https://img14.360buyimg.com/n7/jfs/t1/145143/29/1636/222889/5ef831dbE4ece7453/5969340589cdabcb.jpg","desc":"联想(Lenovo)小新Air14性能版轻薄本 英特尔酷睿i5 全面屏学生独显笔记本电脑(i5 16G 512G MX350 高色域)银"}]
    }
]

class PictureController extends Controller {
  async getCateGorys(){
    const { ctx }=this;
    const result=mockData.map(item=>({
        id:item.id,
        title:item.title
    }))
    ctx.body=result
  }

  async getPictures(){
    const { ctx,service }=this;
    const {id}=ctx.query;
    const data=mockData.find(m=>m.id===Number(id));
    ctx.body=data.pictures;
  }
  
}

module.exports = PictureController;
