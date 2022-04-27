const building = {
    person: {
        Mario: { floor: "1", room: "3", equipment: "Asus" },
        Martha: { floor: "2", room: "2", equipment: "dell" },
        Louis: { floor: "1", room: "1", equipment: "HP" },
        Mark: { floor: "2", room: "1", equipment: "Acer" }
    },
    equipment: {
        dell: { floor: "2", room: "2", user: "Martha" },
        HP: { floor: "1", room: "1", user: "Louis" },
        Asus: { floor: "1", room: "3", user: "Martha" },
        Acer: { floor: "2", room: "1", user: "Mark" }
    }
};


function memoizeFind() {
    let cache = {};
    return function find(object) {
        if (object in cache) {
            return cache[object];
        }
        else {
            if (Object.keys(building["person"]).indexOf(object) >= 0) {
                cache[object] = building["person"][object];
            } else if (Object.keys(building["equipment"]).indexOf(object) >= 0) {
                cache[object] = building["equipment"][object];
            }
        }
        return cache[object];
    }

}

let memoize = memoizeFind();
console.log(memoize("Mario"));
console.log(memoize("HP"));
console.log(memoize("Mario"));
console.log(memoize("HP"));
