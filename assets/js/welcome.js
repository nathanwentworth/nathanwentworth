(function() {
    if (!window.console) { return; }

    var i = 0;

    if (!i) {
        setTimeout(function () {
            console.log("%cWelcome!", "font: 3em sans-serif; color: green; font-weight: bold; font-style: italic;");
            console.log("%cHello, and welcome to the console. If this is your first time here, make yourself at home. (If not, disregard this message!)", "font: 1.5em sans-serif;");
            console.log("%cWhat you can find down here is what lies underneath the web: its code. You can read, write, rewrite, and manipulate this code to make the web your own.", "font: 1.5em sans-serif;");
            console.log("%cYou can find out more about using the console from these sites:", "font: 1.25 sans-serif;");
            console.log("%c - Firefox: https://developer.mozilla.org/en-US/docs/Tools/Web_Console", "font: 1.25 sans-serif;");
            console.log("%c - Chrome: https://developers.google.com/web/tools/chrome-devtools/console/", "font: 1.25 sans-serif;");
            console.log("%c - Safari: https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html", "font: 1.25 sans-serif;");
            console.log("%c - Or just use any search engine to look up 'developer console'", "font: 1.25 sans-serif;");
            console.log("%cFor help with learning to code, try https://www.codecademy.com/", "font: 1.25 sans-serif;");
            console.log("%c[ This text generated by https://github.com/stml/welcomejs ]", "font: 1 sans-serif;");
            console.log("%cWant to know what tech this site uses? Check out the source on https://github.com/nathanwentworth/nathanwentworth", "font: 1 sans-serif;");
        }, 1);
        i = 1;
    }

})();
