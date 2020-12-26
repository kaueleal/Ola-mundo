let inputHour = document.querySelector('#hora')
let inputMin = document.querySelector('#minuto')
let inputSeg = document.querySelector('#segundo')
let p1 = document.querySelector('#p1')
let p2 = document.querySelector('#p2')
let divElement = document.querySelector('#counter-container')
let butStart = document.querySelector('.btn #start')
let butStop = document.querySelector('.btn #stop')
let butPause = document.querySelector('.btn #pause')
let hh
let mm
let ss

let time
let counter = document.createElement('label')
counter.classList.add('counter')
counter.style.display = 'none'
divElement.appendChild(counter)
function startTimer() {
	hh = inputHour.value
	mm =inputMin.value
	ss = inputSeg.value
	hh = Number(hh)
	mm = Number(mm)
	ss = Number(ss)
	inputHour.style.display = 'none'
	inputMin.style.display = 'none'
	inputSeg.style.display = 'none'
	p1.style.display = 'none'
	p2.style.display = 'none'
	counter.style.display = 'block'
	butStart.setAttribute('disabled', '')
	time = setInterval(()=>{timer()}, 1000)
}
function pauseTimer() {
	clearInterval(time)
	butStart.removeAttribute('disabled', '')
}
function stopTimer() {
	clearInterval(time)
	hh = 0
	mm = 0
	ss = 0
	butStart.removeAttribute('disabled', '')
	document.querySelector('#counter-container label').style.display = 'none'
	inputHour.style.display = 'block'
	inputMin.style.display = 'block'
	inputSeg.style.display = 'block'
	inputHour.value = ''
	inputMin.value = ''
	inputSeg.value = ''
	p1.style.display = 'block'
	p2.style.display = 'block'
}
function timer() {
	if (hh == 0 && mm == 0 && ss == 0) {

	}
	else {
		if (ss == 0) {
			if (mm > 0) {
				ss = 60
				mm--
			}
			if (mm == 0) {
				if (hh > 0) {
					mm = 59
					hh--
					ss = 60
				}
			}
		}
		ss--		
	}

	let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
	document.querySelector('#counter-container label').innerText=format
	return format
}
butStart.addEventListener('click', startTimer)
butStop.addEventListener('click', stopTimer)
butPause.addEventListener('click', pauseTimer)