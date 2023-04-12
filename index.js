function hello() {
  if (document.getElementById("follower").innerHTML == 0) {
    document.getElementById("follower").innerHTML =1;
    document.getElementById("follow").innerHTML = "unfollow";
    document.getElementById("follow").style.color = "white";
    document.getElementById("follow").style.backgroundColor = "lightblue";
  } else {
    document.getElementById("follower").innerHTML =0;
    document.getElementById("follow").innerHTML = "follow";
    document.getElementById("follow").style.color = "black";
    document.getElementById("follow").style.backgroundColor =
      "rgba(206, 202, 202, 0.874)";
  }
}

var heart = document.querySelectorAll(".fa-heart");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    if (heart[i].style.color != "red") {
      return (heart[i].style.color = "red");
    } else {
      return (heart[i].style.color = "white");
    }
  });
}
var trash = document.querySelectorAll(".fa-trash-can");

for (let i = 0; i < trash.length; i++) {
  trash[i].addEventListener("click", function () {
    trash[i].parentElement.parentElement.parentElement.remove();
  });
}

var x = document.querySelectorAll(".card-content");
var cart = document.querySelectorAll(".card");
for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", function (){
    if (x[i].style.display != "flex"){
      x[i].style.display="flex";
      x[i].setAttribute("id", "card-content");
    } else {
      x[i].style.display="none";
    
    }
    });
}

