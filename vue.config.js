module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/about'
      ],
      useRenderEvent: true,
      headless: false,
      onlyProduction: true
    }
  }
}
