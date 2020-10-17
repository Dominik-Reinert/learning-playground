#!/usr/bin/env node

const {  spawn, spawnSync } = require("child_process")
const fs = require('fs');

(function start(){
    const com = spawn('tsc', ['--build', 'scripts/tsconfig.json']);
    com.stdout.on('data', function(data){
        console.log(data.toString());
    })
    com.stderr.on("data", function (data) {
      console.error(data.toString());
    });
    fs.readdirSync('scripts/dist').forEach(file => {
        spawn('chmod', ['+x', `scripts/dist/${file}`]);
    })
})()