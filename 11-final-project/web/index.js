const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64*16 // 1024
canvas.height = 64*9 // 576

var mouse = {
    x: undefined,
    y: undefined,
}

maxRadius = 40;
gravity = .1;
friction = .5;


var colorArray = [
    '#127369',
    '#10403B',
    '#8AA6A3',
    '#637371',
    '#000000',
];

const player = new Player({
    imageSrc: '../img/player.svg',
})

let level = 1
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks

            if (player.currentAnimation)
                player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
            })
        }
    },
}



function Circle(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = Math.random() * 3 + 1;
    this.minRadius = this.radius;

    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.x = canvas.width - this.radius;
            this.dx = -this.dx * friction;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy * friction;
            this.y = canvas.height - this.radius;
        } else {
            this.dy += gravity * this.minRadius;
        }

        
        this.x += this.dx;
        this.y += this.dy;
        
        // interactivity
        if (mouse.x - this.x < 50 &&
            mouse.x - this.x > -50 && 
            mouse.y - this.y < 50 && 
            mouse.y - this.y > -50 ) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            } 
        } 
        else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}



var circleArray = [];
function init() {
    
    circleArray = [];
    for (var i = 0; i < 100; i++) {
        
        var radius = 30;
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 1;
        var dy = (Math.random() - 0.5) * 1;

        circleArray.push(new Circle(x, y, dx, dy));
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}


animate();
init();