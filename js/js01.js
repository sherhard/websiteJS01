function myFunction(){
	let x=document.getElementById('myMenu');
	if(x.style.display=='none'){
		x.style.display='block';
	}else{
		x.style.display='none'
	}
}


function buttonClick(){
	let input =document.getElementById('input');
			let intex=document.getElementById('in_text');
			let img1=input.src;
			input.src=intex.src;
			intex.src=img1

}
