/* Kontakt formularen */
var element = document.querySelector("button");

var form = document.querySelector("form");

element.addEventListener("click", function(event){

    event.preventDefault();

    var name = form.name.value;
    var lastName = form.last_name.value;
    var Email = form.Email.value;
    var phone = form.phone.value;

    if(name.length > 1){
        document.querySelector("#name_comment_1").innerHTML = "";

        /*form.name.setAttribute("value", "")*/
    }

    else{
        document.querySelector("#name_comment_1").innerHTML = "Udfyld dette felt!";

        //form.name.setAttribute("value", "Udfyld dette felt!")
    }

    if(lastName.length > 1){
        document.querySelector("#name_comment_2").innerHTML = "";

    }

    else{
        document.querySelector("#name_comment_2").innerHTML = "Udfyld dette felt!";

    }

    if(Email.length > 1){
        document.querySelector("#name_comment_3").innerHTML = "";

    }else{
        document.querySelector("#name_comment_3").innerHTML = "Udfyld dette felt!";

    }

    if(phone.length < 8){
        document.querySelector("#name_comment_4").innerHTML = "Udfyld dette felt!";

    }else{
        document.querySelector("#name_comment_4").innerHTML = "";

    }
})

/*
document.querySelectorAll(".input_felter").forEach(inputfelt => {
    inputfelt.addEventListener("keydown", function(event){
        var name = event.target;
        if(name.value.length > 2){
            name.style.backgroundColor = "green";
        }else{
            name.style.backgroundColor = "red";
        }
    })
})
*/

var element = document.querySelector("button");

var form = document.querySelector("form");

element.addEventListener("click", function(event){

    event.preventDefault();

    var name = form.name.value;
    var lastName = form.last_name.value;
    var Email = form.Email.value;
    var phone = form.phone.value;

    if(name.length > 1){
        document.querySelector("#name_comment_1").innerHTML = "";

        /*form.name.setAttribute("value", "")*/
    }

    else{
        document.querySelector("#name_comment_1").innerHTML = "Udfyld dette felt!";

        //form.name.setAttribute("value", "Udfyld dette felt!")
    }

    if(lastName.length > 1){
        document.querySelector("#name_comment_2").innerHTML = "";

    }

    else{
        document.querySelector("#name_comment_2").innerHTML = "Udfyld dette felt!";

    }

    if(Email.length > 1){
        document.querySelector("#name_comment_3").innerHTML = "";

    }else{
        document.querySelector("#name_comment_3").innerHTML = "Udfyld dette felt!";

    }

    if(phone.length < 8){
        document.querySelector("#name_comment_4").innerHTML = "Udfyld dette felt!";

    }else{
        document.querySelector("#name_comment_4").innerHTML = "";

    }
})

/*
document.querySelectorAll(".input_felter").forEach(inputfelt => {
    inputfelt.addEventListener("keydown", function(event){
        var name = event.target;
        if(name.value.length > 2){
            name.style.backgroundColor = "green";
        }else{
            name.style.backgroundColor = "red";
        }
    })
})
*/





/* Quizzen */
const quizQuestions = [
    { //første plads i arrayet, plads 0
        q: "Hvilket land er Maravelo inspireret af?",
        a: ["Frankrig", "Italien", "Danmark", "USA"],
        correct: "Italien",
        point: 0
    },
    { // anden plads i arrayet, plads 1
        q: "Hvad er med i købet af en Maravelo cykel?",
        a: ["Cykelhjelm", "Cykeltøj og en bil", "Cyklen + serviceaftale + rentefritløn", "Cyklen og en hoppeborg"],
        correct: "Cyklen + serviceaftale + rentefritløn",
        point: 0
    },
    { // tredje plads i arrayet, plads 2
        q: "Hvad er fordelen ved at få finanseret din Maravelo elcykel hos os?",
        a: ["Du får lagt ekstra renter i købet", "Rentefrit + det bliver din egen elcykel", "Den bliver mindre værd", "Reservedelen går i stykker"],
        correct: "Rentefrit + det bliver din egen elcykel",
        point: 0
    },
    { // fjerde plads i arrayet, plads 3
        q: "Hvad sker hvis ikke, du vil have din Maravelo elcykel, når finanseringen er afsluttet?",
        a: ["Lader den stå, og bruger den aldrig mere", "Du giver den til en ven", "Du skrotter cyklen", "Du kan benytte dig af vores tilbagekøbsgaranti"],
        correct: "Du kan benytte dig af vores tilbagekøbsgaranti",
        point: 0
    }

];


var count = 0;
var qElement = document.querySelector("#quiz");
var optionsElement = document.querySelector(".options")

function runProgram() {

    qElement.innerHTML = quizQuestions[count].q

    var aElements = "<ul id='quiz-ul'>"

    quizQuestions[count].a.forEach(answer => {
        aElements += '<li>' + answer + '</li><br>'
    })

    optionsElement.innerHTML = aElements + ' <br><input type="submit" value="SVAR" id="svar"> </ul>'

    document.querySelectorAll("li").forEach(li => {
        li.addEventListener("click", function (e) {
            removeClickedClass();
            e.target.classList.add("clicked");
        })
    });

    checkAnswer();
}

function removeClickedClass() {

    document.querySelectorAll("li").forEach(li => {

        li.classList.remove("clicked");

    });
}

function getSelectedAnswer() {

    var answer;

    document.querySelectorAll("li").forEach(li => {

        if (li.classList.value == "clicked") {
            answer = li.innerHTML;
        }


    });

    return answer;
}

function checkAnswer() {

    answerElement = document.querySelector("#svar")

    answerElement.addEventListener("click", function (e) {

        e.preventDefault();

        console.log(getSelectedAnswer())

        if (getSelectedAnswer() == quizQuestions[count].correct) {
            quizQuestions[count].point = 1;
        }

        count = count + 1;

        if (quizQuestions.length == count) {
            status();
        } else {
            runProgram();
        }


    })

}

function status() {

    qElement.innerHTML = "Point status"

    optionsElement.innerHTML = "";

    var samletPoint = 0;

    quizQuestions.forEach(answer => {
        samletPoint += answer.point
    })

    optionsElement.innerHTML = "Du fik " + samletPoint + " ud af " + quizQuestions.length + " mulige ";

}

runProgram();