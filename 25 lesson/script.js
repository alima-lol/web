const soundBtn = document.querySelectorAll(".sound");
const number = soundBtn.length;

for (let i = 0; i < number; i++){
    soundBtn[i].addEventListener("click", function(event){
        const bIH = soundBtn[i].innerHTML;
        makesound(bIH);
    })

}

document.addEventListener("keydown", function(event){
    makesound(event.key)
})

const makesound = (key) => {
    switch(key){
        case "А":
            const letA = new Audio("sound/А.mp3")
            letA.play();
            break;
        case "Б":
            const letБ = new Audio("sound/Б.mp3")
            letБ.play();
            break;
        case "В":
            const letВ = new Audio("sound/В.mp3")
            letВ.play();
            break;
            case "Г":
            const letГ = new Audio("sound/Г.mp3")
            letГ.play();
            break;
            case "Д":
            const letД = new Audio("sound/Д.mp3")
            letД.play();
            break;

    }
}

