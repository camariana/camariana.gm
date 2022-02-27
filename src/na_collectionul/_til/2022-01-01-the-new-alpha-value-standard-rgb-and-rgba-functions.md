---
layout: til
title: The new alpha value standard rgb() and rgba() functions

categories: CSS
date: 2022-01-01T10:20:00Z
---

The new syntax is to use three values without commas followed by a slash and the alpha channel of the color as a percentage.

Consider the following example of a slightly-transparent blue:

```css
/* Don't */
background-color: rgba(0, 0, 255, 0.8);
```

```css
/* Do */
background-color: rgb(0 0 100% / 80%);
```

Note: At the time of writing, in scss (sass), not css, the rgb() will throw a compilation error `Function rgb is missing argument ...`