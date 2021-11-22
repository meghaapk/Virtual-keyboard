var xy = '';
var FcapsLock = '0';
var Fshift = '0';

//Function key start

//BackSpace
function funcDel() {
	var valu = document.getElementById('display').innerHTML;
	var x = document.getElementById('display').innerHTML.length;
	var y = 1;
	var z = x-y;
	document.getElementById('display').innerHTML=valu.slice(0,z);
}
//CapsLock
function funcCL() {
	if (FcapsLock == '0') {
		FcapsLock = '1';
	}else if (FcapsLock == '1') {
		FcapsLock = '0';
	}
}

//Clear
function funcClear() {
	var valu = document.getElementById('display').innerHTML='';
	FcapsLock = '0';
    Fshift = '0';
}
//Shift
function funcShift() {
	if (Fshift == '0') {
		Fshift = '1';
	}else if (Fshift == '1') {
		Fshift = '0';
	}
}
//Enter
function funcEnter() {
	var valu = document.getElementById('display').innerHTML;
	if (valu == '') {
		alert('Not inserted : Empty innerHTML');
	}else{
		alert('Data Inserted : '+valu);
	}
}
//Tab
function funcTab() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+'	';
}
//Space
function funcSpace() {
	var valu = document.getElementById('display').innerHTML;
	document.getElementById('display').innerHTML=valu+' ';
}
//Letter keys
function funckeys(key){
	var valu = document.getElementById('display').innerHTML;
	if (FcapsLock == '0') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+key;
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+key.toUpperCase();
			
		}
	}else if (FcapsLock == '1') {
		if (Fshift == '0') {
			document.getElementById('display').innerHTML=valu+key.toUpperCase();
		}else if (Fshift == '1') {
			Fshift = '0';
			document.getElementById('display').innerHTML=valu+key;
		}
	}
}

//Number Keys
//1
function func1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'1';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'!';
	}
}
//2
function func2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'2';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'@';
	}
}
//3
function func3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'3';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'#';
	}
}
//4
function func4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'4';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'$';
	}
}
//5
function func5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'5';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'%';
	}
}
//6
function func6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'6';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'^';
	}
}
//7
function func7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'7';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'&';
	}
}
//8
function func8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'8';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'*';
	}
}
//9
function func9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'9';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'(';
	}
}
//0
function func0() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'0';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+')';
	}
}
//Special keys
function funcSc1() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'`';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'~';
	}
}
function funcSc2() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'_';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'-';
	}
}
function funcSc3() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'[';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'{';
	}
}
function funcSc4() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+']';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'}';
	}
}
function funcSc5() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'\\';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'|';
	}
}
function funcSc6() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+';';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+':';
	}
}
function funcSc7() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+"'";
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'"';
	}
}
function funcSc8() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+',';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'<';
	}
}
function funcSc9() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'/';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'?';
	}
}
function funcDot() {
	var valu = document.getElementById('display').innerHTML;
	if (Fshift == '0') {
		document.getElementById('display').innerHTML=valu+'.';
	}else if (Fshift = '1') {
		Fshift = '0';
		document.getElementById('display').innerHTML=valu+'>';
	}
}