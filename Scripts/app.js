var homeOffset = document.getElementById("sec2").offsetTop;
var menuOffset = document.getElementById("sec3").offsetTop;
var aboutOffset = document.getElementById("sec4").offsetTop;
var contactOffset = document.getElementById("sec5").offsetTop;

var home = true;
var menu = true;
var about = true;
var contact = true;

window.onload = (() =>{
    myFunction();
});

window.onscroll = (() =>{
    myFunction();
});

//-------------- HOME ANIMS ----------------
var photoHome = document.getElementById("_photoHome");

var arr = new Array();
var pHomeClasses = document.getElementsByClassName("pHomeHead")[0];
arr.push(pHomeClasses);
pHomeClasses = document.getElementsByClassName("pHomeHead")[1];
arr.push(pHomeClasses);
pHomeClasses = document.getElementsByClassName("pHomeHead")[2];
arr.push(pHomeClasses);

var arr1 = new Array();
var pHomeContentClasses = document.getElementsByClassName("pHomeContent")[0];
arr1.push(pHomeContentClasses);
pHomeContentClasses = document.getElementsByClassName("pHomeContent")[1];
arr1.push(pHomeContentClasses);
pHomeContentClasses = document.getElementsByClassName("pHomeContent")[2];
arr1.push(pHomeContentClasses);

/*Change photo home*/
function changeHomePhoto()
{
    let i = 0;

    setInterval(() =>
    {
        if(i == 0)
        {
            photoHome.src = 'Images/Foods/ChocolateSouffle.jpeg';
        }
        else if(i == 2)
        {
            photoHome.src = 'Images/Foods/ChocolateIceCream.jpg';
        }
        else if(i == 3)
        {
            photoHome.src = 'Images/Foods/ChocolateMousse.jpg';
        }
        else if(i == 4)
        {
            photoHome.src = 'Images/Foods/ChocolateMuffin.jpg';
        }
        else if(i == 5)
        {
            photoHome.src = 'Images/Foods/ChocolateFrappe.jpg';
        }
        else if(i == 6)
        {
            photoHome.src = 'Images/Restaurant.jpg';
        }

        // var _photoHome1 = document.getElementById("_photoHome1");
        // _photoHome1.style.width = "45vw";

        i++;

        if(i > 6)
            i = 0;
    }, 4000);
}

/* Start anims for paragraphs in home */
function wait()
{
    let i = 0;

    var a = setInterval(() =>{
        if(i == 2)
        {
            clearInterval(a);
        }

        arr[i].classList.add("headAnim");
        arr1[i].classList.add("pHomeContentAnim");
        i++;
    }, 3000);
}

//-------------- MENU ANIMS ----------------
var p1Menu = document.getElementById("_p1Menu");
var p2Menu = document.getElementById("_p2Menu");
var p1Txt = "Try something you haven't tried before!";
var p2Txt = "Delicious stuff!!!";
var i = 0;
var turn = 0;

function typeTxt()
{
    if(i == p1Txt.length && turn == 0)
    {
        turn++;
        i = 0;
    }

    if(i < p1Txt.length && turn == 0)
    {
        if(i != 25)
            p1Menu.innerHTML += p1Txt.charAt(i);
        else
            p1Menu.innerHTML += "<br>";
        
        i++;
        setTimeout(typeTxt, 70);
    }
    else if(i < p2Txt.length && turn == 1)
    {
        p2Menu.innerHTML += p2Txt.charAt(i);
        i++;
        setTimeout(typeTxt, 70);
    }
}
//-------------- ABOUT ANIMS ----------------
var arr2 = new Array();
var imgAboutClasses = document.getElementsByClassName("container_About")[0];
arr2.push(imgAboutClasses);
imgAboutClasses = document.getElementsByClassName("container_About")[1];
arr2.push(imgAboutClasses);
imgAboutClasses = document.getElementsByClassName("container_About")[2];
arr2.push(imgAboutClasses);

/* Start anims for images in about */
function waitAbout()
{
    let j = 0;

    var a = setInterval(() =>{
        if(j == 2)
        {
            clearInterval(a);
        }

        arr2[j].classList.add("imgAboutAnim");
        j++;
    }, 1000);
}

//-------------- CONTACT ANIMS ----------------

