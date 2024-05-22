
// Перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скриптів market.js');

//Визначення масиву товарів
let itemsArray = [{
    email: "23a_bam@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Боровий  Артур",
    gameTitle: "Дід проти москалів",
    githubLink: "https://github.com/23a-bam/Phaser2ndGame",
    githubPagesLink: "https://23a-bam.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
    surveyFormLink: "https://forms.gle/sS7tuJWJuGDjmHB98",
    gameMarketGithubLink: "https://github.com/23a-bam/GameMarket_Borovyi",
    gameMarketPagesLink: "https://23a-bam.github.io/GameMarket_Borovyi/",
    marketPagesLink: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
    gameMarketFinalLink: "-"
  },
  {
    email: "23a_gki@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Геча Кирило",
    gameTitle: "Магазин UkraineRog",
    githubLink: "https://github.com/Kyrylooo/GameMarket_Surname",
    githubPagesLink: "https://github.com/Kyrylooo/GameMarket_Surname/settings/pages",
    googleDriveLink: "https://kyrylooo.github.io/Test1/",
    surveyFormLink: "https://kyrylooo.github.io/Test1/",
    gameMarketGithubLink: "https://github.com/Kyrylooo/Test1",
    gameMarketPagesLink: "https://kyrylooo.github.io/Test1/",
    marketPagesLink: "https://kyrylooo.github.io/Test1/",
  },
  {
    email: "23a_gmo@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Громова Марина",
    gameTitle: "",
    githubLink: "https://github.com/Marina745/Phaser2ndGame",
    githubPagesLink: "https://marina745.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
    surveyFormLink: "https://forms.gle/4tsVxrHtBpkLLmdc6",
    gameMarketGithubLink: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
    gameMarketPagesLink: "https://marina745.github.io/GameMarket_Hromova/market.html",
  },
  {
    email: "23a_gayu@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Гуменюк Аріна",
    gameTitle: "",
    githubLink: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
    githubPagesLink: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
    googleDriveLink: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
    surveyFormLink: "https://forms.gle/rNroPXhu2mFSxcHx8"
  },
  {
    email: "23a_dii@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Демидчук Ілля",
    gameTitle: "",
    githubLink: "https://github.com/zxcursed2008/Phaser2ndGame",
    githubPagesLink: "https://zxcursed2008.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
    surveyFormLink: "https://forms.gle/xs7rgVauTR9ryuNc7",
    gameMarketGithubLink: "https://github.com/zxcursed2008/GameMarket_Demydchuk/"
  },
  {
    email: "23a_dyem@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Деркач Єлизавета",
    gameTitle: "Царівна жаба",
    githubLink: "https://github.com/liska228/Phaser2ndGame",
    githubPagesLink: "https://liska228.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
    surveyFormLink: "https://forms.gle/XDzvrjzJhjq758XFA",
    gameMarketGithubLink: "https://github.com/liska228/GameMarket_Derkach-",
    gameMarketPagesLink: "https://liska228.github.io/GameMarket_Derkach-/",
    marketPagesLink: "https://liska228.github.io/GameMarket_Derkach-/market.html"
  },
  {
    email: "23a_yedv@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Євланов Данііл",
    gameTitle: "Пригоди Свинки Шмеппи 2",
    githubLink: "https://github.com/Scoxxy/Phaser2ndGame",
    githubPagesLink: "https://scoxxy.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1IzTICIYe3e_rj81-ihjd3oDOz6xfSYQR?usp=drive_link",
    surveyFormLink: "https://forms.gle/vWZ2hn9MopmMy5fc7",
    gameMarketGithubLink: "https://github.com/Scoxxy/GameMarket_YevlanovDaniil",
    gameMarketPagesLink: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/",
    marketPagesLink: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/market.html",
    gameMarketFinalLink: "поки немає"
  },
  {
    email: "23a_bks@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Катя Булич",
    gameTitle: "Червона відьма",
    githubLink: "https://github.com/katyablchh/Phaser2ndGame",
    githubPagesLink: "https://katyablchh.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1bNoYv5ChnzJTrIq0fjekfbqMNjz4SZ40?usp=sharing",
    surveyFormLink: "https://forms.gle/dxTCp9vfCCgZwyy97",
    gameMarketGithubLink: "https://github.com/katyablchh/GameMarket_Bulych",
    marketPagesLink: "https://katyablchh.github.io/Phaser2ndGame/"
  },
  {
    email: "23a_kai@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Ковальов Андрій",
    gameTitle: "They alive",
    githubLink: "https://github.com/Andre00785/Phaser1stGame",
    githubPagesLink: "https://github.com/Andre00785/Phaser1stGame/settings/pages",
    googleDriveLink: "https://docs.google.com/document/d/1D1bRBFti1aHsr-ZAqkfDkK9tdEeOpkM26E9qyWCE8O0/edit?usp=sharing",
    surveyFormLink: "https://forms.gle/i7YyjwzaHp7QvXei8",
    gameMarketGithubLink: "https://github.com/Andre00785/Game_Market_Kovalev",
    gameMarketPagesLink: "https://andre00785.github.io/Game_Market_Kovalev/",
    marketPagesLink: "https://andre00785.github.io/Game_Market_Kovalev/market.html"
  },
  {
    email: "23a_kyuk@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Кожанов Юрій",
    gameTitle: "Catventure",
    githubLink: "https://github.com/kyuk278937/Catventure",
    googleDriveLink: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
    surveyFormLink: "https://forms.gle/NN9okEBmpsLw3AmX8",
    gameMarketGithubLink: "https://github.com/kyuk278937/GameMarket",
    gameMarketPagesLink: "https://kyuk278937.github.io/GameMarket/",
    marketPagesLink: "https://kyuk278937.github.io/-HomeAppliancesStore/"
  },
  {
    email: "23a_kmo@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Козлюк Марина",
    gameTitle: "Пригоди червоної шапочки",
    githubLink: "https://github.com/Marykozl/Phaser2ndGame",
    githubPagesLink: "https://marykozl.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1AZzV2iit4QmQfotZM68HmWo4OjG-5ikO",
    surveyFormLink: "https://forms.gle/PdXpRXZrbn9ujeMH7",
    gameMarketGithubLink: "https://github.com/Marykozl/GameMarket_Kozlyuk?hl=ru&authuser=0",
    gameMarketPagesLink: "https://marykozl.github.io/GameMarket_Kozlyuk/",
    marketPagesLink: "https://marykozl.github.io/GameMarket_Kozlyuk/market.html"
  },
  {
    email: "23a_kia@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Кравчук Іван",
    gameTitle: "Пригоди Свиноти",
    githubLink: "https://github.com/maskenissen1/Phaser2ndGame-1",
    githubPagesLink: "https://maskenissen1.github.io/Phaser2ndGame-1/",
    googleDriveLink: "https://drive.google.com/drive/folders/1_qC1jSGlqtfs16m1_nriWvomLg51Ah25",
    surveyFormLink: "https://forms.gle/S2YEZ1dn7tYTkrbF6",
    gameMarketGithubLink: "https://github.com/maskenissen1/GameMarket_Kravchuk",
    gameMarketPagesLink: "https://maskenissen1.github.io/GameMarket_Kravchuk/",
    marketPagesLink: "https://maskenissen1.github.io/GameMarket_Kravchuk/market.html"
  },
  {
    email: "23a_lsa@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Лазаренко Софія",
    gameTitle: "Mavka",
    githubLink: "https://github.com/SofiaLazarenko/Phaser2ndGame?authuser=0",
    githubPagesLink: "https://sofialazarenko.github.io/Phaser2ndGame/?authuser=0",
    googleDriveLink: "https://docs.google.com/document/d/1Dqe-8TcUA1YLj7mG-2IMBxHsPmlhkwfkEfrOTAb9Nvs/edit?usp=classroom_web&authuser=0",
    surveyFormLink: "https://forms.gle/PgJv2LH1ZJjjS29V8",
    gameMarketGithubLink: "https://github.com/SofiaLazarenko/GameMarket_Lazarenko?authuser=0",
    gameMarketPagesLink: "https://sofialazarenko.github.io/GameMarket_Lazarenko/index.html",
    marketPagesLink: "https://sofialazarenko.github.io/GameMarket_Lazarenko/n/market.html?authuser=0"
  },
  {
    email: "23a_kiv@liceum.ztu.edu.ua",
    group: "10-А 1",
    name: "Кайданюк Ілля",
    gameTitle: "Пригоди Свинки Шмеппи 3",
    githubLink: "https://github.com/Nefenix/Phaser2ndGame",
    githubPagesLink: "https://nefenix.github.io/Phaser2ndGame/",
    googleDriveLink: "https://drive.google.com/drive/folders/1xlqWdx6uMj_5XWDlfl4EYZtAD6A8LGMq?usp=drive_link",
    surveyFormLink: "https://forms.gle/e4camX4k2MZvK9qf7",
    gameMarketGithubLink: "https://github.com/Nefenix/GameMarket_Kaidaniuk",
    gameMarketPagesLink: "https://nefenix.github.io/GameMarket_Kaidaniuk/",
    marketPagesLink: "https://nefenix.github.io/GameMarket_Kaidaniuk/market.html"
  }
]
    // {
    //     title: "Мотокоса 43",
    //     image: "https://hotline.ua/img/tx/319/3193450945.jpg",
    //     mono: 6,
    //     pb: 8,
    //     price_standart: "5 499 ",
    //     price_discount: "4 497 ",
    //     price_coupon: "4 395",
    // },
    // {
    //     title: "Електричний тример 110",
    //     image: "https://static.dnipro-m.ua/origin/description/6566/design/m-110.jpg",
    //     mono: 6,
    //     pb: 8,
    //     price_standart: "4 497 ",
    //     price_discount: "3 498",
    //     price_coupon: "3 396",
    // },
    // {
    //     title: "Електрична газонокосарка 32",
    //     image: "https://static.dnipro-m.ua/origin/description/6567/design/electric-mower-32.jpg",
    //     mono: 6,
    //     pb: 8,
    //     price_standart: "4 497",
    //     price_discount: "3 297",
    //     price_coupon: "3 195",
    // },
    // {
    //     title: "Акумуляторний обприскувач 12 N",
    //     image: "https://hotline.ua/img/tx/449/4492289865.jpg",
    //     mono: 6,
    //     pb: 8,
    //     price_standart: "2 190 ",
    //     price_discount: "1 698",
    //     price_coupon: "1 596",
    // }  ,
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
    // ]

// Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items");

if (itemsDiv) { 
    // Створення блоків по кількості елементів масиву
    itemsArray.forEach((item, index) => {
        // Виводимо на веб-сторінку елемент масиву в блок з класом item
        itemsDiv.innerHTML += `
    
        <div class="item">
        <div class="meow">
            <div class="item-title">${item.gameTitle}</div>
            <div class="item-title">${item.name}</div>
            <div class="item-title">${item.email}</div>
            <div class="item-title">${item.group}</div>
        </div>
        <div class="parts-pay">
        <div><a href = "${item.githubLink}" target=_blank>Market Github</a><div>
        <div><a href = "${item.githubPagesLink}" target=_blank>Market Pages</a><div>
        <div><a href = "${item.googleDriveLink}" target=_blank>Docs</a><div>
        <div><a href = "${item.surveyFormLink}" target=_blank>Forms</a><div>
        <div><a href = "${item.gameMarketGithubLink}" target=_blank>Gamemarket_github</a><div>
        <div><a href = "${item.gameMarketPagesLink}" target=_blank>Gamemarket_pages</a><div>
        <div><a href = "${item.marketPagesLink}" target=_blank>Market_pages</a><div>
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