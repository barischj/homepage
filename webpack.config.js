const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NamedModulesPlugin } = require('webpack');

// Absolute paths of directories.
const dirs = {
  dist: path.join(__dirname, 'dist'),
  fonts: path.join(__dirname, 'src/fonts'),
  modules: path.join(__dirname, 'src/modules'),
  src: path.join(__dirname, 'src'),
};

// Names of files webpack needs to know about.
const names = {
  inHTML: 'index.html',
  inReact: 'root.jsx',
  outJS: 'bundle.js',
};

module.exports = {
  entry: {
    // All compiled modules are in the tree of entry.path's imports.
    app: path.join(dirs.src, names.inReact),
  },
  output: {
    // All output files are written to the output.path directory.
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
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: 'file-loader?name=assets/[name].[ext]',
      },
    ],
  },
  plugins: [
    new NamedModulesPlugin(),
    // Inject the bundled JavaScript into our HTML.
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.join(dirs.src, names.inHTML),
    }),
  ],
  resolve: {
    // Use aliases for module directories, to avoid relative imports.
    alias: {
      Fonts: dirs.fonts,
      Modules: dirs.modules,
      Src: dirs.src,
    },
    // No need to write file extensions on imports for these filetypes.
    extensions: ['.js', '.jsx'],
  },
};
