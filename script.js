let HomeSCORE = document.getElementById("Home-score");
let GuestSCORE = document.getElementById("Guest-score");

let HomeCount = 0;
let GuestCount = 0;


function Reset(){
    HomeCount = 0;
    GuestCount = 0;
    HomeSCORE.textContent = 0;
    GuestSCORE.textContent = 0;
}

function addOne(){
 HomeCount++;
 HomeSCORE.textContent = HomeCount;
}

function addTwo(){
 HomeCount += 2;
 HomeSCORE.textContent = HomeCount;
}

function addThree(){
 HomeCount += 3;
 HomeSCORE.textContent = HomeCount;
}
function addGuestOne(){
 GuestCount++;
 GuestSCORE.textContent = GuestCount;
}

function addGuestTwo(){
 GuestCount += 2;
 GuestSCORE.textContent = GuestCount;
}

function addGuestThree(){
 GuestCount += 3;
 GuestSCORE.textContent = GuestCount;
}


function addThree(){
 HomeCount += 3;
 HomeSCORE.textContent = HomeCount;
}
