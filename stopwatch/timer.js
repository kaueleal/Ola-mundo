// let hour = document.get
// let minute = 0
// let second = 0

// let time = 1000 //quantos milésimos valem 1 segundo
// let temporizador

// function startTimer() {
// 	temporizador = setInterval(()=>{timer()}, time)
// }
// function pauseTimer() {
// 	clearInterval(temporizador)
// }
// function stopTimer() {
// 	clearInterval(temporizador)
// 	hour = 0
// 	minute = 0
// 	second = 0
// 	document.querySelector('#counter-content').innerText="00:00:00"
// }
// function timer() {
// 	second--
// 	if (second == 0) {
// 		second = 59
// 		minute--
// 		if (minute == 0) {
// 			minute = 59
// 			hour--
// 		}
// 	}

// 	let format = (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)
// 	document.querySelector('#counter-content').innerText=format
// 	return format
// }