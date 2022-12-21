var n = Math.random();
n = n * 5;
n = Math.floor(n);
n = (n + 1);
console.log(n);

var x = Math.random();
x = x * 5;
x = Math.floor(x);
x = (x + 1);
console.log(x);





function generate(n){
   if (n === 1) {
    document.querySelector(".dice .img1").setAttribute("src", "dice1.png")
   } else if (n === 2){
    document.querySelector(".dice .img1").setAttribute("src", "dice2.png")
   }else if (n === 3){
    document.querySelector(".dice .img1").setAttribute("src", "dice3.png")
   }else if (n === 4){
    document.querySelector(".dice .img1").setAttribute("src", "dice4.png")
   }else if (n === 5){
    document.querySelector(".dice .img1").setAttribute("src", "dice5.png")
   }else {
    document.querySelector(".dice .img1").setAttribute("src", "dice6.png")
   }
}


function nextdice(x){
    if (x === 1) {
     document.querySelector(".dice .img2").setAttribute("src", "dice1.png")
    } else if (x === 2){
     document.querySelector(".dice .img2").setAttribute("src", "dice2.png")
    }else if (x === 3){
     document.querySelector(".dice .img2").setAttribute("src", "dice3.png")
    }else if (x === 4){
     document.querySelector(".dice .img2").setAttribute("src", "dice4.png")
    }else if (x === 5){
     document.querySelector(".dice .img2").setAttribute("src", "dice5.png")
    }else {
     document.querySelector(".dice .img2").setAttribute("src", "dice6.png")
    }
 }

//  function winner() {
//     if (n === x) {
//         document.querySelector(".container h1").textContent = ("Draw")
//     } else if (n < x){
//         document.querySelector(".container h1").textContent = ("player 0 wins")
//     } else {
//         document.querySelector(".container h1").textContent = ("Player 1 wins")
//     }
//  }

if (n == x) {
    document.querySelector("body .container h1").textContent = "This is a Draw"
} else if (n > x) {
    document.querySelector("body .container h1").textContent = "Player 1 wins"
}else {
    document.querySelector("body .container h1").textContent = "Player 2 wins"
}

generate(n);
nextdice(x);

