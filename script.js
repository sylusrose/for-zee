var love= function () 
{
    window.alert("Let's See Something")
    var promptQuest = window.prompt("Do you love me? ");
    if(promptQuest === "yes" || promptQuest === "Yes"){
        window.alert("I Love You too!!! ");
    }
    else if(promptQuest === "no" || promptQuest === "No"){
        window.alert("Oh no, I am sad");

    }
    else{
        window.alert("Well I guess... ");
    }
    
}

love();