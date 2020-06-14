#!/bin/bash

echo "Run this script to install all the deps needed";

echo "create log dir if not existant"
logDir=logs
mkdir -p $logDir

echo "Install gnupg1"
sudo chmod +x ./install_gnupg1.sh
./install_gnupg1.sh >> $logDir/install_gnupg1.log

echo "Install yarn";
sudo chmod +x ./install_yarn.sh
./install_yarn.sh >> $logDir/install_yarn.log

echo "Install npm"
sudo chmod +x ./install_npm.sh
./install_npm.sh >> $logDir/install_npm.log

echo "run yarn install"
sudo chmod +x ./yarn_install.sh
./yarn_install.sh >> $logDir/yarn_install.log

echo "run npm install"
sudo chmod +x ./npm_install.sh
./npm_install.sh >> $logDir/npm_install.log

echo "~~~ done! ~~~"