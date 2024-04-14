var myArray = [1, 2, 3, 4];

console.log("Длина массива:", myArray.length);
alert("Длина массива: " + myArray.length);

var confirmation = confirm("Нажмите 'ОК', чтобы удалить один элемент из массива, или 'Отмена', чтобы оставить массив без изменений.");

if (confirmation) {

    myArray.pop();
    console.log("Массив после удаления элемента:", myArray);
} else {

    console.log("Массив остается без изменений:", myArray);
}