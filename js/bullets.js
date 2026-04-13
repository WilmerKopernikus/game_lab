function firePlayerBullet(scene) {
  const bullet = bullets.get(player.x, player.y - 28, 'playerBulletTexture');
  if (!bullet) return;

  bullet.setActive(true);
  bullet.setVisible(true);
  bullet.body.enable = true;
  bullet.body.reset(player.x, player.y - 28);
  bullet.setVelocity(0, -500);
  bullet.setDepth(6);
}

function fireEnemyBullet(scene) {
  const livingAliens = aliens.getChildren().filter(alien => alien.active);
  if (!livingAliens.length) return;

  const shooter = Phaser.Utils.Array.GetRandom(livingAliens);
  const bullet = enemyBullets.get(shooter.x, shooter.y + 24, 'enemyBulletTexture');
  if (!bullet) return;

  bullet.setActive(true);
  bullet.setVisible(true);
  bullet.body.enable = true;
  bullet.body.reset(shooter.x, shooter.y + 24);
  bullet.setVelocity(0, 220);
  bullet.setDepth(6);
}

function disableBullet(bullet) {
  bullet.disableBody(true, true);
  bullet.setVelocity(0, 0);
}

function cleanupOffscreenBullets() {
  bullets.getChildren().forEach(bullet => {
    if (bullet.active && bullet.y < -30) {
      disableBullet(bullet);
    }
  });

  enemyBullets.getChildren().forEach(bullet => {
    if (bullet.active && bullet.y > GAME_HEIGHT + 30) {
      disableBullet(bullet);
    }
  });
}
