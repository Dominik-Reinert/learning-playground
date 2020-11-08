#!/usr/bin/env node

const {  spawn, spawnSync } = require("child_process")
const fs = require('fs');

(function start(){
    const scriptsDist = 'scripts/dist' 
    fs.rmdirSync(scriptsDist, {recursive: true})
    const com = spawn('tsc', ['--build', 'scripts/tsconfig.json']);
    com.stdout.on('data', function(data){
        console.log(data.toString());
    })
    com.stderr.on("data", function (data) {
      console.error(data.toString());
    });
    com.on('close', () => {
        console.log(`ts compiler finished`)
        fs.readdirSync(scriptsDist).forEach(file => {
            const filePath = `scripts/dist/${file}`
            console.log(`granting permission to: ${filePath}`);
            fs.chmodSync(filePath, 999)
        })
    })
})()