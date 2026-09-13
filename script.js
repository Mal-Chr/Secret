const scenes = [

    {
        text: "Hiiii",
        key: "d",
        background: "scene1.png"
    },

    {
        text: "you maybe confused, and",
        key: "i",
        background: "scene1.png"
    },

    {
        text: "i really reallyy hope ur great todayy",
        key: "a",
        background: "scene1.png"
    },

    {
        text: "Soo...",
        key: "n",
        background: "scene1.png"
    },

    {
        text: "I made thiss for someonee",
        key: "a",
        background: "scene1.png"
    },

    {
        image: "oneonly.png",
        imageClass: "photo1",
        text: "And that's youu",
        key: "p",
        background: "scene1.png"
    },

    {
        text: "okayy so, i've been thinking aboutt this for so long",
        key: "r",
        background: "images/sky.jpg"
    },

    {
        text: "we both have feelings, right?",
        key: "i",
        background: "images/sky.jpg"
    },

    {
        text: "after we, called each other special names",
        key: "l",
        background: "scene4.png",
        image: "txt2.png",
        imageClass: "txt",
        textClass: "txt1",
        keyClass: "txt1"
    },

    {
        text: "after we, being loving and caring",
        key: "l",
        background: "scene4.png",
        image: "txt1.png",
        imageClass: "txt",
        textClass: "txt1",
        keyClass: "txt1"
    },

    {
        text: "after we, waited for each other",
        key: "i",
        background: "scene4.png",
        image: "txt3.png",
        imageClass: "txt",
        textClass: "txt1",
        keyClass: "txt1"
    },

    {
        text: "after all of those things we do together.",
        key: "a",
        background: "images/city.jpg"
    },

    {
        text: "ur the first flower that have ever makes me fall in love so deeply.",
        key: "n",
        background: "scene3.png"
    },

    {
        text: "even since eight grade until now.",
        key: "i",
        background: "images/night.jpg"
    },

    {
        text: "my feelings for you never changed a single bit.",
        key: "o",
        background: "scene5.png"
    },

    {
        text: "i love you",
        key: "i",
        background: "images/room.jpg"
    },

    {
        text: "and i hope you still feel the same as i am now.",
        key: "l",
        background: "images/sky.jpg"
    },

    {
        text: "so...",
        key: "o",
        background: "images/sky.jpg"
    },

    {
        text: "do you want to make a commitment with me?",
        key: "v",
        background: "images/flower.jpg"
    },

    {
        text: "Do",
        key: "e",
        background: "images/flower.jpg"
    },

    {
        text: "You wanna be a cat? ( okay my bad that's not funny. )",
        key: "y",
        background: "images/night.jpg"
    },

    {
        text: "Do",
        key: "o",
        background: "images/night.jpg"
    },

    {
        text: "You wanna make",
        key: "u",
        background: "images/city.jpg"
    },

    {
        text: "This relationship official? (be honest okay!!)",
        textClass: "txt1",
        background: "scene4.png"
    }

];


let currentScene = 0;


/* =========================
   ELEMENT
========================= */

const background = document.getElementById("background");

const content = document.getElementById("content");

const text = document.getElementById("text");
const key = document.getElementById("key");

const choices = document.getElementById("choices");
const formArea = document.getElementById("formArea");

const yesBtn = document.getElementById("yesBtn");
const notYetBtn = document.getElementById("notYetBtn");

const sceneImage = document.getElementById("sceneImage");


/* =========================
   BACKGROUND
========================= */

let currentBackground = "";


/* =========================
   TAMPILKAN SCENE
========================= */

function showScene() {

    const scene = scenes[currentScene];

    text.textContent = scene.text;

    text.className = scene.textClass || "";
    key.className = scene.keyClass || "";


    if (scene.image) {

        sceneImage.src = scene.image;

        sceneImage.className =
            `scene-image ${scene.imageClass || ""}`;

        sceneImage.style.display = "block";

    } else {

        sceneImage.style.display = "none";

    }


    if (scene.background) {

        background.style.backgroundImage =
            `url("${scene.background}")`;

        currentBackground = scene.background;

    }


    if (scene.key) {

        key.textContent =
            `[ ${scene.key.toUpperCase()} ]`;

        choices.classList.add("hidden");

    } else {

        key.textContent = "";

        choices.classList.remove("hidden");

    }

}


/* =========================
   PINDAH SCENE
========================= */

