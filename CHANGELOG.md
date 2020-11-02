### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [Unreleased](https://github.com/henriquehbr/esbuild-watch/compare/v0.7.1...HEAD)

- chore: implement automated changelog generation [`48c0b6c`](https://github.com/henriquehbr/esbuild-watch/commit/48c0b6c272e5efbf6c28e3b54efd77d7c64d8570)
- fix: build and exit when without --watch flag [`7ea4f81`](https://github.com/henriquehbr/esbuild-watch/commit/7ea4f816cb139cbf2d49075603e77f7d3a3c5689)
- chore: change error message for inexistent entry points [`f5f1f3d`](https://github.com/henriquehbr/esbuild-watch/commit/f5f1f3d9192239f797001b50c058ef9d8b739021)

#### [v0.7.1](https://github.com/henriquehbr/esbuild-watch/compare/v0.7.0...v0.7.1)

> 30 October 2020

- lint: replace old config with eslint-config-hbr [`676557a`](https://github.com/henriquehbr/esbuild-watch/commit/676557a1718ec1061164aaa0f6f6738a477dc7f9)
- chore: bump dependencies [`7f54371`](https://github.com/henriquehbr/esbuild-watch/commit/7f54371049db6a12592b8890fa735d220b8fe1c5)
- docs: add details to flags description [`6c5c718`](https://github.com/henriquehbr/esbuild-watch/commit/6c5c718f0273ff9cbc5ecfd11ce028573133e9bb)

#### [v0.7.0](https://github.com/henriquehbr/esbuild-watch/compare/v0.6.0...v0.7.0)

> 29 October 2020

- chore: bump eswatch version [`772c422`](https://github.com/henriquehbr/esbuild-watch/commit/772c422d786667e04b81dd3725c06154061c1bd6)
- feat: add --standalone and --platform flags [`62a1b01`](https://github.com/henriquehbr/esbuild-watch/commit/62a1b01087e7e671e5658f9ef8a393d158c3b167)

#### [v0.6.0](https://github.com/henriquehbr/esbuild-watch/compare/v0.5.1...v0.6.0)

> 24 October 2020

- Refactor project structure [`#1`](https://github.com/henriquehbr/esbuild-watch/pull/1)
- chore: bump dependencies [`78c5039`](https://github.com/henriquehbr/esbuild-watch/commit/78c50395076a2177b4c81e92481945fa557120ca)
- feat: add --minify flag [`a1d5c87`](https://github.com/henriquehbr/esbuild-watch/commit/a1d5c87db8be3f53d8ca402c5f9f7982f7a9b601)
- refactor: split eswatch and esbuild flags interfaces [`99a98d9`](https://github.com/henriquehbr/esbuild-watch/commit/99a98d9628d27059ffd411847847b037ec746ca9)
- docs: split eswatch and esbuild flags lists [`71d8780`](https://github.com/henriquehbr/esbuild-watch/commit/71d878084db539d84febecb6c6c6096f673d1e08)

#### [v0.5.1](https://github.com/henriquehbr/esbuild-watch/compare/v0.5.0...v0.5.1)

> 22 October 2020

- fix: avoid including externals without --bundle flag [`f478abf`](https://github.com/henriquehbr/esbuild-watch/commit/f478abf106eb1497b7ed25da3960b72da0f0d1f0)

#### [v0.5.0](https://github.com/henriquehbr/esbuild-watch/compare/v0.4.1...v0.5.0)

> 22 October 2020

- refactor: split core utilities into modules [`75d19da`](https://github.com/henriquehbr/esbuild-watch/commit/75d19da31423a2b99f7827e6e821ee98b684735e)
- feat: allow builds to be bundled [`7fa4366`](https://github.com/henriquehbr/esbuild-watch/commit/7fa4366c90abbea296c68cd3d87ec9d8056f7b07)
- docs: add new flags [`e66078d`](https://github.com/henriquehbr/esbuild-watch/commit/e66078da591274791d3cdcce8030e08f097ee129)
- chore: stage files after lint on pre-commit hook [`d545d22`](https://github.com/henriquehbr/esbuild-watch/commit/d545d224b82984046a480cfcb0d5b41edbb43bba)

#### [v0.4.1](https://github.com/henriquehbr/esbuild-watch/compare/v0.4.0...v0.4.1)

> 21 October 2020

- docs: add unflagged entry points [`6929d3d`](https://github.com/henriquehbr/esbuild-watch/commit/6929d3ddb10f5859cf5ef0996f65d9d6d1d5a867)

#### [v0.4.0](https://github.com/henriquehbr/esbuild-watch/compare/v0.3.0...v0.4.0)

> 21 October 2020

- feat: allow entry point to be passed without flag [`0254bc9`](https://github.com/henriquehbr/esbuild-watch/commit/0254bc9ac6cea5e338f55448d65576420c03594b)
- docs: replace flags table with fenced code block [`921ee5a`](https://github.com/henriquehbr/esbuild-watch/commit/921ee5acd46c75f6d85d78af5b6bd461a7b0ccb5)
- build: replace local eswatch by npm hosted version [`b5005bb`](https://github.com/henriquehbr/esbuild-watch/commit/b5005bb4786d66d399a45dc6c6c6b197f18ca502)
- docs: add CLI flags [`62b397b`](https://github.com/henriquehbr/esbuild-watch/commit/62b397b917fd2c07d0ece7bc6bfd409849cbffde)

#### [v0.3.0](https://github.com/henriquehbr/esbuild-watch/compare/v0.2.0...v0.3.0)

> 13 October 2020

- feat: allow custom commands on --run flag [`515c15e`](https://github.com/henriquehbr/esbuild-watch/commit/515c15e2e298b09ec8066df2687a31e45291292f)
- chore: replace local eswatch by npm hosted version [`8b03c8d`](https://github.com/henriquehbr/esbuild-watch/commit/8b03c8d247fd521a6da95f76f5d9686cb1dc9281)
- chore: remove unnecessary console.log [`b20800c`](https://github.com/henriquehbr/esbuild-watch/commit/b20800c17546cc7e27a41635e7c3b25a0988e0aa)

#### [v0.2.0](https://github.com/henriquehbr/esbuild-watch/compare/v0.1.2...v0.2.0)

> 10 October 2020

- chore: remove rollup [`1b252e8`](https://github.com/henriquehbr/esbuild-watch/commit/1b252e83e4173974c5fae62f68f4b44646633736)
- feat: add `--outdir` and `--run` flags [`2469cbb`](https://github.com/henriquehbr/esbuild-watch/commit/2469cbb00e083d00d333b5c4803dbde440a29e94)

#### [v0.1.2](https://github.com/henriquehbr/esbuild-watch/compare/v0.1.1...v0.1.2)

> 8 October 2020

- fix: add shebang [`8f76cb8`](https://github.com/henriquehbr/esbuild-watch/commit/8f76cb8848f6906e39c62e769710d878c57c42ad)

#### v0.1.1

> 8 October 2020

- Initial commit [`26588c8`](https://github.com/henriquehbr/esbuild-watch/commit/26588c880720ca15eed52f6ab2d08aa6fe818548)
- chore: upload files [`3610f5d`](https://github.com/henriquehbr/esbuild-watch/commit/3610f5d2e18407e779e62e6a8c4e670d61919844)
- fix: set `esbuild` and `chokidar` as dependencies [`e4eda24`](https://github.com/henriquehbr/esbuild-watch/commit/e4eda244b564da97edc047dc1a7afacddee4815f)
- chore: rename from esbuild-watch to eswatch [`1f77e0a`](https://github.com/henriquehbr/esbuild-watch/commit/1f77e0a77ec3ac1c708912634b3c69b6fbc971f9)
- chore: add "bin" field to package.json [`97e8ff4`](https://github.com/henriquehbr/esbuild-watch/commit/97e8ff40e9bba4ef677043fc9da6b4998162886a)
