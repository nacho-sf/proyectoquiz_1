

https://nacho-sf.github.io/proyectoquiz_1/


Para nuestro proyecto, tenemos 2 páginas. La primera, se trata de la pantalla principal(index.html), compuesta por un título(imagen del tema de nuestro quiz) y un botón que redirige a la segunda pantalla, es decir, al quiz(quiz.html).

Una vez en el quiz, cada una de las preguntas aparece en una única pantalla, donde hay 4 opciones de respuesta(inputs type radio) y solo una es la correcta.
Para enviar la respuesta, es preciso hacer click en el botón "enviar" que activará las funciones desarrolladas en el archivo .js.

Es obligatorio seleccionar una respuesta para poder avanzar en el quiz. Una vez seleccionada la respuesta y pulsado el botón de enviar; si es correcta, se suma un punto al contador, si no, no se suma, pero igualmente, se pasa a la siguiente pregunta.

Al completar las 10 preguntas que componen nuestro quiz, saltará una pantalla donde el usuario podrá ver el número de respuestas correctas y un botón para volver a jugar. Este botón, reiniciará el quiz.


En cuanto al código, al inicio del archivo .js podemos visualizar un array compuesto por diferentes objetos. Cada objeto corresponde a cada una de las preguntas que conforman el quiz, junto con sus 4 opciones de respuesta y la respuesta correcta; haciendo de BBDD de la app.

A continuación, se han definido las variables fijas que interactúan con el DOM, así como la variable del contador (let score) igualada inicialmente a 0 y la variable de posición del usuario en nuestro quiz (let currentQuiz), que refleja en qué elemento(objeto) del array nos encontramos.

En lo relativo a las funciones declaradas, podemos visualizar la función loadQuiz() que nos permite inicializar cada una de las preguntas con sus respectivas respuestas. Además, la función deselectAnswers(), marca como NO seleccionadas las respuestas que no han sido marcadas por el usuario. Por último, la función getSelected(), recoge la respuesta seleccionada por el jugador.

Para concluir, el botón de "enviar" realiza varias acciones: con el addEventListener ligado al mismo, al hacer click en él; por un lado, declara la constante answer y la iguala a la función getSelected(), es decir, la respuesta seleccionada por el usuario; y, por otro lado, compara que dicha elección sea correcta. Si la respuesta elegida coincide con la respuesta correcta, se suma un punto al contador; en caso contrario, no se sumaría, pero permite continuar a la siguiente pregunta.

Esta función continua con un condicional que dicta: "si la pregunta donde se encuentra el usuario es menor al número total de preguntas, ejecuta de nuevo la función loadQuiz; por contra, ejecutaría la pantalla final, donde aparece la puntuación del usuario y el botón de reinicio.