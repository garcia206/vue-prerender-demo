/*eslint-disable */
const webpack = require('webpack');
/* eslint-enable */
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

const productionPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
      '/',
      '/dog',
      '/seattle',
      '/chicago'
    ],
    renderer: new Renderer({
      headless: true,
      renderAfterDocumentEvent: 'x-app-rendered',
      args: [
        '--disable-web-security',
        '--no-sandbox',
        '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.50 Safari/537.36',
      ],
      ignoreHTTPSErrors: true,
      timeout: 0,
      maxConcurrentRoutes: 2,
      navigationOptions: {
        timeout: 0,
        waitForNavigation: {
          timeout: 0,
        },
        setDefaultNavigationTimeout: 0,
        setDefaultTimeout: 0,
      },
    }),
  }),
];

module.exports = {
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    https: true,
  },
  outputDir: './dist',
  configureWebpack: config => {
    if (process.env.NODE_ENV === `production`) {
      config.plugins.push(...productionPlugins);
    }
  },
};
