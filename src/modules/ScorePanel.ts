// 定义表示记分牌的类
class ScorePanel{
    // score和level用来记录分数和等级
    score = 0;
    level = 1;

    // 设置一个变量限制等级
    maxLevel:number;
    // 设置一个变量表示多少分时升级
    upScore:number;

    // 分数和等级所在位置，在构造函数中进行初始化
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    constructor(maxLevel:number = 10,upScore:number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle =document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        if(this.score % this.upScore ===0){
            this.levelUp()
        }
    }

    levelUp(){
        if (this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel