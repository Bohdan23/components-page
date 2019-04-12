function countdown() {
	var seconds = 30;
	function tick() {
		var counter = document.getElementById('timer_count');
		document.querySelector('.tick-init').disabled = true;
		seconds--;
		counter.innerHTML = (seconds < 10 ? '0' : '') + String(seconds);
		if ( seconds > 0 ) {
			setTimeout(tick, 1000);
		} else {
			document.querySelector('.tick-init').disabled = false;
			counter.innerHTML = '0';
		}
	}
	tick();
}

countdown();

$('.tick-init').on('click', function() {
	countdown();
});