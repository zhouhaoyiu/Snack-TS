import Snake from "./snack";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel
  //存储移动方向
  direction: string = ''
  isLive = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  init() {
    //绑定按下事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key
  }
  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break;

      case 'ArrowDown':
      case 'Down':
        Y += 10
        break;

      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break;

      case 'ArrowRight':
      case 'Right':
        X += 10
        break;
    }
    this.snake.X = X
    this.snake.Y = Y
    setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }
}

export default GameControl