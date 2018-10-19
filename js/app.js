
$(function(){
	var model = {
		init: function(){
			//Create array "cats" with five objects of cats
			"use strict";
			this.cats = [
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
			return this.cats;
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
		},

		get_cat_id: function(cat){
			return this.get_cats().findIndex(x => x.name === cat.name)
		},

		modify_cat: function(cat, prop, new_value){
			cat[prop]= new_value;
		}
	};

	var view_list = {
		init: function(cat = controller.get_cats()[0]){
			this.catlist = $(".cat-list");
			view_cat.init(cat);
			view_list.render();
			
		},

		render: function(){
			//Add to ul. cat-list all li elment 
			this.Html = '';
			controller.get_cats().forEach(function(cat){
				this.Html += '<li class="cat"><a href="#" class="cat-link">' + cat.name + '</a></li>';
				view_list.catlist.html(this.Html);
			})
			this.list = $(".cat");
			//When click in li element, call view_cat
			for (var i = 0; i <= this.list.length; i++) {
				this.list[i].addEventListener("click", (function(id){
					return function(){
					view_cat.init(controller.get_cats()[id]);
					}
				})(i));
			};
		},

		updateList: function(cat, i) {
			this.aElement = $(".cat-link");
			this.aElement[i].innerHTML = cat.name;
		}
	};

	var view_cat = {
		init: function(cat){
			this.box = $(".cat-container");
			this.cat = cat;
			view_cat.render();
			view_form.init(this.cat);
			
		},
		render: function(){
			//add to div.cat-container the image, name and count of clicks, for this cats
			this.Html = '';
			this.Html += '<span class="name">' + this.cat.name + 
			'</span>'+'<img class="cat-image" src="'+this.cat.url+'"><br>'+this.cat.countClicks + ' clicks';
			this.box.html(this.Html);
			//if click in the image, increment 1 to count variable, and render new information
			$("img.cat-image")[0].addEventListener("click", function(){
				view_cat.cat.countClicks++;
				view_cat.render();
			});
		}
	};

	var view_form = {
		init: function(cat){
			this.adminButton = $(".admin-button");
			this.divButton = $(".button-container");
			this.formDiv = $(".form-container");
			this.HtmlForm = "";
			this.cat = cat;
			view_form.render(cat);
		},

		render: function(cat){
			this.cat = cat;
			//Render Form
			this.adminButton[0].addEventListener("click", function(){
				this.HtmlForm = '<form class="form-data">Name: <input type="text" name="name" value ="'+view_form.cat.name+'"><br>'+
				'ImgUrl: <input type="text" name="url" value="'+view_form.cat.url+'"><br>'+
				'Clicks: <input type="text" name="countClicks" value="'+view_form.cat.countClicks+'"><br>'+
				'</form><button class="send" type="button">Enviar</button>';
				view_form.formDiv.html(this.HtmlForm);
				view_form.divButton.html('<button class="admin-button" type="button" disabled>Admin</button>');
				this.sendButton = $(".send");
				this.sendButton[0].addEventListener("click", function(){
					$("input").each(function(index, element){
						controller.modify_cat(view_form.cat, element.name, element.value)
						// view_form.cat[element.name] = element.value;
					});
					view_form.formDiv.html('');
					view_form.divButton.html('<button class="admin-button" type="button">Admin</button>');
					view_list.updateList(view_form.cat, controller.get_cat_id(view_form.cat))
					view_cat.init(view_form.cat);
					
				});

				
			});
		}
	};


	controller.init();
});


function newFunction(view_form) {
	view_form.render();
}

