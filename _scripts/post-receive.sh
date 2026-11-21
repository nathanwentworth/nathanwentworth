#!/bin/bash -l
GIT_REPO=$HOME/git/nathanwentworth.git
TMP_GIT_CLONE=$HOME/tmp/git/nathanwentworth
PUBLIC_WWW=/var/www/nathanwentworth.co/jekyll

git clone $GIT_REPO $TMP_GIT_CLONE

#curl -S https://feeds.pinboard.in/json/u:nathanwentworth/ > /home/nathan/tmp/git/nathanwentworth/data/pinboard.json

#curl -S https://mastodon.social/users/nathanwentworth/outbox?page=true > /home/nathan/tmp/git/nathanwentworth/data/mastodon.json

curl -S "http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=nxc_&api_key=[API_KEY_HERE]&format=json&period=7day" > /home/nathan/tmp/git/nathanwentworth/data/lastfm.json

#curl -S -H "Content-Type: application/json" -X POST --data '{"query": "{MediaListCollection(userName: \"nathan\", type: ANIME, status_in: CURRENT) {lists {status,entries {media {title {romaji},coverImage {medium,color}},updatedAt}}}}"}' https://graphql.anilist.co/ > /home/nathan/tmp/git/nathanwentworth/data/anilist.json

/usr/local/bin/jekyll build -q --source $TMP_GIT_CLONE --destination $PUBLIC_WWW
rm -Rf $TMP_GIT_CLONE

exit
