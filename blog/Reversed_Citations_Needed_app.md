# Reversed Citations Needed app
**!!! this article is a work in progress, published for testing .. if you are reading this  … vjv se znamo, daj neki feedback**

An example of duct-taping together different APIs to give your simple runs-in-the-browser app a world of functionality. 

it took 7 days = a week to make the app, and 1 day make it progressive.

[https://github.com/Mats01/
reversedCitationsNeeded](https://github.com/Mats01/reversedCitationsNeeded)

My first progressive web app.

I’ve built this app as a tool to help me and my friends play a game created by Tom Scott called “***Two of these people are lying”*** (cred: [https://www.youtube.com/watch?v=um7Nfjac5To](https://www.youtube.com/watch?v=um7Nfjac5To)). 


## A few words about the game:

This game requires a minimum of 3 players (with a slight modification from Tom’s version which needs at 4 players). 

One player gets chosen to be the Czar each round.

All other players find a random Wikipedia article. To more quickly find something that really feels random I have created a filter. More on this in wiki randomizer.

The Czar picks (though the app) a random article from the list of titles, and reads the title out loud. 

Then all players take turns explaining what the article is about. Obviously only one of them has read that article so the others have to make something up.

It’s the Czar’s job to guess which player is telling the truth. 

**points:**
1 point to the Czar if they guess correctly + 1 point to the player who submitted the article
1 point the to the player who the Czar picked if they guess incorrectly


## The article picker

The main functionality of the app is picking one random article from the list of submitted articles (basically just pulling names out of a hat). I decided to make the app to prevent us form telling which player submitted the article from their handwriting. 

~~“Add random article” feature. This makes the game harder, but this is also what makes it possible to play with only 3 players. It uses the same script as the wiki randomizer to get an article title, and it just silently puts in the list along with all the player-submitted articles.~~


## The APIs

The interesting part of this app however is not in the drawing names from a hat, of course. What’s interesting is the part when I decided to add the ability to add a computer-chosen article to the draw, to make the game harder. Now, everyone could be laying. 

Finding a truly random article, however, turned out to be a way bigger task than everything else in the project put together. 

First I need to get a random Wikipedia article

![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586717711623_image.png)


For this I simply requested a random article title from Wikipedia through their easy to use API.


    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=random&grnnamespace=0&prop=revisions|images&rvprop=content",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          let pages = data.query.pages;
          let firstKey = Object.keys(pages)[0];
          let title = pages[firstKey].title;
          console.log(title);
          checkTitle(title, 0, pages[firstKey]); // STEP 2
        },
        error: function (errorMessage) {}
      });

But I couldn’t just put in any article, for example guessing what [exaple] is about would be simply too easy. So I had to validate the *randomness* of the article somehow. 

In order to avoid this becoming another humongous task within my already bigger-than-thought project,  I settled on only accepting articles with one or two words in the title, where none of those are English words. The first condition was easy enough, but the second one turned out to be a bit tricky. 

After some searching I found that you can use [wiktionary.org](https://www.wiktionary.org/) to check if a word is a word in the English language. This meant another API call was necessary:

![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586718199822_image.png)


Here I simply send a word to Wiktionary and look for its “pages” score. If the word isn’t in the English language it’ll get a score of `-1` . 


    $.ajax({
        type: "GET",
        url: `https://en.wiktionary.org/w/api.php?action=query&titles=${word}&callback=?&_=1561564990200&format=json`,
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          let pages = data.query.pages;
          let firstKey = Object.keys(pages)[0]; // wiktionary will return -1 here if
                                                // you've sent it a non-English word
          callback(firstKey); 
        },
        error: function (errorMessage) {}
    });

Now I can add this new title to the draw, and I’m done. 


## Wiki randomizer

An unexpected problem we’ve found while playing this game is realizing just how many Wikipedia articles’ content can be extrapolated from the title. We often ended up spending upwards of 5 minutes just tapping on the “Random article” button on Wikipedia and immediately rejecting the result. What we needed was a **more random** “Random article” button. Luckily, I already had a way to find a *more random* Wikipedia article. So this is where the **Wiki randomizer** comes in. 


1. find a title with 2 words 
2. if you can’t find either of those words in the dictionary you can assume it can’t be easily guessed from the title

It’s unexpectedly hard to find a free dictionary tool with an API I could use for this app. After a lot of mostly pointless Googling it hit me the answer was in front of me the whole time, and I ended up using [wiktionary.org](https://www.wiktionary.org/) which much like Wikipedia has a great, straightforward API.  

more details about how I decide weather to keep a title


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


![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586720038492_image.png)


An example of articles the app went through and rejected before choosing “*Pachysphinx"* (a genus of moths in the family Sphingidae.)

Finally the article and summary get displayed in the app.

It is actually not all that easy to get the contents of a Wikipedia article. Here I’ve kept the 2 API calls from above but had to add a third one at the end to actually get the article summary to display in the app.


![](https://paper-attachments.dropbox.com/s_9AFFCDB7F11EB0D1B484970358A2284AA01ED282551D208D7F98794C09734540_1586718481096_image.png)


The parser for this turned out to be really long, but thankfully it was available online so I only needed to choose what date a needed. 


## takeaway 

[When you have an idea for an app a great place to start might be to think if it can be achieved though apis… even if this is only for the concept-phase.. you'll get your app ready in record time, have fun doing it and it'll be very cheap to upkeep.]



## Read more:

[companion article; it’s not necessary to bore people with citations needed if they only want to read about PWA]
[+Making a progressive web app](https://paper.dropbox.com/doc/Making-a-progressive-web-app-nL1pZfZIIKLRxUOS1Kf2a) ****

