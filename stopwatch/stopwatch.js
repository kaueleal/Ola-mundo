let hora = 0
let minuto = 0
let segundo = 0

let tempo = 1000 //quantos milésimos valem 1 segundo
let cron

// let btnStart = document.querySelector('.btn .start')
// let btnPause = document.querySelector('.btn .pause')
// let btnStop = document.querySelector('.btn .stop')

function start() {
	cron = setInterval(()=>{stopWatch()}, tempo)
}
function pause() {
	clearInterval(cron)
}
function stop() {
	clearInterval(cron)
	hora = 0
	minuto = 0
	segundo = 0
	document.querySelector('.counter-container .counter').innerText="00:00:00"
}
function stopWatch() {
	segundo++
	if (segundo == 59) {
		segundo = 0
		minuto++
		if (minuto == 59) {
			minuto = 0
			hora++
		}
	}

	let format = (hora < 10 ? '0' + hora : hora) + ':' + (minuto < 10 ? '0' + minuto : minuto) + ':' + (segundo < 10 ? '0' + segundo : segundo)
	document.querySelector('.counter-container .counter').innerText=format
	return format
}

// btnStart.addEventListener('click', start)
// btnPause.addEventListener('click', pause)
// btnStop.addEventListener('click', stop)