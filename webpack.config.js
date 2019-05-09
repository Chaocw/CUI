const path = require('path');
const slash = require('slash2');

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
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              minimize: true,
              "getLocalIdent": (context, localIdentName, localName) => {
                if (
                    context.resourcePath.includes('node_modules') ||
                    context.resourcePath.includes('global.scss')
                ) {
                  return localName;
                }
                const match = context.resourcePath.match(/(.*)/);
                if (match && match[1]) {
                  const antdProPath = match[1].replace('.scss', '');
                  if (/.example/.test(antdProPath)) {
                    const arr = slash(antdProPath)
                        // .replace('.example', '')
                        .split('/')
                        .map(a => a.replace(/([A-Z])/g, '-$1'))
                        .map(a => a.toLowerCase())
                        .slice(-2);
                    return `cui-${arr.join('-')}-${localName}`.replace(/--/g, '-');
                  }
                }
                return localName;
              },
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: 'expanded',
              sourceMap: true
            }
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