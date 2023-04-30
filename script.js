(function(){
    "use strict";
}());


const greyBtn = document.getElementsByClassName('grey');        //серые кнопки
const orangeBtn = document.getElementsByClassName('orange');    //оранжевые кнопки
const blackBtn = document.getElementsByClassName('black');      //черные кнопки
let answer = document.querySelector('.answer');                 //поле с числами (операндами и результатом)
let first, second;                                              //переменные для первого и второго операндов



for (let i = 0; i < greyBtn.length; i++){
    greyBtn[i].addEventListener('mousedown', () => {
        greyBtn[i].style.background = 'white';
    });
    greyBtn[i].addEventListener('mouseup', () => {
        greyBtn[i].style.background = '#A4A4A4';
    });
}


let point;
for (let i = 0; i < blackBtn.length; i++){
    blackBtn[i].addEventListener('mousedown', () => {
        blackBtn[i].style.background = '#6F7378';
        let num = blackBtn[i].textContent;
        if (nextOp){
            answer.innerHTML = num;
            nextOp = false;
        } else{
            if (answer.textContent.length < 6){
                if (answer.textContent == 0 && i != 10 && !point){
                    answer.innerHTML = num;
                } else{
                    if (i != 10){
                        answer.innerHTML = answer.textContent + num;
                    } else if (!point){
                        answer.innerHTML = answer.textContent + num;
                        point = true;
                    }
                }
            }
        }
    });
    blackBtn[i].addEventListener('mouseup', () => {
        blackBtn[i].style.background = '#3C3F42';
    });
}


for (let i = 0; i < orangeBtn.length; i++){
    orangeBtn[i].addEventListener('mousedown', () => {
        orangeBtn[i].style.background = '#FCC981';
    });
    orangeBtn[i].addEventListener('mouseup', () => {
        orangeBtn[i].style.background = '#F1A53D';
    });
}

    //Кнопка AC
greyBtn[0].addEventListener('click', () => {
    answer.innerHTML = 0;
    result = false;
    point = false;
    nextOp = false;
    pos = false;
});

    //кнопка +/-
let flag = false;
const minus = '-';
greyBtn[1].addEventListener('click', () => {
    if (!flag && answer.textContent != '0'){
        answer.innerHTML = minus + answer.textContent;
        flag = true;
    } else if (answer.textContent != '0'){
        answer.innerHTML = answer.textContent.substring(1);
        flag = false;
    }
});


//Была нажата кнопка маи. действия
let nextOp = false;

greyBtn[2].addEventListener('click', () =>{
    first = answer.textContent;
    nextOp = true;
    operator = 4;
    pos = true;
    point = false;
});


let operator;   //смотрим, какое действие хочет выполниьт пользователь
let pos;
for (let i = 0; i < 4; i++){
    orangeBtn[i].addEventListener('click', () => {
        operator = i;
        first = answer.textContent;
        nextOp = true;
        pos = true;
        point = false;
    });
}

//нажатие на равно 
let result = false;
orangeBtn[4].addEventListener('click', () => {
    if (pos){
        nextOp = false;
        result = true;
        second = answer.textContent;  
        switch(operator){
            case 0:
                answer.innerHTML = parseFloat(first) / parseFloat(second);
                break;
            case 1:
                answer.innerHTML = parseFloat(first) * parseFloat(second);
                break;
            case 2:
                answer.innerHTML = parseFloat(first) - parseFloat(second);
                break;
            case 3:
                answer.innerHTML = parseFloat(first) + parseFloat(second);
                break;
            case 4:
                answer.innerHTML = parseFloat(first) % parseFloat(second);
                break;
        }
    }
});