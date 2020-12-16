module.exports = {
  apply (pkg, generator) {
    const { scripts } = pkg

    delete scripts['reset:template']

    const { features } = generator.answers

    // Modules
    if (!features.includes('axios')) {
      delete pkg.dependencies['@nuxtjs/axios']
    }

    return pkg
  },
}
