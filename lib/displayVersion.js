import y from"readline";import v from"esbuild";var n="eswatch",t="0.8.0",o="lib/index.js",r="Henrique Borges <henriqueborgeshbr@gmail.com>",l="MIT",a="module",c=["lib"],p="./lib/index.js",m={type:"git",url:"https://github.com/henriquehbr/eswatch"},d={node:">=9.3.0"},u={"bump:patch":"cross-env HUSKY_SKIP_HOOKS=1 yarn version --patch","bump:minor":"cross-env HUSKY_SKIP_HOOKS=1 yarn version --minor","bump:major":"cross-env HUSKY_SKIP_HOOKS=1 yarn version --major",version:"yarn changelog -p",postversion:'yes "" | yarn publish',changelog:"auto-changelog -l false --hide-credit",postchangelog:"git add CHANGELOG.md","amend-changelog":"cross-env HUSKY_SKIP_HOOKS=1 git commit --amend --no-edit --no-verify",dev:'eswatch --minify --bundle --format esm --splitting --outdir ./lib --watch ./src/**/* ./src/index.ts --run "node lib --bundle --format esm --splitting --outdir ./lib/example-build --run --watch ./example/**/* ./example/indx.ts"',build:"eswatch --minify --bundle --format esm --splitting --outdir ./lib ./src/index.ts",lint:'eslint --fix "src/**/*.ts"'},g={hooks:{"post-commit":"yarn changelog -u && yarn amend-changelog","pre-push":"cross-env HUSKY_SKIP_HOOKS=1 git push --tags"}},h={"@types/eslint":"^7.2.5","@types/inquirer":"^7.3.1","@types/is-glob":"^4.0.1","@types/minimist":"^1.2.1","@types/node":"^14.14.9","@typescript-eslint/eslint-plugin":"^4.8.1","@typescript-eslint/parser":"^4.8.1","auto-changelog":"^2.2.1","cross-env":"^7.0.2",eslint:"^7.13.0","eslint-plugin-import":"^2.22.1",eswatch:"^0.8.0",husky:"^4.3.0",rimraf:"^3.0.2",typescript:"^4.1.2"},b={chokidar:"^3.4.3",esbuild:"^0.8.11","find-up":"^5.0.0",inquirer:"^7.3.3","is-glob":"^4.0.1",minimist:"^1.2.5","tiny-glob":"^0.2.6"},i={name:n,version:t,main:o,author:r,license:l,type:a,files:c,bin:p,repository:m,engines:d,scripts:u,husky:g,devDependencies:h,dependencies:b};const f=()=>{const s=y.createInterface({input:process.stdin,output:process.stdout});console.log(`eswatch version ${i.version}`),console.log(`esbuild version ${v.version}`),s.close()};export{f as displayVersion};