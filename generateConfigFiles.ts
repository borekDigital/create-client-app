import { urlJoin } from 'https://deno.land/x/url_join/mod.ts';
import { exec } from 'https://cdn.depjs.com/exec/mod.ts'

const libDir = 'lib'
const libTemplateDir = urlJoin(libDir, 'template')
const libNuxtDir = urlJoin(libTemplateDir, 'frameworks/nuxt')

const templatePathNuxtConfig = urlJoin(libNuxtDir, 'nuxt.config.ejs')
const outputPathNuxtConfig = urlJoin(libNuxtDir, 'nuxt.config.ts')

const templatePathTsConfig = urlJoin(libNuxtDir, 'tsconfig.ejs')
const outputPathTsConfig = urlJoin(libNuxtDir, 'tsconfig.json')

const readNuxtConfigTemplate = Deno.run({
  cmd: [
    'deno',
    'run',
    '--allow-read',
    './readConfigTemplate.ts',
    templatePathNuxtConfig
  ],
  stdout: 'piped',
  stderr: 'piped',
});

const readTsConfigTemplate = Deno.run({
  cmd: [
    'deno',
    'run',
    '--allow-read',
    './readConfigTemplate.ts',
    templatePathTsConfig
  ],
  stdout: 'piped',
  stderr: 'piped',
});

// nuxt.config
const statusNuxtConfig = await readNuxtConfigTemplate.status();

if (statusNuxtConfig.code === 0) {
  const rawOutput = await readNuxtConfigTemplate.output();
  const string = new TextDecoder().decode(rawOutput)

  await Deno.writeTextFile(outputPathNuxtConfig, string);

  // await exec({
  //   cmd: ['yarn', 'lint:fix'],
  //   cwd: `./${libNuxtDir}`,
  // })

  console.log(`\n🎉  Successfully created ${outputPathNuxtConfig}\n`)
} else {
  const rawError = await readNuxtConfigTemplate.stderrOutput();
  const errorString = new TextDecoder().decode(rawError);

  console.log(errorString);
}

// tsconfig
const statusTsConfig = await readTsConfigTemplate.status();

if (statusTsConfig.code === 0) {
  const rawOutput = await readTsConfigTemplate.output();
  const string = new TextDecoder().decode(rawOutput)

  await Deno.writeTextFile(outputPathTsConfig, string);

  console.log(`\n🥳  Successfully created ${outputPathTsConfig}\n`)
} else {
  const rawError = await readTsConfigTemplate.stderrOutput();
  const errorString = new TextDecoder().decode(rawError);

  console.log(errorString);
}

Deno.exit();
