var clicks = 0;
var goal = 10;
var collectedBoost = 0;
var doubleClicks = 1;
var collectBoostPrice = 10;
var doubleClicksPrice = 100;
var level = 1;
var clicksPerSecond = 0;
var clicksPerSecondPrice = 5;

function clickCounter(){
    clicks = clicks + doubleClicks;
    checkGoal();
    writeCookiesOnScreen();
    if(clicks >= 1){
        document.getElementById("won").innerHTML ="";
    }

}

function autoClicker(){
    if(clicks >= collectBoostPrice){
        clicks = clicks - collectBoostPrice;
        writeCookiesOnScreen();
        upgradeCollectedBoostPrice();
        collectedBoost++;
        document.getElementById("collectBoost").innerHTML = collectedBoost;
    }else{
        alertNotEnoughCookies();
    }
}


function redeemBoost(){
    if (collectedBoost < 1 ){
        alert("You have no boost!");
    }else if(collectedBoost == 1){
        alert("You should not redeem your boost if you only have one!");
    }else {
        clicks = clicks * collectedBoost;
        writeCookiesOnScreen();
        checkGoal();
        collectedBoost = 0;
        document.getElementById("collectBoost").innerHTML = collectedBoost;
    }
}

function checkGoal(){
    if(clicks >= goal){
        resetCookies();
        updateLevel();
        document.getElementById("won").innerHTML = "Du hast es geschafft!!!";
        writeCookiesOnScreen();
        goal = goal*2;
        updateGoal();
    }
}

function openShop(){
    updateGoal();
    var x = document.getElementById("shop");
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function writeCookiesOnScreen(){
    document.getElementById("clicks").innerHTML = clicks;
}

function resetCookies(){
    clicks = 0;
}

function updateGoal(){
    document.getElementById("show-goal").innerHTML = "Collect " + goal + " Cookies";
}

function clickerUpgrade(){
    if(clicks>=doubleClicksPrice){
        doubleClicks = doubleClicks*2;
        clicks = clicks - doubleClicksPrice;
        writeCookiesOnScreen();
        upgradeDoubleClicksPrice();

    }else{
        alertNotEnoughCookies();
    }
}
function upgradeCollectedBoostPrice(){
    //Click to buy 1 boost for 10 Cookies
    collectBoostPrice = collectBoostPrice * 2;
    document.getElementById("boost-shop").innerHTML = "Click to buy 1 boost for " + collectBoostPrice + " Cookies"; 
}
function upgradeDoubleClicksPrice (){
    //Double current clicks for 1oo
    doubleClicksPrice = doubleClicksPrice * 2;
    document.getElementById("upgrade-shop").innerHTML = "Double current clicks for "+ doubleClicksPrice;
}

function updateLevel(){
    level++;
    document.getElementById("level").innerHTML = "Level: " + level;
}

function buyClicksPerSecond(){
    if(clicks >= clicksPerSecondPrice){
        clicks = clicks - clicksPerSecondPrice;
        writeCookiesOnScreen();
        updateClicksPerSecondPrice();
        clicksPerSecond++;
    }else{
        alertNotEnoughCookies();
    }
}

function updateClicksPerSecondPrice(){
    clicksPerSecondPrice = clicksPerSecondPrice * 2;
    document.getElementById("clicks-per-second").innerHTML = "Buy +1 click per second for " + clicksPerSecondPrice + " Cookies"; 
}

function alertNotEnoughCookies(){
    alert("You need more cooooookies!")
}

setInterval(function() {
    checkGoal();
    clicks += clicksPerSecond;
    writeCookiesOnScreen();
},1000);
