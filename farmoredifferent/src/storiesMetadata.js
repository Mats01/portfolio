import pomodorowebapp from './stories_markdown/My_2015_summer_project.md';
import dayty from './stories_markdown/Developer_Journal_Making_the_Dayty_App.md';
import dayty0 from './stories_markdown/Dayty_Phase_0_Starting_a_Django_project.md';
import dayty1 from './stories_markdown/Dayty_Phase_1.md';
import reversedCitationsNeeded from './stories_markdown/Reversed_Citations_Needed_app.md'
import weekly from './stories_markdown/weekly.md';


import pragmaticProgrammer from './books_markdown/The_Pragmatic_Programmer.md'


export const stories = [
  {
    name: "My 2015 summer project",
    year: "2015",
    story: pomodorowebapp,
    link: "https://pomodorowebapp.appspot.com/",
    tech: "Google App Engine (Python)",
    path: "/my-2015-summer-project",
    published: "Apr 23, 2020",
    lastUpdated: "Apr 30, 2020",
    summary: "About the pomodoro thing",

  },
  {
    name: "Reversed Citations Needed app",
    year: "2019",
    story: reversedCitationsNeeded,
    link: "https://pomodorowebapp.appspot.com/",
    tech: "JS",
    path: "/Reversed-Citations-Needed-app",
    published: "Apr 24, 2020",
    lastUpdated: "Apr 24, 2020",
    summary: "About RCN",

  },
  {
    name: "Developer Journal Making the Dayty App",
    year: "2020",
    story: dayty,
    link: "https://pomodorowebapp.appspot.com/",
    tech: "JS",
    path: "/Developer-Journal-Making-the-Dayty-App",
    published: "May 8, 2020",
    lastUpdated: "May 8, 2020",
    summary: "Making dayty Making dayty Making dayty Making dayty Making dayty Making dayty Making dayty Making dayty ",

  },
  {
    name: "Dayty 0",
    year: "2020",
    story: dayty0,
    link: "https://pomodorowebapp.appspot.com/",
    tech: "Google App Engine (Python)",
    path: "/dayty",
    published: "2020.5.5",
    lastUpdated: "2021.1.1",
    summary: "Dayty 0",

  },
  {
    name: "Dayty 1",
    year: "2020",
    story: dayty1,
    link: "https://pomodorowebapp.appspot.com/",
    tech: "Google App Engine (Python)",
    path: "/dayty",
    published: "2020.5.5",
    lastUpdated: "2021.1.1",
    summary: "Dayty 1",

  },
];

export const weeklyStory = {
  
    name: "Weekly shorts LIFO",
    story: weekly,
    path: "/weekly",
    summary: "Dayty 1",


}

export const whatImReading = [
  {
    name: "The Pragmatic Programmer",
    author: "the guys",
    path: "",
  },
  {
    name: "Sapiens",
    author: "Harrari",
    path: "",
  },
  {
    name: "Show your work",
    author: "someody",
    path: "",
  },

]

export const books = [

  {
    name: "The Pragmatic Programmer",
    author: "somebody",
    story: pragmaticProgrammer,
    path: "/pragmaric_programmer",
    published: "2020.5.5",
    lastUpdated: "2020.5.5",


  },

]
