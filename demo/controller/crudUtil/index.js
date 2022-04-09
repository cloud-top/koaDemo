const add = (model, params, ctx) => {
  return model
    .create(params)
    .then((res) => {
      if (res) {
        ctx.body = {
          code: 200,
          msg: '添加成功',
          res,
        };
      } else {
        ctx.body = {
          code: 300,
          msg: '添加失败',
        };
      }
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '添加失败',
      };
      console.error(err);
    });
};

const del = (model, params, ctx) => {
  model
    .findOneAndDelete(params)
    .then((res) => {
      ctx.body = {
        res,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '删除失败',
      };
      console.error(err);
    });
};

const find = (model, where, ctx) => {
  return model
    .find(where)
    .then((res) => {
      ctx.body = {
        result: res,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '查询失败',
      };
      console.error(err);
    });
};

const update = (model, where, params, ctx) => {
  return model
    .updateOne(where, params)
    .then((res) => {
      ctx.body = {
        result: res,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '修改失败',
      };
      console.error(err);
    });
};

const findOne = (model, where, ctx) => {
  return model
    .findOne(where)
    .then((res) => {
      ctx.body = {
        result: res,
      };
    })
    .catch((err) => {
      ctx.body = {
        code: 400,
        msg: '查询失败',
      };
      console.error(err);
    });
};

module.exports = {
  add,
  find,
  del,
  update,
  findOne,
};
