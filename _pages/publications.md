---
layout: page
title: publications
permalink: /publications/
nav: true
nav_order: 2
---

<div class="section-heading">preprints</div>
{% bibliography --query @*[preprint=true] %}

<div class="section-heading">publications</div>
{% bibliography --query @*[preprint!=true] %}
