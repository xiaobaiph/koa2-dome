module.exports = {
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        we: false,
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
