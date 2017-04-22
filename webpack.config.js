const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { NamedModulesPlugin } = require('webpack');

// Absolute paths of directories.
const dirs = {
  dist: path.join(__dirname, 'dist'),
  fonts: path.join(__dirname, 'src/fonts'),
  modules: path.join(__dirname, 'src/modules'),
  src: path.join(__dirname, 'src'),
};

// Names of files.
const names = {
  inHTML: 'index.html',
  inReact: 'root.jsx',
  outJS: 'bundle.js',
};

// Absolute paths of files.
const paths = {
  inHTML: path.join(dirs.src, names.inHTML),
  inReact: path.join(dirs.src, names.inReact),
};

module.exports = {
  entry: {
    app: paths.inReact,
  },
  output: {
    path: dirs.dist,
    filename: names.outJS,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // The following loaders were introduced to add support for loading files
      // from font-awesome. Based on instructions at:
      // https://github.com/shakacode/font-awesome-loader/blob/master/docs/usage-webpack2.md
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: paths.inHTML,
      title: 'Jeremy',
    }),
  ],
  resolve: {
    alias: {
      Fonts: dirs.fonts,
      Modules: dirs.modules,
      Src: dirs.src,
    },
    extensions: ['.js', '.jsx'],
  },
};
