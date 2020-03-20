function myFunction(){
	
	var string = "Welcome to the javascript guide";

	var reverseString = string.split("").reverse().join("");
	var actualString = reverseString.split("").reverse().join("");

	console.log(reverseString);
	console.log(actualString);	
	document.getElementById("stringIs").innerHTML = "String is - "+string;
	document.getElementById("reverseStringIs").innerHTML = "Reversed string is - "+reverseString;
	document.getElementById("actualStringIs").innerHTML = "Actual String was - "+actualString;
}