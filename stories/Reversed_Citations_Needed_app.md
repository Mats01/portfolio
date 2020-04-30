# Reversed Citations Needed app
**links:**

- Check out the app [here](https://rcn.farmoredifferent.com/).
- [Github repo](https://github.com/Mats01/reversedCitationsNeeded)

This is the story of how I built my first progressive web app and how I learned what a PWA even is. But it’s also an encouragement for you to try to build something. Even if it’s just to show off a concept. The ***Reversed Citations Needed*** PWA is a great example of how duct-taping together different APIs can give a simple, everything-runs-in-the-browser app a whole lot of functionality. 

But first…

## A few words about the game:

I’ve built this app as a tool to help me and my friends play a game created by Tom Scott called “***Two of these people are lying”*** (link: [https://www.youtube.com/watch?v=um7Nfjac5To](https://www.youtube.com/watch?v=um7Nfjac5To)). 
This game requires a minimum of 3 players (with a slight modification from Tom’s version which needs 4). 

Each round one player gets chosen to be the *Czar* while all of the other players find a **random Wikipedia article**. The *Czar* then picks a random article from the list of titles, and reads the title out loud. Then all players take turns explaining what the article is about. Obviously only one of them has read that article so the others have to make something up (hence “N of these people are lying” (Where N is the number of people that are lying)).
The challenge is guessing which player is telling the truth. 

I decided to make the app to prevent us form telling which player submitted the article from their handwriting.  Thus, the main functionality of the app is picking one random article from the list of submitted articles (basically just pulling names out of a hat). 


## The APIs

The interesting part of this app, however, is not in the drawing names from a hat, of course. What’s interesting is the ability of the app to add *semi-random* article to the draw. This made the game quite a bit more interesting for now everyone could be laying. 

Finding a truly ***random*** article which feels radnom, however, turned out to be a way bigger task than everything else in the project put together. 

First I need to get a random Wikipedia article.

![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586717711623_image.png)

    $.ajax({
        type: "GET", url: "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content",
        contentType: "application/json; charset=utf-8", async: false, dataType: "json",
        success: function (data, textStatus, jqXHR) {
          let pages = data.query.pages;
          let firstKey = Object.keys(pages)[0];
          let title = pages[firstKey].title;
          checkTitle(title, 0, pages[firstKey]); // STEP 2
        },
        error: function (errorMessage) {}
    });

To do this I simply requested a random article title from Wikipedia through their easy to use API.

But I couldn’t just put in any random article. As it turns out, guessing what a Wikipedia article is about from it’s title is usually way to easy. So I had to validate the *randomness* of the article somehow. 

**In order to avoid this becoming another humongous task within my already bigger-than-expected project,**  I settled on only accepting articles which:

- have one or two words in the title,
- do not have English words in the title. 

The first condition was easy enough, but the second one turned out to be a bit tricky.

*note: It’s unexpectedly hard to find a free dictionary tool with an API I could use. After a lot of mostly pointless Googling it hit me the answer was in front of me the whole time, and I ended up using* [*wiktionary.org*](https://www.wiktionary.org/) *which, much like Wikipedia, has a great, straightforward API.*  

So my long search (and ultimate circling back) lead me to finding out that it’s possible to use [wiktionary.org](https://www.wiktionary.org/) to check if a word is a word (in the English language). This meant another API call was necessary:

![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586718199822_image.png)



    $.ajax({
        type: "GET", url: `https://en.wiktionary.org/w/api.php?action=query&titles=${word}&callback=?&_=1561564990200&format=json`,
        contentType: "application/json; charset=utf-8", async: false, dataType: "json",
        success: function (data, textStatus, jqXHR) {
          let pages = data.query.pages;
          let firstKey = Object.keys(pages)[0]; // wiktionary will return -1 here if
                                                // you've sent it a non-English word
          callback(firstKey); 
        },
        error: function (errorMessage) {}
    });

Here I simply send a word to Wiktionary and look for its “pages” score. If the word isn’t in the English language it’ll get a score of `-1` . 

Having checked all the (up to 2) words in the title against the English *wiktionary,* I can finally add this new title to the draw, **and I’m done.** 


## Part 2: Wiki randomizer

An unexpected problem we’ve found while playing this game is realizing just how many Wikipedia articles’ content can be extrapolated from the title. We would often spend over 5 minutes just tapping on the “Random article” button on Wikipedia and immediately rejecting the result. 

What we needed was a **more random** “Random article” button. Luckily, I already had a way to find a *more random* Wikipedia article (Remember the section from before?). So this is where the **Wiki randomizer** comes in. It’s a separate screen in the app where you can press a nice big **Find article** button and get an article which (hopefully) doesn’t have a revealing title. 

Here is the snippet of code which does the title validation (also used when adding an article to the draw):


    function checkTitle(title, position, article) {
      let words = title.split(" ");
      if (words.length > 2 || title.includes("(")) {
        getRandomTitle();
        return;
      }
      ajaxWiktionary(words[position], val => {
        if (val == -1) { // val is waht is given to the callback function
          // -1 means there are no known usages of this word ==> 
          // we assume it's not a word english speakers recognize
          if (position == words.length - 1) { // have I checked each word?
            returnArticle(title, article);
          } else {
            checkTitle(title, position + 1);
          }
        } else {
          getRandomTitle();
          return;
        }
      })
    }

And here’s an example of articles the app went through and rejected before choosing “*Pachysphinx"* (a genus of moths in the family *Sphingidae*.)

![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586720038492_image.png)


At this point the article title is declared valid, but even though that’s all I had to do in the article picker, for the randomizer the job is not done. 

It is actually not all that easy to get the contents of a Wikipedia article. Here I’ve kept the 2 API calls from above but had to add a third one at the end to actually get the article summary to display in the app.


![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586718481096_image.png)


The parser for this turned out to be really long, but thankfully I found an example script online so I only needed to choose what data I needed and the article magically appeared. 


## Takeaway 

All in all I made this app in a week. The idea of making it a PWA came to me only later, and I went from having no idea how PWAs work to having a working PWA in a day. The point I’m trying to get to you is that you should try this yourself. 

Almost everyone has a good app idea on the back burner, waiting for better days. Maybe you just have a cool concept in mind, but you are not sure if it would work, or if people wold be interested. Maybe you just need a fun little app to replace pen and paper when you are playing a game with your fiends. In any of these cases, it’s a great idea to make a quick PWA.
It will:

- look like a real app on peoples phones
- it’s stupid fast to develop
- it’s basically free to run (great for making a concept to show to clients)
    - coming soon … an article on how to host your simple app ideas for free
- you’ll have loads of fun

In conclusion, every time I have an app idea these days, instead of waiting to have the time to start a proper project, I quickly throw together a PWA and start getting feedback (or the tool that I need) almost right away. If you have a simple fun idea you’ve wanted to try for a long time, why not trying to make it into a PWA; all it will really take is a weekend of free time… what have you got to loose?

**Read more:**
I am working on a follow up article focused on PWAs, going into the details of how to make your webapps progressive quickly and pain-free. Follow me on Twitter [@matej_butkovic](https://twitter.com/matej_butkovic) to get notified when I post a new article. DMs are welcome :)

