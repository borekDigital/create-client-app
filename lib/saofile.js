const { join, relative } = require('path')
const validate = require('validate-npm-package-name')
const pkg = require('./package')

const templateDir = 'template'
const frameworksDir = join(templateDir, 'frameworks')

module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const typescript = true
    const pwa = false
    const eslint = true
    const axios = this.answers.features.includes('axios')
    const pm = 'yarn'
    const pmRun = 'yarn'

    return {
      typescript,
      pwa,
      eslint,
      axios,
      pm,
      pmRun,
    }
  },
  actions () {
    const validation = validate(this.answers.name)
    validation.warnings && validation.warnings.forEach((warn) => {
      console.warn('Warning:', warn)
    })
    validation.errors && validation.errors.forEach((err) => {
      console.error('Error:', err)
    })
    validation.errors && validation.errors.length && process.exit(1)

    const actions = [{
      type: 'add',
      files: '**',
      templateDir: join(templateDir, 'nuxt'),
      filters: {
        'static/icon.png': 'features.includes("pwa")',
        'content/hello.md': 'features.includes("content")',
        'pages/content.vue': 'features.includes("content")'
      }
    }]

    actions.push({
      type: 'add',
      files: '**',
      templateDir: join(frameworksDir, 'vuetify')
    })

    actions.push({
      type: 'add',
      files: '**',
      templateDir: join(frameworksDir, 'jest')
    })

    actions.push({
      type: 'add',
      files: '*',
      filters: {
        '_.eslintrc.js': true,
        'tsconfig.json': true,
      },
      templateDir
    })

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
        '_.eslintrc.js': '.eslintrc.js',
      }
    })

    const generator = this
    actions.push({
      type: 'modify',
      files: 'package.json',
      handler (data) {
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
  async completed () {
    if (this.answers.vcs === 'git') {
      this.gitInit()
    }

    await this.npmInstall({ npmClient: 'yarn' })

    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''
    const pmRun = 'yarn'

    console.log(chalk`\n🎉  {bold Successfully created client app:} {cyan ${this.answers.name}}\n`)

    console.log(chalk`  {bold To get started:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} dev}\n`)

    console.log(chalk`  {bold To build & start for production:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} build}`)
    console.log(chalk`\t{cyan ${pmRun} start}\n`)

    console.log(chalk`  {bold To test:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} test}\n`)
  }
}
