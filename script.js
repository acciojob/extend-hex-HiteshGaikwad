const extendHex = (shortHex) => {
  // write your code here
	let n= shortHex.length;
	let str='';
	
		str+='#';

	for(let i=0; i<shortHex.length; i++){
		if(shortHex.charAt(i)=='#'){
			i++;
		}
		let c=shortHex.charAt(i)
		str+=c;
		str+=c;
	}
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
