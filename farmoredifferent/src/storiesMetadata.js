import pomodorowebapp from './stories_markdown/My_2015_summer_project.md';
import dayty from './stories_markdown/Developer_Journal_Making_the_Dayty_App.md';
import dayty0 from './stories_markdown/Dayty_Phase_0_Starting_a_Django_project.md';
import dayty1 from './stories_markdown/Dayty_Phase_1.md';
import reversedCitationsNeeded from './stories_markdown/Reversed_Citations_Needed_app.md'
import weekly from './stories_markdown/weekly.md';





export const stories = [
  {
    name: "Dayty: Phase 1",
    story: dayty1,
    path: "/Dayty-Phase-1",
    published: "May 10, 2020",
    lastUpdated: "May 10, 2020",
    summary: "Defining models, choosing a CSS framework, populating the admin panel, and adding basic views",

  },
  {
    name: "Dayty: Phase 0 (Starting a Django project)",
    story: dayty0,
    path: "/Dayty-Phase-0",
    published: "May 10, 2020",
    lastUpdated: "May 10, 2020",
    summary: "A Django project",

  },
  {
    name: "Developer Journal: Making the Dayty App",
    story: dayty,
    path: "/Developer-Journal-Making-the-Dayty-App",
    published: "May 8, 2020",
    lastUpdated: "May 8, 2020",
    summary: "This story is the spring board off of which I'm jumping into making a brand new productivity app. I'll be writing the story in phases as follow up stories to this one",

  },
  {
    name: "Reversed Citations Needed",
    story: reversedCitationsNeeded,
    path: "/Reversed-Citations-Needed",
    published: "Apr 24, 2020",
    lastUpdated: "Apr 24, 2020",
    summary: "This is the story of how I built my first progressive web app and how I learned what a PWA even is.",

  },
  {
    name: "My 2015 summer project",
    story: pomodorowebapp,
    path: "/my-2015-summer-project",
    published: "Apr 23, 2020",
    lastUpdated: "Apr 30, 2020",
    summary: "A story about my first project, and how it got me started on being a coder.",

  },
];

export const weeklyStory = {

  name: "Weekly shorts LIFO",
  story: weekly,
  path: "/weekly",
  summary: "Here you can read what I am learnign each week... I'm using this like an accountability journal.",


}

export const books = [

  // {
  //   name: "The Pragmatic Programmer",
  //   author: "somebody",
  //   story: pragmaticProgrammer,
  //   path: "/pragmaric_programmer",
  //   published: "2020.5.5",
  //   lastUpdated: "2020.5.5",


  // },

]