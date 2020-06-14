#!/bin/bash

echo "Run this script to install all the deps needed";

echo "Removing gpg and add gnupg1 to be able to work on WSL"
sudo apt remove gpg
echo "add gnupg1 to be able to work on WSL"
sudo apt install gnupg1

echo "Install yarn";
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn

echo "Install npm"
sudo apt-install npm



echo "~~~ done! ~~~"