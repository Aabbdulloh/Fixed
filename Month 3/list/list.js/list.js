// var a = 10
// var b = 5 
// var z = a-b
// var x =7
// console.log(z+x);


// var a = 25
// var b = 15
// var result = a-b 
// console.log(result);


// var a = 25
// var b = 15
// var z = a-b 
// console.log(z);


// var a = 10
// var b = 3
// var z = 10%3
// console.log(z);


// var a = 2
// console.log(a**10);



// var year = prompt("tug'ilgan yilingiz")
// var year2 = prompt("tug'ilgan yilingiz")

// var s = Number(year2)-Number(year)

// alert



// var my_money = prompt("hisobizdagi manlag'ni kiriting:")
// var result = ((((my_money/10650.34)-500-250)*10650.34)/11650.03)-120
// var text = document.querySelector("#h1")
// if(result>0){
//     text.textContent = "yetadi" 
// }else{
//     text.textContent = "yetmayadi"
// }

// var a = prompt("Hamyondagi mablag'iz:")
// var b = prompt("Mehmonxona xizmat xaqi:")
// var c = prompt("Bilet narxi:")
// var d = prompt("Sayyohlik manzillari uchun sarflangan mablag'")
// var e =((((a/10650.34)-(b+c))*10650.34)/11650.03)-d
// var natija = document.querySelector("#h1")
// if(e>1){
//     natija.textContent = "Yoqimli sayohat tilaymiz !!!" 
// }else{
//     natija.textContent = "Hisobda mablag' yetarli emas !!!"
// }





// function calc(a,b,c){
//     let result = null;
//     if (c==="+"){
//         result = a+b;
//     }
//     else if (c==="-"){
//         result = a-b;
//     }
//     else if (c==="*"){
//         result = a*b;
//     }
//     else if (c==="/"){
//         result = a/b;
//     }else{
//         alert("Bunaqa amal yo`q !!!")
//     }
//     console.log(result);
// }

// let a = prompt("1-sonni kiriting:")
// let b = prompt("2-sonni kiriting:")
// let c = prompt("amal kiriting:")
// let d = Number(a)
// let e = (Number(b))
// let f = (Number(c))

// calc(a,b,c)





// function daraja (a,b){
//     alert(a**b)
// }
// let a = prompt("1-sonni kiriting:")
// let b = prompt("2-sonni kiriting:")
// daraja(a,b)

// const a = prompt("ballingizni kiriting")
// function result(num) {
//     if(num<68){
//         return("Kira olmadingiz!!")
//     }
//     else if (num<=90){
//         let q = alert("Super kontraktga kirdinggiz!!!")
//         let w = prompt("Hisobizdagi mablag`izni kiriting:")
//         const e = Number(w)
//         const r = (3000*11000)-e
//         if(e>0){
//             return("O`qishga qabul qilindinggiz!!!")
//         }else{
//             return("Hisobda mablag` yetarli emas!!!")
//         }
//     }
//     else if(num<=189) {
//         return("Grandga kirdiz!!")
//     }else{
//         return("Bunaqa ball yo`q!!")
//     }
// } 
// let b = document.querySelector("#text")
// b.textContent = result(a)



// const a = +prompt("Istalgan son kiriting:")


// function juft_toq(num){
//     if(num%2==0){
//         return("Juft son")
//     }else{
//         return("Toq son")
//     }
// }
// console.log(juft_toq(a));






// let a = +prompt("1-sonni kiriting:")
// let b = +prompt("2-sonni kiriting:")
// let c = +prompt("3-sonni kiriting:")
// console.log(typeof a);

// function tekshirish(a,b,c){
//     if(a>b && b>c ) {
//         return("true")
//     }else{
//         return("False")
//     }
// }

// console.log(tekshirish(a,b,c));

//* Fizz buz

// const a = +prompt("son kiriting")

// function Result(num){
//     if(num%5==0 && num%3==0){
//         return("FizzBuzz")
//     }
//     else if( num%3==0){
//         return("Fizz")
//     }
//     else if (num%5==0){
//         return("Buzz")
//     }else{
//         return("Bunday son yo`q")
//     }
// }
// let b = document.querySelector("#text")
// b.textContent = Result(a)





//TODO                                                 5-dars



//* 10-masala


// const b = +prompt("Son kiriting")
// const c = b%7


// function week(num){
//     if(num===1){
//         return("Dushanba🤢")
//     }
//     else if(num===2){
//         return("Seshanba😒")
//     }
//     else if(num===3){
//         return("Chorshanba🤔")
//     }
//     else if(num===4){
//         return("Payshanba😎")
//     }
//     else if(num===5){
//         return("Juma😂")
//     }
//     else if(num===6){
//         return("Shanba🤣")
//     }
//     else if(num===0){
//         return("Yakshanba😆")
//     }else{
//         return("Bunday hafata kuni yo`q 👀")
//     }
// }


//  let g = document.querySelector("#text")
//  g.textContent = week(c)


