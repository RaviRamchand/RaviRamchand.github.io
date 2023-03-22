var i = 0;

var txt = 'HELLO WORLD';

var speed =150;



function typeWriter() {

    if (i < txt.length) {

        document.getElementById("greeting").innerHTML += txt.charAt(i);

        i++;

        setTimeout(typeWriter, speed);

    }

}