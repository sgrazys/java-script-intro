console.clear();

/* 
Your task is to change the letters with diacritics:
ą ć ę ł ń ó ś ź ż


ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

1. Patkrinti ar raide yra arrP sarase, jeigu yra  arrP.indexOf('b')
*/


function correctPolishLetters(string) {


    return string
		.replaceAll('ą', 'a')
		.replaceAll('ć', 'c')
		.replaceAll('ę', 'e')
		.replaceAll('ł', 'l')
		.replaceAll('ń', 'n')
		.replaceAll('ó', 'o')
		.replaceAll('ś', 's')
		.replaceAll('ź', 'z')
		.replaceAll('ż', 'z');
}
// function correctPolishLetters(string) {
//     let arrP =['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
//     let arrE = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
    
//     for (let i = 0; i < string.length; i++) {
//         let index = arrP.indexOf(string[i]);
//         if (index >= 0) {
//             string = string.replace(string[i], arrE[index]);
//         } 
//     }

//     return string; 
// }


console.log(correctPolishLetters('Jędrzej Błądziński'));
console.log(correctPolishLetters('Maria Skłodowska-Curie'));
// correctPolishLetters('Lech Wałęsa');
// correctPolishLetters('Maria Skłodowska-Curie'),



// function correctPolishLetters(string) {
// 	let arrP = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
// 	let arrE = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];
// 	string = string.toLowerCase().replaceAll('-', ' ');
// 	let newStr = '';

// 	for (let i = 0; i < string.length; i++) {
// 		let index = arrP.indexOf(string[i]);
// 		if (index >= 0) {
// 			newStr += arrE[index];
// 		} else {
// 			newStr += string[i];
// 		}
// 		// console.log(string[i], index, arrE[index]);
// 	}

// 	let strArr = newStr.split(' ').map((s) => s[0].toUpperCase() + s.slice(1));

// 	return strArr[0] + ' ' + strArr.slice(1).join('-');

// 	// console.log(strArr);
// }