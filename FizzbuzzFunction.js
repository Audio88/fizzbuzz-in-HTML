function fizzbuzz(){
	var input = prompt("What number do you want fizzbuzz to count to?");
	input = +input;
	if(isNaN(input)){
		alert('you must input a number!');
	}
	else {
		var arr = [];
		for (var count = 1; count <= input; count++) {
			if (count % 5 == 0 && count % 3 == 0){
				arr.push("fizz buzz");
			}
			else if (count % 5 == 0){
				arr.push("buzz");
			}
			else if (count % 3 == 0){
				arr.push("fizz");
			}
			else {
				arr.push(count);
			}
		}
		alert(arr);
	}
	
}




