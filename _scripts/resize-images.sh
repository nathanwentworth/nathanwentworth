#!/bin/bash

mkdir -p ../small
mogrify -resize 1200x1200\> -path ../small *.*

mkdir -p ../large
mogrify -resize 1920x1920\> -path ../large *.*
