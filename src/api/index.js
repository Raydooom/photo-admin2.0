import http from "./http";
import { Message } from "element-ui";

export const isLogin = params => {
  let config = {
    url: "/admin/login/isLogin",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};
// 获取加密key
export const getKey = params => {
  let config = {
    url: "/admin/login/getAesKey",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 登录
export const login = params => {
  let config = {
    url: "/admin/login",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

export const logout = params => {
  let config = {
    url: "/admin/login/logout",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 获取文章列表
export const getArticleList = params => {
  let config = {
    url: "/admin/index/getArticleList",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 获取文章详情
export const getArticle = params => {
  let config = {
    url: "/admin/index/getArticle",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 更新文章
export const updateArticle = params => {
  let config = {
    url: "/admin/index/updateArticle",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 删除文章
export const delArticle = params => {
  let config = {
    url: "/admin/index/delArticle",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 获取文章分类列表
export const getKindList = params => {
  let config = {
    url: "/admin/index/getKindList",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

export const uploadImgUrl = "/admin/uploadImg/index";

// 添加文章
export const addArticle = params => {
  let config = {
    url: "/admin/index/addArticle",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 从公众号同步文章
export const asyncArticle = params => {
  let config = {
    url: "/admin/tools/asyncWechatArticle",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 获取关于开发者
export const editAboutDeveloper = params => {
  let config = {
    url: "/admin/index/editAboutDeveloper",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 编辑关于开发者
export const getAboutDeveloper = params => {
  let config = {
    url: "/admin/index/getAboutDeveloper",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 精选接口
export const getDailyList = params => {
  let config = {
    url: "/admin/index/getDailyList",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 添加精选
export const addDaily = params => {
  let config = {
    url: "/admin/index/addDaily",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 删除精选
export const delDaily = params => {
  let config = {
    url: "/admin/index/delDaily",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 精选详情
export const getDaily = params => {
  let config = {
    url: "/admin/index/getDaily",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 精选更新
export const updateDaily = params => {
  let config = {
    url: "/admin/index/updateDaily",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 数据统计页面
export const getDashBoardData = params => {
  let config = {
    url: "/admin/dashBoard/getDashBoard",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 数据统计页面
export const getServerInfo = params => {
  let config = {
    url: "/admin/dashBoard/getServerInfo",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};

// 每日访客
export const getDailyVisitor = params => {
  let config = {
    url: "/admin/dashBoard/getDailyVisitor",
    method: "POST",
    data: params
  };
  return http(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      return err;
    });
};