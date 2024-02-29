---
title: "How to use group feature of Tailwindcss"
description: "How to style an element based on the state of some parent element in Tailwindcss"
slug: "tailwind-group"
draft: false
datePublished: "02-24-2024"
dateModified: "02-24-2024"
---

# How to use group feature of Tailwindcss

> I usually find myself forgetting the details of something, but I know it exists. Tailwind's `group` feature is one of those things. It's a great feature, and knowing that it exists has proven to be useful time and time again.

How do you style an element based on the state of some parent element? This is the question this `group` feature of tailwind answers.

Here are the things you need to do to style an element based on parent state.

1. Mark the parent element with the `group` class
2. use `group-*` modifiers like `group-hover` to style the target element

```html
<div class="group flex flex-col items-center bg-white p-6">
  <h2 class="group-hover:text-slate-900">Hello there</h2>
  <a href="#" class="group-hover:bg-slate-500">Create a new Article</a>
</div>
```
