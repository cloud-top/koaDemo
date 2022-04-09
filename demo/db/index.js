const mongoose = require('mongoose');

module.exports = () => {
  mongoose
    .connect('mongodb://localhost:27017/demo', { useNewUrlParser: true })
    .then(() => {
      console.log('数据库连接成功');
    })
    .catch((e) => {
      console.log('数据库连接失败', e);
    });
};
