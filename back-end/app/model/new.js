module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const NewSchema = new Schema({
    main_image: {
      type: String,
    },
    title: {
      type: String,
    },
    publish_time: {
      type: String,
    },
    view: {
      type: Number,
    },
    detail: {
      type: String,
    },
  });
  // 映射到egg-mongo db 库的News表中（不区分大小写）
  const New = mongoose.model("News", NewSchema);

  // init方法放到这里
  initNew(New);

  return New;
};

function initNew(New) {
  New.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      console.log("init New failed");
    } else if (!doc.length) {
      var News = [
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12642066502_640330/0",
          title: "瑞典禁止参加5G频谱拍卖企业使用华为、中兴设备，中使馆回应",
          publish_time: "40分钟前",
          view: 54,
          detail: `10月20日，外交部发言人赵立坚主持例行记者会。有记者就有中国士兵在中印边境地区走失一事提问。

          赵立坚表示，昨天中国西部战区新闻发言人已经介绍了有关情况。10月18日晚，中国一名应牧民请求帮助寻找牦牛的士兵迷路走失。事发后，中国边防部队第一时间主动向印方通报情况，并希望印方协助搜救救援，印方答应予以支持，并承诺找到中方人员后及时交还中方。最近印方向中方通报，找到中方一名走失人员，将对其进行医学检查后移交中方。我们希望印方信守承诺，抓紧时间向中方移交走失人员，与中方一道共同促进第7轮军长级会谈共识的落实，共同维护边境地区的和平与安宁。`,
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641446999_640330/0",
          title:
            "西安男子杀4人后自杀：曾掌握原单位贪腐证据，敲诈40万后自首举报",
          publish_time: "57分钟前",
          view: 6,
          detail: `腾讯新闻《一线》 唐媛媛

          针对特斯拉Model 3降价至19.9万元的传闻，特斯拉中国区总经理王昊（Allan Wang）10月20日下午在特斯拉车友群中回应称，“彻头彻尾的造谣”。
          
          今年以来，特斯拉多次调整在华车型售价。本月早些时候，特斯拉调整中国制造Model3标准续航后驱升级版的价格——补贴后售价从27.155万元下调至24.99万元。
          
          10月15日，特斯拉还宣布将Model长续航版的基础车价调整为73.39万元；Model S Performance高性能版基础车价调整为83.39万元。
          
          官方数据显示，特斯拉在2020年第三季度在全球交付了约14万辆电动汽车，相比第二季度交付量9.07万辆再创新高。
          
          特斯拉在10月19日还表示，上海超级工厂生产的中国制造Model 3标准续航升级版，即将出口德国、法国、意大利、瑞士等十余个欧洲国家。
          
          `,
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641350477_640330/0",
          title:
            "兰州两名大学生南京实习期间烧炭自杀：二人为情侣，女生有网贷记录",
          publish_time: "2小时前",
          view: 50,
          detail: `海外网10月20日电“36周宝宝求领养！”10月16日，韩国二手交易网站上，一则出售婴儿的帖文引发社会关注。发帖人标价为20万韩元（约合人民币1200元），并附上一张襁褓中婴儿的照片，地点标注在济州道西归浦。


          二手网站上“36周宝宝求领养”的帖子
          据韩国《亚洲经济》报道，韩国济州道政府20日消息称，经过调查发现，发帖女性A某是一名年轻的未婚妈妈，因经济困难才将孩子放在网上寻求领养人。而事件中的婴儿，已经被送往一处婴幼儿托管机构。
          
          A某在接受警方调查时表示，因为自己和孩子的生父无抚养孩子的经济能力，所以决定将孩子送人。A某还称，自己在网络上发帖前曾经询问了相关领养机构，但由于程序复杂、条件苛刻，她只好将孩子放在二手交易网站上。
          
          
          西归浦警察署（JIBS电视台）
          由于人口出生率常年低迷，韩国政府出台多项优惠政策鼓励民众多生育，同时还出台相关措施保护单身妈妈的权益。但随着“二手网站卖婴儿”事件不断发酵，政府对单身妈妈养育子女的相关政策不断遭到批评。
          
          济州道知事元喜龙18日在社交网站上发文说，今后将改善保护女性的相关制度，并查找阻挡合法领养程序的绊脚石。（海外网 刘强）`,
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641923764_640330/0",
          title: "台官员诬称大陆外交官打人行为“粗野” 赵立坚：胡说八道",
          publish_time: "45分钟前",
          view: 46,
          detail: "",
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641606599_640330/0",
          title: "核污水往海里排？日本该项计划引发不小担忧",
          publish_time: "1小时前",
          view: 46,
          detail: "",
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641599882_640330/0",
          title: "四成中国消费者预定iPhone12，Mini最不受欢迎",
          publish_time: "1小时前",
          view: 89,
          detail: "",
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641069793_640330/0",
          title: "中国士兵在中印边境走失，外交部：望印方抓紧移交走失人员",
          publish_time: "2小时前",
          view: 59,
          detail: "",
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12639847240_640330/0",
          title: "中国篮协宣布：八一男女篮不再参加CBA和WCBA联赛",
          publish_time: "6小时前",
          view: 71,
          detail: "",
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641238145_640330/0",
          title: "一线｜Model 3将降至19.9万？特斯拉中国区总经理：造谣",
          publish_time: "2小时前",
          view: 5,
          detail: "",
        },
        {
          main_image:
            "http://inews.gtimg.com/newsapp_ls/0/12641179099_640330/0",
          title: "韩国年轻妈妈二手网站卖娃：标价1200元人民币 称养不起",
          publish_time: "3小时前",
          view: 72,
          detail: "",
        },
      ];
      News.forEach((item) => {
        new New({ ...item }).save();
      });
    } else {
      console.log("-------------init News successfully--------------");
    }
  });
}
