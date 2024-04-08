
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
)


window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    init()
})



function Particle(x, y, radius, color) {
    this.x = x
    this.y = y
    this.velocity = {
        x: (Math.random() -.5) * 10,
        y: (Math.random() -.5) * 10,
    }
    this.radius = radius
    this.color = color
    this.mass = 1

    this.update = function(particles) {
        this.draw()

        // Collision w other particles
        for(let i = 0; i < particles.length; i++) {
            if (this === particles[i]) {
                continue
            }
            if (getDistance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                resolveCollision(this, particles[i])
            }
            
            
        }

        this.x += this.velocity.x
        this.y += this.velocity.y


        // Check Collision w sides
        if(this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
            this.velocity.x *= -1
        }
        if(this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
            this.velocity.y *= -1
        }

        // Last resort push to screen
        if (this.x - this.radius <= 0) this.x = this.radius
        if (this.x + this.radius >= innerWidth) this.x = innerWidth - this.radius
        if (this.y - this.radius <= 0) this.y = this.radius
        if (this.y + this.radius >= innerHeight) this.y = innerHeight - this.radius

        

        

    }

    this.draw = function() {
       c.beginPath()
       c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
       if (getDistance(this.x, this.y,  mouse.x, mouse.y) <= radius) {
            c.fillStyle = this.color
            c.fill()
       }
       else {
            c.strokeStyle = this.color
            c.stroke()
       }
       c.closePath()
    }
}

let particles

function init() {
    particles = []

    for (let i = 0; i < 30; i++) {
        const radius = Math.random()*30 + 10
        const color = 'blue'
        let x = randomIntFromRange(radius, canvas.width-radius) 
        let y = randomIntFromRange(radius, canvas.height-radius) 

        if(i !== 0) {
            for(let j = 0; j < particles.length; j++) {
                if (getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                    x = randomIntFromRange(radius, canvas.width-radius) 
                    y = randomIntFromRange(radius, canvas.height-radius)

                    j = -1
                }
            }
        }

        particles.push(new Particle(x, y, radius, color))
    }
}


function animate() {
    requestAnimationFrame(animate)

    c.fillStyle = 'rgba(0, 0, 0, .1)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    particles.forEach(particle => {
        particle.update(particles)
    });

}


init()
animate()