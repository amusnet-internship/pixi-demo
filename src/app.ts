import * as PIXI from 'pixi.js';


let alive = true;
document.querySelector('button').addEventListener('click', () => alive = false)
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view as HTMLCanvasElement);

/*
const cat = PIXI.Sprite.from('cat.jpg');
const dog = PIXI.Sprite.from('dog.jpg');
dog.x = 400;
dog.y = 300;

app.stage.addChild(cat);
app.stage.addChild(dog);
*/
const grid = new PIXI.Graphics();
grid.lineStyle({ color: 0xffffff, width: 1, alpha: 0.2 });

for (let x = 0; x < 800; x += 50) {
    if ((x - 50) % 200 == 0) {
        grid.line.alpha = 0.5;
    } else {
        grid.line.alpha = 0.2;
    }
    grid.moveTo(x, 0);
    grid.lineTo(x, 600);
}
for (let y = 0; y < 600; y += 50) {
    if ((y - 50) % 200 == 0) {
        grid.line.alpha = 0.5;
    } else {
        grid.line.alpha = 0.2;
    }
    grid.moveTo(0, y);
    grid.lineTo(800, y);
}

const ball = new PIXI.Container();

// Body
const body = new PIXI.Graphics();
body.beginFill(0xff0000);
body.drawCircle(25, 25, 25);
body.endFill();
body.pivot.x = 25;
body.pivot.y = 25;

// Left wing
const leftWing = new PIXI.Graphics();
leftWing.beginFill(0x0000ff);
leftWing.drawRect(0, 0, 50, 20);
leftWing.endFill();
leftWing.pivot.x = 50;
leftWing.pivot.y = 10;
leftWing.x = -25;

// Right wing
const rightWing = new PIXI.Graphics();
rightWing.beginFill(0x0000ff);
rightWing.drawRect(0, 0, 50, 20);
rightWing.endFill();
rightWing.pivot.y = 10;
rightWing.x = 25;


ball.addChild(body);
ball.addChild(leftWing);
ball.addChild(rightWing);

ball.x = 100;
ball.y = 100;

app.stage.addChild(grid);
app.stage.addChild(ball);

app.ticker.add(update);

const vel = {
    x: 1,
    y: 1
}

let elapsed = 0;

function update(dt: number) {
    elapsed += dt;


    if (alive) {
        ball.x += vel.x;
        ball.y += vel.y;

        if (ball.x > 775 && vel.x > 0) {
            vel.x = -1;
        } else if (ball.x < 25 && vel.x < 0) {
            vel.x = 1;
        }

        if (ball.y > 575 && vel.y > 0) {
            vel.y = -1;
        } else if (ball.y < 25 && vel.y < 0) {
            vel.y = 1;
        }

        leftWing.rotation = (Math.PI / 6) * Math.sin(elapsed / 10);
        rightWing.rotation = -(Math.PI / 6) * Math.sin(elapsed / 10);

        /*
        dog.pivot.x = dog.width / 2;
        dog.pivot.y = dog.height / 2;

        // cat.x++;
        dog.rotation += Math.PI / 100;
        */
    }
}
