/**
 * clearPixel Clears the given pixel with use of the x and y coordinates
 * @param {type} x
 * @param {type} y
 */
function clearPixel(x, y) {
	$('.pxl[style*="left: ' + x + 'px; top: ' + y + 'px;"]').css({"display": "none"});
}

/**
 * clearArea Clears a rectangular area
 * @param {type} x
 * @param {type} y
 * @param {type} length
 * @param {type} height
 */
function clearArea(x, y, length, height) {
	for (var i = 0; i < height; ++i) {
		for (var j = 0; j < length; ++j) {
			clearPixel((x + j), (y + i));
		}
	}
}
