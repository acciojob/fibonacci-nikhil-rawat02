function fibonacci(num) {

	if(num <= 1){
		console.log(num);
		return;
	}
	let n1 = 0;
	let n2 =1;
	var next = 0;
	var number = parseInt(num);
	for(i =2;i <=number ; i++){
		next = n1+n2;
		n1 = n2;
		n2 = next;
	
	}
	console.log(next);
}

module.exports = fibonacci;
