
// Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');

// Визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12N',
    'Газонокосарка 430',
    'Електричний тример 130',
    'Електрична газонокосарка 320',
    'Акумуляторний оприскувач 12 E',
    'Газонокосарка 4304',
    'Електричний тример 1304',
    'Електрична газонокосарка 320f',
    'Акумуляторний оприскувач 12 ES'
]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");


//Перевірка існування знайденого блоку 
if(itemsDiv) {
    // Виведення елементів масиву
    itemsArray.forEach((item, index)=>{
        // itemsDiv.innerText += item
        // Виводимо на веб сторінку елемент масиву в блок з класом item 
        itemsDiv.innerHTML += 
        `
        <div class = "item">
            <h2>Товар №${index +1} з ${itemsArray.length}</h2>
            <p>${item}</p>
        </div>
        `
    })

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