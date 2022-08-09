#!/bin/bash

curl "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=nxc_&api_key=$LASTFMKEY&format=json&period=7day" > data/lastfm.json