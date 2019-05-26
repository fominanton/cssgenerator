let frame = 1;
let lustpersent = 0;
let allframes = ["0"];
let props = ["none", "margin-left"];

function addframe() {
	let persent = document.getElementById("persent").value;
	if (persent <= lustpersent || persent > 100) {
		alert("Некорректное значение !!!");
	} else {
		var div = document.createElement('div');
		div.className = persent;
		div.innerHTML = "<div id='" + persent + "' class='frame'> <h2 > " + persent + "%</h2> <div id='" + persent + "-frame-prop'></div>";

		document.getElementById("frames").appendChild(div);
		lustpersent = persent;
		allframes[frame] = persent;
		frame++;
		//console.log(allframes);


		for (let i = 1; i < props.length; i++) {
			//console.log(allframes[i]);

			let prop = document.createElement('div');
			prop.className = props[i];
			prop.innerHTML = " <div class='" + props[i] + "'> <label>" + props[i] + " </label><input id='" + props[i] + "-" + persent + "' onchange=change('" + props[i] + "-" + persent + "') type='text'> <input id='" + props[i] + "-" + persent + "-for-css' type='hidden'> </div>";
			document.getElementById(persent).appendChild(prop);

			/*
			/*
			/*
			/*
			/*
			/*
			/*
			/*
			
			<div class="margin-left">
							<label>margin-left: </label><input id="margin-left-0" onchange="change('margin-left-0')" type="text">
							<input id="margin-left-0-for-css" type="hidden">
						</div>
			<div class="margin-left">
							<label>margin-left: </label><input id="margin-left-0" onchange="change('margin-left-0')" type="text">
							<input id="margin-left-0-for-css" type="hidden">
						</div>
			<
			div class = "margin-left" >
				<
				label > margin - left: < /label><input id="margin-left-0" onchange="change('margin-left-0')" type="text"> <
				input id = "margin-left-0-for-css"
			type = "hidden" >
				<
				/div>
			<div class="margin-left">
							<label>margin-left: </label><input id="margin-left-0" onchange="change('margin-left-0')" type="text">
							<input id="margin-left-0-for-css" type="hidden">
						</div>
			<div class="margin-left">
							<label>margin-left: </label><input id="margin-left-0" onchange="change('margin-left-0')" type="text">
							<input id="margin-left-0-for-css" type="hidden">
						</div>
			<
			div class = "margin-left" >
				<
				label > margin - left: < /label><input id="margin-left-0" onchange="change('margin-left-0')" type="text"> <
				input id = "margin-left-0-for-css"
			type = "hidden" >
				<
				/div>*/

		}
	}
}

function deleteframe(frame) {
	if (lustpersent == frame) {
		lustpersent -= frame;

	};
	for (let i = 1; i < allframes.length; i++) {
		//console.log(allframes[i] + " " + frame);

		if (allframes[i] == frame) {
			allframes[i] == 'deleted';
		}
	}
	//console.log(allframes);

	document.getElementById(frame).parentNode.removeChild(document.getElementById(frame));

}

function change(elem) {
	document.getElementById(elem).nextElementSibling.value = document.getElementById(elem).value;
}

function getcss() {


	let keyframes = "@keyframes test {\n";
	let hover="";
	if(document.getElementById("hover").checked == true){
		hover = ":hover";
	}
	if(document.getElementById("click").checked == true){
		hover = ":focus";
	}
	
	let animationprop = "\n #demonstration"+hover+" {\n     animation-name: test; \n animation-direction:alternate;";
	for (let i = 0; i < allframes.length; i++) {
		keyframes += "	" + allframes[i] + "% { ";
		for (let j = 1; j < props.length; j++) {
			if (document.getElementById(props[j] + "-" + allframes[i] + "-for-css").value == "null") continue;
/*
			console.log(props[j] + "-" + allframes[i] + "-for-css");
			console.log(props[j]);*/
			if (props[j] =="scale"){
				//console.log(props[j]+"tet");
				keyframes += "transform:"+props[j] + "(" + document.getElementById(props[j] + "-" + allframes[i] + "-for-css").value + "); ";
			}
			//console.log(props[j]);
			keyframes += props[j] + ": " + document.getElementById(props[j] + "-" + allframes[i] + "-for-css").value + "; ";
		}
		//keyframes += "	"+allframes[i] + "% { margin-left:" + document.getElementById("margin-left-" + allframes[i] + "-for-css").value + "px; }\n";
		keyframes += "}\n"
	}
	keyframes += "}";
     
	if(document.getElementById("infinite").checked == true ){
		animationprop += "\n    animation-iteration-count: infinite; "
		
	}
	animationprop += "\n    animation-duration: "+document.getElementById("animation-duration").value+"; \n}";
	document.getElementById("css").innerHTML =animationprop; 

	var style = document.createElement('style');
	style.innerHTML = keyframes + animationprop;
	document.getElementById("head").appendChild(style);
	document.getElementById("demonstration").style.animationname = "test";
	document.getElementById("generated-css").innerHTML = keyframes ;


}

function addprop() {
	props[props.length] = document.getElementById("addprop").value;
	console.log(props);
	for (let i = 0; i < allframes.length; i++) {
		for (let j = 1; j < props.length; j++) {
			if (document.getElementById(props[j] + "-" + allframes[i])) {
				continue;
			} else {
				let prop = document.createElement('div');
				prop.className = props[j];
				prop.innerHTML = " <div class='" + props[j] + "'> <label>" + props[j] + " </label><input id='" + props[j] + "-" + allframes[i] + "' onchange=change('" + props[j] + "-" + allframes[i] + "') type='text'> <input id='" + props[j] + "-" + allframes[i] + "-for-css' type='hidden'> </div>";
				document.getElementById(allframes[i]).appendChild(prop);
			}
		}
	}

}

function gethtml () {
 document.getElementById("demonstration").innerHTML = document.getElementById("html").value;
}

function select(item){
	document.getElementById("addprop").value= document.getElementById(item).value;
	console.log(document.getElementById(item).value);
	
	
}
