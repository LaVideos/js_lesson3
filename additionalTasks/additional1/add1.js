// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль


// let arrNum = [23,56,33,11,1];
//
// // for (let i = 0; i < arrNum.length; i++) {
// //     let x = arrNum[i];
// //     console.log(x);
// // }

// let string = ['word', 'string', 'something', 'also', 'and'];
//
// for (let i = 0; i < string.length; i++) {
//     let y = string[i];
//     console.log(y);
// }

// let bigArray = ['sdd', 'ss','asda', 'www','aaa', 22,33,44,55,33,11, true, false, true, false, false];
//
// for (let i = 0; i < bigArray.length; i++) {
//     let v = bigArray[i];
//     console.log(v);
// }

// let emptyARR = [];
//
// emptyARR[0] = 's';
// emptyARR[1] = true;
// emptyARR[2] = 22;
// emptyARR[3] = 2222;
//
// for (let i = 0; i < emptyARR.length; i++) {
//     let a = emptyARR[i];
//     console.log(a);
// }


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let arr_ = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;
// // while (i < arr_.length){
// //     let e = arr_[i];
// //     console.log(e);
// //     i++;
// // }

// for (let i = 0; i < arr_.length; i++) {
//     let q = arr_[i];
//     console.log(q);
// }

// while (i<arr_.length){
//
//     if(i % 2 === 1){
//         console.log(arr_[i]);
//     }
//
//     i++;
// }

//
// for (let i = 0; i < arr_.length; i++) {
//     if(i%2===1){
//     console.log(arr_[i]);
//     }
// }

// while (i < arr_.length){
//     if(i % 2 === 0){
//         console.log(arr_[i]);
//     }
//     i++;
// }

// for (let i = 0; i < arr_.length; i++) {
//     if(i%2===0){
//         console.log(arr_[i]);
//     }
//
// }

// for (let j = 0; j < arr_.length; j++) {
//     let arrElement = arr_[j];
//     if(arrElement % 3 === 0){
//         arrElement = 'okten';
//     }
//
//     console.log(arrElement);
//
// }

// for (let j = arr_.length-1; j >= 0; j--) {
//     let arrElement = arr_[j];
//     console.log(arrElement);
//
// }

{ // 9
    let arr_ = [2,17,13,6,22,31,45,66,100,-18];

    let i = arr_.length-1;

    // while (i>=0){
    //     let a = arr_[i];
    //     console.log(a);
    //     i--;
    // }

    // for (let i = arr_.length-1; i >= 0; i--) {
    //     const iElement = arr_[i];
    //     console.log(iElement);
    //
    // }

    {
        let j = arr_.length;
        // while (j>=0){
        //     if(j%2 === 1){
        //         let a = arr_[j];
        //         console.log(a);
        //     }
        //
        //     j--;
        // }

        // for (j; j>=0;j--){
        //     if(j%2===1){
        //         let x = arr_[j];
        //         console.log(x);
        //     }
        // }

        // while (i>=0){
        //     if(i%2===0){
        //         let x = arr_[i];
        //         console.log(x);
        //     }
        //     i--;
        // }

        // for(i; i>=0; i--){
        //     if(i%2===0){
        //         let x = arr_[i];
        //         console.log(x);
        //     }
        // }

        // for (i; i>=0;i--){
        //     let arrElement = arr_[i];
        //     if (arrElement % 3 === 0) {
        //         arrElement = 'okten';
        //     }
        //     console.log(arrElement);
        // }
    }

}









// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let nums = [1,3,5,6,8,0,-44,4.33,2.3,6];
// for (let j = 0; j < nums.length; j++) {
//     const num = nums[j];
//     console.log(num);
// }

// let strng = ['ss','2wd','sdds','22e2e','vfvf','ssssss','adaddads','3rwfsges','afedf3ef4ewf','wfafafaf'];
// for (let j = 0; j < strng.length; j++) {
//     const strngElement = strng[j];
//     console.log(strngElement);
// }

// let anyArrs = [243,65464,1432,65, true, false,'rrr','sdd','22'];
// for (let j = 0; j < anyArrs.length; j++) {
//     const anyArr = anyArrs[j];
//     console.log(anyArr);
// }

// let anyArrs = [243,65464,1432,65, true, false,'rrr','sdd','22'];
// for (let j = 0; j < anyArrs.length; j++) {
//     const anyArr = anyArrs[j];
//     if(typeof anyArr === "boolean"){
//         console.log(anyArr)
//     }
//
// }

// let anyArrs = [243,65464,1432,65, true, false,'rrr','sdd','22'];
//
// for (let j = 0; j < anyArrs.length; j++) {
//     const anyArr = anyArrs[j];
//     if(typeof anyArr === "number"){
//         console.log(anyArr);
//     }
// }

// let anyArrs = [243,65464,1432,65, true, false,'rrr','sdd','22'];
//
// for (let j = 0; j < anyArrs.length; j++) {
//     const anyArr = anyArrs[j];
//     if(typeof anyArr === "string"){
//         console.log(anyArr);
//     }
//
// }













// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let someArrs = [];
//     someArrs[0] = 22;
//     someArrs[1] = 33;
//     someArrs[2] = 's';
//     someArrs[3]= '56';
//     someArrs[4] = 'some';
//     someArrs[5] = true;
//     someArrs[6] = false;
//     someArrs[7] = undefined;
//     someArrs[8] = 'hag';
//     someArrs[9] = 33333333333;
//
// for (let j = 0; j < someArrs.length; j++) {
//     const someArr = someArrs[j];
//     console.log(someArr);
// }

// for (let j = 0; j < 10; j++) {
//     console.log(j);
//     document.write(`${j}`);
// }

// for (let j = 0; j < 100; j++) {
//     console.log(j);
//     document.write(`${j}`);
// }

// for (let j = 0; j < 100; j+=2) {
//     console.log(j);
//     document.write(`${j}`);
//
// }

// for (let j = 0; j < 100; j++) {
//     if(j%2===0){
//         console.log(j);
//         document.write(`${j}`);
//     }
//
// }

// for (let j = 0; j < 100; j++) {
//     if(j%2===1){
//         console.log(j);
//         document.write(`${j}`);
//     }
//
// }
