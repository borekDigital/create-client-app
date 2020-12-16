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
  loadFramework (name, generator) {
    const pkg = this.requireJSON(`./template/frameworks/${name}/package.json`)
    const pkgHandler = this.requireFile(`./template/frameworks/${name}/package.js`)

    return pkgHandler.apply ? pkgHandler.apply(pkg, generator) : pkg
  },
  load (generator) {
    const nuxt = this.loadFramework('nuxt', generator)
    const jest = this.loadFramework('jest', generator)

    const pkg = merge(nuxt, jest)

    pkg.dependencies = sortByKey(pkg.dependencies)
    pkg.devDependencies = sortByKey(pkg.devDependencies)

    return pkg
  }
}
