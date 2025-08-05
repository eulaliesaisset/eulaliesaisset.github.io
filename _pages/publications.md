---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
You can also find my articles on my Google Scholar profile.
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
    {% include archive-single.html %}
  {% endif %}
{% endfor %} -->

## Books

{% for post in site.publications reversed %}
  {% if post.type == "book" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<!-- ## Book chapters

{% for post in site.publications reversed %}
  {% if post.type == "book-chapter" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %} -->

## Reports and policy papers

{% for post in site.publications reversed %}
  {% if post.type == "report" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Broader outreach

{% for post in site.publications reversed %}
  {% if post.type == "outreach" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

