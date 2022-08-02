function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(HELLO, string){
    console.log('HELLO'.toUpperCase());
}

function logWhisper(hello, string){
    console.log('hello'.toLowerCase());
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toUpperCase()){
        return "YES INDEED!";

    }
    if (string === string.toLowerCase()){
return "I can't hear you!";
    }

   if (string === "Let's have dinner together!" ){
return "I would love to!" ;
   }
}