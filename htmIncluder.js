$(document).ready(() => {
    let z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("my_include_html");
        let active_link = elmnt.getAttribute("active_link");
        if (file) {
            elmnt.innerHTML = snippets[file];
            if (active_link) {
                let elements = $(".nav").find("li");
                for (j in elements) {
                    console.log(elements[j].textContent);
                    if (elements[j].textContent == active_link)
                        $(elements[j]).addClass("active_li");
                }



            }

            
        }
    }
});

let snippets = {
    'nav': `
<h4>NAVIGATION</h4>
<nav role="navigation" class="navbar">
  <ul class="nav navbar-nav">
    <li><a href="index.html">Home</a></li>
    <li><a href="contact.html">Contact</a></li>
    <li><a href="stories.html">Stories</a></li>
  </ul>
</nav>
<footer>
  <h1 class="footer_title">Far</h1>
  <h1 class="footer_title">More</h1>
  <h1 class="footer_title">Different</h1>
  <p>Matej Butković<br>
  currently studying @ FER</p>
</footer>
`,
    'article_nav': `
<h4>NAVIGATION</h4>
<nav role="navigation" class="navbar">
  <ul class="nav navbar-nav">
    <li><a href="../index.html">Home</a></li>
    <li><a href="../contact.html">Contact</a></li>
    <li><a href="../stories.html">Stories</a></li>
  </ul>
</nav>
<footer>
  <h1 class="footer_title">Far</h1>
  <h1 class="footer_title">More</h1>
  <h1 class="footer_title">Different</h1>
  <p>Matej Butković<br>
  currently studying @ FER</p>
</footer>
`,
    'sidebar': `
<p>A couple of stories explaining the apps are coming!</p>

<div class="single_article">
    <h3><a href="stories/2015-summer-project.html">My 2015 summer project</a></h3>
    <p class="author_line">
    <strong>pubished</strong>: 23.04.2020.
</p>
    <p>The Pomodoro webapp</p>
</div>

<div class="single_article">
    <h3><a href="stories/Reversed_Citations_Needed_app.html">Reversed Citations Needed
    app</a></h3>
    <p class="author_line">
    <strong>pubished</strong>: 23.04.2020.
</p>
    <p>
    Making a simple PWA in a week: how to quickly get form idea to execution.

    </p>

</div>

<div class="single_article">
    <h3><a href="stories/Developer_Journal_Making_the_Dayty_App.html">Developer Journal: Making the Dayty App
    app</a></h3>
    <p class="author_line">
    <strong>pubished</strong>: 08.05.2020.
</p>
    <p>
    Making a simple PWA in a week: how to quickly get form idea to execution.

    </p>

</div>

`,
'sidebar_blog': `
<p>A couple of stories explaining the apps are coming!</p>

<div class="single_article">
    <h3><a href="2015-summer-project.html">My 2015 summer project</a></h3>
    <p class="author_line">
    <strong>pubished</strong>: 23.04.2020.
</p>
    <p>The Pomodoro webapp</p>
</div>

<div class="single_article">
    <h3><a href="Reversed_Citations_Needed_app.html">Reversed Citations Needed
    app</a></h3>
    <p class="author_line">
    <strong>pubished</strong>: 23.04.2020.
</p>
    <p>
    Making a simple PWA in a week: how to quickly get form idea to execution.

    </p>

</div>

<div class="single_article">
    <h3><a href="Developer_Journal_Making_the_Dayty_App.html">Developer Journal: Making the Dayty App
    app</a></h3>
    <p class="author_line">
    <strong>pubished</strong>: 08.05.2020.
</p>
    <p>
    Making a simple PWA in a week: how to quickly get form idea to execution.

    </p>

</div>
`,
'stories':`
<div class="articles_wrapper">
<h1>Stories</h1><br>
<div class="single_article">


  <div class="single_article">
    <h3><a href="stories/2015-summer-project.html">My 2015 summer project</a></h3>
    <p class="author_line">
      <strong>author</strong>: Matej Butković<br>
      <strong>pubished</strong>: 23.04.2020.
      <strong>edited</strong>: 30.04.2020.
    </p>





  </div>

  <div class="single_article">
    <h3><a href="stories/Reversed_Citations_Needed_app.html">Reversed Citations Needed
        app</a></h3>
    <p class="author_line">
      <strong>author</strong>: Matej Butković<br>
      <strong>pubished</strong>: 23.04.2020.
    </p>



  </div>

  <div class="single_article">
    <h3><a href="stories/Developer_Journal_Making_the_Dayty_App.html">Developer Journal Making the Dayty
        App
        app</a></h3>
    <p class="author_line">
      <strong>author</strong>: Matej Butković<br>
      <strong>pubished</strong>: 08.05.2020.
    </p>



  </div>

  <div class="single_article">
    <h3><a href="stories/Dayty_Phase_0_Starting_a_Django_project.html">Developer Journal: Phase 0 (Starting a Django project)
        App
        app</a></h3>
    <p class="author_line">
      <strong>author</strong>: Matej Butković<br>
      <strong>pubished</strong>: 24.05.2020.
    </p>



  </div>

  <div class="single_article">
    <h3><a href="stories/Dayty_Phase_1.html">Developer Journal: Phase 1 (Defining models, choosing a CSS framework, populating the admin panel, and adding basic views)
        App
        app</a></h3>
    <p class="author_line">
      <strong>author</strong>: Matej Butković<br>
      <strong>pubished</strong>: 24.05.2020.
    </p>



  </div>

</div>
</div>
`


};