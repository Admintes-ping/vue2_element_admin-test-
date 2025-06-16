const { defineConfig } = require('@vue/cli-service');
const path = require('path');

// 方便路径拼接
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    // 排除 src/icons 中的 svg 文件，不让默认 file-loader 处理
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end();

    // 添加 icons 规则，仅处理 src/icons 中的 svg 文件
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]' // 会生成 <symbol id="icon-xxx">
      });
  }
});
