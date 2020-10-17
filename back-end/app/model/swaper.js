module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 按照mock的数据，有四个字段：name/age/sex/job lastTime是用来标记最后的更改时间
  const SwaperSchema = new Schema({
    serial_no: {
      type: Number,
    },
    src: {
      type: String,
    },
  });
  // 映射到egg-mongo db 库的swapers表中（不区分大小写）
  const Swaper = mongoose.model("swapers", SwaperSchema);

  // init方法放到这里
  initSwaper(Swaper);

  return Swaper;
};

function initSwaper(Swaper) {
  Swaper.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      console.log("init swaper failed");
    } else if (!doc.length) {
      new Swaper({
        serial_no: 1,
        src:
          "http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/126362/30/986/198724/5eb8d485E656bea31/649f6df5d9ee7087.jpg",
      }).save();

      new Swaper({
        serial_no: 2,
        src:
          "http://img13.360buyimg.com/mcoss/s710x206_jfs/t1/124170/1/15119/68775/5f86b18eed4c70027/f97ed610efcc77fc.jpg",
      }).save();

      new Swaper({
        serial_no: 3,
        src:
          "http://img1.360buyimg.com/pop/s710x206_jfs/t1/133709/10/9939/118233/5f5f2d5ee7c33c7c6/b1beac87cc300a1b.jpg",
      }).save();

      new Swaper({
        serial_no: 4,
        src:
          "http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/148766/31/9437/104633/5f6ff039Ebc893037/592f36a15a4198fc.jpg",
      }).save();
    } else {
      console.log("-------------init user successfully--------------");
    }
  });
}
