// ще недоопрацював
//набір кнопок
var signs=["1","2","3","+","4","5","6","-","7","8","9","/","0","=",".","c"];
var calc=document.getElementById("calc");
  
//добавлення кнопок до форми
for(var i=0;i<signs.length;i++){
    calc.innerHTML += "<div class=btn>"+signs[i]+"</div>";
}

//при нажаманні кнопки виконується дія
(".btn").click(function() {
    var textArea=("#inputVal");
    if (this.innerHTML !== "=") {
        //добавляємо значення кнопки в поле
        textArea.val(textArea.val()+this.innerHTML);
    } else {
        //При нажиманні кнопки "=" відбувається вираховування
        textArea.val(eval(textArea.val()));
    }
    //реалізація кнопки "с" яка стирає поле
    if (this.innerHTML === "c") {
        textArea.val("");
    }
});