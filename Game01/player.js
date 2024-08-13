class player{
    constructor(game){
        this.game=game;
        this.width=100;
        this.height=91.3;
        this.x=0;
        this.y=100;
    }
    //move it around based on the user's input
    update(){

    }
    //draw current frame and co-ordinates
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}