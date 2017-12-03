---
title: "Twitter Origifier"
type: [web]
tags: [JavaScript]
---
Browser extension to automatically add `:orig` to the end of twitter images. Download for [Chrome](https://chrome.google.com/webstore/detail/twitter-origifier/lcbhlbbekpaklnhgfcccpdplhegpjkjk) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/twitter-origifier/)

This extension is super small, just six lines of code. In fact, here's the entire extension!

    (function() {
      var u = window.location.href;
      var suff = u.search(/:\w+/ig);
      var base = (suff > -1) ? u.substring(0, suff) : u;
      if (!u.includes(":orig")) { window.location.replace(base + ":orig"); }
    })();
