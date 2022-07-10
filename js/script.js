/*
const quizDB = [
    {
        question: "¿Quién muere en el primer episodio de la primera temporada?",
        answerA: "Joffry Baratheon uh dsrio sisninws",
        answerB: "Eddard Stark de defgw dfwdwd",
        answerC: "Tyrion Lannister de ggrgrgr vveeff",
        answerD: "Nadie muere dw vrveffe cece cecec",
        correct: "answerB",
    },
    {
        question: "¿Cuál de las siguientes NO es una familia de Juego de tronos?",
        answerA: "Tyrell",
        answerB: "Bolton",
        answerC: "Borbon",
        answerD: "Stark",
        correct: "answerC",
    },
    {
        question: "¿Quién es la madre de Jon Stark?",
        answerA: "Sansa Stark",
        answerB: "Catelyn Stark",
        answerC: "Cersei Lannister",
        answerD: "Ni Jon lo sabe",
        correct: "answerA",
    },
    {
        question: "¿En qué contexto muere Tywin Lannister?",
        answerA: "En el váter",
        answerB: "En batalla",
        answerC: "Aperitivo de dragón",
        answerD: "De viejo",
        correct: "answerA",
    },
    {
        question: "¿Quién es el conocido como 'Matarreyes'?",
        answerA: "Robert Baratheon",
        answerB: "Meñique",
        answerC: "Jaime Lannister",
        answerD: "Daenerys Targaryen",
        correct: "answerC",
    },
    {
        question: "¿Cuál es el apodo de Sandor Clegane?",
        answerA: "La Montaña",
        answerB: "Snow",
        answerC: "El perro",
        answerD: "El enano",
        correct: "answerC",
    },
    {
        question: "¿Cuándo recibió Daenerys sus huevos de dragón?",
        answerA: "En Astapor, como regalo de bienvenida",
        answerB: "Con Khal Drogo al saber que iba a ser padre",
        answerC: "Fue un regalo de boda de Magister Ilyrio",
        answerD: "Se los encontraron por el camino",
        correct: "answerD",
    },
    {
        question: "¿En qué lugar creció como adoptado Petyr Baelish?",
        answerA: "En el Norte",
        answerB: "En Stormlands",
        answerC: "En Riverrun",
        answerD: "En Casterly Rock",
        correct: "answerC",
    },
    {
        question: "¿Cómo se llaman los dragones?",
        answerA: "Balerion, Rhaegal y Viserion",
        answerB: "Drogon, Viserion y Rhaegal",
        answerC: "Viserion, Rhaegal y Vhagar",
        answerD: "Drogon, Syrax y Viserion",
        correct: "answerB",
    },
    {
        question: "¿Quién se casó en la Boda Roja?",
        answerA: "Catelyn Tully y Eddard Stark",
        answerB: "Lysa Tully y Jon Arryn",
        answerC: "Edmure Tully y Roslin Frey",
        answerD: "Daenerys Targaryen y Khal Drogo",
        correct: "answerB",
    },
];


// Declaración de variables con los elementos del DOM

const quiz = document.getElementById("quiz"); //Formulario completo
const answElems = document.querySelectorAll(".answer"); //Respuestas
const quesElem = document.getElementById("question"); //Pregunta
const answA = document.getElementById("labelA"); //Respuesta A
const answB = document.getElementById("labelB"); //Respuesta B
const answC = document.getElementById("labelC"); //Respuesta C
const answD = document.getElementById("labelD"); //Respuesta D
const submitButton = document.getElementById("submit"); //Botón Enviar



let currentQuiz = 0; //Pregunta actual
let score = 0; //Puntiación acumulada

loadQuiz();
// Ejecuta la función loadQuiz

function loadQuiz() {
// Declara la función loadQuiz:

    deselectAnswers();
    // Ejecuta la función deselectAnswer

    const currentQuizDB = quizDB[currentQuiz]; 

    quesElem.innerText = currentQuizDB.question;
    answA.innerText = currentQuizDB.answerA;
    answB.innerText = currentQuizDB.answerB;
    answC.innerText = currentQuizDB.answerC;
    answD.innerText = currentQuizDB.answerD;
};

function deselectAnswers() {
    answElems.forEach(answElem => answElem.checked = false);
};

function getSelected() {
    let answer;
    answElems.forEach(answElem => {
        if(answElem.checked) {
            answer = answElem.id;
        };
    });
    return answer;
};


submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
       if(answer === quizDB[currentQuiz].correct) {
           score++;
       };

       currentQuiz++;

       if(currentQuiz < quizDB.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2 id="result">Has respondido ${score}/${quizDB.length} preguntas correctamente</h2>

           <button id="reload" onclick="location.reload()">Volver a jugar</button>
           `;
       };
    };
});
*/




