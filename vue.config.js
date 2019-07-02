module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/dog',
        '/store'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