/*Underlines Navbar, start anims*/
function myFunction()
{
    // --------------- HOME--------------

    if(window.pageYOffset > homeOffset - 200 && home)
    {
        home = false;

        setTimeout(() =>{
            wait();
        }, 500);
        
        changeHomePhoto();
        photoHome.classList.add("photoAnim");  
    }
    else if(window.pageYOffset >= homeOffset - 400 && window.pageYOffset < menuOffset - 400)
    {
        var homebtn = document.getElementById("homeBtn");
        homebtn.style.textDecoration = "underline";
    }
    else
    {
        var homebtn = document.getElementById("homeBtn");
        homebtn.style.textDecoration = "none";
    }

    // -------------- MENU -------------

    if(window.pageYOffset > menuOffset - 200 && menu)
    {
        menu = false;

        typeTxt();
    }
    else if(window.pageYOffset >= menuOffset - 400 && window.pageYOffset < aboutOffset - 200)
    {
        var menuBtn = document.getElementById("menuBtn");
        menuBtn.style.textDecoration = "underline";
    }
    else
    {
        var menuBtn = document.getElementById("menuBtn");
        menuBtn.style.textDecoration = "none";
    }

    // -------------- ABOUT -------------

    if(window.pageYOffset > aboutOffset - 200 && about)
    {
        about = false;
        waitAbout();
    }
    else if(window.pageYOffset >= aboutOffset - 200 && window.pageYOffset < contactOffset - 200)
    {
        var aboutBtn = document.getElementById("aboutBtn");
        aboutBtn.style.textDecoration = "underline";
    }
    else
    {
        var aboutBtn = document.getElementById("aboutBtn");
        aboutBtn.style.textDecoration = "none";
    }

    // -------------- CONTACT -------------

    if(window.pageYOffset > contactOffset - 200 && contact)
    {
        // console.log("contact");
        contact = false;
    }
    else if(window.pageYOffset >= contactOffset - 200)
    {
        var contactBtn = document.getElementById("contactBtn");
        contactBtn.style.textDecoration = "underline";
    }
    else
    {
        var contactBtn = document.getElementById("contactBtn");
        contactBtn.style.textDecoration = "none";
    }
}

/*Year Footer*/
var dt = new Date(); 
document.getElementById("year").innerHTML = dt.getFullYear().toString();

/* Form submission */
const form = document.getElementById('form');

form.addEventListener('submit', () =>
{
    alert("Message was sent successfully!");
});

/* Menu scroll */
var currentMenuPage = 0;
var menuPhoto = document.getElementById("main_imgMenu");
var rightBtn = document.getElementById("right");
var leftBtn = document.getElementById("left");

var indicator1 = document.getElementById("ind1");
var indicator2 = document.getElementById("ind2");
var indicator3 = document.getElementById("ind3");

indicator1.style.backgroundColor = "white";

rightBtn.addEventListener('click', () =>
{
    console.log("R");

    if(currentMenuPage < 2)
    {
        currentMenuPage++;
    }
    else if(currentMenuPage == 2)
    {
        currentMenuPage = 0;
    }

    changeMenuPhoto();
});

leftBtn.addEventListener('click', () =>
{
    console.log("L");
    
    if(currentMenuPage > 0)
    {
        currentMenuPage--;
    }
    else if(currentMenuPage == 0)
    {
        currentMenuPage = 2;
    }

    changeMenuPhoto();
});

function changeMenuPhoto()
{
    if(currentMenuPage == 0)
    {
        menuPhoto.src = "Images/Menu/1.jpg";

        indicator1.style.backgroundColor = "white";
        indicator2.style.backgroundColor = "#4472a3";
        indicator3.style.backgroundColor = "#4472a3";
    }
    else if(currentMenuPage == 1)
    {
        menuPhoto.src = "Images/Menu/2.jpg";

        indicator1.style.backgroundColor = "#4472a3";
        indicator2.style.backgroundColor = "white";
        indicator3.style.backgroundColor = "#4472a3";
    }
    else if(currentMenuPage == 2)
    {
        menuPhoto.src = "Images/Menu/3.jpg";

        indicator1.style.backgroundColor = "#4472a3";
        indicator2.style.backgroundColor = "#4472a3";
        indicator3.style.backgroundColor = "white";
    }
}