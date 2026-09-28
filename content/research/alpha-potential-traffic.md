---
title: "α-Potential Games for Mixed-Autonomy Traffic"
weight: 1
summary: "M.A. mentored research with Prof. Sharon Di, Columbia University · 2026"
---

*M.A. mentored research · Advisor: Prof. Sharon Di · Columbia University · May 2026*

How should a large population of connected and automated vehicles (CAVs) be coordinated when they share the road with human drivers whose behavior is unpredictable and non-cooperative? Centralized control does not scale, and mean-field games lose the local, pairwise structure of real driving decisions.

Di et al. (2025) showed that an **α-potential game** formulation reduces finding an approximate Nash equilibrium among finitely many CAVs to a single optimization problem. This project asks whether that framework survives in the **mixed-autonomy** setting, where CAVs interact with a macroscopic field of human-driven vehicles (HDVs).

**What I did**

- Modeled HDVs as a continuum density governed by a Lighthill–Whitham–Richards (LWR) conservation law whose flux depends on total traffic, while keeping CAVs as a finite-player game.
- Added an HDV-exposure penalty to each CAV's running cost through a kernel-smoothed view of the HDV density.
- Found and corrected a double-counting issue in a first formulation, where a CAV-density penalty duplicated the existing pairwise interaction term.
- Studied how a single CAV's deviation propagates through the coupled HDV field, and derived the resulting α bound for the mixed-traffic game.
- Ran numerical experiments on a ring road to validate the formulation.

<figure>
  <img src="/images/projects/alpha-density-uniform.png" alt="HDV density heatmap on a ring road over time with three CAV trajectories">
  <figcaption>HDV density on a ring road at convergence, with three CAV trajectories and their targets.</figcaption>
</figure>
