---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}


## Peer-reviewed publications

{% for post in site.publications reversed %}
  {% if post.type == "peer-reviewed" %}
    {% include archive-single-cv.html %}
  {% endif %}
{% endfor %}



<!-- ## Working papers

{% for post in site.publications reversed %}
  {% if post.type == "working-paper" %}
    {% include archive-single-cv.html %}
  {% endif %}
{% endfor %} -->

## Books

{% for post in site.publications reversed %}
  {% if post.type == "book" %}
    {% include archive-single-cv.html %}
  {% endif %}
{% endfor %}

<!-- ## Book chapters

{% for post in site.publications reversed %}
  {% if post.type == "book-chapter" %}
    {% include archive-single-cv.html %}
  {% endif %}
{% endfor %} -->

## Reports and policy papers

{% for post in site.publications reversed %}
  {% if post.type == "report" %}
    {% include archive-single-cv.html %}
  {% endif %}
{% endfor %}

## Broader outreach

{% for post in site.publications reversed %}
  {% if post.type == "outreach" %}
    {% include archive-single-cv.html %}
  {% endif %}
{% endfor %}

