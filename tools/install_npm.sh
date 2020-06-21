#!/bin/bash

echo 'run apt-install'
sudo apt-install npm

echo 'make sure to prevent EACCESS errors from npm install'
echo 'create npm-global (config file)'
mkdir ~/.npm-global

echo 'set prefix for config file'
npm config set prefix '~/.npm-global'

echo 'add config file to path variable'
export PATH=~/.npm-global/bin:$PATH

echo 'add ./profile as source'
source ~/.profile