var cats = document.getElementsByClassName('cat');
for (var i = cats.length - 1; i >= 0; i--) {
	cats[i].classList.add("hidden");
};

var list = document.getElementsByClassName('list');

for (var i = 0; i <= list.length; i++) {
	list[i].addEventListener("click", (function(number, cats){
		return function(){
			for (var i = cats.length - 1; i >= 0; i--) {
				cats[i].classList.add("hidden");
			};
			cats[number].classList.remove("hidden");
		}
	})(i, cats));

	count = document.getElementsByTagName('p');
	function myFunction(n) {
		var number = count[n].innerHTML;
		number++;
		count[n].innerHTML = number;
	};
		
};


