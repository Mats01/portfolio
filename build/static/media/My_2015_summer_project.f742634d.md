# My 2015 summer project
… which turned into my high-school side project.


![](https://paper-attachments.dropbox.com/s_0CAEE56025BF946F427DA9E50C75DDC8FE7EDE66F0354135C8390C794DE71A99_1588068029841_pomidori2-1.jpg)


*Note: to understand what I am writing about here it’’s helpful to first take a look at the app:*
[https://pomodoro.farmoredifferent.com/](https://pomodoro.farmoredifferent.com/)



## An introduction 

I started working on the pomodoro webapp when I was 15, and it was my first coding project of any kind.  I’ve come to find that starting coding early was really usefull to me later on. I really think that even just getting exposed to these complex concepts early helps a lot later on if you are trying to have a career in coding.

I didn't, however, start all of my own. Everybody could use a little push in finding what to do and getting the necessary motivation to start working on *something.* For me this push was  my cousin Marko The Developer. He wasn't only a great example of what I could achieve I chose to become a developer, but he also pushed me in the right direction by actually telling me to go and make a time tracking app.

So, with this direction and encouragement, I got started. 

However, I couldn’t get into making my very own app right away. I had to start from the beginning. While it probably is possible to learn a development framework by reading the documentation and experimenting, I don’t think that would be time particularly  well invested. That’s why I went with Reddit-founder Steve Huffman’s Udacity course on web apps. The course was for the most part focused on making a blog on the Google App Engine using Django. Little did I know, these were just my first steps into what would become years of working with Django, eventually even at a professional level. 

Having pedantically gone though the whole course I felt (kind of) ready to try my new skills on my very own project.


## Choosing a good project to start with

Again, thanks to my cousin’s vital guidance I focused my time tracking app around the [Pomodoro Technique.](https://francescocirillo.com/pages/pomodoro-technique) In short, the Pomodoro Technique essentially works by making you split your work into intense focus sessions (called Pomodoros). In between which you take short breaks to better process what you’ve been working on. This also helps you work for longer, because the breaks stop you from suddenly feeling exhausted. All this best applies to studying, as this was what the technique was developed for, making this the perfect time tracking app for me at the time (being in school and all that).

This was a particularly good choice for my first ever project because it had lots of parts but none of them very complex. It needed a back end user authentication, but the bulk of the app was running in the front end.

So, having a great sense of what I was trying to accomplish I started planning out my app. The first thing I started thinking of was the flow of information that would happen as the app records the Pomodoros. I then went on to define blueprints for the objects through which I would manipulate this data. The models I had came up with were:

***User***

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

I was then finally in a great place to start writing some code.  Conveniently, the google’s flavor on Django’s entitiescalss.py (really models.py) is just the perfect place to keep all these classes. (At the time I still hadn’t had internalized the idea of modules and I only put code in the files I found already existing in the project. This later lead to a very long, monolithic app).

So I went on to define all the classes encapsulating these data structures and broadly defining the functions I had foreseen needing.

*Side note: I was actually quite surprised looking back at my documents from the time with just how* *thorough* *of a plan I had created for the app before even properly starting.* *Again, most of the credit for this should go to Marko for pointing out things to pay attention to.* 


## The learning process

But an app isn’t just the back-end (as I would soon come to understand). There’s also the front-end, user interface bit of it. As it turns out this is really quite important, as this is what determines how your app *feels*. (*I* *was only able to get this working exactly the way that I wanted over a year later, when I had way more experience*). So I started going down the rabbit hole. In the first iteration the app was able to display data for the back-end as black text on a white canvas. 

By iteration *god-knows-which* I had a circle on the screen. And very very many iterations later the circle had a smaller circle inside it which could be partially drawn to indicate the timer’s progress. Here I had struggled for days to get the circle circling circularly at the correct rate. Also, this was hard to test because of the all the waiting around for the timer. To test the design I had the timer going at 100x speed but this caused all kinds of rounding errors when calculating the percentage of the circle to be drawn. All in all a very finicky process mostly made up of trial end error. And don’t event get me started on getting the timer in the exact center of the circle. I remember really hating CSS at that point (not that I adore it now).

And there it was, my master piece… version 1.0


![The first design draft.](https://trello-attachments.s3.amazonaws.com/55cc8d121f5c108a86673464/1366x768/15f42593415080ed29d6d45fc65407e0/circular_timer_design.png)


…you can tell this is a genuinely an old screenshot for I was still developing on Windows. 


## Putting it all together

So let’s take a quick look at what I had at the end of the summer.

The app worked something like this: a user coming to the site would create an account to start using the app (though I played with having just the timer available even if you weren’t logged in). They would then get a screen with a big timer underneath which they could adjust some settings and create and manage their tasks. 


![upload 3/10/2015 at 16:23:07.png](https://trello-attachments.s3.amazonaws.com/560fe4be1fc68887e5176014/1280x905/bba30d9162e2e973927930588a5e8f5d/upload_3_10_2015_at_16_23_07.png)


The user could either start a timer without a task (automatically labeled “Other”, or start a pomodoro for a specific task they are working on. The app would then count down the time they’d chosen and prompt them to take a break at the end, count down the time chosen for the break, and start the process again with the next pomodoro. 


![Charts.png](https://trello-attachments.s3.amazonaws.com/55d5f1220e3ea8bcf0ca76fe/1366x768/839346f8856bb559c12fdad37c6786f3/Charts.png)


The only other screen the app has is a progress screen where the user is presented with charts about their tracked time. I’ve also included a screenshot of how I’ve later redesigned this screen below


![upload 4/10/2015 at 15:49:19.png](https://trello-attachments.s3.amazonaws.com/55d5f1220e3ea8bcf0ca76fe/1279x598/8d65d0bc4ff4278d8f914359515fd671/upload_4_10_2015_at_15_49_19.png)



## Final thoughts 

The one big thing I’d say was missing from this first version was syncing the currently running timer with the back-end. The latest version of the app captures the currently running timer so it can survive accidental tab closes or similar disruptive events (even follow you around when you switch devices as you work). 

Other than that the app did everything I needed it to and I used it through high school to help me focus when I was studying.  

I kept working on the app here and there for a long time after that, and you can find a *final* version from 2019 here:
[](https://pomodorowebapp.appspot.com/)[https://pomodoro.farmoredifferent.com/](https://pomodoro.farmoredifferent.com/)

…when I eventually switched to using [Toggl](http://toggl.com).
