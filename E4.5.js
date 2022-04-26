function distance(...args) {
    args.forEach(element => {
        if (isNaN(parseInt(element)) === true)
            throw new Error('Introduce a numerical value');
    });

    if (args.length === 4) {
        let p1 = { x: args[0], y: args[1], z: 0 };
        let p2 = { x: args[2], y: args[3], z: 0 };
        return calcDistance(p1, p2)
    } else if (args.length === 6) {
        let p1 = { x: args[0], y: args[1], z: args[2] };
        let p2 = { x: args[3], y: args[4], z: args[5] };
        return calcDistance(p1, p2)
    } else {
        throw new Error('Insufficient parameters');
    }
}

function calcDistance(p1, p2) {
    let delta = Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) + Math.pow(p2.z - p1.z, 2);
    return Math.sqrt(delta);
}


console.log(distance(1, 2, 0, 3, 1, 1));
