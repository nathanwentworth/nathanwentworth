---
title: "How to Have a Better Experience on Twitter"
date: 2023-09-08
---

Everyone's favorite birdsite. Some of this is meaningless now, but keeping it around for archival purposes. I would love to just be like "ohh go to mastodon!" "make a blog!" etc, and while i DO think those are things people should do, I fully understand that not everyone has moved to other platforms or will ever, so having ways to access it being more pleasant are essential imo~

## Step One: Quick and Easy Solutions to Bigger Problems

One of the easiest and best ways to improve the twitter experience is removing any and all algorithmic posts from your feed. Since it focuses on engagement, you're gonna see a lot of dumb, low-hanging fruit style takes and anything that warrants a lot of replies (often not good)!

### Browser Extensions

**[Tweak New Twitter](https://github.com/insin/tweak-new-twitter)** is an extension for default web twitter that does exactly that, along with a good amount of other engagement and annoyance-reducing features.

Settings I recommend!

- Always use chronological timeline
- Hide "What's Happening", "Topics to follow" in the sidebar
- Hide "Who to follow", "follow some topics" in the timeline
- Hide "more tweets" when linked to a tweet
- Hide tweets quoting accounts you've blocked or muted
- Hide explore

This will clean up most algorithmic things on the site, only showing you who you follow and hiding the rest. I believe by default it will move retweets into a separate timeline, which you may want to disable if you don't want that feature.

Additionally, while I don't use it anymore, [Twitter Demetricator](https://bengrosser.com/projects/twitter-demetricator/) can be nice to add. It hides metrics such as like and follow counts, further reducing the desire of "number go up" or adding additional value to a tweet based on the numbers.

Another one I love, [Old Twitter](https://github.com/dimdenGD/OldTwitter) will revert the twitter UI to being how it was in 2015. Truly a better era.

### Tweetdeck + BetterTweetDeck

I personally use tweetdeck most of the time for twitter, since I have two accounts and it makes managing them both at the same time much easier. Not only that, but by default it doesn't have ads or algorithmic timelines. However, it's nice to get some additional improvements!

It's pretty complicated to get Tweetdeck working in 2023, and it might not even be possible in the future, but for now [dimdenGD made a firefox extension](https://github.com/dimdenGD/OldTweetDeck) that will allow you to access it again

[BetterTweetDeck](https://github.com/eramdam/BetterTweetDeck/) adds lots of extra features and tweaks that make for a generally better experience. The preserving media aspect ratio is my favorite, since I follow a lot of artists (no bad crops!).

### Third-party apps (as of 2023, can be ignored as none of these work)

On my phone, I use and highly recommend [Tweetbot](https://tapbots.com/tweetbot/). While twitter themselves severely reduce features available through their API, and therefore limit what is available on third-party apps, most day-to-day features are available on Tweetbot. No ads, chronological timeline, great themes, and many other features make it one of the best twitter experiences out there.

The main missing features are group DMs and native poll support, so I have the official app installed but buried in a folder just for notifications of group DMs.

I don't use android, but I've heard good things about Fenix and Talon

### Notifications

Turn them off!!! Trust me, you don't need them. Leave on replies and direct messages since those can warrant a time-sensitive response, but you don't need notifications for likes, retweets, photo tags, "suggested tweets", or anything else twitter tries to use to keep you engaged. If there's no reason for you to immediately do something to that notification, then you should turn it off.

## Step Two: Higher Effort, Less Reward, Still Important!

Honestly, with the above steps, you should already have an infinitely better twitter experience. Though, there's always room for improvement, especially if you're like me and use twitter too much. Now for the things that take a lot more effort, but will overall result in a much better twitter experience!

### Following Audit

1. [set up a new list](https://twitter.com/i/lists/create)
2. Make it private
3. Completely from memory, add the users that you remember really enjoying reading the tweets of. Not the ones that you feel obligated to follow or feel are "important", but truly the ones where you always think that they have good tweets.
4. If you're using tweetbot, set that list as the default timeline (tap where it says "Timeline" and switch to the list). If in tweetdeck, add the list as a column and remove your home column. If in web twitter, just go to the list itself and try not looking at the home timeline.
5. Use just this list for a while, and if you find yourself missing a specific person, add them to the list! But try to keep the list to less than 80 users.

Once you've only used this list for a while, go through your following list and unfollow some people. Anyone who you absolutely didn't miss the posts of, or anyone that you feel may have made your experience worse. The eventual goal here is to whittle down your main follows, either unfollowing or muting anyone who's left not added to the list.

Another important aspect, once it's reduced a bit, is to turn off retweets from certain people. This one will apply to some more than others, but some people have okay tweets but either retweet too much, or retweet things that are mostly negative. So going into their profile and turning off retweets is essential for people like that (though keep in mind that this function doesn't work in lists, so this will mainly apply when you've lowered your actual following count).

If you really want to be able to turn off retweets in a list, I recommend just making a second throwaway account that exists purely to act like a list. A downside of this is that you can't invisibly follow people like you can with a list, though it *does* mean that you'll still retain access to their tweets if they switch to a private account. In tweetdeck, tweetbot, and the default mobile twitter app you can set up multiple accounts pretty easily, so it isn't too much more work to using it than using a list!

I personally recommend following no more than 250 people. For example, I follow 240 and when I wake up in the morning there's been around ~80 tweets since I fell asleep, and there's often 30+ minute gaps between tweets in my timeline, which are all healthy amounts! A constant stream of information will just cause your feed to be overwhelming and distracting.

### Division of topics using lists and alt-accounts

One of the biggest issues I see with the way twitter works is the collapse of many different topics into one feed. For example, you have posts about the news next to posts about new music next to art next to hot video game takes. It can be exhausting and jarring reading these things in such an unorganized order, and that's where lists and alt-accounts come in.

If, for example, you want to keep up with news posts, don't put them in your main feed. Make a new list on your account and read that instead. If you want to exclude retweets from a list, make a new search using the list ID. When you open a list in the website, the url will be something like `https://twitter.com/i/lists/14633396`. Use the number at the end in your search, using the pattern `list:14633396` to show that list without retweets. You can use filters like `filter:links` to only show tweets with links, `exclude:replies` to not show any replies, `include:nativeretweets` if you *do* want to see retweets in a search, or any combination of those! There's more that can be found in the advanced search panel or by googling around for them.

This one is highly specialized to me, but I'm mentioning it as an example of how I use and enjoy twitter. I have two accounts, my main that I use to follow people generally, and a second one that I only use to follow artists that I like. This second account is set up as a column in tweetdeck that only shows tweets with images and I've disabled retweets on a lot of accounts that I follow. This turns this column into a feed of nice art from artists I like (and artists they like, with retweets). And then since I use a second account, the likes on that account are just my favorites of my favorites, and create a nice feed to scroll through! Also that way, instead of the context collapse of twitter where you have art next to takes next to news, things are separated out and I can more easily choose what to look at. It's honestly great! It turns twitter into what I often use Tumblr for, a nice feed of good art.

This no longer works, even in old tweetdeck, sadly. ~~In addition, I have a search column in tweetdeck using the query `"melonbooks.co.jp" OR "booth.pm" OR "alice-books.com" OR "base.shop" OR "inprnt.com" list:[list id] include:nativeretweets`. This will show me any new links from artists I follow for new art books or prints on common art stores. Super helpful since many artists don't use things like mailing lists and the tweets can get lost in the feed. You can't normally search the following list of a user, so I use the service [vicariously.io](https://vicariously.io/) which will auto-generate lists based on the following list of a user.~~

### Mute, Block, Soft-block

See someone's tweets show up a lot that you don't like? Don't want to see those tweets anymore? Mute and/or block them! It's that easy! You are under no obligation to keep up with whatever they're saying, except for rare circumstances there's no real reason to force yourself to read the tweets of someone that you don't care for. Whenever I look at a tweet and I see someone saying something dumb or posting something clearly in bad faith, I often just block them on sight. Sure, chances are I'll never see them again regardless, but life is too short to expend energy getting mad at someone on the internet.

Additionally, if someone followed you that you don't really want following you, soft-blocking is always good. Soft-blocking is when you block and unblock someone who is following you, as it will then make them unfollow you without any notification of that to them. A caveat to blocking/muting, by default twitter won't hide quote replies of that account, you'll need to enable the option "Hide tweets quoting accounts you've blocked or muted" in Tweak New Twitter, mentioned above!
