$(function() {
	var model = {
		init: function(){
			if (!cats){
				cats = [
				{
					name: "Sam",
					countClicks: 0,
					url: "../images/cat.jpg"
				},
				{
					name: "Dam",
					countClicks: 0,
					url: "../images/cat_2.jpg"
				},
				{
					name: "Jayce",
					countClicks: 0,
					url: "../images/cat_3.jpg"
				},
				{
					name: "Camerot",
					countClicks: 0,
					url: "../images/cat_4.webp"
				},
				{
					name: "BrotherLyes",
					countClicks: 0,
					url: "../images/cat_5.jpg"
				}
				];
			};
		},

		increment: function(){};


	};

	var Controller = {
		init: function(){
			model.init();
			view.init();
		},

		detect: function(){};
	};

	var view_list = {
		init: function(){};
	};

	var view_cat = {
		init: function(){};
	}
})


// var hidden = function() {
// 	for (var i = cats.length - 1; i >= 0; i--) {
// 	cats[i].classList.add("hidden");
// };};
// var cats = document.getElementsByClassName('cat');
// hidden();

// var list = document.getElementsByClassName('list');

// for (var i = 0; i <= list.length; i++) {
// 	list[i].addEventListener("click", (function(number, cats){
// 		return function(){
// 			hidden();
// 			cats[number].classList.remove("hidden");
// 		}
// 	})(i, cats));

// 	count = document.getElementsByTagName('p');
// 	function myFunction(n) {
// 		var number = count[n].innerHTML;
// 		number++;
// 		count[n].innerHTML = number;
// 	};
		
// };


