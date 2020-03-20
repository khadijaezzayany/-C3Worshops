// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Completer la fonction suivante
function updateRecords(id, prop, value) {

    if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else if (value === "") {
        delete collection[id][prop];
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(5439, "artist", "ABBA");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(1245, "album", "Riptide");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "artist", "")
updateRecords(2548, "tracks", "");
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));