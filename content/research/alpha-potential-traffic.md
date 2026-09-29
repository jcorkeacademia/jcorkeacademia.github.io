---
title: "α-Potential Games for Mixed-Autonomy Traffic"
weight: 1
summary: "M.A. mentored research with Prof. Sharon Di, Columbia University · 2026"
---

<span class="status wip">Theory complete under stated assumptions · Simulations in progress</span>

<div class="keybox">
<h4>Key results</h4>
<ul>
<li><b>A bound for mixed traffic.</b> The error of the single-optimization shortcut splits into the car-to-car term from the pure-autonomous case plus one new term for the human-traffic "spillover", which we bound with a PDE stability estimate.</li>
<li><b>Consistent with prior work.</b> If human traffic does not react to the autonomous cars, the original bound is recovered exactly.</li>
<li><b>A working algorithm.</b> A fixed-point scheme that alternates between optimizing car policies and re-solving the traffic PDE, implemented in Python.</li>
</ul>
<p class="why"><b>Why it matters:</b> a fleet of self-driving cars can reach stable, near-equilibrium behavior around human drivers by solving one optimization problem, instead of a full many-player game. That is a path to coordination that scales without a central controller.</p>
</div>

### Abstract

How should a population of connected and automated vehicles (CAVs) be coordinated when they share the road with unpredictable human-driven vehicles (HDVs)? Di et al. (2025) showed that an α-potential game reduces finding an approximate Nash equilibrium among finitely many CAVs to a single optimization problem, but only for CAVs in isolation. This report extends the framework to mixed autonomy. HDVs are modeled as a macroscopic density governed by a Lighthill–Whitham–Richards (LWR) conservation law whose flux depends on the CAV density, and each CAV pays a penalty for its exposure to human traffic. We construct a candidate potential and show that α splits into the pairwise-asymmetry term of the pure-CAV setting plus a new HDV spillover term, which we bound using the Colombo–Mercier–Rosini stability estimate for scalar balance laws, under regularity conditions that are still being verified. We also propose a fixed-point algorithm that alternates between optimizing CAV policies and re-solving the LWR equation, as the basis for validating the bound numerically.

{{< paper dir="/papers/alpha-potential-traffic" pages="9" pdf="/papers/alpha-potential-traffic.pdf" >}}
