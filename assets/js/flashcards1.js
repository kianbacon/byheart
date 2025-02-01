const flashcard = document.getElementById("flashcard");
const front = document.getElementsByClassName("front")[0];
const back = document.getElementsByClassName("back")[0];
const question = document.getElementById("question");
const answer = document.getElementById("answer");
let i = 0;
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

// Set flashcards to current term
if (contentArray.length > 0)
    setCard(contentArray[i]);
    
flashcard.addEventListener("click",flipCard);

function nextCard(){
	if( i < contentArray.length - 1){
		i++;
		setCard(contentArray[i]);
    }

	console.log("NEXT!, " + i);

}
function prevCard(){
	if(i > 0){
		i--;
		setCard(contentArray[i]);	
    }
	console.log("PREV!, " + i);

}
function setCard(text) {
	var p_question = document.getElementsByClassName("term")[0];
	var p_answer = document.getElementsByClassName("def")[0];

	p_question.innerHTML = text.my_question;
	p_answer.innerHTML = text.my_answer;
}


function flipCard() {
	flashcard.classList.toggle("flipCard")
	console.log("FLIP!");
}

// Clear out all cards
function deleteDeck() {
	localStorage.clear();
	front.getElementsByClassName("term")[0].innerHTML = "";
	back.getElementsByClassName("def")[0].innerHTML = "";
	contentArray = [];
	console.log("DELETE!");
	i = 0;
	setCard(contentArray[i]);

}

// Add a card
function addCard() {
    if(answer.value == "" || question.value == "")
        return;
	var flashcards_info = {
		'my_question' : question.value,
		'my_answer' : answer.value
	}

	contentArray.push(flashcards_info);
	localStorage.setItem('items', JSON.stringify(contentArray));

	question.value = '';
	answer.value = '';
    setCard(contentArray[i]);
	console.log("ADD!");
    console.log(flashcards_info)
    console.log(contentArray.length);
}