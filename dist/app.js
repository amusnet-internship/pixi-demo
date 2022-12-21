import * as PIXI from '../node_modules/pixi.js/dist/pixi.mjs';
let alive = true;
document.querySelector('button').addEventListener('click', () => alive = false);
const app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);
const cat = PIXI.Sprite.from('cat.jpg');
const dog = PIXI.Sprite.from('dog.jpg');
dog.x = 400;
dog.y = 300;
app.stage.addChild(cat);
app.stage.addChild(dog);
update();
function update() {
    dog.pivot.x = dog.width / 2;
    dog.pivot.y = dog.height / 2;
    // cat.x++;
    dog.rotation += Math.PI / 100;
    if (alive) {
        requestAnimationFrame(update);
    }
}
