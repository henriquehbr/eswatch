var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __exportStar = (target, module2, desc) => {
  __markAsModule(target);
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
};

// node_modules/slash/index.js
var require_slash = __commonJS((exports, module2) => {
  "use strict";
  module2.exports = (path7) => {
    const isExtendedLengthPath = /^\\\\\?\\/.test(path7);
    const hasNonAscii = /[^\u0000-\u0080]+/.test(path7);
    if (isExtendedLengthPath || hasNonAscii) {
      return path7;
    }
    return path7.replace(/\\/g, "/");
  };
});

// src/helpers/fileExists.ts
import {existsSync} from "fs";
var fileExists = async (path7) => {
  try {
    return await new Promise((resolve, reject) => existsSync(path7) ? resolve(path7) : reject(`Couldn't find ${path7} entry point`));
  } catch (error) {
    throw new Error(error);
  }
};
var fileExists_default = fileExists;

// src/helpers/runCommand.ts
import path2 from "path";
import {spawn} from "child_process";
var isIndexFile = (file) => {
  const filename = path2.parse(file).name;
  return filename === "index";
};
var getScriptWithExtension = (file, options) => {
  const filename = path2.parse(file).name;
  const extension = options.outext || ".js";
  const filenameWithExtension = filename + extension;
  const filePath = path2.resolve(options.outdir, filenameWithExtension);
  return filePath;
};
var getScriptToBeRan = (entryPoints, options) => {
  const indexFile = entryPoints.find(isIndexFile);
  const scriptToBeRan = !indexFile ? entryPoints[0] : indexFile;
  return getScriptWithExtension(scriptToBeRan, options);
};
var getCommandToBeRan = (entryPoints, options) => {
  if (typeof options.run === "string") {
    return options.run;
  } else {
    const scriptToRun = getScriptToBeRan(entryPoints, options);
    return "node " + scriptToRun;
  }
};
var runCommand = (entryPoints, options) => {
  const commandToRun = getCommandToBeRan(entryPoints, options);
  const [commandName] = commandToRun.split(" ");
  const commandParameters = commandToRun.split(" ").slice(1);
  const childProcess = spawn(commandName, commandParameters, {stdio: "inherit"});
  return childProcess;
};
var runCommand_default = runCommand;

// src/helpers/globParser.ts
var slash = __toModule(require_slash());
import path4 from "path";
import glob from "tiny-glob";
var globParser = async (globPattern) => {
  const normalizedPath = path4.normalize(globPattern);
  const forwardSlashedPath = slash.default(normalizedPath);
  const globFiles = await glob(forwardSlashedPath);
  const forwardSlashedGlobFiles = globFiles.map(slash.default);
  return forwardSlashedGlobFiles;
};
var globParser_default = globParser;

// src/helpers/parseOptions.ts
import path6 from "path";
import {fileURLToPath} from "url";
import {builtinModules} from "module";
var dirname = path6.dirname(fileURLToPath(import.meta.url));
var parseOptions = async (options) => {
  const outExtension = options.outext ? {".js": options.outext} : {".js": ".js"};
  const outdirPaths = [options.outdir || [dirname, "build"]].flat();
  const outdir = path6.resolve(...outdirPaths);
  const external = [...builtinModules];
  if (!options.standalone) {
    const {getDependencies: getDependencies2} = await import("./helpers/index.js");
    external.push(...await getDependencies2());
  }
  options.external && external.push(...options.external);
  return {outExtension, outdir, external};
};
var parseOptions_default = parseOptions;

// src/helpers/validateEntryPoints.ts
import isGlob from "is-glob";
var parseGlob = async (entryPoint) => isGlob(entryPoint) ? await globParser_default(entryPoint) : await fileExists_default(entryPoint);
var validateEntryPoints = async (entryPoints) => {
  const parseGlobEntries = entryPoints.map(parseGlob);
  const parsedEntryPoints = await Promise.all(parseGlobEntries);
  const flattenedEntryPoints = parsedEntryPoints.flat();
  return flattenedEntryPoints;
};
var validateEntryPoints_default = validateEntryPoints;

// src/helpers/getDependencies.ts
import {readFileSync} from "fs";
import findUp from "find-up";
var getDependencies = async () => {
  const packageJsonPath = await findUp("package.json");
  if (packageJsonPath) {
    const packageJsonString = readFileSync(packageJsonPath, {encoding: "utf-8"});
    const packageJson = JSON.parse(packageJsonString);
    const dependencies = Object.keys(packageJson.dependencies);
    const devDependencies = Object.keys(packageJson.devDependencies);
    return [...dependencies, ...devDependencies];
  }
  return [];
};

// src/helpers/getEsbuildConfig.ts
var getEsbuildConfig = async (entryPoints, options) => {
  const validatedEntryPoints = await validateEntryPoints_default(entryPoints);
  const {external, outExtension, outdir} = await parseOptions_default(options);
  return {
    outdir,
    outExtension,
    entryPoints: validatedEntryPoints,
    bundle: options.bundle,
    format: options.format,
    incremental: options.incremental,
    minify: options.minify,
    platform: options.platform,
    ...options.bundle && {external, splitting: options.splitting}
  };
};

export {
  getEsbuildConfig,
  getDependencies,
  fileExists_default,
  globParser_default,
  validateEntryPoints_default,
  parseOptions_default,
  runCommand_default
};
