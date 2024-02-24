function compChoose() {
	const computer = Math.random();
	if(computer < 0.34 ) return 'rock';
	if(computer <= 0.34 && computer < 0.67) return 'paper';
	return 'scissor';
}

function finalResult(computer, player) {
	if(player == computer) return 'SERI';
	if (player == 'scissor') return (computer == 'paper') ? 'YOU WIN!' :
	 'YOU LOSE!';
	if (player == 'paper') return (computer == 'rock') ? 'YOU WIN!' :
	'YOU LOSE!';
	if(player == 'rock') return (computer == 'scissor') ? 'YOU WIN!' :
	'YOU LOSE!';
}

const player = document.querySelectorAll('li img');
	player.forEach(function(choose){
		choose.addEventListener('click', function(){
			const computerChoose = compChoose();
			const playerChoose = choose.className;
			const result = finalResult(computerChoose, playerChoose);

			const imageComputer = document.querySelector('.img-default');
			imageComputer.setAttribute('src', 'image/' + computerChoose + '.jpg');

			const final = document.querySelector('.final-result');
			final.innerHTML = result;
		});
	});

// const playerRock = document.querySelector('.rock');
// playerRock.addEventListener('click', function(){
// 	const computerChoose = compChoose();
// 	const playerChoose = playerRock.className;
// 	const result = finalResult(computerChoose, playerChoose);

// 	const imageComputer = document.querySelector('.img-default');
// 	imageComputer.setAttribute('src', 'image/' + computerChoose + '.jpg');

// 	const final = document.querySelector('.final-result');
// 	final.innerHTML = result;
// });

// const playerPaper = document.querySelector('.paper');
// playerPaper.addEventListener('click', function(){
// 	const computerChoose = compChoose();
// 	const playerChoose = playerPaper.className;
// 	const result = finalResult(computerChoose, playerChoose);

// 	const imageComputer = document.querySelector('.img-default');
// 	imageComputer.setAttribute('src', 'image/' + computerChoose + '.jpg');

// 	const final = document.querySelector('.final-result');
// 	final.innerHTML = result;
// });

// const playerScissor = document.querySelector('.scissor');
// playerScissor.addEventListener('click', function(){
// 	const computerChoose = compChoose();
// 	const playerChoose = playerScissor.className;
// 	const result = finalResult(computerChoose, playerChoose);

// 	const imageComputer = document.querySelector('.img-default');
// 	imageComputer.setAttribute('src', 'image/' + computerChoose + '.jpg');

// 	const final = document.querySelector('.final-result');
// 	final.innerHTML = result;
// });