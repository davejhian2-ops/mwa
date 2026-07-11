const questions = [
    "Will you be my special someone? ❤️",
    "Do you like spending time with me? 😊",
    "Can I make you smile every day? 🌸",
    "Can I take you on a date someday? 🌹",
    "Can I hold your hand? 🥺",
    "Can I be someone special in your life? 💕",
    "Will you give me a chance to make you happy? ❤️"
];

let current = 0;

const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");



/* YES button */

yesBtn.addEventListener("click", () => {

    current++;

    if (current < questions.length) {

        question.innerHTML = questions[current];

        // YES button grows
        yesBtn.style.transform =
        `scale(${1 + current * 0.08})`;

    } else {

        // Hide buttons
        document.querySelector(".buttons").style.display = "none";
        question.style.display = "none";

        // Show letter
        letter.classList.remove("hidden");

        startConfetti();

        typeLetter();

    }

});



/* NO button runs away */

function moveNoButton(){

    const x =
    Math.random() * (window.innerWidth - 120);

    const y =
    Math.random() * (window.innerHeight - 80);


    noBtn.style.position = "fixed";

    noBtn.style.left = x + "px";

    noBtn.style.top = y + "px";

}


noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("click", moveNoButton);




/* Typewriter love letter */

function typeLetter(){

    const text = 
`Hi ❤️

I just want you to know that you are a wonderful person.

Every conversation, every smile, and every moment with you makes my day better.

Thank you for taking the time to answer my little questions.

I hope we can create many beautiful memories together.

You are truly special to me. 🌹`;

    let i = 0;


    function typing(){

        if(i < text.length){

            letterText.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 45);

        }

    }


    typing();

}




/* Confetti animation */

function startConfetti(){

    const canvas =
    document.getElementById("confetti");

    const ctx =
    canvas.getContext("2d");


    canvas.width =
    window.innerWidth;

    canvas.height =
    window.innerHeight;


    let pieces = [];


    for(let i = 0; i < 200; i++){

        pieces.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height,

            size: Math.random() * 8 + 4,

            speed: Math.random() * 3 + 2,

            color:
            `hsl(${Math.random()*360},100%,60%)`

        });

    }



    function animate(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(p => {

            ctx.fillStyle = p.color;

            ctx.fillRect(
                p.x,
                p.y,
                p.size,
                p.size
            );


            p.y += p.speed;


            if(p.y > canvas.height){

                p.y = -10;

            }

        });


        requestAnimationFrame(animate);

    }


    animate();

}