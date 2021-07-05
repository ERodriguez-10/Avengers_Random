var avengers
var rNumber = Math.floor(Math.random() * 4)
var dNumber = Math.floor(Math.random() * 4)
var fNumber = Math.floor(Math.random() * 8)

function character(){
    rNumber
    var actor;
    switch(rNumber){
        case 0: 
            avengers = 'ironMan';
            actor = 'Iron Man';
            break;
        case 1:
            avengers = 'spiderman';
            actor = 'Spiderman';
            break;
        case 2: 
            avengers = 'capAmerica';
            actor = 'Captain America';
            break;
        case 3: 
            avengers = 'hulk';
            actor = 'Hulk';
            break;
        case 4:
            avengers = 'blackWidow';
            actor = 'Black Widow';
            break;
    }
    return "Your avenger is: " + actor
}

function dialog(avengers){
    if(avengers === 'ironMan'){
        dNumber
        var quotes;
        switch(dNumber){
            case 0:
                quotes = "I love you three thousand.";
                break;
            case 1:
                quotes = "I am... I am Iron Man";
                break;
            case 2:
                quotes = "Part of the journey is the end";
                break;
            case 3:
                quotes = "I told you, I don't want to join your super secret boy band.";
                break;
            case 4:
                quotes = "Sometimes you've gotta run before you can walk";
                break;
        }
    }
    else if(avengers === 'spiderman'){
        dNumber
        switch(dNumber){
            case 0:
                quotes = "You have a metal arm? That's awesome, dude!";
                break;
            case 1:
                quotes = "Oh, we're using our made-up names. I'm Spider-Man then.";
                break;
            case 2:
                quotes = "Mr. Stark, I don't fell so good.";
                break;
            case 3:
                quotes = "Where are you from, kid? - Queens. Brooklyn.";
                break;
            case 4:
                quotes = "I'm nothing without this suit!";
                break;
        }
    }
    else if(avengers === 'capAmerica'){
        dNumber
        switch(dNumber){
            case 0:
                quotes = "Hail Hydra";
                break;
            case 1:
                quotes = "I can do this all day.";
                break;
            case 2:
                quotes = "Avengers... Assemble.";
                break;
            case 3:
                quotes = "We will. Whatever it takes.";
                break;
            case 4:
                quotes = "We lost, all of us. We lost friends. We lost family. We lost a part of ourselves. This is the fight of our lives";
                break;
        }
    }
    else if(avengers === 'hulk'){
        dNumber
        switch(dNumber){
            case 0: 
                quotes = "Don't make me angry!";
                break;
            case 1:
                quotes = "Hulks wants to go... home.";
                break;
            case 2:
                quotes = "Leave me alone.";
                break;
            case 3:
                quotes = "Hulk Smash!";
                break;
            case 4:
                quotes = "Give me a real fight.";
                break;
        }
    }
    else if(avengers === 'blackWidow'){
        dNumber
        switch(dNumber){
            case 0:
                quotes = "At some point, we all have to choose between what the world wants you to be and who you are";
                break;
            case 1:
                quotes = "She's not alone.";
                break;
            case 2:
                quotes = "I get emails from a raccoon. Nothing sounds crazy anymore.";
                break;
            case 3:
                quotes = "We have what we have when we have it.";
                break;
            case 4:
                quotes = "I'm always picking up after you boys.";
                break;
        }
    }
    else{
        return 'ERROR 404! TRY AGAIN'
    }
    return "One iconic quotes: " + quotes
}

function recommendation(){
    fNumber
    var films;
    switch(fNumber){
        case 0:
            films = '"Avengers: Infinity Wars"';
            break;
        case 1:
            films = '"Captain America: Winter Soldier"';
            break;
        case 2: 
            films = '"Captain America: Civil War"';
            break;
        case 3:
            films = '"Avengers: Endgame"';
            break;
        case 4:
            films = '"Iron Man"';
            break;
        case 5:
            films = '"Thor Ragnarok"';
            break;
        case 6: 
            films = '"Black Panther"';
            break;
        case 7:
            films = '"Avengers"';
            break;
        case 8:
            films = '"Captain Marvel"';
            break;
    }
    return 'My personal recommendation is: ' + films;
}

console.log(character());
console.log(dialog(avengers));
console.log(recommendation());
