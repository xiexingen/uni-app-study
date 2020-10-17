/**
 * 本地开发环境配置文件
 */
exports.mongoose = {
    client: {
        // url: 'mongodb://root:Abcd1234#@111.230.249.41:27017/xxgmall',
        url:'mongodb://111.230.249.41:27017',
        options: {
            user:'root',
            pass:'Abcd1234#',
            dbName:'xxgmall'
        }
    }
}