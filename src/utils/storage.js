// 封装模块 使用localStorage实现持久化 只是进行保存
// 从localStorage中取出一项数据 名字叫name
export const LS = {
  get: (name) => {
    //  兼容 JSON.parse(undefined) 报错 Uncaught SyntaxError: Unexpected token u in JSON at position 0
    return localStorage.getItem(name) && JSON.parse(localStorage.getItem(name));
  },
  set: (name, obj) => {
    localStorage.setItem(name, JSON.stringify(obj));
  },
  remove: (name) => {
    localStorage.removeItem(name);
  },
  clear: () => {
    localStorage.clear();
  },
};
