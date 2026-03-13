---
layout: page
title: projects
permalink: /projects/
nav: true
nav_order: 4
---

<div class="project-list">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
  <div class="project-card">
    {% if project.img %}
    <img
      class="project-card-img"
      src="{{ project.img | prepend: '/' | relative_url }}"
      alt="{{ project.title }}"
      loading="lazy"
    >
    {% endif %}
    <div class="project-card-body">
      <div class="project-card-title">
        <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
      </div>
      {% if project.description %}
      <p class="project-card-desc">{{ project.description }}</p>
      {% endif %}
      <div class="project-card-links">
        <a href="{{ project.url | relative_url }}">read more &rarr;</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
