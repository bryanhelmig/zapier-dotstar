/*
Need: ledStrip, and it length
Base color (RGB)
Highlight color (RGB)
*/


var starburst = function(ledStrip, r, g, b) {
	var ledStripLength = ledStrip.length;

	var time = new Date().getTime();
	// each consumes 100 ms, and there are 16 step total.
	var step =  Math.floor(time / 100)  % 16 ;
	for (var i = 0; i < ledStripLength; i++) {
		// figure out whether this LED is on the "left", "right" or "end"
		//   of the current arm/spoke.
		var remainder = i % 31;
		var isHighlight = false;

		if (remainder < 15) {
			// it's on the "left"
			isHighlight = remainder === step;
		}
		else if ( remainder === 15 ) {
			// it's on the "end" of the arm
			isHighlight = remainder === step;
		}
		else {
			// it's on the "right"
			isHighlight = (30 - remainder) === step;
		}

		if (isHighlight) {
			ledStrip.set(i, 200, 200, 200, 0.6);
		} else {
			ledStrip.set(i, r, g, b, 0.6);
		}
	}
	ledStrip.sync();
};

module.exports.starburst= starburst;
