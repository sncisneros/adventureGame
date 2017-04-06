var adventurer = {name:"player", life: 10, prizes: []};


var plrX = 0;
var plrY = 0;
var plr = "YOU ARE HERE";
var end = {name: "GOAL", winGame: function(){
	if(adventurer.prizes.length>=2){
	confirm("You won! Hit OK to play again!");
	}
	else{
		confirm("You made it to the goal, but with nothing to show for it! Press OK to try again..")
	}
	location.reload(true);
}};


var updateBox = document.getElementById("plyrUpdates");

var obstacle = {runObstacle : function(){
				var obsText = "That life decision wont get you far, try another \n";
				$("#plyrUpdates").val($("#plyrUpdates").val()+(obsText));
				}};
				
var prize ={ runPrize : function(){
			var prText = "Great hair! You have a new hairstyle! \n";
			$("#plyrUpdates").val($("#plyrUpdates").val()+(prText));
			adventurer.life += 1;
			adventurer.prizes.push("New Hairstyle");
			$("#plyrUpdates").val($("#plyrUpdates").val()+("Prizes: " + adventurer.prizes.join() + "\n"));
			$("#plyrUpdates").val($("#plyrUpdates").val()+("Points: " + adventurer.life + "\n"));
			
		}
};
	

var prize1 ={runPrize1 : function(){
			var prText1 = "Congrats! You have some cute new shoes!\n"; 
			$("#plyrUpdates").val($("#plyrUpdates").val()+(prText1));
			adventurer.life += 1; 
			adventurer.prizes.push("New Shoes");
			$("#plyrUpdates").val($("#plyrUpdates").val()+("Prizes: " + adventurer.prizes.join() + "\n"));
			$("#plyrUpdates").val($("#plyrUpdates").val()+("Points: " + adventurer.life + "\n"));
		}
};

var prize2 = {runPrize2 : function(){
			var prText2 = "You just picked up a Gift Card to Sephora!\n"; 
			$("#plyrUpdates").val($("#plyrUpdates").val()+(prText2));
			 adventurer.life += 1; 
			 adventurer.prizes.push("Sephora Gift Card");
			 $("#plyrUpdates").val($("#plyrUpdates").val()+("Prizes: " + adventurer.prizes.join() + "\n"));
			$("#plyrUpdates").val($("#plyrUpdates").val()+("Points: " + adventurer.life + "\n"));
		}
};

var prize3 ={ runPrize3 : function(){
			var prText3 = "You snagged a brand new dress!\n";
			$("#plyrUpdates").val($("#plyrUpdates").val()+(prText3));
			adventurer.life += 1;
			adventurer.prizes.push("New Dress");
			$("#plyrUpdates").val($("#plyrUpdates").val()+("Prizes: " + adventurer.prizes.join() + "\n"));
			$("#plyrUpdates").val($("#plyrUpdates").val()+("Points: " + adventurer.life + "\n"));
			
		}
};


var challenge = {villian: "College", hits: 5, startChal: function(){
	var chAnswer = confirm("You fell behind in your last semester.. catch up!\n Do You Accept The Challenge? OK for Y or CANCEL for N");
				
		if(chAnswer == true){
			
			adventurer.life += 1;
			challenge.hits -= 1;
			var winText = "You graduated!\n";
			var progress = "Studying..\n";
			$("#plyrUpdates").val($("#plyrUpdates").val()+(progress));
			
			while(challenge.hits > 0 && adventurer.life > 0){	
				adventurer.life -= (Math.round(Math.random()*3));
				challenge.hits -= (Math.round(Math.random()*(challenge.hits)));
			};
			
			var a = challenge.hits;
			var b = adventurer.life;
			
			if(b <= 0){
				alert("Sorry! You didnt study hard enough.. Game over");
				location.reload(true);
			}
			else if(a <=0){
				 $("#plyrUpdates").val($("#plyrUpdates").val()+(winText));
				 adventurer.prizes.push("Degree");
				$("#plyrUpdates").val($("#plyrUpdates").val()+("Prizes: " + adventurer.prizes.join() + "\n"));
				$("#plyrUpdates").val($("#plyrUpdates").val()+("Points: " + adventurer.life + "\n"));
			}
		}
		else{
			var decline = "Maybe one more semester doesn't bother you. You lose 2 points.\n";
			adventurer.life -= 2;
			$("#plyrUpdates").val($("#plyrUpdates").val()+(decline));
		}
	}	
};

