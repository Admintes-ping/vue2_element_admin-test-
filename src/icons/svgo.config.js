module.exports = {
  // multipass: true, // 如果需要可以取消注释
  // full: true,      // 如果需要可以取消注释
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'fill-rule']
      }
    }
  ]
};