//Array formado por objetos, cada objeto corresponde a cada pregunta, incluyendo: la pregunta, las respuestas y la respuesta correcta.
const quizDB = [
    {
        question: "¿Quién muere en el primer episodio de la primera temporada?",
        answerA: "Joffry Baratheon",
        answerB: "Eddard Stark",
        answerC: "Tyrion Lannister",
        answerD: "Nadie muere",
        correct: "answerB",
    },
    {
        question: "¿Cuál de las siguientes NO es una familia de Juego de Tronos?",
        answerA: "Tyrell",
        answerB: "Bolton",
        answerC: "Borbon",
        answerD: "Stark",
        correct: "answerC",
    },
    {
        question: "¿Quién es la madre de Jon Stark?",
        answerA: "Sansa Stark",
        answerB: "Catelyn Stark",
        answerC: "Cersei Lannister",
        answerD: "Ni Jon lo sabe",
        correct: "answerD",
    },
    {
        question: "¿En qué contexto muere Tywin Lannister?",
        answerA: "En el váter",
        answerB: "En batalla",
        answerC: "Aperitivo de dragón",
        answerD: "De viejo",
        correct: "answerA",
    },
    {
        question: "¿Quién es el conocido como 'Matarreyes'?",
        answerA: "Robert Baratheon",
        answerB: "Meñique",
        answerC: "Jaime Lannister",
        answerD: "Daenerys Targaryen",
        correct: "answerC",
    },
    {
        question: "¿Cuál es el apodo de Sandor Clegane?",
        answerA: "La Montaña",
        answerB: "Snow",
        answerC: "El Perro",
        answerD: "El Enano",
        correct: "answerC",
    },
    {
        question: "¿Cuándo recibió Daenerys sus huevos de dragón?",
        answerA: "En Astapor, como regalo de bienvenida",
        answerB: "Con Khal Drogo al saber que iba a ser padre",
        answerC: "Fue un regalo de boda de Magister Ilyrio",
        answerD: "Se los encontraron por el camino",
        correct: "answerC",
    },
    {
        question: "¿En qué lugar creció como adoptado Petyr Baelish?",
        answerA: "En The North",
        answerB: "En Stormlands",
        answerC: "En Riverrun",
        answerD: "En Casterly Rock",
        correct: "answerC",
    },
    {
        question: "¿Cómo se llaman los dragones?",
        answerA: "Balerion, Rhaegal y Viserion",
        answerB: "Drogon, Viserion y Rhaegal",
        answerC: "Viserion, Rhaegal y Vhagar",
        answerD: "Drogon, Syrax y Viserion",
        correct: "answerB",
    },
    {
        question: "¿Quién se casó en la Boda Roja?",
        answerA: "Catelyn Tully y Eddard Stark",
        answerB: "Lysa Tully y Jon Arryn",
        answerC: "Edmure Tully y Roslin Frey",
        answerD: "Daenerys Targaryen y Khal Drogo",
        correct: "answerC",
    },
];
//Variables fijas (de ahí uso de 'const') para hacer referencia/llamar a los elementos que requerimos del DOM:
const quiz = document.getElementById("quiz");  //Quiz completo, todo el cuerpo
const answElems = document.querySelectorAll(".answer");  // todas las respuestas (A, B, c, D)
const quesElem = document.getElementById("question");  //cada una de las preguntas
const answA = document.getElementById("labelA");  // todas las respuestas A
const answB = document.getElementById("labelB");  // todas las respuestas B
const answC = document.getElementById("labelC");  // todas las respuestas C
const answD = document.getElementById("labelD");  // todas las respuestas D
const submitButton = document.getElementById("submit");  // botón para enviar la respuesta de cada pregunta
let currentQuiz = 0;    //pregunta actual donde se encuentra el usuario
let score = 0;      // puntuación correcta
loadQuiz();     //Para comenzar el Quiz
function loadQuiz() {
    deselectAnswers();      //función para saber qué respuesta no están seleccionadas
    const currentQuizDB = quizDB[currentQuiz];      // variable para llamar al array de objetos creado previamente con cada pregunta y respuesta
    quesElem.innerText = currentQuizDB.question;    // El texto de la variable fija creado previamente es igual a la pregunta que se plantea
    answA.innerText = currentQuizDB.answerA;        // El texto de la variable fija creado previamente es igual a la la respuesta A de dicha pregunta
    answB.innerText = currentQuizDB.answerB;        // El texto de la variable fija creado previamente es igual a la la respuesta B de dicha pregunta
    answC.innerText = currentQuizDB.answerC;        // El texto de la variable fija creado previamente es igual a la la respuesta C de dicha pregunta
    answD.innerText = currentQuizDB.answerD;        // El texto de la variable fija creado previamente es igual a la la respuesta D de dicha pregunta
};
function deselectAnswers() {                        // función para saber qué respuesta NO se ha seleccioinado
    answElems.forEach(answElem => answElem.checked = false);    // se iguala a false porque está sin seleccionar
};
function getSelected() {                            // función para saber la respuesta seleccionada
    let answer;                                     //creamos variable respuesta
    answElems.forEach(answElem => {                 //verificamos la seleccion de la respuesta comparándolo con el id de cada una de las respuestas
        if(answElem.checked) {
            answer = answElem.id;                   
        };
    });
    return answer;                                  // Nos devuelve la respuesta seleccionada
};
submitButton.addEventListener('click', () => {          //botón para enviar las respuestas seleccionadas
    const answer = getSelected();                       // la respuesta que enviamos llama a la función anteriormente creada para saber qué respuesta se ha seleccionado
    if(answer) {
       if(answer === quizDB[currentQuiz].correct) {     //si la respuesta elegida es igual a la respuesta indicada como correcta en el objeto
           score++;                                     //se suma uno al contador
       };
       currentQuiz++;
       if(currentQuiz < quizDB.length) {                // para terminar el Quiz, se vuelvea la función de inicio del mismo y vaciamos todas las respuestas(para dejarlo limpio)
           loadQuiz();
       } else {
           quiz.innerHTML = `                          
           <h2 id="result">Has respondido ${score}/${quizDB.length} preguntas correctamente</h2>        
           <button id="reload" onclick="location.reload()">Volver a jugar</button>
           `;                              //si el nº de respuestas es menor al nº total de objetos, carga otra pregunta, si no te aparece la pantalla final con la puntuación.
       };                               //Al finalizar se expone la puntuación obtenida sobre el número de preguntas que hay 
    };                                 // y aparece el botón de 'volver a jugar'. Al hacer click en él, comienza de nuevo el Quiz 
});