var challenge1 = {villian: "Internship Interview", hits: 6, startChal1: 
	function(){
	var chAnswer1 = confirm("You have an interview today for that great Internship, can you impress them?\n Do You Accept The Challenge? OK for Y or CANCEL for N");
				
		if(chAnswer1 == true){
			
			adventurer.life += 1;
			challenge1.hits -= 1;
			var winText1 = "They Loved You!\n";
			var progress1 = "Just a few more questions..\n";
			$("#plyrUpdates").val($("#plyrUpdates").val()+(progress1));
			
			while(challenge1.hits > 0 && adventurer.life > 0){	
				adventurer.life -= (Math.round(Math.random()*4));
				challenge1.hits -= (Math.round(Math.random()*(challenge1.hits)));
			};
			
			var a = challenge1.hits;
			var b = adventurer.life;
			
			if(b <= 0){
				alert("Doesnt seem like you made the cut.. Sorry you ran out of points.");
				location.reload(true);
			}
			else if(a <=0){
				 $("#plyrUpdates").val($("#plyrUpdates").val()+(winText1));
				 adventurer.prizes.push("Internship");
				$("#plyrUpdates").val($("#plyrUpdates").val()+("Prizes: " + adventurer.prizes.join() + "\n"));
				$("#plyrUpdates").val($("#plyrUpdates").val()+("Points: " + adventurer.life + "\n"));
			}
		}
		else{
			var decline = "Well, if your career isn't important... You lose 2 points.\n";
			adventurer.life -= 2;
			$("#plyrUpdates").val($("#plyrUpdates").val()+(decline));
		}
	}	
};

var challenge2 = {villian: "Potential Love", hits: 7, startChal2: 
	function(){
	var chAnswer2 = confirm("The guy you're dating is marriage material.. make it happen! \n Do You Accept The Challenge? OK for Y or CANCEL for N");
				
		if(chAnswer2 == true){
			
			adventurer.life += 1;
			challenge2.hits -= 1;
			var winText2 = "He proposed! \n";
			
			while(challenge2.hits > 0 && adventurer.life > 0){	
				adventurer.life -= (Math.round(Math.random()*5));
				challenge2.hits -= (Math.round(Math.random()*(challenge2.hits)));
			};
			
			var a = challenge2.hits;
			var b = adventurer.life;
			
			if(b <= 0){
				alert("Its not him, its you.. so sorry!\n You ran out of points");
				location.reload(true);
			}
			else if(a <=0){
				 $("#plyrUpdates").val($("#plyrUpdates").val()+(winText2));
				 adventurer.prizes.push("Engagement");
				$("#plyrUpdates").val($("#plyrUpdates").val()+("Prizes: " + adventurer.prizes.join() + "\n"));
				$("#plyrUpdates").val($("#plyrUpdates").val()+("Points: " + adventurer.life + "\n"));
			}
		}
		else{
			var decline = "If you can do better.. You lose 2 points.\n";
			adventurer.life -= 2;
			$("#plyrUpdates").val($("#plyrUpdates").val()+(decline));
		}
	}	
};


//create function to set all obstacles, prizes, challenges and update info

function setMap(array){
array[0][4] = obstacle;
array[1][7] = obstacle;
array[2][1] = obstacle;
array[3][5] = obstacle;
array[4][0] = obstacle;
array[5][3] = obstacle;
array[6][7] = obstacle;

array[0][7] = prize;
array[1][4] = prize1;
array[2][3] = prize2;
array[2][6] = prize3;
array[3][1] = prize1;
array[4][4] = prize;
array[5][6] = prize2;
array[7][2] = prize3;

array[0][6] = challenge;
array[5][0] = challenge2;
array[7][7] = challenge1;



};




function startPos(matrix) {
  var x = Math.floor(Math.random() * matrix.length);
  var y = Math.floor(Math.random() * matrix.length);

  while (matrix[y][x] != undefined) {
    var x = Math.floor(Math.random() * matrix.length);
    var y = Math.floor(Math.random() * matrix.length);
    
  };
  
	plrX = x;
	plrY = y;
	matrix[plrY][plrX] = plr;
	console.log(plrY,plrX);
	return matrix[plrY][plrX];
};

function goalPos(matrix){
	
	 var x = Math.floor(Math.random() * matrix.length);
	var y = Math.floor(Math.random() * matrix.length);

  while (matrix[y][x] != undefined) {
    var x = Math.floor(Math.random() * matrix.length);
    var y = Math.floor(Math.random() * matrix.length);
    
  };
	matrix[y][x] = end.name;
	console.log(y, x);
	return matrix[y][x];
	
	
};



