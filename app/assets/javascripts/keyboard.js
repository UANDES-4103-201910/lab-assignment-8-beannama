$(() =>{
	console.log("Hello World");

	class KeyboardController {
		constructor(inputId) {
			this.inputId = inputId;
			this.shift = 0;
		}

		toggleKeyboard() {
			var k = document.getElementById("kcontainer")
			var tbutton = document.getElementById("kbvisibilitybtn")
			if (k.style.display === "none") {
				k.style.display = "block";
				tbutton.innerHTML = "Hide Keyboard";
			} else {
				k.style.display = "none";
				tbutton.innerHTML = "Show Keyboard";
			}
		}

		keyPressed(keydiv) {

			var key = keydiv[0].innerHTML;
			var textInput = document.getElementById("targetelement")
			var originalLength = textInput.innerHTML.length;

			if (key.includes("Tab")) {
				textInput.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
			} else if (keydiv.hasClass("key-space")) {
				textInput.innerHTML += "&nbsp;"
			} else if (key.includes("Accept")) {
				textInput.innerHTML = "";
				alert("Accepted")
			} else if (key.includes("Cancel")) {
				textInput.innerHTML = "";
				alert("Canceled")
			} else if (key.includes("Enter")) {
				textInput.innerHTML += "<br>"
			} else if (key.includes("Shift")) {
				if (this.shift == 1) {
					this.shift = 0;
				} else {
					this.shift = 1;
				}
			} else if (key.includes("Bksp")) {
				textInput.innerHTML = textInput.innerHTML.slice(0, -1)
				if (textInput.innerHTML.length == originalLength) {
					textInput.innerHTML.length = textInput.innerHTML.substring(0, textInput.innerHTML.lastIndexOf("&nbsp;"))
				}
			} else {
				if (this.shift == 0) {
					key = key.toLowerCase();

				}else{
				    key = key.toUpperCase();
                }
				textInput.innerHTML += key.trim()
			}
		}
	}

	var keyboard = new KeyboardController("targetelement")

	$("#kbvisibilitybtn").click(function (){
		keyboard.toggleKeyboard();
	});

	$(".key").click(function(){
	  keyboard.keyPressed($(this));
	});


});
