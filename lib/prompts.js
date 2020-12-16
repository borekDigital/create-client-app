module.exports = [
  {
    name: 'name',
    message: 'Project name:',
    default: '{outFolder}'
  },
  {
    name: 'features',
    message: 'Nuxt.js modules:',
    type: 'checkbox',
    pageSize: 10,
    choices: [
      { name: 'Axios - Promise based HTTP client', value: 'axios' },
      { name: 'NoIndex - Request crawlers to not index the page', value: 'noindex' },
    ],
    default: []
  },
  {
    name: 'mode',
    message: 'Rendering mode:',
    type: 'list',
    choices: [
      { name: 'Universal (SSR / SSG)', value: 'universal' },
      { name: 'Single Page App', value: 'spa' }
    ],
    default: 'universal'
  },
  {
    name: 'target',
    message: 'Deployment target:',
    type: 'list',
    choices: [
      { name: 'Server (Node.js hosting)', value: 'server' },
      { name: 'Static (Static/JAMStack hosting)', value: 'static' }
    ],
    default: 'server'
  },
  {
    name: 'vcs',
    message: 'Version control system:',
    type: 'list',
    choices: [
      { name: 'Git', value: 'git' },
      { name: 'None', value: 'none' }
    ],
    default: 'git'
  }
]
