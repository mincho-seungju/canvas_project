const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 
  }
  update() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}
// Variables
let canDraw = false;

window.addEventListener('mousedown', () => { canDraw = true; })
window.addEventListener('mouseup', () => { canDraw = false; })
window.addEventListener('mousemove', (e) => {
  const root = new Root(e.x, e.y);
  if(canDraw) {
    root.update();
  }
})
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})