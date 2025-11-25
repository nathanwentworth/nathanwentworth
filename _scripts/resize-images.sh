#!/bin/bash

mkdir -p ../small
mogrify -resize 1200x1200\> -path ../small *.jpeg
mogrify -resize 1200x1200\> -path ../small *.jpg

mkdir -p ../large
mogrify -resize 1920x1920\> -path ../large *.jpeg
mogrify -resize 1920x1920\> -path ../large *.jpg
