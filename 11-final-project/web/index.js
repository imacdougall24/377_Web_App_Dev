const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64*16 // 1024
canvas.height = 64*9 // 576

let parsedCollisions
let collisionBlocks
let background
let doors
const player = new Player({
    imageSrc: '../img/enemy-idea/player.svg',
    frameRate: 1,
    animations: {
        idleRight: {
            frameRate: 9,
            frameBuffer: 5,
            loop: true,
            imageSrc: '../img/enemy-idea/player.svg',
        },
        idleLeft: {
            frameRate: 9,
            frameBuffer: 5,
            loop: true,
            imageSrc: '../img/enemy-idea/player.svg',
        },
        runRight: {
            frameRate: 9,
            frameBuffer: 4,
            loop: true,
            imageSrc: '../img/enemy-idea/player.svg',
        },
        runLeft: {
            frameRate: 9,
            frameBuffer: 4,
            loop: true,
            imageSrc: '../img/enemy-idea/player.svg',
        },
        enterDoor: {
            frameRate: 9,
            frameBuffer: 4,
            loop: false,
            imageSrc: '../img/enemy-idea/player.svg',
            onComplete: () => {
                console.log('completed animation')
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level++
                        levels[level].init()
                        player.switchSprite('idleRight')
                        player.preventInput = false
                        gsap.to(overlay, {
                            opacity: 0,
                        })
                    }
                })
            },
        },
    }
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
                imageSrc: '../img/backgroundLevel1.png',
            })
            doors = [
                new Sprite ({
                    position: {
                        x: 762,
                        y: 387-112,
                    },
                    imageSrc: '../img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]
        }
    },
    2: {
        init: () => {
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 96
            player.position.y = 140

            if (player.currentAnimation)
                player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: '../img/backgroundLevel2.png',
            })
            doors = [
                new Sprite ({
                    position: {
                        x: 772,
                        y: 336,
                    },
                    imageSrc: '../img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]
        }
    },
    3: {
        init: () => {
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks= collisionBlocks
            player.position.x = 750
            player.position.y = 267

            if (player.currentAnimation)
                player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: '../img/backgroundLevel3.png',
            })
            doors = [
                new Sprite ({
                    position: {
                        x: 176,
                        y: 334,
                    },
                    imageSrc: '../img/doorOpen.png',
                    frameRate: 5,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false
                })
            ]
        }
    },
}



const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}


const overlay = {
    opacity: 0
}

function animate() {
    window.requestAnimationFrame(animate)
    
    background.draw()
    
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw()
    })

    doors.forEach((door) => {
        door.draw()
    })


    
    player.handleInput(keys)
    player.draw()
    player.update()

    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.restore()
}

levels[level].init()
animate()






