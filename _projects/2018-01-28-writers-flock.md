---
title: "Writer's Flock"
tags: [HTML, CSS, JavaScript, code, game]
archive: true
links:
  repo: https://github.com/TheConBot/Writers-Flock
---
A local-multiplayer party/cooperative writing game in which all players try to write the best story, all based on other players' sentences. Made in two days for Global Game Jam 2018.

I wrote the client, a web page with JS scripts for communicating with the server. The Unity game ([made by Connor Botts](http://connor.games)) starts a local server and displays an IP address, so anyone on the same network can connect via their client devices. The client and server communicate with each other using websockets.