function nextScene() {

    const nextSceneIndex = currentScene + 1;

    const nextBackground =
        scenes[nextSceneIndex]?.background || currentBackground;

    const backgroundIsChanging =
        currentBackground !== nextBackground;


    content.classList.add("hide");


    if (backgroundIsChanging) {
        background.classList.add("hide");
    }


    setTimeout(() => {

        currentScene++;

        if (currentScene >= scenes.length) {
            currentScene = scenes.length - 1;
        }


        showScene();


        setTimeout(() => {

            content.classList.remove("hide");


            if (backgroundIsChanging) {
                background.classList.remove("hide");
            }

        }, 100);

    }, 700);

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", (event) => {

    if (currentScene === scenes.length - 1) {
        return;
    }


    const pressedKey =
        event.key.toLowerCase();

    const requiredKey =
        scenes[currentScene].key;


    if (pressedKey === requiredKey) {
        nextScene();
    }

});


/* =========================
   BUKA FORM
========================= */

function openForm(formContent, callback) {

    content.classList.add("hide");


    setTimeout(() => {

        text.textContent = "";
        key.textContent = "";

        choices.classList.add("hidden");


        formArea.innerHTML = formContent;

        formArea.classList.remove("hidden");


        /*
         * FORM SUDAH ADA DI DOM
         * BARU CALLBACK DIJALANKAN
         */

        if (callback) {
            callback();
        }


        setTimeout(() => {

            content.classList.remove("hide");

        }, 100);

    }, 700);

}


/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", () => {

    openForm(`

        <h2>one last thing...</h2>

        <label>
            what do you feel about us?
        </label>

        <textarea id="yesAnswer1"
            placeholder="tell me honestly... (justt use indoo)"
        ></textarea>


        <label>
            what do you want us to become from now on?
        </label>

        <textarea id="yesAnswer2"
            placeholder="your answer..."
        ></textarea>


        <label>
            is there anything you want me to know?
        </label>

        <textarea id="yesAnswer3"
            placeholder="anything..."
        ></textarea>


        <button id="submitYes">
            SUBMIT
        </button>

    `, () => {

        const submitYes =
            document.getElementById("submitYes");


        submitYes.addEventListener("click", () => {

            const answer1 =
                document.getElementById("yesAnswer1").value;

            const answer2 =
                document.getElementById("yesAnswer2").value;

            const answer3 =
                document.getElementById("yesAnswer3").value;


            const message = `
What do you feel about us?

${answer1}


What do you want us to become from now on?

${answer2}


Is there anything you want me to know?

${answer3}
            `;


            emailjs.send(
                "service_q4yez7e",
                "template_bltpha6",
                {
                    title: "YES",
                    message: message
                }
            ).then(() => {

                alert("sent successfully 💌");

            }).catch((error) => {

                console.error(
                    "EMAILJS ERROR:",
                    error
                );

                alert(
                    "FAILED 😭\n\n" +
                    error.text
                );

            });

        });

    });

});


/* =========================
   NOT YET BUTTON
========================= */

notYetBtn.addEventListener("click", () => {

    openForm(`

        <h2>that's okay.</h2>

        <label>
            what makes you feel like you're not ready yet?
        </label>

        <textarea id="notYetAnswer1"
            placeholder="you can be completely honest with me... (justt use indoo)"
        ></textarea>


        <label>
            is there anything you need from me?
        </label>

        <textarea id="notYetAnswer2"
            placeholder="tell me..."
        ></textarea>


        <button id="submitNotYet">
            SUBMIT
        </button>

    `, () => {

        const submitNotYet =
            document.getElementById("submitNotYet");


        submitNotYet.addEventListener("click", () => {

            const answer1 =
                document.getElementById("notYetAnswer1").value;

            const answer2 =
                document.getElementById("notYetAnswer2").value;


            const message = `
What makes you feel like you're not ready yet?

${answer1}


Is there anything you need from me?

${answer2}
            `;


            emailjs.send(
                "service_q4yez7e",
                "template_bltpha6",
                {
                    title: "NOT YET",
                    message: message
                }
            ).then(() => {

                alert("sent successfully 💌");

            }).catch((error) => {

                console.error(
                    "EMAILJS ERROR:",
                    error
                );

                alert(
                    "FAILED 😭\n\n" +
                    error.text
                );

            });

        });

    });

});


/* =========================
   MULAI
========================= */

showScene();

/* =========================
   FULLSCREEN
========================= */

const fullscreenGate =
    document.getElementById("fullscreenGate");

const enterFullscreen =
    document.getElementById("enterFullscreen");


enterFullscreen.addEventListener("click", async () => {
    try {
        await document.documentElement.requestFullscreen();

        if (document.fullscreenElement) {
            fullscreenGate.classList.add("hidden");
        }
    } catch (error) {
        console.error("FULLSCREEN ERROR:", error);
    }
});
