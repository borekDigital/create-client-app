const { cwd, stdout, copy } = Deno;
import { renderFile } from 'https://deno.land/x/dejs/mod.ts';

const templatePath = Deno.args;

(async () => {
  const output = await renderFile(`${cwd()}/${templatePath}`, {
    name: 'my generated app',
    mode: 'spa',
    target: 'static',
    axios: true,
    noindex: false,
  });

  await copy(output, stdout);
})();
