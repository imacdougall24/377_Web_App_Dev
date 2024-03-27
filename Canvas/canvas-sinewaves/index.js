// Static Values & Functions
var canvas = document.querySelector('canvas')

const gui = new dat.GUI()
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

const wave = {
    y: canvas.height / 2, 
    length: 0.01,
    amplitude: 100,
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





function Object() {


    this.update = () => {
        this.draw()
    }


    this.draw = () => {
        c.beginPath()
        c.moveTo(0, canvas.height / 2)

        for (let i = 0; i < canvas.width; i++) {
            c.lineTo(i, (canvas.height / 2) + Math.sin(i * 0.01)*100)
        }

        c.stroke()

    }
}





// Animation and Visualization
let objects = []
function init() {
    objects = []
    
    for(let i = 0; i < 1; i++) {
        objects.push(new Object())
    }


}
function animate() {
    requestAnimationFrame(animate)

    // c.fillStyle = 'rgba(255, 255, 255, .1)'
    // c.fillRect(0, 0, canvas.width, canvas.height)
    // c.clearRect(0, 0, canvas.width, canvas.height)

    objects.forEach(object => {
        object.update()
    })
    
}

init()
animate()