#!/bin/bash

curl -S "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=nxc_&api_key=[API_KEY_HERE]&format=json&period=7day" > /var/www/nathanwentworth.co/html/data/lastfm.json
jekyll build
rsync -zr --exclude='/.git' --filter="dir-merge,- .gitignore" _site/ nw:/var/www/nathanwentworth.co/html/
