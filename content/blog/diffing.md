---
title: "What is Diffing"
description: "React is clever enough to know which DOM element has changed because of the concept of Diffing."
slug: "diffing"
draft: false
datePublished: "2023-09-24"
dateModified: "2023-09-24"
---

# What is Diffing

The performance gain of React is mainly because of the virtual DOM. Before updating the real DOM and repainting what’s on the screen, React updates the virtual DOM. The traditional DOM manipulation is very slow because for a small change on the DOM the whole page or sometimes neighboring DOM elements get re-rendered.

React is clever enough to know which DOM element has changed because of the concept of Diffing. Here is what happens in react to update an element in the screen

- React has a virtual DOM which is very fast to change and keep track of.
- When an element’s property changes, for instance, the color of a button changes to red, react changes the object of that button in the virtual DOM.
- Then it compares the new virtual DOM with the one just before the re-render.
- This enables React to know exactly which virtual DOM element needs a re-render. This operation of comparing the virtual DOM with its previous state of it is called Diffing.
- After figuring out which virtual DOM element needs a re-render React only repaints the real DOM equivalent of the changed button.