// let g = week(c)
// document.getElementById("text").innerHTML = g;


//* 1-masala


// const son = +prompt("Istalgan son kiriting :")


// function musbat_manfiy(a){
//     if (a>0){
//         return("Musbat son")
//     }else{
//         return("Manfiy son")
//     }
// }


// let k = document.querySelector("#text")
// k.textContent = musbat_manfiy(son)




//* 2-3-masala


// const son = +prompt("Istalgan son kiriting :")


// function Juft_toq(a){
//     if (a%2==0){
//         return("Juft son")
//     }else{
//         return("Toq son")
//     }
// }


// let k = document.querySelector("#text")
// k.textContent = Juft_toq(son)




//* 4-masala


// const son = +prompt("1-istalgan son kiriting :")
// const num = +prompt("2-istalgan sonni kiriting :")


// function musbat(a,b){
//     if (a>0 && b>0){
//         return("Ikkala son musbat")
//     }else{
//         return("Ikkalasidan biri manfiy")
//     }
// }


// let k = document.querySelector("#text")
// k.textContent = musbat(son,num)



//* 5-masala


// const son = +prompt("1-istalgan sonni kiriting :")
// const num = +prompt("2-istalgan sonni kiriting :")
// const cum = +prompt("3-istalgan sonni kiriting :")
// function musbat(a,b,c){
//     if (a>b && b>c ){
//         return("a>b 🤩 b>c 🙄 a>c")
//     }else{
//         return("Noto'g'ri 🤬")
//     }
// }


// let k = document.querySelector("#text")
// k.textContent = musbat(son,num,cum)



//* 6-masala


// const a = +prompt("a sonni kiriting:")
// const b = +prompt("b sonni kiriting:")
// const c = +prompt("c sonni kiriting:")


// function oraliq(a,b,c){
//     if (a<b && b<c && a<c){
//         return("b son a va c sonlar orasida yotadi !")
//     }else{
//         return("b son a va c sonlar orasida yotmaydi ??")
//     }
// }


// let k = document.querySelector("#text")
// k.textContent = oraliq(a,b,c)



//* 7-masala 
// const a = +prompt("a sonni kiriting")
// const b = +prompt("b sonni kiriting")


// function musbat(a,b){
//     if (a>0 && b>0){
//         return("a va b sonlar musbat")
//     }
//     else if (a>0 || b<0){
//         return("a musbat son")
//     }
//     else if (b>0 || a<0){
//         return("b son musbat")
//     }
//     else{
//         return("a va b sonlar manfiy")
//     }
// }
// let k = document.querySelector("#text")
// k.textContent = musbat(a,b)


//* 8-masala


// const a = +prompt("a sonni kiriting")
// const b = +prompt("b sonni kiriting")
// const c = +prompt("c sonni kiriting")
// const d = +prompt("b sonni kiriting")


// function musbat(a,b,c,d){
//     if (a>0 && b>0 && c>0 && d>0){
//         return("Barcha sonlar musbat😀😁😎")
//     }else{
//         return("Ulardan biri manfiy ^_^")
//     }
// }


// let k = document.querySelector("#text")
// k.textContent = musbat(a,b,c,d)


// //* 9-masala 


// const a = +prompt("a sonini kiriting:")
// const b = +prompt("b sonini kiriting:")
// const c = +prompt("c sonini kiriting:")


// function musbat(a,b,c){
//     if (a>0 && b>0 || c>0){
//         return("True 👍🏻")
//     }
//     else if (a>0 || b>0 && c>0){
//         return("True 👍🏻")
//     }
//     else if (a>0 && c>0 || b>0){
//         return("True 👍🏻")
//     }
//     else{
//         return("false 👎🏻")
//     }
// }
// let k = document.querySelector("#text")
// k.textContent = musbat(a,b,c)




//TODO                                                             6-dars 


// const a = +prompt("a sonni kriting:")
// const b = +prompt("b sonni kiriting")
// function qoshish(a,b){
//    alert(a+b)
// }
// function ayirish(a,b){
//    alert(a-b)
// }
// function bolish(a,b){
//    alert(a/b)
// }
// function kopaytirish(a,b){
//    alert(a*b)
// }


// qoshish(a,b)
// ayirish(a,b)
// kopaytirish(a,b)
// bolish(a,b)


// for(let i = 0; i<=100;i++){
//    if (i%2 !=0){
//     console.log(i);
//    }
// }


// for(let i = 100; i>0 ; i--){
//     if(i%2==0){
//     console.log(i);
//     }
//  }


//TODO                                          11-masala

// const a = +prompt("Telefon kodini kiriting:")

// function num(num){
//     if (a===90 || a===91){
//         return("Beeline🥵")
//     }else if (a===88 || a === 97){
//         return('Mobiuz')
//     }else if (a === 33){
//         return("Humans")
//     }else if (a===99 || a===95){
//         return("Uzmobile")
//     }else if (a===93 || a===94){
//         return("Ucell")
//     }
// }

