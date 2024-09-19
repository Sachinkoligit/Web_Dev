// function check1(){
//     var a=new Audio("./sounds/crash.mp3");
//     a.play();
// }
// function check2(){
//     var a=new Audio("./sounds/kick-bass.mp3");
//     a.play();
// }
// function check3(){
//     var a=new Audio("./sounds/snare.mp3");
//     a.play();
// }
// function check4(){
//     var a=new Audio("./sounds/tom-1.mp3");
//     a.play();
// }
// function check5(){
//     var a=new Audio("./sounds/tom-2.mp3");
//     a.play();
// }
// function check6(){
//     var a=new Audio("./sounds/tom-3.mp3");
//     a.play();
// }
// function check7(){
//     var a=new Audio("./sounds/tom-4.mp3");
//     a.play();
// }

// document.querySelectorAll("button")[0].addEventListener("click",check1);
// document.querySelectorAll("button")[1].addEventListener("click",check2);
// document.querySelectorAll("button")[2].addEventListener("click",check3);
// document.querySelectorAll("button")[3].addEventListener("click",check4);
// document.querySelectorAll("button")[4].addEventListener("click",check5);
// document.querySelectorAll("button")[5].addEventListener("click",check6);
// document.querySelectorAll("button")[6].addEventListener("click",check7);

function play1(x){
    switch (x) {
        case 'w':
            var a=new Audio("./sounds/crash.mp3");
            animation(x)
            a.play();
            break;
        case 'a':
            var a=new Audio("./sounds/kick-bass.mp3");
            animation(x)
            a.play();
            break;
        case 's':
            var a=new Audio("./sounds/snare.mp3");
            animation(x)
            a.play();
            break;
        case 'd':
            var a=new Audio("./sounds/tom-1.mp3");
            animation(x)
            a.play();
            break;
        case 'j':
            var a=new Audio("./sounds/tom-2.mp3");
            animation(x)
            a.play();
            break;
        case 'k':
            var a=new Audio("./sounds/tom-3.mp3");
            animation(x)
            a.play();
            break;
        case 'l':
            var a=new Audio("./sounds/tom-4.mp3");
            animation(x)
            a.play();
            break;
        default:
            break;
    }
}
function play(){
    play1(this.innerHTML);
}
function animation(x){
    // console.log(x)
    var z=document.querySelector("."+x);
    z.classList.add("pressed")
    setTimeout(function(){
        z.classList.remove("pressed");
    },100);
}
for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",play);
}

document.addEventListener("keydown",function(event){
    play1(event['key'])
})
