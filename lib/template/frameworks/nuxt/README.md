# <%= name %>

# <%= name %> Client App
> Client App for <%= name %> - standalone application based on Nuxt

### Setup
- [Nuxt](https://nuxtjs.org) - Modular Vue Framework
- [Nuxt Typescript](https://typescript.nuxtjs.org) - including Class API Components  
- [Vuetify](https://vuetifyjs.com) UI Framework 
- [Jest](https://jestjs.io) Unit Tests, written in TypeScript 
- [ESLint](https://eslint.org) Code Analysis 
- [Docker](https://www.docker.com) for seamless deployment  

## Getting started
> Make sure to have [yarn](https://classic.yarnpkg.com/en) installed

## Local Development
```bash
# install dependencies
$ yarn
```

#### Troubleshooting
If you encounter versioning problems or runtime errors, try running  
```bash
yarn reset:dev
```  
to delete temporary files and packages and re-install them  

#### Version Upgrade
> Use with caution
   
For a full dependencies' version upgrade, run  
```bash
yarn upgrade:dev
```  
to delete yarn.lock, temporary files and packages and re-install them

#### Linting
```bash
# lint all repo files .ts,.js,.vue
$ yarn lint

# fix lint errors in all repo files .ts,.js,.vue
$ yarn lint:fix
```

## Tests
> Automated Unit-Tests via [Jest](https://jestjs.io)

### Unit Tests
```bash
# Execute unit tests for all .spec files - including coverage output
$ yarn test:unit
```

## Further Information
For detailed explanation on how things work, check out the [Nuxt docs](https://nuxtjs.org).

### Educational Links
* [Rendering Modes](https://nuxtjs.org/guides/features/rendering-modes)
* [Fetch Lifecycle Hook](https://nuxtjs.org/blog/understanding-how-fetch-works-in-nuxt-2-12)
* [Lifecycle Overview](https://dev.to/lilianaziolek/understanding-nuxt-vue-hooks-and-lifecycle-part-3-8fo)
