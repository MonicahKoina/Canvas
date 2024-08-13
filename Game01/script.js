import { player } from "./player"; 
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const cxt = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    class Game{
        constructor(width, height){
            this.width= width;
            this.height=height;
            this.player= new player();
        }
        update(){

        }
        draw(context){
            this.player.draw(context)

        }
    }
    const game= new Game(canvas.width, canvas.height);
    console.log(game);
})