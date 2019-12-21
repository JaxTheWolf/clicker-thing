#!/bin/bash
cd ../src

node-minify --compressor csso --input css/light.css --output ../dist/css/light.css
node-minify --compressor csso --input css/dark.css --output ../dist/css/dark.css

node-minify --compressor google-closure-compiler --input js/script.js --output ../dist/js/script.js

node-minify --compressor html-minifier --input index.html --output ../dist/index.html