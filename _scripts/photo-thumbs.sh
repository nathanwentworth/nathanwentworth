#!/bin/bash

exiftool -r -d '%Y-%m-%d-%Hh%Mm%S' '-filename<${DateTimeOriginal}%+c.%le' .
mogrify -resize x500\> -path ./sm *.jpeg
mogrify -resize x500\> -path ./sm *.jpg