---
layout: til
title: You can nest a div element in a description list

categories: HTML
date: 2021-01-01T10:20:00Z
---

## The problem

We want to display a program overview and the definition list seems to be best semantic candidate for something like this below.

[output screen shot here]

But, once styled, this happen.

[break out of the list item]

This code below is the normal `dl` markup

````html
<dl>
    <dt>Admissions</dt>
    <dd>December</dd>

    <dt>Campus</dt>
    <dd>Brikama</dd>

    <dt>Duration</dt>
    <dd>4 Years</dd>

    <dt>Certification</dt>
    <dd>BA Islamic Studies</dd>
</dl>
````

```css
.dl {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```



The output of the previous code is not what you will desire. Have a look at how to redo the markup below

## The solution

Nest each `dt` and `dd` combo in a `div`

```html
<dl>
    <div>
        <dt>Admissions</dt>
    	<dd>December</dd>
    </div>
	 <div>
        <dt>Campus</dt>
        <dd>Brikama</dd>
	</div>
	 <div>
        <dt>Duration</dt>
        <dd>4 Years</dd>
	</div>
	 <div>
        <dt>Certification</dt>
        <dd>BA Islamic Studies</dd>
    </div>
</dl>
```