module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/theme/base.scss";
        `
      }
    }
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    disableHostCheck: true,
    proxy: {
      "/admin": {
        target: "http://localhost:8360",
        changeOrigin: true,
        logLevel: "debug"
      }
    },
    disableHostCheck: true
  }
};
