# Space Invaders

🇩🇪 [Deutsche Version](README.md)

A classic Space Invaders game built with [Phaser 3](https://phaser.io/), created as a teaching project to introduce game design and development concepts to a 12-year-old student.

## About

This project was developed as an educational tool to teach fundamental game development concepts in a fun, approachable way. By building a familiar arcade game step by step, the student learns about:

- **Game loops** — how `update()` drives frame-by-frame logic
- **Player input** — keyboard controls for movement and shooting
- **Physics & collision detection** — using Phaser's Arcade Physics for bullets, aliens, and the player
- **Game state management** — tracking score, game over conditions, and restart flow
- **Sprite and texture management** — loading and displaying images, explosions, and backgrounds
- **Enemy AI** — alien formation movement patterns and timed enemy shooting

## How to Play

| Control | Action |
|---------|--------|
| `←` `→` | Move ship |
| `Space` | Shoot |
| `R` | Restart |

Destroy all 18 aliens before they reach the bottom of the screen. Dodge enemy fire!

## Tech Stack

- **Phaser 3** (loaded via CDN)
- Vanilla JavaScript (no build tools or bundler required)
- Simple multi-file structure for easy readability

## Getting Started

1. Clone the repo
2. Open `index.html` in a browser (or use a local server like Live Server)
3. Play!

## Project Structure

```
index.html          # Entry point
js/
  globals.js        # Game constants and shared variables
  graphics.js       # Texture and background drawing
  aliens.js         # Alien formation, movement, and edge detection
  bullets.js        # Player and enemy bullet logic
  scene.js          # Phaser scene lifecycle (preload, create, update)
  main.js           # Phaser game configuration and launch
assets/images/      # Sprites: ship, alien, background, explosions
```
