# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](/images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

This time i learned to use the pseudo elements before and after very well. I had had some problems trying to use those
pseudo elements, but this time i feel really comfortable using them. I also used the z-index property which 
i hadn't used in a while.

Meaningful code snippets:
```css
 a::after {
    content: "";
    position:absolute;
    bottom:-8px;
    right:50%;
    width:0px;
    height:2px;
    background-color: var(--white);
    transition: width .2s ease-in;
 }
 a:hover::after {
    width:50%;
 }
```

### Continued development

I want to keep improving my CSS skills. I also want to strengthen my understanding of accesibility and
responsive design.

## Author

- Frontend Mentor - [@dialejo24](https://www.frontendmentor.io/profile/dialejo24)
- Github - [@dialejo24](https://www.github.com/dialejo24)
