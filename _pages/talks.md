---
layout: page
title: talks
permalink: /talks/
nav: true
nav_order: 3
---

<div class="talks-list">
  {% assign talks = site.data.talks | sort: "date" | reverse %}
  {% for talk in talks %}
  <div class="talk-entry">
    <div class="talk-main">
      <div class="talk-title">
        {% if talk.url %}
          <a href="{{ talk.url }}" target="_blank" rel="noopener">{{ talk.title }}</a>
        {% else %}
          {{ talk.title }}
        {% endif %}
      </div>
      <div class="talk-venue">
        {{ talk.venue }}{% if talk.location %} &middot; {{ talk.location }}{% endif %}
      </div>
      <div class="talk-links">
        <span class="talk-type-badge talk-type-{{ talk.type }}">{{ talk.type }}</span>
        {% if talk.slides %}
          <a href="{{ talk.slides }}" target="_blank" rel="noopener">slides</a>
        {% endif %}
        {% if talk.video %}
          <a href="{{ talk.video }}" target="_blank" rel="noopener">video</a>
        {% endif %}
      </div>
    </div>
    <div class="talk-date">{{ talk.date | date: "%b %Y" }}</div>
  </div>
  {% endfor %}
</div>
