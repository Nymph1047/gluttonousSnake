class Snake{
    // 表示蛇头的元素
    head:HTMLElement;
    // 蛇的身体
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement;


    constructor() {
        this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake>div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
    }

    // 蛇头的坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }

    set X(value){
        if (this.X === value){
            return;
        }
        if (value < 0 || value >290){
            throw new Error('蛇撞墙了')
        }

        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft ===value){
            if (value >this.X){
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px';
        this.checkHeadBody()
    }
    set Y(value){
        if (this.Y === value){
            return;
        }
        if (value < 0 || value >290){
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop ===value){
            if (value >this.Y){
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }
    // 蛇增加身体的方法
    // 在element中添加一个div
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>')
    }
    // 添加一个蛇身体移动的方法
    moveBody(){
        for (let i = this.bodies.length-1;i>0;i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查蛇的身体撞到
    checkHeadBody(){
        for (let i =1;i<this.bodies.length;i++){
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error('撞到自己了！')
            }
        }
    }
}

export default Snake