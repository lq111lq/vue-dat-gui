var path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: "development", // "production" | "development" | "none"
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'VueDatGui.umd.js',
    library: 'VueDatGui',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  externals: {
    'dat.gui': {
      commonjs: "dat.gui",
      commonjs2: "dat.gui",
      amd: "dat.gui",
      root: ['dat']
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')]
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      include: [resolve('src')]
    },{
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader'
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
