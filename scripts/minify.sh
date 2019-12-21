#!/bin/bash
cd ../src

node-minify --compressor google-closure-compiler --input js/script.js --output ../docs/js/script.js
node-minify --compressor csso --input css/light.css --output ../docs/css/light.css
node-minify --compressor csso --input css/dark.css --output ../docs/css/dark.css
node-minify --compressor html-minifier --input index.html --output ../docs/index.html