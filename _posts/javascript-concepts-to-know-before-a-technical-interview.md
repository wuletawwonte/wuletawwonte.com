---
title: 'JavaScript concepts to know before a technical interview'
excerpt: 'In a Javascript interview the questions any interviewer asks are probably the same. Some concepts to know before a technical interview include'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Joe Haddad
  picture: '/assets/blog/authors/joe.jpeg'
---

## Closure

## Scope of var, let, and const

## Hoisting

## Inheritance

## Shadowing

## Temporal dead zone

## Web components

## Prototype

## Object literal

## Higher order functions

## Primitive data types

## Asymptotic notations

## Algorithm complexity

## Big O notation

## Parameters and Arguments

## Invoke

## Factory function

## Arrow function

The arrow function does not create its own execution context. It just uses the `this` of where ever it was created, where ever surrounds it. Whereas a normal function does create its own execution context. 

Usually, when we add event listeners we are in the global scope. 

The event handler function bounds the context of the function to the element the event is triggered from. So, an event listener has the ability to bind your context to the DOM element it is attached to. In the case of *setTimeOut*, there is no target element to bind the context. 

## Copy by value vs reference

## Garbage collector

In every programming language when a variable is declared it is stored in memory. Garbage collection is the process of removing variables from memory when execution ends or the variable is no longer needed. Some languages give this responsibility to the developer but most high-level programming languages like JavaScript handle garbage collection automatically. 

```jsx
let obj = {
	name: "Wuletaw"
}; // the data is stored in memory with reference to the variable name

obj = null; // the data in the memory still exists but its reference is removed.
```