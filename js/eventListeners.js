window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            //jumping
            if (player.velocity.y == 0) {
                player.velocity.y = -15;
            }
            break;
        case "a":
            //move to the left
            keys.a.pressed = true;
            break;
        case "d":
            //move to the right 
            keys.d.pressed = true;
            break;
    }
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "a":
            //move to the left
            keys.a.pressed = false;
            break;
        case "d":
            //move to the right 
            keys.d.pressed = false;
            break;
    }
});