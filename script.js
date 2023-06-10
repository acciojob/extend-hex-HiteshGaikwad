const extendHex = (shortHex) => {
  // write your code here
	let n= shortHex.length;
	let str='';
	if(shortHex.charAT(0)=='#'){
		str+=shortHex.charAT(0);
	}
	for(let i=0; i<3; i++){
		let c=shortHex.charAt(i)
		str+=c;
		str+=c;
	}
	return str;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
