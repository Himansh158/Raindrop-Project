class RainDrop1 {
    constructor(){
        this.image = loadImage("Soccer.png")
        this.x = random(0,400);
        this.y = random(3,200);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.x, this.y, 70,70);
        pop();
    }

    update(){
        if(this.y>400){
            this.x = random(0,400);
            this.y = random(3,200);
        }

        this.y = this.y + 50;
    }
}