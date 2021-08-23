const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: "./", // 默认'/'，部署应用包时的基本 URL
  outputDir: "dist", // 'dist', 生产环境构建文件的目录
  assetsDir: "", // 相对于outputDir的静态资源(js、css、img、fonts)目录
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  devServer: {
    open: true,
    compress: true,
    proxy: {
      "/": {
        target: "http://tenant3.gciot.com:32080",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: (config) => {
    // webpack 配置
    config.devtool = "source-map";
  },
};
