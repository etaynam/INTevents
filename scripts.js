/// events homework by etay naaman
/// this project get the values of the form and
// put it on footer

let register = document.getElementById ("register") //register variable declare
let getname = ""; // user Fullname variable declare
let getemail = ""; // user email variable declare 
let getphone = ""; // user phone variable declare 
let getage = ""; // user age variable declare
let thisYear = 2021; // declare this year
let footer = document.getElementById ("footer").style.display = "none" //footer section display style declare
let checkage = document.getElementById ("agechecked").style.display = "none" // checkage display style declare


    //event listener Which receives the data from the register form

register.addEventListener ("click", (event) => {

// function declare

    function registered() { 
        getname = document.getElementById ("fname").value // user Fullname value by form
        getemail = document.getElementById ("email").value // user email value by form
        getphone = document.getElementById ("phone").value // user phone value by form
        getage = document.getElementById ("age").value // user age value by form


        let postname = document.getElementById ("postname") 
        postname.innerHTML = fname.value;
        // Adds the user full name to the Footer section
        

        let postemail = document.getElementById ("postemail")
        postemail.innerHTML = email.value;

          // Adds the user email to the Footer section

        let postphone = document.getElementById ("postphone")
        postphone.innerHTML = phone.value;

          // Adds the user phone number to the Footer section


        // this check the age of the user, if the user is 18+ the icon will displayed


        if (thisYear - getage > 18) {
        checkage = document.getElementById ("agechecked").style.display = "block"

           // if the user is 18+  = the icon will displayed

        } else {
            checkage = document.getElementById ("agechecked").style.display = "none"

             // if the user is NOT 18+  = the icon will NOT displayed
        }

      //  checking all the details are filled

       if (getname === "" || getphone === "" || getemail === "" || getage === "") {
        alert ("נראה שלא מילאת את כל הפרטים")

        // if the details are not filled the user get alert 

    } else {

        document.getElementById("footer").style.display = "flex";
        document.getElementById("footer").style.justifyContent = "center";
        document.getElementById("footer").style.alignItems = "center";
        
    }


    }
    console.log (registered())
    
}
 )

 
 let scrolling = 0; // scrolling variable declare


 
 let myscrlAlert = document.getElementById("scrlAlert"); // scrolling message variable declare

 window.addEventListener("scroll", (scrollevent) => { // scrolling event listener
    scrolling = this.scrollY; 
    if (scrolling > 1 ) { // if scrolling is bigger than 1 px
        document.getElementById("scrlAlert").style.display = "block"; // show the message + message
        document.getElementById("scrlAlert").innerHTML = '<i class="fas fa-arrow-circle-down"></i>' + "  יאללה, גוללים למטה "  +  scrolling + " פיקסלים"
    
    } else {  // if the user is scroll up again it will show message when the user will be on 0

        document.getElementById("scrlAlert").innerHTML = '<i class="fas fa-arrow-circle-up"></i>' + " אוקיי, חזרנו למעלה!"  
        console.log (scrolling)

    }
    
});


let closeWindow = document.getElementById ("close");  // close button variable declare


closeWindow.addEventListener ("click", (closeit) => { 
    footer = document.getElementById ("footer").style.display = "none"
})
// close footer section by the buttin



let hamburger = document.getElementById ("hamburger");  // hamburger icon variable declare
let menu = document.getElementById ("menu"); // hamburger menu variable declare

// event listener for the hamburger icon (click)
hamburger.addEventListener ("click", () => { 
menu.classList.toggle ("show"); // add to the css new class when the user click on the hamburger icon

});