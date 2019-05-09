$(document).ready(function(){
	
	class KeyboardController{
		constructor(inputId){
			this.InputId= $(id_target);
			this.element = document.getElementById("targetElement");		
		}
		
		toggleKeyboard(){
			var k = document.getElementById("kContainer")
			if (k.style.display == "none"){
				k.style.display = "block";			
			}
			else{
				k.style.display = "none";
			}
		}
		
		keyPressed(key) {
		    if (key.text().includes("Tab")){
		      this.element.innerHTML += "tab_space";
		    }
		    else if (key.text().includes("Accept")){
		      alert("Accepted")
		    }
		    else if (key.text().includes("Cancel")){
		      alert("Canceled")
		    }
		    else if (key.text().includes("Enter")){
		      this.element.innerHTML += "<p>"
		    }
		    else if (key.text().includes("Shift")){
		      this.element.innerHTML += "s_"
		    }
		    else if (key.text().includes("Bksp")){
		      this.element.innerHTML = this.element.innerHTML.slice(0,-1)
		    }
		    else{
		      this.element.innerHTML += key.text()
        	}
		}

		var keyboard = new KeyboardController("targetelement")

		$(".key").click(function(){
		  keyboard.keyPressed($(this))
		});

		$("#togler").click(function(){
		  keyboard.toggleKeyboard()
		});

	}
	
	

});
