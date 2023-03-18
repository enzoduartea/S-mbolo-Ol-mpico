canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle= "grey";
ctx.lineWidth= 1;
ctx.rect(150,143, 300, 140);
ctx.stroke();

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "blue".
    Use lineWidth e ajuste a width para 5.
    Use arc() para criar um círculo em  x = 150 e y = 143
with 40 como radius, 0 startAngle e 2 * Math.PI endAngle.
*/

const startAngle = 0;
const endAngle = 2 * Math.PI;

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(200, 193, 40, startAngle, endAngle);
ctx.stroke();

// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(400, 193, 40, startAngle , endAngle);
ctx.stroke();
// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(300, 193, 40, startAngle , endAngle);
ctx.stroke();
// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(350, 230, 40, startAngle , endAngle);
ctx.stroke();
// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.lineWidth= 5;
ctx.arc(250, 230, 40, startAngle , endAngle);
ctx.stroke();
