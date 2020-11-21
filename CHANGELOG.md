### Changelog

All notable changes to this project will be documented in this file. Dates are displayed in UTC.

#### [v0.9.3](https://github.com/henriquehbr/eswatch/compare/v0.9.2...v0.9.3)

- fix: convert watchAndBuild to dynamic import [`d6836f4`](https://github.com/henriquehbr/eswatch/commit/d6836f4b293e26ed326728937371e7cc3f4da89f)

#### [v0.9.2](https://github.com/henriquehbr/eswatch/compare/v0.9.1...v0.9.2)

> 20 November 2020

- chore: bump dependencies [`4cd7f48`](https://github.com/henriquehbr/eswatch/commit/4cd7f486c3665c1acbbea82b4e6db70559eb3f9a)
- chore: re-add build on pre-commit hook [`070f6c2`](https://github.com/henriquehbr/eswatch/commit/070f6c2df8aea2be723c4d24ae23c9af09569f45)
- chore: set inquirer as devDependency [`57906b7`](https://github.com/henriquehbr/eswatch/commit/57906b7e6a9c131fd825f15ce8cd19f9a6b741a9)

#### [v0.9.1](https://github.com/henriquehbr/eswatch/compare/v0.9.0...v0.9.1)

> 20 November 2020

- chore: remove unused eslint devDependencies [`c62bd89`](https://github.com/henriquehbr/eswatch/commit/c62bd8935abd389c1e47c5e12652a694f714141d)
- fix: prevent bundling of imported devDependencies [`6c9a918`](https://github.com/henriquehbr/eswatch/commit/6c9a9184d8ba8994166733abc93a092b5ddd5605)
- chore(getDependencies): convert to named export [`ae2430b`](https://github.com/henriquehbr/eswatch/commit/ae2430bfb71bba63b7ed5cb5f4e575ad9549beeb)

#### [v0.9.0](https://github.com/henriquehbr/eswatch/compare/v0.8.0...v0.9.0)

> 20 November 2020

- feat: enable passing glob patterns as entry points [`6b6ee00`](https://github.com/henriquehbr/eswatch/commit/6b6ee00531376d58549dfe4159ddf08a5ec0c4b2)
- refactor(validateEntryPoint): modularize "fileExists" [`c8fd538`](https://github.com/henriquehbr/eswatch/commit/c8fd538f6d05e1195fce3b15a93903067f537fcc)
- refactor(validateEntryPoint): modularize "globParser" [`8ff3571`](https://github.com/henriquehbr/eswatch/commit/8ff3571085d511eae5017f3da1da778f2937975e)
- chore: bump eswatch version from 0.7.0 to 0.8.0 [`ab35193`](https://github.com/henriquehbr/eswatch/commit/ab3519335728b3bdd4c15235eb15b0dcf3e313d3)
- refactor(validateEntryPoint): simplify syntax [`5f1190e`](https://github.com/henriquehbr/eswatch/commit/5f1190e9a9aba763e3aeee02f030b52dd85efa27)
- refactor(validateEntryPoint): remove unnecessary export [`10ffcad`](https://github.com/henriquehbr/eswatch/commit/10ffcadce89fc5dc3c69565beb1fae459ddd927d)

#### [v0.8.0](https://github.com/henriquehbr/eswatch/compare/v0.7.7...v0.8.0)

> 19 November 2020

- feat: add --version flag [`1c52b48`](https://github.com/henriquehbr/eswatch/commit/1c52b48a8d50806264f4930a3ec03f52354e93a1)
- fix: re-add missing shebang [`56dab1c`](https://github.com/henriquehbr/eswatch/commit/56dab1c989604845bcd2b3b0238d6bc86229553e)

#### [v0.7.7](https://github.com/henriquehbr/eswatch/compare/v0.7.6...v0.7.7)

> 15 November 2020

- chore: build lib on pre-commit hook [`f0451ca`](https://github.com/henriquehbr/eswatch/commit/f0451ca579be68687c29af96e751a04209293204)

#### [v0.7.6](https://github.com/henriquehbr/eswatch/compare/v0.7.5...v0.7.6)

> 15 November 2020

- fix: properly pass --external flag value to esbuild [`24faa69`](https://github.com/henriquehbr/eswatch/commit/24faa691312c117b9b2b0166274e0eece96e8891)

#### [v0.7.5](https://github.com/henriquehbr/eswatch/compare/v0.7.4...v0.7.5)

> 8 November 2020

- chore: automate pushing of git tags to remote [`a80ee95`](https://github.com/henriquehbr/eswatch/commit/a80ee95aa3950bd2e2c1aa29744464256162c5e3)
- build: generate minified source [`45d128c`](https://github.com/henriquehbr/eswatch/commit/45d128c7a5414886a7b65b23886aee731b42b241)
- chore: re-add git tags for proper changelog generation [`5b2b36f`](https://github.com/henriquehbr/eswatch/commit/5b2b36f43072ebab012977d7ea9d1eaa2b162300)

#### [v0.7.4](https://github.com/henriquehbr/eswatch/compare/v0.7.3...v0.7.4)

> 8 November 2020

- fix: re-add --minify flag to lib output [`6f7c18e`](https://github.com/henriquehbr/eswatch/commit/6f7c18e2290c640ca581f567b31da0027a7f9900)

#### [v0.7.3](https://github.com/henriquehbr/eswatch/compare/v0.7.2...v0.7.3)

> 6 November 2020

- style: implement changes suggested by eslint [`f1c9356`](https://github.com/henriquehbr/eswatch/commit/f1c935668ab21d18ad027a8d6038ab8913bee6a3)
- fix: prevent process from hanging after build [`484fa09`](https://github.com/henriquehbr/eswatch/commit/484fa099b0327a3d556a1d61b38acaadcdc48ad9)

#### [v0.7.2](https://github.com/henriquehbr/eswatch/compare/v0.7.1...v0.7.2)

> 2 November 2020

- chore: implement automated changelog generation [`48c0b6c`](https://github.com/henriquehbr/eswatch/commit/48c0b6c272e5efbf6c28e3b54efd77d7c64d8570)
- fix: build and exit when without --watch flag [`7ea4f81`](https://github.com/henriquehbr/eswatch/commit/7ea4f816cb139cbf2d49075603e77f7d3a3c5689)
- fix: exit after --run when without --watch flag [`7861844`](https://github.com/henriquehbr/eswatch/commit/78618442d43229e303ff715a4a632005ad96440a)
- chore: change error message for inexistent entry points [`f7c7dac`](https://github.com/henriquehbr/eswatch/commit/f7c7daca043ef7279d97bc6eb3b11d2ba7b40f2e)
- chore: remove "git push" from "post-commit" hook [`506298f`](https://github.com/henriquehbr/eswatch/commit/506298f22feeb0ab3aaa3baac0aa8e4d6c3c388b)

#### [v0.7.1](https://github.com/henriquehbr/eswatch/compare/v0.7.0...v0.7.1)

> 30 October 2020

- lint: replace old config with eslint-config-hbr [`676557a`](https://github.com/henriquehbr/eswatch/commit/676557a1718ec1061164aaa0f6f6738a477dc7f9)
- chore: bump dependencies [`7f54371`](https://github.com/henriquehbr/eswatch/commit/7f54371049db6a12592b8890fa735d220b8fe1c5)
- docs: add details to flags description [`6c5c718`](https://github.com/henriquehbr/eswatch/commit/6c5c718f0273ff9cbc5ecfd11ce028573133e9bb)

#### [v0.7.0](https://github.com/henriquehbr/eswatch/compare/v0.6.0...v0.7.0)

> 29 October 2020

- chore: bump eswatch version [`772c422`](https://github.com/henriquehbr/eswatch/commit/772c422d786667e04b81dd3725c06154061c1bd6)
- feat: add --standalone and --platform flags [`62a1b01`](https://github.com/henriquehbr/eswatch/commit/62a1b01087e7e671e5658f9ef8a393d158c3b167)

#### [v0.6.0](https://github.com/henriquehbr/eswatch/compare/v0.5.1...v0.6.0)

> 24 October 2020

- Refactor project structure [`#1`](https://github.com/henriquehbr/eswatch/pull/1)
- chore: bump dependencies [`78c5039`](https://github.com/henriquehbr/eswatch/commit/78c50395076a2177b4c81e92481945fa557120ca)
- feat: add --minify flag [`a1d5c87`](https://github.com/henriquehbr/eswatch/commit/a1d5c87db8be3f53d8ca402c5f9f7982f7a9b601)
- refactor: split eswatch and esbuild flags interfaces [`99a98d9`](https://github.com/henriquehbr/eswatch/commit/99a98d9628d27059ffd411847847b037ec746ca9)
- docs: split eswatch and esbuild flags lists [`71d8780`](https://github.com/henriquehbr/eswatch/commit/71d878084db539d84febecb6c6c6096f673d1e08)

#### [v0.5.1](https://github.com/henriquehbr/eswatch/compare/v0.5.0...v0.5.1)

> 22 October 2020

- fix: avoid including externals without --bundle flag [`f478abf`](https://github.com/henriquehbr/eswatch/commit/f478abf106eb1497b7ed25da3960b72da0f0d1f0)

#### [v0.5.0](https://github.com/henriquehbr/eswatch/compare/v0.4.1...v0.5.0)

> 22 October 2020

- refactor: split core utilities into modules [`75d19da`](https://github.com/henriquehbr/eswatch/commit/75d19da31423a2b99f7827e6e821ee98b684735e)
- feat: allow builds to be bundled [`7fa4366`](https://github.com/henriquehbr/eswatch/commit/7fa4366c90abbea296c68cd3d87ec9d8056f7b07)
- docs: add new flags [`e66078d`](https://github.com/henriquehbr/eswatch/commit/e66078da591274791d3cdcce8030e08f097ee129)
- chore: stage files after lint on pre-commit hook [`d545d22`](https://github.com/henriquehbr/eswatch/commit/d545d224b82984046a480cfcb0d5b41edbb43bba)

#### [v0.4.1](https://github.com/henriquehbr/eswatch/compare/v0.4.0...v0.4.1)

> 21 October 2020

- docs: add unflagged entry points [`6929d3d`](https://github.com/henriquehbr/eswatch/commit/6929d3ddb10f5859cf5ef0996f65d9d6d1d5a867)

#### [v0.4.0](https://github.com/henriquehbr/eswatch/compare/v0.3.0...v0.4.0)

> 21 October 2020

- feat: allow entry point to be passed without flag [`0254bc9`](https://github.com/henriquehbr/eswatch/commit/0254bc9ac6cea5e338f55448d65576420c03594b)
- docs: replace flags table with fenced code block [`921ee5a`](https://github.com/henriquehbr/eswatch/commit/921ee5acd46c75f6d85d78af5b6bd461a7b0ccb5)
- build: replace local eswatch by npm hosted version [`b5005bb`](https://github.com/henriquehbr/eswatch/commit/b5005bb4786d66d399a45dc6c6c6b197f18ca502)
- docs: add CLI flags [`62b397b`](https://github.com/henriquehbr/eswatch/commit/62b397b917fd2c07d0ece7bc6bfd409849cbffde)

#### [v0.3.0](https://github.com/henriquehbr/eswatch/compare/v0.2.0...v0.3.0)

> 13 October 2020

- feat: allow custom commands on --run flag [`515c15e`](https://github.com/henriquehbr/eswatch/commit/515c15e2e298b09ec8066df2687a31e45291292f)
- chore: replace local eswatch by npm hosted version [`8b03c8d`](https://github.com/henriquehbr/eswatch/commit/8b03c8d247fd521a6da95f76f5d9686cb1dc9281)
- chore: remove unnecessary console.log [`b20800c`](https://github.com/henriquehbr/eswatch/commit/b20800c17546cc7e27a41635e7c3b25a0988e0aa)

#### [v0.2.0](https://github.com/henriquehbr/eswatch/compare/v0.1.1...v0.2.0)

> 10 October 2020

- chore: remove rollup [`1b252e8`](https://github.com/henriquehbr/eswatch/commit/1b252e83e4173974c5fae62f68f4b44646633736)
- feat: add `--outdir` and `--run` flags [`2469cbb`](https://github.com/henriquehbr/eswatch/commit/2469cbb00e083d00d333b5c4803dbde440a29e94)
- fix: add shebang [`8f76cb8`](https://github.com/henriquehbr/eswatch/commit/8f76cb8848f6906e39c62e769710d878c57c42ad)

#### v0.1.1

> 8 October 2020

- Initial commit [`26588c8`](https://github.com/henriquehbr/eswatch/commit/26588c880720ca15eed52f6ab2d08aa6fe818548)
- chore: upload files [`3610f5d`](https://github.com/henriquehbr/eswatch/commit/3610f5d2e18407e779e62e6a8c4e670d61919844)
- fix: set `esbuild` and `chokidar` as dependencies [`e4eda24`](https://github.com/henriquehbr/eswatch/commit/e4eda244b564da97edc047dc1a7afacddee4815f)
- chore: rename from esbuild-watch to eswatch [`1f77e0a`](https://github.com/henriquehbr/eswatch/commit/1f77e0a77ec3ac1c708912634b3c69b6fbc971f9)
- chore: add "bin" field to package.json [`97e8ff4`](https://github.com/henriquehbr/eswatch/commit/97e8ff40e9bba4ef677043fc9da6b4998162886a)
