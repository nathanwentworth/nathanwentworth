#!/bin/bash

curl -S "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=nxc_&api_key=d2fa5ba320d624fce88a726931cd4dbc&format=json&period=7day" > data/lastfm.json
jekyll build
rsync -zr --exclude='/.git' --filter="dir-merge,- .gitignore" _site/ nw:/var/www/nathanwentworth.co/html/
