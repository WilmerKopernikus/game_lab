# Space Invaders

🇬🇧 [English version](README.en.md)

Ein klassisches Space-Invaders-Spiel, entwickelt mit [Phaser 3](https://phaser.io/). Dieses Projekt wurde als Lehrprojekt erstellt, um einem 12-jährigen Schüler Spieledesign und -entwicklung näherzubringen.

## Über das Projekt

Dieses Projekt dient als praktisches Lernwerkzeug, um grundlegende Konzepte der Spieleentwicklung auf eine unterhaltsame und verständliche Weise zu vermitteln. Durch den schrittweisen Aufbau eines bekannten Arcade-Spiels lernt der Schüler:

- **Game Loop** — wie `update()` die Logik Bild für Bild steuert
- **Spielereingaben** — Tastatursteuerung für Bewegung und Schießen
- **Physik & Kollisionserkennung** — Einsatz von Phasers Arcade Physics für Kugeln, Aliens und den Spieler
- **Spielzustandsverwaltung** — Punktestand, Game-Over-Bedingungen und Neustart
- **Sprite- und Texturverwaltung** — Laden und Anzeigen von Bildern, Explosionen und Hintergründen
- **Gegner-KI** — Bewegungsmuster der Alien-Formation und zeitgesteuerter Beschuss

## Steuerung

| Taste | Aktion |
|-------|--------|
| `←` `→` | Raumschiff bewegen |
| `Leertaste` | Schießen |
| `R` | Neustart |

Zerstöre alle 18 Aliens, bevor sie den unteren Bildschirmrand erreichen. Weiche dem feindlichen Beschuss aus!

## Technologien

- **Phaser 3** (per CDN geladen)
- Vanilla JavaScript (kein Build-Tool oder Bundler nötig)
- Einfache Dateistruktur für gute Lesbarkeit

## Erste Schritte

1. Repository klonen
2. `index.html` im Browser öffnen (oder einen lokalen Server wie Live Server verwenden)
3. Spielen!

## Projektstruktur

```
index.html          # Einstiegspunkt
js/
  globals.js        # Spielkonstanten und gemeinsame Variablen
  graphics.js       # Texturen und Hintergrund
  aliens.js         # Alien-Formation, Bewegung und Randerkennung
  bullets.js        # Spieler- und Gegner-Kugellogik
  scene.js          # Phaser-Szene (preload, create, update)
  main.js           # Phaser-Spielkonfiguration und Start
assets/images/      # Sprites: Raumschiff, Alien, Hintergrund, Explosionen
```
