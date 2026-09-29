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

## Tuning bots for a fair game

<div class="stats">
<div class="stat"><b>97.9%</b><span>win rate of the tuned bot against a greedy baseline</span></div>
<div class="stat"><b>2.3×</b><span>a magenta crystal is worth about 2.3 yellows, not 4</span></div>
</div>

What the bots learned: ending the game fast beats scoring well, yellow crystals are worth far more than they look, and paying attention to your opponent barely helps.

## Optimal play solver

<div class="stats">
<div class="stat"><b>≈33</b><span>turns for near-optimal solo play, averaged over 500 deals</span></div>
<div class="stat"><b>43</b><span>turns for the tuned bot on the same deals</span></div>
</div>

The winning pattern: build your card engine first, then claim golems quickly. Which deal you get matters a lot, from 24 to 44 turns.
