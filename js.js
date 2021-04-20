'use strict';

// Основное ДЗ
/*
С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
function numbers010(){
	for(let number = 0; number <= 10; number++){
		if(number == 0){
			console.log("Задание 1, ответ: " + number + " это нуль");
		}else if(number % 2){
			console.log("Задание 1, ответ: " + number + " это нечетное число");
		}else{
			console.log("Задание 1, ответ: " + number + " это четное число");
		}
	}
}
numbers010();

/*
2. Выведите в консоль значения, указанные рядом с комментариями:
*/
function attribute(){
	const post = {
		author: "John", //вывести этот текст
		postId: 23,
		comments: [
			{ 
				userId: 10,
				userName: "Alex",
				text: "lorem ipsum",
				rating: {
					likes: 10,
					dislikes: 2 //вывести это число
				}
			},
			{
				userId: 5, //вывести это число
				userName: "Jane",
				text: "lorem ipsum 2", //вывести этот текст
				rating: {
					likes: 3,
					dislikes: 1
				}
			},
		]
	};

	//Вывод значений
	console.log("Задание 2, ответ: автор: " + post.author);
	console.log("Задание 2, ответ: дизлайки пользователя Alex: " + post.comments[0].rating.dislikes);
	console.log("Задание 2, ответ: айди пользователя Jane: " + post.comments[1].userId);
	console.log("Задание 2, ответ: текст пользователя Jane: " + post.comments[1].text)

}
attribute();
/*
3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX : 
*/
function productsDiscount(){
	const products = [
		{
			id: 3,
			price: 200,
		},
		{
			id: 4,
			price: 900,
		},
		{
			id: 1,
			price: 1000,
		},
	];

	let discount = 0.15; 
	products.forEach(item => {
		item.price = item.price - item.price * discount;
	});
	console.log(products)
}
productsDiscount();

/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.
*/
function sorting(){
	const products = [
		{
			id: 3,
			price: 127,
			photos: [
				"1.jpg",
				"2.jpg",
			]
		},
		{
			id: 5,
			price: 499,
			photos: [

			]
		},
		{
			id: 10,
			price: 26,
			photos: [
				"3.jpg"
			]
		},
		{
			id: 8,
			price: 78,
		},
	];

	// Фильтрация по Фото
	const filterPhoto = products.filter(item => "photos" in item && item.photos.length > 0);
	console.log(filterPhoto);
	// Фильтрация по цене
	const filterPrice = products.filter(item => "price" in item && item.price.length > 0);
	products.sort(function (a,b){
		if (a.price > b.price){
			return 1;
		}
		if (a.price < b.price){
			return -1;
		}
	});
	console.log(products);
}
sorting();

/*
5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
НЕ используя тело цикла. То есть выглядеть должно примерно так:

 for(…){ здесь пусто }
Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать счетчик
например на 1, допустимы любые выражения, например вызовы функций.
*/
function for09(){
	for(let i = 0; i <= 9; console.log(i++)){}
}
for09();

/*
6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
function stars(){
	for (let star = '*'; star.length <= 20; star += '*'){
		console.log(star);
	}
}
stars();


/*
********************************************************************************************
********************************************************************************************
*/

// Случайно начал делать задания с сайта.

/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/
function primeNumbers(){
	let a = 0;
	nextPrime:
	while (a < 100) {
		a++;
		for (let b = 2; b < a; b++) {
			if (a % b == 0) continue nextPrime;
		}
		console.log("Задание 1, ответ: " + a);
	}
}
//primeNumbers();
/*
2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
*/
function cartAmount(){
	let cart = []; // Пустая тележка
	let total = 0; // Итоговая цена (0)
	//Эмуляция базы товаров
	const items = [
		{ //0
			id: 1, 
			title: "item1", 
			price: 599,
			currency: "rubles"
		},
		{ //1
			id: 2, 
			title: "item2",
			price: 1599,
			currency: "rubles"
		},
		{ //2
			id: 3,
			title: "item3",
			price: 2599,
			currency: "rubles"
		},
	];

	// Сумма объектов из базы товаров (думаю, тут должен браться объект и в нем искать нужное свойство и далее суммировать их, но я не знаю как это реализовывать.)
	let summary = +(items[0].price + items[1].price + items[2].price);
	console.log("Задание 2, ответ: Сумма корзины: " + summary + " рублей");
}
	
//cartAmount();
/*
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
//function cartArray(){}
//cartArray();
/*
4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/
//function numbers09(){}
//numbers09();
/*
5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
function pyramid(){
	
}
//pyramid();