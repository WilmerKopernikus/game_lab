function drawBackground(scene) {
  if (scene.textures.exists(BACKGROUND_IMAGE_KEY)) {
    const background = scene.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, BACKGROUND_IMAGE_KEY);
    background.setDisplaySize(GAME_WIDTH, GAME_HEIGHT);
    background.setDepth(-10);
  } else {
    const g = scene.add.graphics();
    g.fillStyle(0x000000, 1);
    g.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  }
}

function createTextures(scene) {
  if (!scene.textures.exists('alienTextureA')) {
    const g = scene.add.graphics();

    g.clear();
    g.fillStyle(0xf72585, 1);
    g.fillTriangle(20, 2, 6, 18, 34, 18);
    g.fillStyle(0xffba08, 1);
    g.fillTriangle(2, 26, 12, 16, 16, 34);
    g.fillStyle(0xf72585, 1);
    g.fillTriangle(20, 14, 10, 34, 30, 34);
    g.fillStyle(0xffba08, 1);
    g.fillTriangle(38, 26, 28, 16, 24, 34);
    g.generateTexture('alienTextureA', 85, 85);

    g.clear();
    g.fillStyle(0x7209b7, 1);
    g.fillTriangle(20, 2, 6, 18, 34, 18);
    g.fillStyle(0x4cc9f0, 1);
    g.fillTriangle(2, 26, 12, 16, 16, 34);
    g.fillStyle(0x7209b7, 1);
    g.fillTriangle(20, 14, 10, 34, 30, 34);
    g.fillStyle(0x4cc9f0, 1);
    g.fillTriangle(38, 26, 28, 16, 24, 34);
    g.generateTexture('alienTextureB', 85, 85);

    g.clear();
    g.fillStyle(0xffffff, 1);
    g.fillRect(0, 0, 4, 16);
    g.generateTexture('playerBulletTexture', 4, 16);

    g.clear();
    g.fillStyle(0xff6b6b, 1);
    g.fillRect(0, 0, 4, 16);
    g.generateTexture('enemyBulletTexture', 4, 16);

    g.destroy();
  }
}
