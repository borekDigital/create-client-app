const { join, relative } = require('path')
const validate = require('validate-npm-package-name')
const pkg = require('./package')

const templateDir = 'template'
const frameworksDir = join(templateDir, 'frameworks')

module.exports = {
  prompts: require('./prompts'),
  templateData() {
    const axios = this.answers.features.includes('axios')
    const noindex = this.answers.features.includes('noindex')

    return {
      axios,
      noindex,
    }
  },
  actions() {
    const validation = validate(this.answers.name)
    validation.warnings && validation.warnings.forEach((warn) => {
      console.warn('Warning:', warn)
    })
    validation.errors && validation.errors.forEach((err) => {
      console.error('Error:', err)
    })
    validation.errors && validation.errors.length && process.exit(1)

    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir: join(frameworksDir, 'nuxt'),
        filters: {
          'config/axios.config.ts': 'features.includes("axios")'
        }
      }
    ]

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        'tsconfig.ejs': 'tsconfig.json',
        'nuxt.config.ejs': 'nuxt.config.ts',
      }
    })

    const generator = this
    actions.push({
      type: 'modify',
      files: 'package.json',
      handler(data) {
        return { ...data, ...pkg.load(generator) }
      }
    })

    // For compiling package.json
    actions.push({
      type: 'add',
      files: 'package.json',
      templateDir: this.outDir
    })

    actions.push({
      type: 'remove',
      files: 'package.js'
    })

    return actions
  },
  async completed() {
    if (this.answers.vcs === 'git') {
      this.gitInit()
    }

    await this.npmInstall({ npmClient: 'yarn' })

    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''

    console.log(chalk`\n🎉  {bold Successfully created a borek.digital client app:} {cyan ${this.answers.name}}\n`)

    console.log(chalk`  {bold To get started:}\n`)
    console.log(chalk`${cdMsg}\t{cyan yarn dev}\n`)

    console.log(chalk`  {bold To build & start for production:}\n`)
    console.log(chalk`${cdMsg}\t{cyan yarn build}`)
    console.log(chalk`\t{cyan yarn start}\n`)

    console.log(chalk`  {bold To lint:}\n`)
    console.log(chalk`${cdMsg}\t{cyan yarn lint}\n`)

    console.log(chalk`  {bold To test:}\n`)
    console.log(chalk`${cdMsg}\t{cyan yarn test:unit}\n`)
  }
}