// let k = document.querySelector("#text")
// k.textContent = num(a)


//TODO                                          12-masala

// const a = +prompt("son kiriting")

// function myfun12(a){
//     if(a>0){
//         return(a+1)
//     }else{
//         return(a-1)
//     }
// }

// let k = document.querySelector("#text")
// k.textContent = myfun12(a)




//TODO                                          13-masala


// const a = +prompt("son kiriting")

// function myfun13(a){
//     if(a>0){
//         return(a+3)
//     }else{
//         return(a-2)
//     }
// }

// let k = document.querySelector("#text")
// k.textContent = myfun13(a)



//TODO                                          14-masala


// const a = +prompt("a sonini kiriting:")
// const b = +prompt("b sonini kiriting:")
// function math(a,b){
//     if (a>b){
//         return("a>b")
//     }else if (a==b){
//         return("a=b")
//     }else{
//         return("a<b")535
//     }
// }

// let k = document.querySelector("#text")
// k.textContent = math(a,b)



//TODO                                          15-masala


// let k = document.querySelector("#text") 
// k.textContent = math2()

// function math2(){
//     const a = +prompt("a sonini kiriting:")
//     const b = +prompt("b sonini kiriting:")
//     const c = +prompt("c sonini kiriting:")

//     if(a>b && b>c){
//         return("eng kattasi a son")
//     }else if (b>a && a>c){
//         return("eng kattasi b son")
//     }else if (c>a && a>b){
//         return("eng kattasi c son")
//     }else if (a=b>c){
//         return("a=b>c")
//     }else if (c<b<a){
//         return("c<b<a")
//     }else if (b=c=a){
//         return("b=c=a")
//     }else if (b=c<a){
//         return("b=c<a")
//     }else if (b<c<a){
//         return("b<c<a")
//     }else if (a<c<b){
//         return("a<c<b")
//     }else{
//         return("aniqlanmagan")
//     }   
// }

// math2()

// const users = ["Ibrohim","Abdulla","Aziz","Ravshan"]
// console.log(users.includes("Ravshan"));
//TODO                                          16-masala


// const num = prompt("Telefon kiriting:")
// const num2 = num.substring(0,2)
// console.log(num2);
// const num3 = Number(num2)

// function sum(a){
//     if (a===90 || a===91){
//         return("Beeline")
//     }else if (a===88 || a === 97){
//         return('Mobiuz')
//     }else if (a === 33){
//         return("Humans")
//     }else if (a===99 || a===95){
//         return("Uzmobile")
//     }else if (a===93 || a===94){
//         return("Ucell")
//     }
// }
// let f = document.querySelector("#text")
// f.textContent = sum(num3)

//TODO                                          17-masala







//TODO                                          18-masala

// const minus = document.querySelector("#minus")
// const plus = document.querySelector("#plus")
// const reset = document.querySelector("#reset")
// const h2 = document.querySelector("#h2")

// let count = 0

// minus.onclick = function(){
//     count--
//     h2.textContent=minus()
// }
// reset.onclick = function(){
//     count=0
//     h2.textContent= reset()
// }
// plus.onclick = function(){
//     count++
//     h2.textContent= plus()
// }









//TODO                                          19-masala



// const a = prompt("Istalga son kiriting:")
// const b = a.split(" ")
// const c = +b[0]
// const d = b[1]
// const g = []

// function kopaytma(c,d){
//  for(let i=0;i<c;i++){
//     g.push(d)
//  }
// }

// kopaytma(c,d)
// console.log(g);


//TODO                                          20-masala

// const a = prompt("Istalga son kiriting:")
// const b = a.split("")
// const c =b[0]
// console.log(c);
// const t =b[1]
// function myfun2(a,b){
//     if(a=b){
//         return("True")
//     }
//     else{
//         return("False")
//     }
// }
// alert(myfun2(c,t))





// const arr = [1,3,5,7,9,2,4,6,8]

// function add(arr){
//     let a =0
//     for(let i = 0; i<arr.length; i++){
//         arr[i] %2 !==0 ? a=a+arr[i] : null
//     }
//     return a
// }
// console.log(add(arr));




//TODO                                       Amaliyot
// const Users = {}

// const arr =([["name","Ibrohim"],["age","20"],["country","Uzbekistan"],["number","901220578"]])

// function convert(a){
//     for(let i = 0; i<a.length; i++){
//         Users[a[i][0]] = a[i][1]
//     }
    
// }
// convert(arr)
// console.log(Users);

//*                                           10-dars


// function $(a){
//    return document.querySelector(a)


// const recognition = new webkitSpeechRecognition();
// console.log(recognition);
// const speechRecognitionList = new webkitSpeechGrammerList();

// recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
// recognition.lang = "en-US"
// recognition.interimResult = false;
// recognition.maxAlternatives = 1;

// document.body.onclick = () =>{
//     recognition.start();
//     console.log("Ready");
// };


// recognition.onresult = (event) =>{
//     const sound = event.results[0][0].transcript;

// }