var gameMap = new Array(8);
for(var i = 0; i < 8; i++){
	gameMap[i] = new Array(8);
}
setMap(gameMap);
startPos(gameMap);
goalPos(gameMap);


function updateAdventurer(){
document.writeln("Points: " + adventurer.points);
document.writeln("Life:" + adventurer.life);
document.writeln("Prizes: " + adventurer.prize);

};

//create table, ref to gameMap
function createMatrix(array) {  
	var body = document.getElementsByTagName("body")[0];
	var t = document.createElement("table");
	var tb = document.createElement("tbody");
	  
 
	for (var i = 0; i < array.length; i++) {
		var row = document.createElement("tr");
			for (var j = 0; j < array[i].length; j++) {				
				var col = document.createElement("td");
				col.textContent = i+","+j;
				//col.appendChild(document.createTextNode(array[i][j]));
				//var fill = document.createTextNode(" - ");
					//col.appendChild(fill);
					row.appendChild(col);
				}
    t.appendChild(row);
	}
  
 t.appendChild(tb);
 body.appendChild(t);
 t.setAttribute("border", "3");
 t.setAttribute("align", "center");
 t.setAttribute("width", "50%");
 t.setAttribute("bgcolor", "#FEA8C7")
 return t;
 
 
  
}
createMatrix(gameMap);



 




/*function direction(){
	
	
var start = true;
while(start!=false){
var play = prompt("Which way would you like to go?(L, R, U, D)");
 	if(prompt.get(play) != null){
 		direction = prompt.get(play);

		switch(direction){
			case L:
				startX -= 1;
				startXY = gameMap[startY][startX];
				break;
 			case R:
 				startX += 1;
 				startXY = gameMap[startY][startX];
				break;
			case U:
				startY -= 1;
				startXY = gameMap[startY][startX];
				break;
			case D:
				startY += 1;
				startXY = gameMap[startY][startX];
				break;
 		}
 		
 	}
 	else{
 		start = false;
 		}
 }

 return startXY;
 direction();
}*/

function checkMove(array, y, x){
	if(array[y][x] == obstacle){
		return array[y][x].runObstacle();
	}
	else if(array[y][x]== prize){
		return array[y][x].runPrize();
	}
	else if(array[y][x]== prize1){
		return array[y][x].runPrize1();
	}
	else if(array[y][x]== prize2){
		return array[y][x].runPrize2();
	}
	else if(array[y][x]== prize3){
		return array[y][x].runPrize3();
	}
	else if(array[y][x]== challenge){
		return array[y][x].startChal();
	}
	else if(array[y][x]== challenge1){
		return array[y][x].startChal1();
	}
	else if(array[y][x]== challenge2){
		return array[y][x].startChal2();
	}
	else if(array[y][x]== undefined){
		array[y][x] = "X";
	}
	else if(array[y][x] == end.name){
		return end.winGame();
	}
	
	return array[y][x];
};

$(document).ready(function(){
    $("#one").click(function(){
		if((plrY - 1) < 0){
			plrY = plrY
		}
		else{
			plrY -= 1;
		}
		checkMove(gameMap, plrY, plrX);
		if(gameMap[plrY][plrX] == obstacle)
			plrY += 1;
		$("#plyrUpdates").val($("#plyrUpdates").val()+("Location: "+plrY+","+plrX+"\n"));
    });
});

$(document).ready(function(){
    $("#two").click(function(){
		if((plrX - 1) < 0){
			plrX = plrX
		}
		else{
			plrX -= 1;
		}
		checkMove(gameMap, plrY, plrX);
		if(gameMap[plrY][plrX] == obstacle)
			plrX += 1;
		$("#plyrUpdates").val($("#plyrUpdates").val()+("Location: "+plrY+","+plrX+"\n"));
    });
});

$(document).ready(function(){
    $("#three").click(function(){
		if((plrX + 1) > 7){
			plrX = plrX
		}
		else{
			plrX += 1;
		}
		checkMove(gameMap, plrY, plrX);
		if(gameMap[plrY][plrX] == obstacle)
			plrX -= 1;
		$("#plyrUpdates").val($("#plyrUpdates").val()+("Location: "+plrY+","+plrX+"\n"));
    });
});

$(document).ready(function(){
    $("#four").click(function(){
		if((plrY + 1) > 7){
			plrY = plrY
		}
		else{
			plrY += 1;
		}
		checkMove(gameMap, plrY, plrX);
		if(gameMap[plrY][plrX] == obstacle)
			plrY -= 1;
		$("#plyrUpdates").val($("#plyrUpdates").val()+("Location: "+plrY+","+plrX+"\n"));
    });
});



