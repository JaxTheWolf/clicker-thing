#!/bin/bash
cd ../src

node-minify --compressor csso --input public/light.css --output ../dist/public/light.css
node-minify --compressor csso --input public/dark.css --output ../dist/public/dark.css

node-minify --compressor html-minifier --input index.html --output ../dist/index.html
node-minify --compressor html-minifier --input google74b9fdef1bfecd20.html --output ../dist/google74b9fdef1bfecd20.html

node-minify --compressor google-closure-compiler --input public/script.js --output ../dist/public/script.js
