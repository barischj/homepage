const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { NamedModulesPlugin } = require('webpack');

// Absolute paths of directories.
const dirs = {
  dist: path.join(__dirname, 'dist'),
  node_modules: path.resolve(__dirname, 'node_modules'),
  src: path.join(__dirname, 'src'),
};

// Names of input and output files.
const names = {
  inHTML: 'index.html',
  inReact: 'root.jsx',
  inSASS: 'app.sass',
  outJS: 'bundle.js',
};

// Absolute paths of input and output files.
const paths = {
  inHTML: path.join(dirs.src, names.inHTML),
  inReact: path.join(dirs.src, names.inReact),
  inSASS: path.join(dirs.src, names.inSASS),
};

module.exports = {
  entry: {
    app: [
      paths.inReact,
      paths.inSASS,
    ],
  },
  output: {
    path: dirs.dist,
    filename: names.outJS,
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [dirs.node_modules],
            },
          },
        ],
      },
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
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
    extensions: ['.js', '.jsx'],
  },
};
