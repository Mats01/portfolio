Before I can begin making an app I have to set up the project and all that come with it. 

I’ve chosen to make this app with Django because I’m already very familiar with it, and I know it is really flexible and gives me everything I need for this project and more. Plus I won’t have to worry much about security.


## Step 1: Before installing Django

Before I created my project I first needed to create a virtual environment. Since each app you make will require a different set of libraries (also called requirements) to work, and possibly event different versions of libraries you already have on your system, you can’t just have them use the system libraries. Instead each app is kept in it’s own *environment* where only the libraries it needs are installed. You can think of it as a box containing all the parts needed for the app to run. Anything you install while in the environment only gets installed in the environment.

**To set up the virtual environment I used the** [**virtual environment wrapper.**](https://virtualenvwrapper.readthedocs.io/en/latest/)
Then I activated the environment

    $ pip install virtualenvwrapper
    ...
    $ export WORKON_HOME=~/Envs
    $ mkdir -p $WORKON_HOME
    $ source /usr/local/bin/virtualenvwrapper.sh
    $ mkvirtualenv --python=/usr/bin/python3 daytyenv

It’s important to note that I had to specify which version of Python I wanted, because the now deprecated Python 2. 7 was the default. 
 
 now I can activate the env anytime easily with the workon command

    $ workon daytyenv
## Step 2: Installing Django

To install Django i simply followed the [getting started guide](https://www.djangoproject.com/start/) for who know which time now. 


## Step 3: Switching to a real database

While this step is optional, the sooner you do it the better. So I switched from the sqlite3 database Django comes with to a PostgreSQL database. 

For this I only needed to install one additional library. 

    $ pip install psycopg2

And change my database settings in `settings.py` as shown [here](https://docs.djangoproject.com/en/3.0/ref/settings/#databases).

I was now ready to start making my app.
[+Dayty: Phase 1](/Dayty-Phase-1) 


**Back to starting post:**
[+Developer Journal: Making the Dayty App](/Developer-Journal-Making-the-Dayty-App) 

