# My 2015 summer project
Which turned into my high-school side project.


![](https://paper-attachments.dropbox.com/s_0CAEE56025BF946F427DA9E50C75DDC8FE7EDE66F0354135C8390C794DE71A99_1569868719077_tomato+header.jpg)


Firstly I must say that the reason I started coding my own web app at 15 was completely thanks to my cousin Marko the developer. Not only by being an inspiration of what I could achieve had I chosen the path of becoming a developer, but by actually telling me to go and make a time tracking app. *I now realize the importance of staring to learn coding early. Even just getting exposed to these complex concepts early on helps a lot later on your path to becoming a developer.* 

So, with this essential encouragement, I got started. 

However, I couldn’t get into making my very own app right away. I had to start from the begging. While it probably is possible to learn a development framework by reading the documentation and experimenting, I don’t think would be a particularly good time investment. That’s why I went with Reddit-founder Steve Huffman’s course on Udacity course on web apps. The course was for the most part focused around making a blog on the google appengine using Django. Little did I know these were just my first steps into what wold become years of working with Django, eventually even at a professional level. 

Having pedantically gone though the whole course I felt (kind of) ready to try my new skills on my very own project.


## Choosing a good project to start with

Again, thanks to the vitally helpful guidance from my cousin I focused my time tracking app around the [Pomodoro Technique.](https://francescocirillo.com/pages/pomodoro-technique) In short, the Pomodoro Technique essentialy works by making you split your work into intense focus sessions (called Pomodoros) separated by short breaks where for about 5 minutes you should let your brain wonder around, in this way giving it time to better process what you’ve been working on. This also helps you work for longer, because the breaks stop you from suddenly feeling exhausted. All this best applies to studying, as this was what the technique was developed for, making this the perfect time tracking app for me at the time (being in school and all that).

This was a particularly good choice for my first ever project because it had lots of parts but none of them very complex. It needed a backed and user authentication, but the bulk of the app was running in the front end.

So, having a great sense of what I was trying to accomplish I started planning out my app. The first thing I started thinking of was the flow of information that wold happen as the app records the Pomodoros. I then went on to define blueprints for the objects through which I would manipulate this data. The models I had came up with were:

***Users***

    - username
    - password_hash
    - email
    - joined (datetime object)


***Pomodoro***

    - duration 
    - task 
    - owner (related user object)
    - created

***Settings***

    - duration
    - shot_break
    - long_break
    - auto_start_new
    - owner (related user object)

Next I went on to define all the classes encapsulating these data structures and broadly defining the functions I had foreseen needing.

*Side note: I was actually quite surprised looking back at my documents from the time with just how thurrow of a plan I had created for the app before even properly starting. I this most of the credit for this should go to Marko again for pointing out to me things to pay attention to.* 

I was then finally in a great place to start writing some code.  Conveniently, the google’s flavor on Django’s entitiescalss.py (really models.py) is just the perfect place to keep all these classes. (At the time I still hadn’t had internalized the idea of modules and I only put code in the files I found already existing in the project. This later lead to a very long, monolithic app).

But an app isn’t just the back-end (as I would soon come to understand), there’s also the front-end, user interface bit of it. As it turns out this is really quire important, as this is what determines how your app feels. (I was only able to get this part of the app working exactly the way that I wanted more than a year later when I had way more experience). So I started down the rabbit hole. I have defined templates which were in the first iteration able to display data for the back-end as black text on a white canvas. 

By iteration god-knows-which I had a circle on the screen. And very very many iterations later the circle had a smaller circle inside it which could be partially drawn to indicate the timer’s progress. Here I had struggled for days to get the circle shrinking at the correct rate. It was partially hard to test because of the time it took to test it to see if the timer kept time correctly (which it wasn’t for a long time). To test the design I had the timer going at 100x speed but this caused all kinds of rounding errors when calculating the percentage of the circle to be drawn. All in all a very finicky process mostly made up of trial end error. And don’t event get me started on getting the timer in the exact center of the circle. I remember really hating CSS at that point (not that I adore it now).

And there it was, my master piece… version 1.0


![The first design draft.](https://trello-attachments.s3.amazonaws.com/55cc8d121f5c108a86673464/1366x768/15f42593415080ed29d6d45fc65407e0/circular_timer_design.png)


…you can tell this is a genuinely an old screenshot for I was still developing on Windows. 

Ok so verison one is done, but the app isn’t yet nearly complete. The next thing it needs is the ability to record work in the *sense?* of **tasks.** And further, the app needs, obviously a way to report the recorded work…

I kept working on the app here and there for a long time after that, and you can find a *final* version from 2019 here:
[](https://pomodorowebapp.appspot.com/)[https://pomodoro.farmoredifferent.com/](https://pomodoro.farmoredifferent.com/)
…when I eventually switched to using Toggl.




