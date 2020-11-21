#!/usr/bin/env node
import{a}from"./chunk.FU2CJQ5F.js";const t=a(),o=async()=>{if(t.version){const{displayVersion:i}=await import("./displayVersion.js");return i()}const{watchAndBuild:n}=await import("./watchAndBuild.js");t.watch?(await import("chokidar")).watch(t.watch).on("ready",async()=>n()).on("change",async()=>n()):n()};o();
