const computePath = require('./utils').computePath

// make the ENV variables available inside this file
require('dotenv').config({ path: computePath('../.env') })
const { API_PORT, TITLE } = process.env

module.exports = {
  entry: [computePath('../src/index.tsx')],
  output: {
    html: {
      title: TITLE
    }
  },
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: {
        lintOnSave: false // disable tslint since we are using eslint
      }
    },
    {
      resolve: '@poi/plugin-eslint'
    }
  ],
  /*
    publicFolder: string = name of the folder that will be used to serve static files

    Suppose you have this folder architecture:
      src/
      static/
      |
      |– img/
      |   |– someimage.jpg

    Usage:
      <img src="/img/someimage.jpg" alt="an image"/>
  */
  publicFolder: 'static',
  configureWebpack(config) {
    const eslintRule = config.module.rules.find(r => {
      return (
        r.enforce === 'pre' &&
        r.use &&
        r.use.some(_ => _.loader.includes('eslint-loader'))
      )
    })

    if (eslintRule) {
      eslintRule.test = [/\.jsx?$/, /\.tsx$/]
    }

    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      commons: computePath('../src/commons/'),
      components: computePath('../src/components/'),
      routes: computePath('../src/routes.ts'),
      styles: computePath('../src/styles/'),
      utils: computePath('../src/utils/'),
      views: computePath('../src/views/')
    })

    return config
  }
}
