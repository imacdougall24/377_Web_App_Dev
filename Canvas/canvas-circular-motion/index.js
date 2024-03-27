// Static Values & Functions
var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')



var colorArray = [
    '#127369',
    '#10403B',
    '#8AA6A3',
    '#637371',
    '#000000',
];

function randomDoubleFromRange(min, max) {
    return min + (Math.random() * (max-min+1))
}
function randomIntFromRange(min, max) {
    return Math.floor(min + (Math.random() * (max-min+1)))
}

function randomValueFromArray(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)]
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


// Objects
function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.radians = Math.random() * Math.PI*2
    this.velocity = 0.05
    this.distanceFromCenter = randomDoubleFromRange(50, 120)
    this.lastMouse = {
        x: x,
        y: y,
    }

    this.update = () => {
        const lastPoint = {
            x: this.x,
            y: this.y,
        }

        // Move Points over time
        this.radians += this.velocity

        // Drag Effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05
        // Circular Motion
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter

        this.draw(lastPoint);
    }

    this.draw = (lastPoint) => {
        c.beginPath()
        c.strokeStyle = this.color
        c.lineWidth = this.radius
        c.moveTo(lastPoint.x, lastPoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        // As Arc (looks worse w trails)
            // c.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false)
            // c.fillStyle = this.color
            // c.fill()
        c.closePath()
    }
}


// Execution
let particles = []
function init() {
    particles = []
    
    for(let i = 0; i < 50; i++) {
        var radius = (Math.random() * 2) + 1
        particles.push(new Particle(canvas.width/2, canvas.height/2, radius, randomValueFromArray(colorArray)))
    }


}
function animate() {
    requestAnimationFrame(animate)

    c.fillStyle = 'rgba(255, 255, 255, .1)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    // c.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
        particle.update()
    })
    
}

init()
animate()

