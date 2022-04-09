const router = require('koa-router')();
const models = require('../modules');
const userCtl = require('../controller/user');
router.prefix('/users');

router.post('/add', userCtl.userAdd);

router.post('/update', userCtl.userUpdate);

router.post('/del', userCtl.userDel);

router.post('/find', userCtl.userFind);

router.post('/find/:id', userCtl.userFindOne);

module.exports = router;
