const { merge, sortByKey } = require('./utils')

module.exports = {
  requireFile (filename) {
    try {
      return require(filename)
    } catch (error) {
      return {}
    }
  },
  requireJSON (filename) {
    return JSON.parse(JSON.stringify(this.requireFile(filename)))
  },
  loadPackage (name, generator) {
    if (!name || name === 'none') {
      return {}
    }
    const prefix = name === 'nuxt' ? 'nuxt' : `frameworks/${name}`

    const pkg = this.requireJSON(`./template/${prefix}/package.json`)
    const pkgHandler = this.requireFile(`./template/${prefix}/package.js`)

    return pkgHandler.apply ? pkgHandler.apply(pkg, generator) : pkg
  },
  load (generator) {
    const nuxtPkg = this.loadPackage('nuxt', generator)
    const uiPkg = this.loadPackage('vuetify', generator)
    const testPkg = this.loadPackage('jest', generator)

    const pkg = merge(nuxtPkg, uiPkg, testPkg)

    pkg.dependencies = sortByKey(pkg.dependencies)
    pkg.devDependencies = sortByKey(pkg.devDependencies)

    return pkg
  }
}
