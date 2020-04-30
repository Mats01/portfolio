# Reversed Citations Needed app
An example of duct-taping together different APIs to give your simple runs-in-the-browser app a world of functionality. 


https://github.com/Mats01/reversedCitationsNeeded


My first progressive web app.

I’ve built this app as a tool to help me and my friends play a game created by Tom Scott (cred: https://www.youtube.com/watch?v=um7Nfjac5To). 


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


## The APIs

[step-by-step explanation] 


## Wiki randomizer

An unpredictable problem we’ve found while playing this game is realizing just how many Wikipedia articles’ content can be extrapolated from the title. We often ended up spending upwards of 5 minutes just tapping on the “Random article” button on Wikipedia and immediately rejecting the result. What we needed was a **more random** “Random article” button. So this is where the **Wiki randomizer** comes in. 


1. find a title with 2 words 
2. if you can’t find either of those words in the dictionary you can assume it can’t be easily guessed from the title

It’s unexpectedly hard to find a free dictionary tool with an API I could use for this app. After a lot of mostly pointless Googling it hit me the answer was in front of me the whole time, and I ended up using [wiktionary.org](https://www.wiktionary.org/) which much like Wikipedia has a great, straightforward API.  


## And finally: The article picker

The main functionality of the app is picking one random article from the list of submitted articles. I have find this necessary to be done through the app because otherwise you could tell which player submitted the article from their handwriting. 

“Add random article” feature. This makes the game harder, but this is also what makes it possible to play with only 3 players. It uses the same script as the wiki randomizer to get an article title, and it just silently puts in the list along with all the player-submitted articles.



## Read more:

[companion article; it’s not necessary to bore people with citations needed if they only want to read about PWA]
[+Making a progressive web app](https://paper.dropbox.com/doc/Making-a-progressive-web-app-nL1pZfZIIKLRxUOS1Kf2a) ****

