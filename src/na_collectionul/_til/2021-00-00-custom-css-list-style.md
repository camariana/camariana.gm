---
layout: til
title: Custom CSS list style

categories: CSS
date: 2021-01-01T10:20:00Z
---

To make a custom list style, the `::maker` CSS pseudo-element comes to rescue. 

> The **`::marker`** [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) [pseudo-element](https://developer.mozilla.org/en/CSS/Pseudo-elements) selects the marker box of a list item, which typically contains a bullet or number. It works on any element or pseudo-element set to `display: list-item`, such as the [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) and [``](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) elements.
>
> [::marker](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker)

We want to make two custom styles like the designs below

[designs here]

Consider the following markup

```html
<ol class="custom-list">
    <li>
        Prepare HND graduates who wish to pursue further education with the foundation necessary to enable them to successfully complete such education.
    </li>
    <li>
        Prepare HND graduates to function professionally throughout the West Africa Sub-Region and beyond.
    </li>
    <li>
        Prepare HND graduates who are committed to informing individuals, communities and groups on health matters, and assisting them in developing and implementing appropriate public health interventions.
    </li>
</ol>
```

In CSS we can use counter and use the content property to prepend `0` to the number. Consider the code below

```css
.custom-list {
    list-style: none;
    counter-reset: numbers;
}

.custom-list > li {
    position: relative;
    counter-increment: numbers;
}

.custom-list > li::before {
    content: "0" counter(numbers) ". ";
    position: absolute;
    left: -24px;
    font-weight: bold;
    color: blue;
    top: 50%;
    transform: translateY(-50%);
}
```



I learned that this could be also done on elements that are not list items. This technique was done on headings inside a course listing. Consider the following code

```html

<nav class="nav">
	<button>
        <span>
            BA Islamic Studies 
        </span>
	</button>
    <button>
        <span>
            BA Linguistics
        </span>
	</button>
    <button>
        <span>
            BA History
        </span>
	</button>
</nav>                        
```



```css
.nav > button {
    display: list-item;
    counter-increment: courses;
}
.nav > button::marker {
    content: "0" counter(courses) ".";
    color: blue;
}
```

