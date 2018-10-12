#!/bin/bash
curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.3.2
export PATH="$HOME/.yarn/bin:$PATH"
yarn run init
yarn run build

UPLOADER="https://github.com/bufferapp/buffer-static-upload/releases/download/0.1.0/buffer-static-upload-`uname -s`"
curl -L $UPLOADER > ./buffer-static-upload
chmod +x ./buffer-static-upload

FILES="bundle.js,rpcWorker.js"
./buffer-static-upload -files "$FILES" -dir analyze
