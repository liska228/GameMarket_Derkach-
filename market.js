
// Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');

//Визначення масиву товарів
let itemsArray = [
    {
        title: "Мотокоса 43",
        image: "https://hotline.ua/img/tx/319/3193450945.jpg",
        mono: 6,
        pb: 8,
        price_standart: "5 499 ",
        price_discount: "4 497 ",
        price_coupon: "4 395",
    },
    {
        title: "Електричний тример 110",
        image: "https://static.dnipro-m.ua/origin/description/6566/design/m-110.jpg",
        mono: 6,
        pb: 8,
        price_standart: "4 497 ",
        price_discount: "3 498",
        price_coupon: "3 396",
    },
    {
        title: "Електрична газонокосарка 32",
        image: "https://static.dnipro-m.ua/origin/description/6567/design/electric-mower-32.jpg",
        mono: 6,
        pb: 8,
        price_standart: "4 497",
        price_discount: "3 297",
        price_coupon: "3 195",
    },
    {
        title: "Акумуляторний обприскувач 12 N",
        image: "https://hotline.ua/img/tx/449/4492289865.jpg",
        mono: 6,
        pb: 8,
        price_standart: "2 190 ",
        price_discount: "1 698",
        price_coupon: "1 596",
    }  ,
// let itemsArray = [
//     {
//         firstName: "Віталій",
//         lastName:"Шатківський",
//         age: 43 ,
//         subject:"CS",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg"
//     },
//     {
//         firstName: "Наталія",
//         lastName:"Венцель",
//         age:18,
//         subject:"Адміністратор",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg"
//     },
//     {
//         firstName: "Наталія",
//         lastName:"Кучер",
//         age: 18,
//         subject:"Фізика",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg"
//     },
    // 'Газонокосарка 43',
    // 'Електричний тример 110',
    // 'Електрична газонокосарка 32',
    // 'Акумуляторний оприскувач 12N',
    // 'Газонокосарка 430',
    // 'Електричний тример 130',
    // 'Електрична газонокосарка 320',
    // 'Акумуляторний оприскувач 12 E',
    // 'Газонокосарка 4304',
    // 'Електричний тример 1304',
    // 'Електрична газонокосарка 320f',
    // 'Акумуляторний оприскувач 12 ES'
]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

if (itemsDiv) { 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
        <div class="meow">
            <div class="item-title">${item.title}</div>
        </div>
        <div class="item-image">
        <img src="${item.image}"  class="item-image">
           
            
        </div>
        <div class="parts-pay">
            <div><img src="img.market/mono-lapka.png" alt="">${item.mono}</div>
            <div><img src="img.market/privat-bank.png" alt="">${item.pb}</div>
        </div>
        <div class="prise">
            <div><span>${item.price_standart}</span><sup>грн</sup></div>
            <div><span>${item.price_discount}</span><sup>грн</sup></div>
        </div>
        <div class="prise bonus">
            <div>ціна за купоном</div>
            <div><span>${item.price_coupon}</span><sup>грн</sup></div>
        </div>
    </div>`;
});

// //Перевірка існування знайденого блоку 
// if(itemsDiv) {
//     // Виведення елементів масиву
//     itemsArray.forEach((item, index)=>{
//         // itemsDiv.innerText += item
//         // Виводимо на веб сторінку елемент масиву в блок з класом item 
//         // itemsDiv.innerHTML += 
//         // `
//         // <div class = "item">
//         //     <h2>Товар №${index +1} з ${itemsArray.length}</h2>
//         //     <p>${item}</p>
//         // </div>
//         // `
//         itemsDiv.innerHTML += 
//         `
//         <div class = "item">
//             <h2>Вчитель №${index +1} з ${itemsArray.length}</h2>
//             <p>${item.lastName} ${item.firstName}</p>
//             <p><img src="${item.photo}" class= user-photo </p>
//             <p>Вік: ${item.age}</p>
//             <p>Предмет: ${item.subject}</p>
//         </div>
//         `
//     })

    // Виведення елементів масиву
    itemsArray.forEach((item)=>{
        console.log(item)
      })

    //Вивід знайденого елементу 
    // console.log(itemsDiv)
    // Вивід значення поля знайденого елементу
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // // Додавання тексту в блок
    // itemsDiv.innerText='Перший Програмно додано текст'
    // itemsDiv.innerText+='Другий Програмно додано текст'

    // //Додавання відформатованого HTML коду в блок 
    // itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
    // itemsDiv.innerHTML = '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>' 
    // itemsDiv.innerHTML += '<div class = "item"></div>'

    // for (let i =0; i<=100; i++){
    //     itemsDiv.innerHTML += '<div class = "item"></div>'}  

} else {

    //Вивід повідомлення про не знайдений блок 
    console.log("Блок товарів не знайдено")
}

// Визначення масиву товарів
// let itemsArray=[
//     'Газонокосарка 43',
//     'Електричний тример 110',
//     'Електрична газонокосарка 32',
//     'Акумуляторний оприскувач 12 N',
    // 'Газонокосарка 430',
    // 'Електричний тример 130',
    // 'Електрична газонокосарка 320',
    // 'Акумуляторний оприскувач 12 E'
// ]

// Введення елементів відсортованого масиву
// itemsArray.sort().forEach((item)=>{
//     console.log(item)
// })
// itemsArray.sort().forEach((item,index)=>{
//     console.log(index+'-й елемент: ', item)
// })

// Введення елементів масиву
itemsArray.forEach((item)=>{
   console.log(item)
 })

// // Введення в консоль масиву
// console.log(itemsArray)

// for(let i=0; i< itemsArray.length;i++){
//     console.log(itemsArray[i])
// }

// // Сортування масиву
// itemsArray=itemsArray.sort()

// Введення в консоль номерів та значень елементів масиву
// for(let i=0; i< itemsArray.length;i++) {
//     console.log(i+'-й елемент: ', itemsArray[i])
// }