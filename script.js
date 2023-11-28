let questions = [].slice.call(document.getElementsByClassName('question'));
let answers = [].slice.call(document.getElementsByClassName('answer'));
function clickBit (button) {
	questions.forEach((element, index)=>{
		if(button == questions[index]){
			for(let ind = 0 ; ind<questions.length ;ind++){
				if(ind == index){
					continue;
				}
				answers[ind].style.display = 'none'
				questions[ind].style.color = 'black'
				questions[ind].style.background = 'transparent'
			}
			answers[index].style.display = `${answers[index].style.display =='block'?'none':'block'}`
			questions[index].style.background = `${questions[index].style.background == 'transparent'?"#e7f1ff":"transparent"}`
			questions[index].style.color = `${questions[index].style.color == 'black'?"#0c63e4":'black'}`
		}
	});
}