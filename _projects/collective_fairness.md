---
layout: page
title: Collective action for fairness
description: Can people collaborate to make ML fair?
img: assets/img/collective_fairness.png
importance: 1
category: work
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/collective_fairness.png" title="Toy example of collective action for fairness" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Minority-only collective action can substantially improve fairness.
    With only 6 label flips, the fairness violation of logistic regression goes down by over 75% with only a negligible increase in prediction error.
    Circles and crosses represent majority and minority points, respectively.
</div>


## Introduction
Machine learning often reflects and preserves real-world unfairness.
While researchers have proposed many methods to address this, all the solutions have two things in common:
1. These methods are designed for the firms that operate the models.
2. Reducing unfairness often comes at the cost of increased prediction error.

This creates a paradox: solutions that promote fairness may be ignored by firms because they prioritize minimizing error and maximizing profit.

But in today's data-driven world, many large tech firms collect their users' data to train machine learning models.
Can these users leverage their agency of the data they share to promote fairness?
In this project, we explore how a subgroup of users (particularly from underrepresented minorities) can strategically influence fairness outcomes by managing the data they contribute.

## Resources
- For more details, results and limitations, please read our [research preprint]({{ '/assets/pdf/fairness_collective_paper.pdf' | relative_url }})
- [A recording of a non-technical talk](https://www.youtube.com/watch?v=z4Hjm5D_lkI) and the [slides]({{ '/assets/pdf/fairness_collective_slides.pdf' | relative_url }}) from the [Tübingen Days of Digital Freedom](https://tdf.cttue.de/en/index.html).

## Collaborators
- Samira Samadi
- [Amartya Sanyal](https://amartya18x.github.io/)
- [Alexandru Țifrea](https://alex-tifrea.github.io/)

