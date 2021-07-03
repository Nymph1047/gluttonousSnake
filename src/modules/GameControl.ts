import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";

class GameControl{
    food:Food;
    snake:Snake;
    scorePanel:ScorePanel;
    // 创建一个属性来存储蛇的移动方向，（也就是按键的方向）
    direction:string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;
    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    // ArrowUp Up
    // ArrowDown Down
    // ArrowLeft Left
    // ArrowRight Right

    // 创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // 修改direction属性
        this.direction = event.key;
    }
    run(){
        // 获取现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction){
            case "ArrowUp":
            case "Up":
            case "shift":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        this.checkEat(X,Y)
        // 修改蛇的X和Y值
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch (e){
            alert(e.message + 'Game Over!')

            // 将isLive设置为false
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level -1)*30)
    }

    // 定义检查蛇是否吃到食物的方法
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y){
            this.food.change();
            this.snake.addBody();
            this.scorePanel.addScore();
        }
    }
}

export default GameControl