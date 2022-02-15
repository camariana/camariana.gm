---
layout: post
title:  "find a better title for this post"
description: "Learn how not to think that false will work as you intended in liquid"

categories: CSS
date: 2021-05-14T10:20:00Z
ert: 5

image: /assets/images/post/test.jpg
image_description:
---

 I ran into this problem at work, when I was trying to solve a conditional rendering issue we were having with our posting data.

## A bit of context

To put you into context, here is a little background of what we were doing with this data.

At the [Gambia College] [School of Education], every term, thousands of students apply for Teaching Practice (TP) to different schools through out the country. The posting data is in CSV, which we automatically loop through and generate a unique posting memo for each student.

Here is an example of the data

And here is an example of the memo

##  The problem at hand

So what's the issue?

What we want is one memo to rule them all, but different students, in different programs and majors. The content of the memo is the same for all the students except few places, such as:

- The prose of the pen ultimate sentence in the first paragraph
- The name of the programme
- The major of the student
- The school the student choose and the region

Most of the difference is in the first paragraph of the memo, here is three different versions of that paragraph, take note of the insertion marks:

For Diploma in Education and other non advanced diploma programmes

> I write with great pleasure to inform you that [**Adama  Sowe**], is a student of The Gambia College,  pursuing [**Diploma in Education Primary**]                                under the School of Education. S/he has chosen your school for **Teaching Practice (TP)**. The duration of this exercise shall be only one term, starting from 22nd January 2022 to end of April 2022.

For Advanced Diploma in Education Secondary students with one major

> I write with great pleasure to inform you that [**Abba  Kujabi**], is a student of The Gambia College,  pursuing [**Adv Diploma in Education Secondary**]                                under the School of Education. As a specialist in [**FRENCH**], s/he has chosen your school for **Teaching Practice (TP)**. The duration of this exercise shall be only one term, starting from 22nd January 2022 to end of April 2022.            

For Advanced Diploma in Education Secondary students with two majors

> I write with great pleasure to inform you that [**Abdou Jobe**], is a student of The Gambia College,  pursuing [**Adv Diploma in Education Secondary**]                                under the School of Education. As a specialist in [**SCIENCE**] and [**SES**], s/he has chosen your school for **Teaching Practice (TP)**. The duration of this exercise shall be only one term, starting from 22nd January 2022 to end of April 2022. 

[alert box the below para]
Note a slight change in the starting of the sentence [S/he] in the first and the ones on the second and third one [s/he]. The `S` is capital in the first and is small in the second and third one.

## Conditional rendering to the rescue

To separate the advanced diploma programmes and the non advanced diploma programmes is straight forward. One way to do it in liquid is like this

```twig
{% if page.programme contains 'Adv' %}
	// Adv. Dip specific things here
{% endif %}
```

If this statement is false, meaning, if the `page.programme` doesn't contain the `Adv`, then th first paragraph should be like this

> I write with great pleasure to inform you that [**Adama  Sowe**], is a student of The Gambia College,  pursuing [**Diploma in Education Primary**]                                under the School of Education. S/he has chosen your school for **Teaching Practice (TP)**. The duration of this exercise shall be only one term, starting from 22nd January 2022 to end of April 2022.

To separate the advance diploma students with one major and the others with double majors leads to the topic of this post. Coming from a JavaScript background, I approach to solve this problem with liquid with a JavaScript mindset.

```twig
{% if page.secondMajor == '' %}
	As a specialist in <strong>{{ page.firstMajor | upcase }},</strong>
{% else %} 
	As a specialist in <strong>{{ page.firstMajor | upcase }},</strong> and <strong>{{ page.secondMajor | upcase }}
{% endif %}
```

Guess what? This  does not work.

Why?

In liquid, [strings](https://shopify.github.io/liquid/basics/types/#string), even when empty, are truthy. So to make that [falsy](https://shopify.github.io/liquid/basics/truthy-and-falsy/#falsy) and use it to my advantage in the condition, I have to use `unless`, then  compare `page.secondMajor` with the special value `empty`

```twig
{% unless page.secondMajor == empty %}
	{% assign singleMajor = nil %}
{% endunless %}              

{% if page.secondMajor == singleMajor %}
	As a specialist in <strong>{{ page.firstMajor | upcase }},</strong>
{% else %} 
	As a specialist in <strong>{{ page.firstMajor | upcase }},</strong> and <strong>{{ page.secondMajor | upcase }}
{% endif %}
```






Side note

If you have all the schools email, memos could be automatically send to the school and the student can also take the memo as well.

If that is the case schools can accept student with the student moving an inch and the students will notification of the acceptance via email and a details instruction what to do, who to contact and so on.

If there is a reject the student will be notified as well and go back and choose another school