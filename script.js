MotRandom = "test";

let letter, nbChange = 3, wordUser = [], lettreOk, countLetter = 0;
let wordUserString = "";

for(let index=0; index < MotRandom.length; index++)
    wordUser[index]= "_"

console.log(wordUser.join(" "));

$(document).ready(function(){
    $("#valide").click(function(){
        if($("#charInput").val()==" " || $("#charInput").val()==""){
            $("#charInput").val("");
        }
        else{
            letter = $("#charInput").val();
            $("#charInput").val("");
            verifieLettre();
        }
       
    });   
});

const verifieLettre = () => {
    lettreOk = 0;

    for(let index=0; index < MotRandom.length; index++){
        if(letter == MotRandom[index]){
            console.log(index+" : "+MotRandom[index]);
            wordUser[index] = MotRandom[index];
            countLetter++;
            lettreOk += 1;
        }           
    }

    if(lettreOk == 0){
        nbChange--;
        console.log("nb change "+nbChange);
    }
    console.log("user word "+wordUser.join(" "));
    if(countLetter==MotRandom.length || nbChange==0){
        statuJeu();
    }
}


const statuJeu = () =>{
    if (nbChange==0){
        console.log("perdu !");
        $("#charInput").prop( "disabled", true );
        $("#charInput").css( "border", ".5px solid red");
        $("#charInput").attr( "placeholder", "lost : Input disabled");
    }
    else{
        console.log("gagné !");
        $("#charInput").prop( "disabled", true );
        $("#charInput").css( "border", ".5px solid green");
        $("#charInput").attr( "placeholder", "Win : Input disabled");
    }
}

$(function(){
    $("#rejoue").click(function(){
        location.reload(true);
    });
});