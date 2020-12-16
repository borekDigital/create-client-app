# Local Development

<img align="right" src=https://denolib.github.io/high-res-deno-logo/deno_hr_circle.png height="200px">

Make sure to have [deno](https://deno.land) installed

#### Support for your IDE
* https://plugins.jetbrains.com/plugin/14382-deno
* https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno

1. Generate Config Files
```bash
# in the root directory run:
deno run --allow-run --allow-write ./generateConfigFiles.ts
```

2. Run and develop the template app
```bash
# in the app directory run:
yarn install

# and
yarn dev
```

3. Reset the template
```bash
# in the app directory run:
yarn reset:template
```

4. Install the package from local template
> Simulate `yarn create @borek-digital/client-app <my-app>` with packages on your local machine

```bash
# install current package globally
# in the root directory run:
yarn global add file:$PWD

# generate a new project
# anywhere:
create-client-app <my-app>
```

For detailed explanation on how things work, check out the following docs
* [Yarn CLI](https://classic.yarnpkg.com/en/docs/cli/create)
* [SAO](https://github.com/saojs/sao)
* [CAC](https://github.com/cacjs/cac)
