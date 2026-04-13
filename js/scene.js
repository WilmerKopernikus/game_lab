function preload() {
  this.load.image('shipTexture', 'ship.png');
  this.load.image('alienTexture', 'assets/images/alien.png');
  this.load.image(BACKGROUND_IMAGE_KEY, BACKGROUND_IMAGE_PATH);
  for (let i = 0; i < EXPLOSION_FRAME_KEYS.length; i++) {
    this.load.image(EXPLOSION_FRAME_KEYS[i], EXPLOSION_FRAME_PATHS[i]);
  }
}

function create() {
  const scene = this;

  gameOver = false;
  score = 0;
  alienDirection = 1;
  lastAlienMoveTime = 0;

  drawBackground(scene);
  createTextures(scene);

  bullets = scene.physics.add.group({
    classType: Phaser.Physics.Arcade.Image,
    maxSize: 30,
    runChildUpdate: false
  });

  enemyBullets = scene.physics.add.group({
    classType: Phaser.Physics.Arcade.Image,
    maxSize: 30,
    runChildUpdate: false
  });

  aliens = scene.physics.add.group({
    immovable: true,
    allowGravity: false
  });

  player = scene.physics.add.image(GAME_WIDTH / 2, GAME_HEIGHT - 60, 'shipTexture');
  player.setDisplaySize(85, 85);
  player.setCollideWorldBounds(true);
  player.setDepth(5);
  player.body.setSize(player.width, player.height);
  player.speed = 320;
  player.lastFired = 0;

  createAlienFormation(scene);

  cursors = scene.input.keyboard.createCursorKeys();
  fireKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  restartKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

  scoreText = scene.add.text(18, 14, 'Score: 0', {
    fontSize: '24px',
    color: '#ffffff'
  }).setDepth(10);

  infoText = scene.add.text(18, 44, 'Move: <- ->   Shoot: SPACE   Restart: R', {
    fontSize: '18px',
    color: '#cfd8ff'
  }).setDepth(10);

  endText = scene.add.text(GAME_WIDTH / 2, GAME_HEIGHT / 2, '', {
    fontSize: '40px',
    color: '#ffffff',
    align: 'center'
  }).setOrigin(0.5).setDepth(20);

  scene.physics.add.overlap(bullets, aliens, handleBulletAlienCollision, null, scene);
  scene.physics.add.overlap(enemyBullets, player, handleEnemyBulletPlayerCollision, null, scene);

  enemyShootEvent = scene.time.addEvent({
    delay: 900,
    loop: true,
    callback: () => {
      if (!gameOver) {
        fireEnemyBullet(scene);
      }
    }
  });
}

function update(time) {
  if (Phaser.Input.Keyboard.JustDown(restartKey)) {
    this.scene.restart();
    return;
  }

  if (gameOver) {
    player.setVelocityX(0);
    return;
  }

  player.setVelocityX(0);

  if (cursors.left.isDown) {
    player.setVelocityX(-player.speed);
  } else if (cursors.right.isDown) {
    player.setVelocityX(player.speed);
  }

  if (Phaser.Input.Keyboard.JustDown(fireKey) && time > player.lastFired + 220) {
    firePlayerBullet(this);
    player.lastFired = time;
  }

  moveAliens(this, time);
  cleanupOffscreenBullets();
  checkIfAliensReachedBottom(this);
}

function handleBulletAlienCollision(bullet, alien) {
  disableBullet(bullet);
  alien.disableBody(true, true);

  score += 10;
  scoreText.setText('Score: ' + score);

  if (aliens.countActive(true) === 0) {
    finishGame(this, 'You Win!');
  }
}

function handleEnemyBulletPlayerCollision(playerSprite, bullet) {
  disableBullet(bullet);
  finishGame(this, 'Game Over');
}

function playExplosion(scene, x, y, onComplete) {
  const allLoaded = EXPLOSION_FRAME_KEYS.every(function (key) {
    return scene.textures.exists(key);
  });

  if (!allLoaded) {
    onComplete();
    return;
  }

  const explosionSprite = scene.add.image(x, y, EXPLOSION_FRAME_KEYS[0]);
  explosionSprite.setDisplaySize(85, 85);
  explosionSprite.setDepth(15);
  let frameIndex = 0;

  scene.time.addEvent({
    delay: EXPLOSION_FRAME_DURATION,
    repeat: EXPLOSION_FRAME_KEYS.length - 1,
    callback: function () {
      frameIndex++;
      if (frameIndex < EXPLOSION_FRAME_KEYS.length) {
        explosionSprite.setTexture(EXPLOSION_FRAME_KEYS[frameIndex]);
      }
      if (frameIndex >= EXPLOSION_FRAME_KEYS.length - 1) {
        scene.time.delayedCall(EXPLOSION_FRAME_DURATION, function () {
          explosionSprite.destroy();
          onComplete();
        });
      }
    }
  });
}

function finishGame(scene, message) {
  if (gameOver) return;

  gameOver = true;
  player.setVelocity(0, 0);

  if (enemyShootEvent) {
    enemyShootEvent.remove(false);
  }

  if (message === 'Game Over') {
    player.setVisible(false);
    playExplosion(scene, player.x, player.y, function () {
      endText.setText(message + '\n\nPress R to restart');
    });
  } else {
    player.setTint(0x888888);
    endText.setText(message + '\n\nPress R to restart');
  }
}
