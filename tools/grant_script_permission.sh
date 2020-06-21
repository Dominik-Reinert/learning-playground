#!/bin/bash

BUILD_SCRIPTS='../cv/scripts/copy_font_awesome.js';
INSTALL_SCRIPTS='./*.sh'

echo 'giving all scripts executable (+x) permission';

for f in $BUILD_SCRIPTS 
do
    echo "Granting permission to build script $f";
    chmod +x $f;
done


for f in $INSTALL_SCRIPTS 
do
    echo "Granting permission to install script $f";
    chmod +x $f;
done