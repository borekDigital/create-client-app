module.exports = {
  apply (pkg, generator) {
    const { features } = generator.answers

    // Modules
    if (!features.includes('axios')) {
      delete pkg.dependencies['@nuxtjs/axios']
    }

    return pkg
  }
}
