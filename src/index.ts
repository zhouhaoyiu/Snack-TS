import './index.less'
import Food from './modules/Food';
import ScorePanel from './modules/ScorePanel';
//分数和等级

const food = new Food()
const scorePanel = new ScorePanel()
scorePanel.addScore()
food.change()
console.log(food.X, food.Y);
