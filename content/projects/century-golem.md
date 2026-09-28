---
title: "Century: Golem Edition — engine, bots and solver"
weight: 1
summary: "An online version of the board game, with interpretable bots and a solver for the fastest possible win"
---

An online implementation of the board game *Century: Golem Edition*, built engine-first: a single authoritative Python rules engine sits underneath the multiplayer server and all of the AI work, so the rules are never implemented twice.

**The platform**

- A rules engine covering the full card set (43 merchant and 36 golem cards), verified against byte-identical state traces.
- A FastAPI + WebSocket server with rooms, reconnects and a practice mode against bots at three difficulties.
- A React client with a full game board, drag-to-pay and custom card art.

**The bots: what matters when playing?**

Interpretable bots score positions with a weighted sum of twelve named features, tuned by evolutionary search (CMA-ES) over tens of thousands of games. The tuned bot beats a greedy baseline 97.9% of the time. Along the way the experiments suggested that ending the game fast beats scoring well, and that yellow crystals are worth far more than they look (magenta is worth about 2.3 yellows, not 4).

**The solver: how fast can one player win?**

A branch-and-bound and beam-search solver, modeled on build-order optimization in StarCraft, looks for the fewest turns to six golems on a known deck. Across 500 deals, near-optimal plans win in 33.1 turns on average, against 43.3 for the tuned bot, with a proven bracket of lower and upper bounds for each deal. A guided mode in the live game highlights the solver's next move and re-plans when you leave the path.
