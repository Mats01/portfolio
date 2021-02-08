## Designing the models

As always when I start a new app, the first thing I got to work on was designing the database.

First I decided to use Django’s built-in log-in system so all I had to do for my user model is connect it to the Django default user and I got all I need for now, plus I had room to extend it later.


    class DailyUser(models.Model):
      user = models.OneToOneField(User, on_delete=models.CASCADE)
    
      def __str__(self):
        return self.user.username
    
    class DayEntry(models.Model):
      user = models.ForeignKey(DailyUser, on_delete=models.CASCADE)
      date = models.DateTimeField()
    
    class AbstractTheme(models.Model):
      theme_name = models.CharField(max_length=40)
      active = models.BooleanField()
      user = models.ForeignKey(DailyUser, on_delete=models.CASCADE)
    
    class DailyTheme(models.Model):
      theme = models.ForeignKey(AbstractTheme, on_delete=models.CASCADE)
      entry = models.ForeignKey(DayEntry, on_delete=models.CASCADE)
      grade = models.IntegerField()

Next I had to fit all this models together. I started by created a DayEntry which was to be a parent object through which I could access all the DailyTheme objects for each day just by getting the entry:

    entry = DayEntry.objects.filter(entry_date__date=day, user=daily_user).first()
    grades_list = entry.dailytheme_set.all()

Each DailyTheme object was a *realization* of an AbstractTheme. In this way, the DailyTheme knows its name an to which user it belongs. 

In conclusion, each user has a set of active *AbstractThemes,* which are the themes shown in the Home screen when the user goes to record a new *DayEntry.* When the user then saves his entry for the day, for each of the *AbstractThemes* a *DailyTheme* instance is then created and associated with the specific *DayEntry* for that day. 

![](https://paper-attachments.dropbox.com/s_DA0CD57B9D0A84D8E954FEA5DE015FC12E7ACAACB0481B863CFC1D6FA79284AA_1589068571400_image.png)




## [Skeleton.css](http://getskeleton.com/)

Next, I wanted an easy and lightweight CSS framework to make the app more pleasant to look at as I worked on it, without me having to write much CSS just yet. After googling around and reading through a bunch of “Top 10 lightweight CSS frameworks” articles, I decided I liked Skeleton.css the most. 

Skeleton is clean and minimal. The whole CSS is only about 400 lines and it redefines the default styles of elements, so no need to learn their class names like for Bootstrap. It is designed to be a starting point for your styles and design, not to give your app a samey look. This was exactly what I wanted, basic elements behaved nicely, fonts and spacing were clean, but I could take it in whatever direction I wanted. 


## Views, the meat of the app

On the third day of development, I went on to show all this data to the user, and allow them to manipulate it. 

To begin with, I added some views to control the Django’s built-in login system, and some rules for which pages a user could view if they were vs weren’t logged in. 

Next, I created a home screen where I would show the user each of their themes and a simple ajax form to save the data they imputed. 

The final of these simple views I added was simply copying the view for adding a DayEntry to show all the entries this week. 


## The admin panel

On day 4 I worked on the admin panel. I needed a way to manage themes and users in the back-end while I was testing. Here I could also keep track of how many active users I have and change data directly without needing to implement all the necessary forms. 


## Dark mode

On day 5 I spent a whole bunch of hours figuring out how to make the dark more work. I had to learn the design philosophy of how to write CSS with theming in mind, allowing everything to change fluently. 

The best resource I found for this was [this webkit article](https://webkit.org/blog/8840/dark-mode-support-in-webkit/) which introduced all the ideas in a very clear way. The whole “magic, once you define all your colors as variables is to simply do this. 


    @media screen and (prefers-color-scheme: dark) {
      :root {
        --halfcolor: white;
        --fullcolor: #333;
        --stroke: white;
        --text_color: white;
        --outline: #666;
        --border_color: #aaa;
      }
    }

The nice thing about this is that, if the user's device doesn’t support dark mode you can simply build a button that sets all these CSS variables with just a bit of JavaScript. (Which I haven’t jet implemented though).


## Editable themes

This was all nice and good… for me. But the app didn’t let you change your themes jet. To make the app actually useful I needed to let users put in their themes and questions they care about. 

I decided to go the “proper” route and do this with pre-instanced Django forms. 

    class AbstractThemeForm(ModelForm):
      class Meta:
        model = AbstractTheme
        fields = ['theme_name', 'description', 'user', 'active']
        widgets = {
          'user': HiddenInput(),
          'active': HiddenInput()
        }

now all I need to do is send the user a form for each **active** theme
  

    daily_user = DailyUser.objects.filter(user=request.user).first()
    themes = AbstractTheme.objects.filter(user=daily_user, active=True)
    
    forms = []
    for theme in themes:
      forms.append([AbstractThemeForm(instance=theme), theme.pk])

which at first I had forgotten to and added it in later. 

While this solution ended up being simple and elegant it took a better part of a day spent experimenting and going back and forth with the python debugger to get working, but I think it was worth it. 

The app was now ready to have it’s very first testers. And I could get useful feedback on what to focus on next. 

One tip I think is worth mentioning I discovered while working on this is a simple workaround to browsers caching your CSS. This means changes in the stylesheets usually have no immediate effect on the devices of your testers (especially a problem on mobile devices where there is no hard-refresh).
The simple solution I’ve found for this is simply to rename my CSS files by adding the current date to the end of their filenames. e.g. `mycss21052020.css`
and find-and-replacing that name across the project. To the browser, this will look like a brand-new file and it will load it instead of using its outdated cached version. 

**Back to starting post:**
[+Developer Journal: Making the Dayty App](/Developer-Journal-Making-the-Dayty-App) 

