#!/bin/bash

echo "Removing gpg and add gnupg1 to be able to work on WSL"
sudo apt remove gpg
echo "add gnupg1 to be able to work on WSL"
sudo apt install gnupg1