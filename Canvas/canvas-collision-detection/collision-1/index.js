
var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

// Helpful Functions
function randomDoubleFromRange(min, max) {
    return min + (Math.random() * (max-min+1))
}
function randomIntFromRange(min, max) {
    return Math.floor(min + (Math.random() * (max-min+1)))
}

function randomValueFromArray(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)]
}

function getDistance(x1,y1, x2,y2) {
    let xDistance = x2-x1
    let yDistance = y2-y1

    return Math.sqrt( Math.pow(xDistance, 2) + Math.pow(yDistance, 2) )
}



// Event Listeners
var mouse = {
    x: undefined,
    y: undefined,
}
window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    },
);


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
})



function Circle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color

    this.update = function() {
        this.draw()
    }

    this.draw = function() {
       c.beginPath()
       c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
       c.fillStyle = this.color;
       c.fill()
       c.closePath()
    }
}

let circle1
let circle2

function init() {
    circle1 = new Circle(300,300,100,'red')
    circle2 = new Circle(undefined,undefined,30,'blue')
}


function animate() {
    requestAnimationFrame(animate)

    c.fillStyle = 'rgba(0, 0, 0, .1)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    circle1.update()
    circle2.x = mouse.x
    circle2.y = mouse.y
    circle2.update()

    if(getDistance(circle1.x, circle1.y,  circle2.x, circle2.y) < circle1.radius + circle2.radius) {
        circle1.color = 'green'
    }
    else {
        circle1.color = 'red'
    }
}


init()
animate()