$(function(){
	var model = {
		init: function(){
			//Create array "cats" with five objects of cats
			cats = [
				{
					name: "Sam",
					countClicks: 0,
					url: "images/cat.jpg"
				},
				{
					name: "Dam",
					countClicks: 0,
					url: "images/cat_2.jpg"
				},
				{
					name: "Jayce",
					countClicks: 0,
					url: "images/cat_3.jpg"
				},
				{
					name: "Camerot",
					countClicks: 0,
					url: "images/cat_4.webp"
				},
				{
					name: "BrotherLyes",
					countClicks: 0,
					url: "images/cat_5.jpg"
				}
				]
		},
		//return cats array
		get_all_cats: function(){
			return cats;
		}
	};

	var controller = {
		init: function(){
			model.init();
			view_list.init();
		},
		//call model to return all cats array
		get_cats: function(){
			return model.get_all_cats();
		}
	};

	var view_list = {
		init: function(){
			catlist = $(".cat-list");
			view_list.render();
			
		},

		render: function(){
			//Add to ul. cat-list all li elment 
			Html = '';
			controller.get_cats().forEach(function(cat){
				Html += '<li class="cat"><a href="#">' + cat.name + '</a></li>';
				catlist.html(Html);
			})
			list = $(".cat");
			//When click in li element, call view_cat
			for (var i = 0; i <= list.length; i++) {
				list[i].addEventListener("click", (function(id){
					return function(){
					view_cat.init(id, controller.get_cats());
					}
				})(i));
			};
		}
	};

	var view_cat = {
		init: function(id, cats){
			currentCat = id;
			box = $(".cat-container");
			view_cat.render()
		},
		render: function(){
			//add to div.cat-container the image, name and count of clicks, for this cats
			Html = '';
			Html += '<span class="name">' + cats[currentCat].name + 
			'</span>'+'<img class="cat-image" src="'+cats[currentCat].url+'"><br>'+cats[currentCat].countClicks + ' clicks';
			box.html(Html);
			//if click in the image, increment 1 to count variable, and render new information
			$("img.cat-image")[0].addEventListener("click", function(){
				cats[currentCat].countClicks++;
				view_cat.render();
			});
		}
	};

	controller.init();
});


