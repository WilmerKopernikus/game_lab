const GAME_WIDTH = 900;
const GAME_HEIGHT = 600;
const BACKGROUND_IMAGE_KEY = 'backgroundTexture';
const BACKGROUND_IMAGE_PATH = 'assets/images/background.png';

const EXPLOSION_FRAME_KEYS = ['explosion1', 'explosion2', 'explosion3'];
const EXPLOSION_FRAME_PATHS = [
  'assets/images/explosion1.png',
  'assets/images/explosion2.png',
  'assets/images/explosion3.png'
];
const EXPLOSION_FRAME_DURATION = 150;

let player;
let cursors;
let fireKey;
let restartKey;
let bullets;
let enemyBullets;
let aliens;
let score = 0;
let scoreText;
let infoText;
let endText;
let gameOver = false;
let alienDirection = 1;
let alienStepX = 18;
let alienStepY = 22;
let alienMoveInterval = 550;
let lastAlienMoveTime = 0;
let enemyShootEvent;
