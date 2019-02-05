var webpack = require('webpack');

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html'
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
      }),
    ]
  }
}