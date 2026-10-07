---
title: "Century — Simulation, tuning, optimal play solver"
weight: 1
summary: "An online version of the board game, bots tuned for a fair game, and a solver for the fastest possible win"
---

<figure class="hero-shot">
  <img src="/images/projects/century-screenshot.jpg" alt="A five-player game in progress in the online version of Century: Golem Edition, with the golem row, merchant cards and the player's hand">
</figure>

## Engine

<p class="soon">Multiplayer link coming soon</p>

In the meantime, the code is on [GitHub](https://github.com/jcorkeacademia/century-golem-ai).

## Tuning bots for a fair game

I tuned interpretable bots, each of which scores a position with a weighted sum of twelve named features, using evolutionary search over tens of thousands of games. The tuned bot beats a greedy baseline 97.9% of the time. I then used the learned weights to build a better heuristic for the game. For instance, the model supports the idea that ending the game fast beats going for higher-point cards, that yellow crystals are worth far more than they look (roughly 2.3 yellows to 1 magenta), and that tracking your opponent's card cycle is largely irrelevant (those features were not significant).

## Optimal play solver

Using depth-first branch and bound (DFBB) and beam search, the solver searches for the fewest turns needed to win a solo game on a known deck. Across 500 deals, near-optimal play wins in about 33 turns, compared with 43 for the tuned bot. The solver largely follows the same pattern: build the card engine first, then claim golems quickly. The deal of cards and golems itself matters a lot, as near-optimal play ranges from 24 to 44 turns. I'm now simulating more games to get an empirical estimate of the fewest turns needed to win a game of *Century*.

Note two limitations of this approach: the game is single-player, and the search has perfect information, so it knows the order of the deck. I plan to relax these limitations gradually as my research continues.
