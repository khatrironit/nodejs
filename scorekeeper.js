var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var total = document.querySelector("#total");
var maxscore = document.querySelector("#maxscore");
var one = document.querySelector("#one");
var two = document.querySelector("#two");
var reset = document.querySelector("#reset");
var p1score = 0;
var p2score = 0;

one.addEventListener("click", function(){
	if(p2score<total.textContent){
		if(p1score<total.textContent){
			p1score++;
			player1.textContent = p1score;
		}
		if(p1score == total.textContent){
			player1.classList.add("winner");
		}
	}
	
	
});
two.addEventListener("click", function(){
	if(p1score<total.textContent){
		if(p2score<total.textContent){
			p2score++;
			player2.textContent = p2score;
		}
		if(p2score == total.textContent){
			player2.classList.add("winner");
		}
	}
	
});
maxscore.addEventListener("keypress",function(){
	if(p1score==0 && p2score==0 && maxscore.value.length > 0 && event.which === 13){
		total.textContent = maxscore.value;
		maxscore.value = "";
	}else if(event.which === 13){
		maxscore.value = "";
	}
});
reset.addEventListener("click", function(){
	
	total.textContent=7;
	player1.textContent=0;
	player2.textContent=0;
	p1score=0;
	p2score=0;
	player1.classList.remove("winner");
	player2.classList.remove("winner");
});