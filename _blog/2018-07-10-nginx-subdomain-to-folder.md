---
title: Nginx automatic folder direction
tags: [tech, code]
excerpt: "A Nginx server block to automatically direct subdomains to certain folders."
date: 2018-07-10
---

As I'm getting more subdomains on my website ([wf](http://wf.nathanwentworth.co), [brutal](http://brutal.nathanwentworth.co)) I wanted to setup my web server to automatically handle these so I didn't need to set up each one manually every time I make a new one.

Each of my subdomains are in folders named [subdomain].nathanwentworth.co in the `/var/www/` folder, so this capture includes the full domain (I could also just name the folders [subdomain] and omit the rest of the domain name).

I couldn't find anything directly for what I wanted on the internet, so this is what I set up for myself:

    server {
      listen 80;
      # ~ tells it to treat the following as regex
      # the () is a capture group, referenced by the $1 in root
      # this specific capture group is looking for [anything].nathanwentworth.co
      server_name ~(.*\.nathanwentworth\.co);
      root /var/www/$1/html;
      index index.html;

      location / {
        try_files $uri $uri/ =404;  
      }
    }
