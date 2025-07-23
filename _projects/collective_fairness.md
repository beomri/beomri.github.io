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
The world is unfair and machine learning usually preserves this unfairness.
Research provides plenty of solutions to promote fairness in machine learning, but there are two things that all the solution have in common:
1. They are targeted at firms who operate the machine learning model.
2. The less unfairness they offer, the greater the prediction error.
These two points create somewhat of a paradox: research proposes to firms solutions that increase error, but firms may care only about profit and minimizing error, discouraging them to implement these solutions.

In the current information age, where many large tech firms collect and use their users' data to train their own models, the users control the data they share with the firms.
Can this agency be used to promote fairness?
In this project we suggest strategies for a subgroup of the minority to promote fairness.

## Files
- For more details, results and limitations, please read our [research preprint]({{ '/assets/pdf/fairness_collective_paper.pdf' | relative_url }})
- [Here]({{ '/assets/pdf/fairness_collective_slides.pdf' | relative_url }}) are the slides for a non-technical talk I gave at the [Tübinegn Days of Digital Freedom](https://tdf.cttue.de/en/index.html)

## Collaborators
- Samira Samadi
- [Amartya Sanyal](https://amartya18x.github.io/)
- [Alexandru Țifrea](https://alex-tifrea.github.io/)

