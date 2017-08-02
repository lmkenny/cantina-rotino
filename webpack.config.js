const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
        test: /\.(css|min.css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/,
        use: [
          'file-loader'
        ]
      }
    ]

  }
};
