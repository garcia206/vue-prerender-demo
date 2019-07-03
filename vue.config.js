const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');
/* eslint-enable */

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: ['/', '/dog', '/store'],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      headless: true,
      renderAfterDocumentEvent: 'custom-render-trigger',
      timeout: 0,
      waitForNavigation: { timeout: 0 },
      maxConcurrentRoutes: 1,
    }),
  }),
];

module.exports = {
  configureWebpack: config => {
    
      config.plugins.push(...productionPlugins);
    
  }
}
