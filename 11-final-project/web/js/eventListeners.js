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


window.addEventListener('keydown', (event) => {
    if (player.preventInput) return
    switch (event.key) {
        case 'w': 
            if(player.velocity.y === 0) {
                player.velocity.y = -20
            }
            break

        // move player to left
        case 'a':
            keys.a.pressed = true
            break

        // move player to right
        case 'd':
            keys.d.pressed = true
            break
    }
})
window.addEventListener('keyup', (event) => {
    switch (event.key) {
        // stop player to left
        case 'a':
            keys.a.pressed = false
            break
        // stop player to right
        case 'd':
            keys.d.pressed = false
            break
    }
})