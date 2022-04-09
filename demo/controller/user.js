const { user } = require('../modules');
const crud = require('./crudUtil');
const jwt = require('jsonwebtoken');

const userAdd = async (ctx) => {
  let { username = '', pwd = '' } = ctx.request.body;
  await crud.add(user, { username, pwd }, ctx);
};

const userUpdate = async (ctx) => {
  let params = ctx.request.body;
  await crud.update(
    user,
    { _id: params._id },
    {
      username: params.username,
      pwd: params.pwd,
    },
    ctx
  );
};

const userDel = async (ctx) => {
  let { _id } = ctx.request.body;
  await crud.del(user, { _id }, ctx);
};

const userFind = async (ctx) => {
  await crud.find(user, null, ctx);
};

const userFindOne = async (ctx) => {
  await crud.findOne(
    user,
    {
      _id: ctx.params.id,
    },
    ctx
  );
};
const login = async (ctx) => {
  let user = { username: 'list', pwd: '123' };
  let token = jwt.sign(
    {
      username: user.username,
    },
    'mydemo',
    {
      expiresIn: 3600 * 24 * 7,
    }
  );
  ctx.body = {
    token,
  };
};

module.exports = {
  userAdd,
  userUpdate,
  userDel,
  userFind,
  userFindOne,
  login,
};
