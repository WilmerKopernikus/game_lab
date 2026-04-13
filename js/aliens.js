function createAlienFormation(scene) {
  const rows = 3;
  const cols = 6;
  const startX = 120;
  const startY = 100;
  const gapX = 120;
  const gapY = 100;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const alien = scene.physics.add.image(
        startX + col * gapX,
        startY + row * gapY,
        'alienTexture'
      );

      alien.setDisplaySize(85, 85);
      alien.setImmovable(true);
      alien.body.setAllowGravity(false);
      alien.body.moves = false;
      alien.body.setSize(85, 85);
      aliens.add(alien);
    }
  }
}

function moveAliens(scene, time) {
  if (time < lastAlienMoveTime + alienMoveInterval) return;
  lastAlienMoveTime = time;

  let hitEdge = false;
  const livingAliens = aliens.getChildren().filter(alien => alien.active);

  for (const alien of livingAliens) {
    alien.x += alienStepX * alienDirection;
    if (alien.x >= GAME_WIDTH - 50 || alien.x <= 50) {
      hitEdge = true;
    }
  }

  if (hitEdge) {
    alienDirection *= -1;
    for (const alien of livingAliens) {
      alien.y += alienStepY;
    }
  }
}

function checkIfAliensReachedBottom(scene) {
  const reachedBottom = aliens.getChildren().some(alien => alien.active && alien.y >= GAME_HEIGHT - 110);
  if (reachedBottom) {
    finishGame(scene, 'Game Over');
  }
}
