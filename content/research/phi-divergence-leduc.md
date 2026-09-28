---
title: "Dynamic φ-Divergence Selection for Safe Exploitation in Leduc Hold'em"
weight: 2
summary: "With Shayan Ravari, Department of Statistics, Columbia University"
---

*Justin Corke and Shayan Ravari · Department of Statistics, Columbia University*

In a two-player zero-sum game, playing to exploit an opponent's mistakes earns more against weak players but leaves you open to being countered. Anchoring to a Nash equilibrium is safe but leaves winnings on the table. This is the **exploitation–exploitability trade-off**. We asked a less-studied question: when a strategy deviates from its safe baseline, *how should that deviation be measured?*

**What we did**

- Regularized a response policy toward Nash equilibrium using six φ-divergences (Jensen–Shannon, squared Hellinger, total variation, forward and reverse KL, χ²) and swept the regularization strength λ to trace each one's Pareto frontier in Leduc Hold'em (936 information states).
- Derived a theoretical envelope bounding the exploitability gap, whose divergence-specific constant recovers the ordering seen on the frontier.
- Framed the choice of (φ, λ) as a multi-armed bandit solved with Thompson sampling at several levels of risk aversion, against opponents drawn from a Beta-distributed mix of passive and aggressive play.

**What we found**

The high-EV leaders of the static frontier (Jensen–Shannon, squared Hellinger) win when the goal is expected value, but fall behind when the player is risk-averse, because they accumulate too much exploitability. The moderate performers (forward KL, χ²) do best in risk-averse settings because they drive exploitability down the most.

<figure>
  <img src="/images/projects/phi-divergence-best-arm.png" alt="Stacked bar chart of the bandit's best arm across 20 seeds for each risk level">
  <figcaption>Which divergence the bandit picked across 20 seeds, from risk-neutral (α = 0) to strongly risk-averse (α = 10).</figcaption>
</figure>
