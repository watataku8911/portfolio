<<<<<<< HEAD
module.exports = {
    chainWebpack (config) {
      // Remove existing SVG rule which uses file-loader
      config.module.rules.delete('svg')
  
      // Use our loader instead
      config.module.rule('svg')
        .test(/\.svg$/)
        .use('vue')
        .loader('vue-loader')
        .end()
        .use('svg-to-vue-component')
        .loader('svg-to-vue-component/loader')
    }
  };
  
=======
module.exports = {
    chainWebpack (config) {
      // Remove existing SVG rule which uses file-loader
      config.module.rules.delete('svg')
  
      // Use our loader instead
      config.module.rule('svg')
        .test(/\.svg$/)
        .use('vue')
        .loader('vue-loader')
        .end()
        .use('svg-to-vue-component')
        .loader('svg-to-vue-component/loader')
    }
};
  
>>>>>>> 470a690a4305df659e10a74e491ad00be11c040d
