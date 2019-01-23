#!/bin/bash

curl -H "Content-Type: application/json" -X POST --data '{"query": "{ MediaListCollection(userName: \"nathan\", type: ANIME, status: CURRENT) { statusLists { progress, media { title { romaji }, coverImage { medium, color }}}} }"}' https://graphql.anilist.co/ > anilist.json
