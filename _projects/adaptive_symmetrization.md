---
layout: page
title: Adaptive Symmetrization of the KL Divergence
description: An approach to non-adversarially minimize the symmetric Jeffreys divergence.
img: assets/img/symmetric_kl/teaser.png
importance: 1
category: work
related_publications: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/symmetric_kl/teaser.png" title="Illustration of different training dynamics" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Illustration of different training dynamics, where the goal is to train $p_{\theta}$ and $q_{\psi}$ to match the data distribution $\pi$.
    Each point represents a probability distribution in conceptual distribution space, and the arrows indicate the direction of gradient descent (GD).
    (a) In maximum likelihood estimation (MLE), GD minimizes the divergence $D_{\text{KL}}\left(\pi \parallel p_{\theta} \right)$.
    In practice, GD minimizes a finite sample estimation of the KL, rather than the true KL. 
    (b) GD of generative adversarial networks (GAN) pulls the generator $p_{\theta}$ towards the discriminator $q_{\psi}$ and the discriminator towards $\pi$, but it also pushes $q_{\psi}$ away from $p_{\theta}$.
    This repelling dynamic makes GAN training unstable.
    (c) In our framework, GD pulls $p_{\theta}$ and $q_{\psi}$ towards each other, while also pulling both towards $\pi$.
    The mutual attraction stabilizes training.
</div>


## Introduction
Many tasks in machine learning can be described as learning a distribution $\pi$ from a finite set of samples.
The most widely used approach is to minimize a statistical divergence.
A common divergence is the forward KL divergence, as it is equivalent to cross entropy, or maximum likelihood estimation (MLE).
However, the KL divergence is not symmetric and may lead the trained model to overestimate the weight of modes (a behavior also known as mode-covering).
While minimizing the reverse KL tends to a mode-seeking behavior, which can counteract the mode-covering of the forward KL, this minimization requires access to the distribution we are trying to learn, which is impossible when given only finite data samples.

GANs propose another approach to minimize a symmetric divergence based on variational representations, where an additional model is introduced to represent the divergence as an optimization problem.
This approach results in a min-max objective that is unstable to train and sensitive to the choice of hyper-parameters.

In this work, we propose to introduce an additional model to serve as a proxy to the true distribution $\pi$ and use it to approximate the reverse KL.
By minimizing the sum of the forward and reverse KLs, also known as the Jeffreys divergence, we have both mode-covering and mode-seeking behaviors.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/symmetric_kl/results.png" title="Comparison with NF and WGAN" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of negative log-likelihood (NLL) with normalizing flows (NF) and Wasserstein GAN (WGAN).
    The left graph (a) shows that on a small dataset, NF will learn the empirical distribution and with time will diverge from the true distributin.
    Our method achieves a smaller (better) and consistent NLL. 
    The right graph (b) shows that increasing the learning rate prevents WGAN from training, while barely affecting our method.
</div>

## Resources
- For more details, results and limitations, please read our [research preprint](https://arxiv.org/abs/2511.11159)


## Collaborators
- [Luiz Chamon](https://luizchamon.com/)

