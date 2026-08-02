#!/bin/bash

exiftool -r -d '%Y-%m-%d-%Hh%Mm%S' '-filename<${DateTimeOriginal}%+c.%le' .
mkdir sm
mogrify -resize x500\> -path ./sm *.jpeg
mogrify -resize x500\> -path ./sm *.jpg
mogrify -resize 2048x2048\> *.jpeg
mogrify -resize 2048x2048\> *.jpg
