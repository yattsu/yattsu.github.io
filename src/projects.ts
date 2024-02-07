import astraljack1 from "./assets/projects/astraljack/1.jpg";
import astraljack2 from "./assets/projects/astraljack/2.jpg";
import clicker1 from "./assets/projects/clicker/1.jpg";
import conversion1 from "./assets/projects/conversion/1.jpg";
import ggamez1 from "./assets/projects/ggamez/1.jpg";
import ggamez2 from "./assets/projects/ggamez/2.jpg";
import ggamez3 from "./assets/projects/ggamez/3.jpg";
import league1 from "./assets/projects/league/1.jpg";
import league2 from "./assets/projects/league/2.jpg";
import league3 from "./assets/projects/league/3.jpg";
import pokedex1 from "./assets/projects/pokedex/1.jpg";
import pokedex2 from "./assets/projects/pokedex/2.jpg";
import pokedex3 from "./assets/projects/pokedex/3.jpg";
import pokedex4 from "./assets/projects/pokedex/4.jpg";
import pomodoro1 from "./assets/projects/pomodoro/1.jpg";
import pomodoro2 from "./assets/projects/pomodoro/2.jpg";
import rotter1 from "./assets/projects/rotter/1.jpg";
import rotter2 from "./assets/projects/rotter/2.jpg";
import rotter3 from "./assets/projects/rotter/3.jpg";
import wordle1 from "./assets/projects/wordle/1.jpg";
import wordle2 from "./assets/projects/wordle/2.jpg";

export const projects = [
  {
    name: "Twitter inspired web app",
    images: [rotter1, rotter2, rotter3],
    thumbnail: rotter1,
    description:
      "Designed and developed a comprehensive Twitter clone application, featuring real-time live feed updates and seamless tweet posting functionality. This project showcases proficiency in front-end and back-end development, emphasizing user engagement through an intuitive interface, dynamic content updates, and effective communication with server-side components.",
    technologies: ["React.js", "TailwindCSS", "MongoDB", "Express.js"],
  },
  {
    name: "Game aggregator",
    images: [ggamez1, ggamez2, ggamez3],
    thumbnail: ggamez2,
    description:
      "Designed and implemented a dynamic web application utilizing API integration to showcase and categorize games, featuring a user-friendly interface with detailed genre classifications. This project demonstrates proficiency in front-end development and effective utilization of external data sources for an enriched user experience.",
    technologies: ["React.js", "TailwindCSS", "API"],
  },
  {
    name: "Blackjack simulator",
    images: [astraljack1, astraljack2],
    thumbnail: astraljack1,
    description:
      "Crafted an animated Blackjack simulation application that not only replicates the excitement of the game but also enhances user engagement through dynamic animations. This project demonstrates a keen focus on creating a visually captivating and interactive gaming experience.",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    name: "Pokédex",
    images: [pokedex1, pokedex2, pokedex3, pokedex4],
    thumbnail: pokedex1,
    description:
      "Developed a comprehensive Pokédex web application with advanced functionality, including real-time Pokémon information retrieval, seamless search capabilities, paginated results, API integration for data enrichment, detailed statistical insights, and a comprehensive display of evolutionary paths. This project showcases adept skills in front-end development, API utilization, and creating an immersive user experience within the realm of Pokémon data exploration.",
    technologies: ["React.js", "TailwindCSS", "API"],
  },
  {
    name: "Web clicker type game",
    images: [clicker1],
    thumbnail: clicker1,
    description:
      "Developed an engaging clicker game enriched with dynamic animations, robust data storage capabilities, and an integrated shop functionality. This project showcases not only immersive visual elements but also interactive in-game transactions.",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    name: "Pomodoro timer app",
    images: [pomodoro1, pomodoro2],
    thumbnail: pomodoro1,
    description:
      "Built a Pomodoro web application to enhance productivity through focused time management. The application seamlessly integrates the Pomodoro technique, offering customizable work and break intervals, task tracking, and a clean user interface. This project demonstrates proficiency in front-end development and user-centric design for efficient time utilization.",
    technologies: ["React.js", "TailwindCSS"],
  },
  {
    name: "League Champions",
    images: [league1, league2, league3],
    thumbnail: league1,
    description:
      "Built an aggregator for displaying the playable characters from the game League of Legends. It can be used to sort characters and view their stats.",
    technologies: ["React.js", "TailwindCSS", "API", "Express.js"],
  },
  {
    name: "Wordle inspired web app",
    images: [wordle1, wordle2],
    thumbnail: wordle2,
    description: 'A word based game inspired by the popular title "Wordle".',
    technologies: ["React.js", "TailwindCSS", "API"],
  },
  {
    name: "Input device conversion app",
    images: [conversion1],
    thumbnail: conversion1,
    description:
      "Built a specialized application facilitating the conversion of mouse sensitivity to a graphical tablet area, providing users with a seamless transition between input devices.",
    technologies: ["React.js", "TailwindCSS"],
  },
];
