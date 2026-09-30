---
title: "Dynamic φ-Divergence Selection for Safe Exploitation in Leduc Hold'em"
weight: 2
summary: "With Shayan Ravari, Department of Statistics, Columbia University"
---

<span class="status done">Paper · Spring 2026</span>

### Key results

We found that no single divergence is best for navigating the EV–Exploitability trade-off. The right choice depends on how much risk you are willing to take. For instance, if you are **chasing wins**, Jensen–Shannon is best (chosen in 19/20 runs), and if you want a **balanced** approach, choose Forward KL (17/20). If **safety** is your utmost concern, χ² with strong regularization (large λ) is best, since it has the lowest exploitability of any strategy tested. Our paper provides a practical rule for how aggressively a poker bot should exploit its model of an opponent, given its tolerance for risk.

### Abstract

We study how the choice of ϕ-divergence used to regularize a response policy shapes the Exploitation-Exploitability tradeoff in Leduc Hold'em. We sweep six standard divergences across a grid of regularization strengths λ and trace the resulting Pareto frontiers. We then derive a theoretical envelope bounding the Exploitability gap for each of the divergences in the set and compare the results to the Pareto frontiers. To study adaptive divergence selection, we frame the (ϕ, λ) choice problem as a multi-armed bandit and solve it with Thompson Sampling under different levels of risk tolerance. Opponent uncertainty is modeled through a Beta-distributed mixture of passive and aggressive strategies that varies from round to round. We learn that the high-EV leaders of the static frontier (Jensen-Shannon, Squared Hellinger) perform well in EV-focused regimes, but are subpar when the player is risk-averse. This is because they accumulate too much Exploitability to survive the properties of their divergence penalty. On the other hand, the moderate performers of the static frontier (Forward KL, Chi-Squared) perform the best in these risk-averse environments because they drive Exploitability down the most.

{{< paper dir="/papers/phi-divergence-leduc" pages="11" pdf="/papers/phi-divergence-leduc.pdf" >}}
