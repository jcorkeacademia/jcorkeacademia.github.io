---
title: "α-Potential Games for Mixed-Autonomy Traffic"
weight: 1
summary: "M.A. mentored research with Prof. Sharon Di, Columbia University · 2026"
---

### Abstract

How should a population of connected and automated vehicles (CAVs) be coordinated when they share the road with unpredictable human-driven vehicles (HDVs)? Di et al. (2025) showed that an α-potential game reduces finding an approximate Nash equilibrium among finitely many CAVs to a single optimization problem, but only for CAVs in isolation. This report extends the framework to mixed autonomy. HDVs are modeled as a macroscopic density governed by a Lighthill–Whitham–Richards (LWR) conservation law whose flux depends on the CAV density, and each CAV pays a penalty for its exposure to human traffic. We construct a candidate potential and show that α splits into the pairwise-asymmetry term of the pure-CAV setting plus a new HDV spillover term, which we bound using the Colombo–Mercier–Rosini stability estimate for scalar balance laws, under regularity conditions that are still being verified. We also propose a fixed-point algorithm that alternates between optimizing CAV policies and re-solving the LWR equation, as the basis for validating the bound numerically.

{{< paper dir="/papers/alpha-potential-traffic" pages="9" pdf="/papers/alpha-potential-traffic.pdf" >}}
