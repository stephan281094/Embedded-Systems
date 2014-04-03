/**
 * setPixel Draws one pixel using x and y coordinates
 * @param {type} x
 * @param {type} y
 */
function setPixel(x, y) {
	var pxl = document.createElement("div");
	pxl.className = 'pxl';
	pxl.style.left = x + 'px';
	pxl.style.top = y + 'px';
	screen.appendChild(pxl);
}