const msgBox = document.querySelector('.msg-box')
const feedback = document.querySelector('.feedback')
const msg = document.querySelector('.msg')
const submit = document.querySelector('.btn')

submit.addEventListener('click', function(){
	if (msgBox.value === ''){
		feedback.classList.add('show')
		setTimeout(function(){
			feedback.classList.remove('show')
		}, 5500)
	}
	else {
		msg.innerHTML = msgBox.value;
	}
})