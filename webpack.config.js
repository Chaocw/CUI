const path = require('path');

module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'FUI',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              getLocalIdent: (context, localIdentName, localName) => {
                if (
                    context.resourcePath.includes('node_modules') ||
                    context.resourcePath.includes('global.scss')
                ) {
                  return localName;
                }
                const match = context.resourcePath.match(/src(.*)/);
                if (match && match[1]) {
                  const antdProPath = match[1].replace('.scss', '');
                  const arr = slash(antdProPath)
                      .split('/')
                      .map(a => a.replace(/([A-Z])/g, '-$1'))
                      .map(a => a.toLowerCase());
                  return `cui${arr.join('-')}-${localName}`.replace(/--/g, '-');
                }
                return localName;
              },
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
};