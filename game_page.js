player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn : "+player2_name;
function send(){
    num1=document.getElementById ("number_1").value;
    num2=document.getElementById ("number_2").value;
    question_phrace=num1+" X "+num2;
    actual_answer=num1*num2;
    row1="<h4>Q. "+question_phrace+"</h4>";
    row2="<br>Answer : <input id='ans' type='number'>";
    row3="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    output=row1+row2+row3;
    document.getElementById("output").innerHTML=output;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}
question_turn="player1";
answer_turn="player2";
function check() {
    answer=document.getElementById("ans").value;
    if(answer==actual_answer){
        if (answer_turn=="player1") {
            player1_score=player1_score+1;
            document.getElementById ("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById ("player2_score").innerHTML=player2_score;
        }
    }
    if (answer_turn=="player1") {
        answer_turn="player2";
        question_turn="player1";
        document.getElementById ("player_question").innerHTML="Question turn : "+player1_name;
        document.getElementById ("player_answer").innerHTML="Answer turn : "+player2_name;
    }
    else{
        answer_turn="player1";
        question_turn="player2";
        document.getElementById ("player_question").innerHTML="Question turn : "+player2_name;
        document.getElementById ("player_answer").innerHTML="Answer turn : "+player1_name;
    }
    document.getElementById ("output").innerHTML="";
    
}