// Album 1 - View Details

document.getElementById("album1").addEventListener("click", function () {

    document.getElementById("albumInfo").innerHTML =
        "<strong>The Art of Loving</strong><br>" +
        "Olivia Dean · 2025<br><br>" +
        "<strong>Favorite Track:</strong> Man I Need<br><br>" +
        "<strong>About the Album:</strong><br>" +
        "The Art of Loving is Olivia Dean's second studio album, released in 2025. " +
        "The album moves between pop, R&B, soul, jazz pop, and Motown influences, with love as its central theme. " +
        "Dean looks at love in different forms, including romance, friendship, family, and the relationship we have with ourselves. " +
        "The album includes songs such as Nice to Each Other, So Easy (To Fall in Love), and Man I Need.";
  
    document.getElementById("selected").scrollIntoView({
        behavior: "smooth"
    });

});


// Album 2 - View Details

document.getElementById("album2").addEventListener("click", function () {

    document.getElementById("albumInfo").innerHTML =
        "<strong>The Miseducation of Lauryn Hill</strong><br>" +
        "Lauryn Hill · 1998<br><br>" +
        "<strong>Favorite Track:</strong> Ex-Factor<br><br>" +
        "<strong>About the Album:</strong><br>" +
        "The Miseducation of Lauryn Hill is Lauryn Hill's debut solo studio album, released in 1998 after her time with the Fugees. " +
        "Blending R&B, neo-soul, hip-hop, reggae, and soul, the album draws heavily from Hill's personal life. " +
        "Its songs deal with love, heartbreak, motherhood, faith, and learning from relationships. " +
        "The album includes Doo Wop (That Thing), Ex-Factor, and Everything Is Everything, and later won Album of the Year at the Grammy Awards.";

    document.getElementById("selected").scrollIntoView({
        behavior: "smooth"
    });

});


// Album 3 - View Details

document.getElementById("album3").addEventListener("click", function () {

    document.getElementById("albumInfo").innerHTML =
        "<strong>SOS</strong><br>" +
        "SZA · 2022<br><br>" +
        "<strong>Favorite Track:</strong> Open Arms<br><br>" +
        "<strong>About the Album:</strong><br>" +
        "SOS is SZA's second studio album, released in 2022, five years after Ctrl. " +
        "The album mixes R&B with hip-hop and pop and features artists including Phoebe Bridgers, Travis Scott, Don Toliver, and Ol' Dirty Bastard. " +
        "Its tracklist includes Good Days, I Hate U, Kill Bill, Nobody Gets Me, and Snooze. " +
        "SOS became SZA's first number-one album in the United States and spent multiple weeks at the top of the Billboard 200.";

    document.getElementById("selected").scrollIntoView({
        behavior: "smooth"
    });

});


// Like Button 1

document.getElementById("like1").addEventListener("click", function () {

    document.getElementById("like1").innerHTML = "♥ Liked";

});


// Like Button 2

document.getElementById("like2").addEventListener("click", function () {

    document.getElementById("like2").innerHTML = "♥ Liked";

});


// Like Button 3

document.getElementById("like3").addEventListener("click", function () {

    document.getElementById("like3").innerHTML = "♥ Liked";

});


// Visitor Album Input

document.getElementById("albumInput").addEventListener("input", function () {

    var album = document.getElementById("albumInput").value;

    document.getElementById("albumResult").innerHTML =
        "You've been listening to: " + album;

});


// Spotify - Album 1

document.getElementById("spotify1").addEventListener("click", function () {

    window.open("https://open.spotify.com/album/0l8zYqoUeBYg47Gmevq9HZ");

});


// Spotify - Album 2

document.getElementById("spotify2").addEventListener("click", function () {

    window.open("https://open.spotify.com/album/1BZoqf8Zje5nGdwZhOjAtD");

});


// Spotify - Album 3

document.getElementById("spotify3").addEventListener("click", function () {

    window.open("https://open.spotify.com/album/07w0rG5TETcyihsEIZR3qG");

});