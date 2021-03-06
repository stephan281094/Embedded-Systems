/**
 * drawLine Draws a line from A(xA, yA) to B(xB, yB) with optional style(dotted)
 * @param {type} xA
 * @param {type} yA
 * @param {type} xB
 * @param {type} yB
 * @param {type} style
 */
function drawLine(xA, yA, xB, yB, style) {
	var dX = xB - xA;
	var dY = yB - yA;
	var alpha = dX / dY;

	if (dY === 0) {
		for (var i = xA; i < dX; i++) {
			setPixel(i, yA);
		}
	}

	for (var i = 0; i < dY; i++) {
		var yP = yA + i;
		var xP = xA + (i * alpha);
		var xP2 = xA + ((i + 1) * alpha);

		if (style === 'dotted') {
			setPixel(Math.round(xP), Math.round(yP));
		} else {
			while (xP < xP2) {
				setPixel(Math.round(xP), Math.round(yP));
				xP++;
			}
		}
	}
}

/**
 * TESTER
 */
function drawLine2(xA, yA, xB, yB, style) {
	var dX = xB - xA;
	var dY = yB - yA;
	var alpha = dX / dY;

	for (var i = 0; i < dY; i++) {
		var yP = yA + i;
		var xP = xA + (i * alpha);
		var xP2 = xA + ((i + 1) * alpha);

		if (style === 'dotted') {
			setPixel(xP, yP);
		} else {
			while (xP < xP2) {
				setPixel(xP, yP);
				setPixel(30, 30);
				xP++;
			}
		}
	}
}

/**
 * drawArea Draws a rectangular area
 * @param {type} x
 * @param {type} y
 * @param {type} length
 * @param {type} height
 */
function drawArea(x, y, length, height) {
	for (var i = 0; i < height; ++i) {
		for (var j = 0; j < length; ++j) {
			setPixel((x + j), (y + i));
		}
	}
}

/**
 * catHeadBig Draws a full screen cat head
 */
function drawCatHeadBig() {
	drawArea(0, 0, 128, 22);

	drawArea(0, 22, 34, 1);
	drawArea(0, 23, 33, 1);
	drawArea(0, 24, 32, 2);
	setPixel(33, 25);
	drawArea(0, 26, 34, 3);
	drawArea(0, 29, 33, 1);
	drawArea(0, 30, 34, 1);
	drawArea(0, 31, 33, 8);
	drawArea(0, 39, 34, 1);
	drawArea(0, 40, 35, 1);
	drawArea(0, 41, 37, 1);
	drawArea(0, 42, 39, 7);
	drawArea(0, 49, 38, 1);
	drawArea(0, 50, 37, 1);
	drawArea(0, 51, 35, 1);
	drawArea(0, 52, 34, 1);
	drawArea(0, 53, 33, 1);
	drawArea(0, 54, 32, 1);
	drawArea(0, 55, 31, 2);
	drawArea(0, 57, 30, 7);

	drawArea(36, 22, 55, 1);
	drawArea(37, 23, 53, 1);
	drawArea(38, 24, 51, 1);
	drawArea(39, 25, 49, 1);
	drawArea(40, 26, 47, 1);
	drawArea(41, 27, 45, 1);
	drawArea(42, 28, 43, 1);
	drawArea(43, 29, 41, 2);
	drawArea(44, 31, 39, 1);
	drawArea(45, 32, 39, 1);
	drawArea(46, 33, 37, 1);
	drawArea(47, 34, 11, 1);
	drawArea(47, 35, 7, 1);
	drawArea(48, 36, 5, 1);
	drawArea(49, 37, 4, 2);
	drawArea(50, 39, 2, 1);
	drawArea(49, 40, 3, 1);
	drawArea(45, 41, 7, 1);
	drawArea(42, 42, 9, 1);
	drawArea(39, 43, 11, 1);
	drawArea(39, 44, 8, 1);
	drawArea(39, 45, 5, 1);
	drawArea(39, 46, 3, 1);
	setPixel(39, 47);

	drawArea(69, 34, 14, 1);
	drawArea(74, 35, 9, 1);
	drawArea(74, 36, 10, 1);
	drawArea(74, 37, 4, 2);
	drawArea(74, 39, 3, 1);
	drawArea(79, 37, 4, 1);
	drawArea(79, 38, 5, 1);
	drawArea(79, 39, 6, 1);
	drawArea(75, 40, 11, 1);
	drawArea(75, 41, 12, 1);
	drawArea(76, 42, 10, 1);
	setPixel(88, 42);
	drawArea(77, 43, 13, 1);
	drawArea(80, 44, 9, 1);
	drawArea(83, 45, 7, 1);
	drawArea(85, 46, 6, 1);
	drawArea(87, 47, 5, 1);
	drawArea(88, 48, 6, 1);
	drawArea(89, 49, 6, 1);
	drawArea(90, 50, 5, 1);
	drawArea(92, 51, 3, 1);
	drawArea(93, 52, 2, 1);

	drawArea(93, 22, 35, 1);
	drawArea(94, 23, 34, 1);
	drawArea(95, 24, 33, 3);
	drawArea(96, 27, 32, 8);
	drawArea(97, 35, 31, 6);
	drawArea(96, 41, 32, 6);
	drawArea(95, 47, 33, 7);
	drawArea(96, 54, 32, 10);

	drawArea(60, 42, 9, 1);
	drawArea(57, 43, 14, 1);
	drawArea(56, 44, 16, 1);
	drawArea(55, 45, 19, 2);
	drawArea(56, 47, 18, 2);
	drawArea(56, 49, 17, 1);
	drawArea(45, 50, 4, 1);
	drawArea(57, 50, 15, 1);
	drawArea(80, 50, 4, 1);
	drawArea(42, 51, 4, 1);
	drawArea(48, 51, 4, 1);
	drawArea(58, 51, 13, 1);
	drawArea(77, 51, 10, 1);
	drawArea(41, 52, 4, 1);
	drawArea(47, 52, 6, 1);
	drawArea(58, 52, 13, 1);
	drawArea(76, 52, 13, 1);
	drawArea(39, 53, 6, 1);
	drawArea(46, 53, 8, 1);
	drawArea(59, 53, 12, 1);
	drawArea(75, 53, 15, 1);
	setPixel(39, 54);
	drawArea(42, 54, 2, 1);
	drawArea(46, 54, 9, 1);
	drawArea(59, 54, 11, 1);
	drawArea(74, 54, 2, 1);
	drawArea(77, 54, 10, 1);
	setPixel(89, 54);
	drawArea(42, 55, 2, 1);
	drawArea(45, 55, 11, 1);
	drawArea(59, 55, 11, 1);
	drawArea(73, 55, 2, 1);
	drawArea(77, 55, 7, 1);
	drawArea(85, 55, 2, 1);
	drawArea(42, 56, 2, 1);
	drawArea(46, 56, 7, 1);
	drawArea(54, 56, 2, 1);
	drawArea(59, 56, 11, 1);
	drawArea(73, 56, 2, 1);
	drawArea(77, 56, 7, 1);
	drawArea(85, 56, 2, 1);
	drawArea(43, 57, 1, 1);
	drawArea(46, 57, 6, 1);
	drawArea(53, 57, 4, 1);
	drawArea(59, 57, 11, 1);
	drawArea(73, 57, 3, 1);
	drawArea(77, 57, 7, 1);
	drawArea(85, 57, 2, 1);
	drawArea(43, 58, 2, 1);
	drawArea(46, 58, 6, 1);
	setPixel(53, 58);
	drawArea(55, 58, 2, 1);
	drawArea(59, 58, 12, 1);
	drawArea(72, 58, 4, 1);
	drawArea(78, 58, 5, 1);
	drawArea(84, 58, 2, 1);
	setPixel(44, 59);
	drawArea(47, 59, 4, 1);
	drawArea(54, 59, 3, 1);
	drawArea(59, 59, 12, 1);
	drawArea(72, 59, 3, 1);
	drawArea(78, 59, 4, 1);
	setPixel(84, 59);
	drawArea(45, 60, 2, 1);
	drawArea(51, 60, 7, 1);
	drawArea(59, 60, 19, 1);
	setPixel(80, 60);
	setPixel(83, 60);
	drawArea(46, 61, 37, 1);
	drawArea(55, 62, 19, 2);
}

function drawClearSyamaze(){
	clearArea(31, 6, 5, 1);
	clearArea(37, 6, 5, 1);
	clearArea(43, 6, 3, 1);
	clearPixel(50, 6);
	clearArea(57, 6, 4, 1);
	clearArea(66, 6, 2, 1);
	clearPixel(74, 6);
	clearArea(81, 6, 8, 1);
	clearArea(90, 6, 7, 1);
	
	clearPixel(30, 7);
	clearPixel(32, 7);
	clearPixel(36, 7);
	clearPixel(38, 7);
	clearPixel(40, 7);
	clearPixel(44, 7);
	clearPixel(49, 7);
	clearPixel(51, 7);
	clearPixel(58, 7);
	clearArea(60, 7, 2, 1);
	clearArea(65, 7, 2, 1);
	clearPixel(73, 7);
	clearPixel(75, 7);
	clearPixel(81, 7);
	clearPixel(85, 7);
	clearPixel(87, 7);
	clearPixel(91, 7);
	clearPixel(93, 7);
	clearPixel(96, 7);
	
	clearArea(30, 8, 2, 1);
	clearPixel(38, 8);
	clearPixel(40, 8);
	clearPixel(44, 8);
	clearPixel(48, 8);
	clearPixel(50, 8);
	clearPixel(52, 8);
	clearPixel(58, 8);
	clearPixel(60, 8);
	clearPixel(62, 8);
	clearPixel(64, 8);
	clearPixel(66, 8);
	clearPixel(72, 8);
	clearPixel(74, 8);
	clearPixel(76, 8);
	clearPixel(84, 8);
	clearPixel(86, 8);
	clearPixel(91, 8);
	clearPixel(93, 8);
	
	clearPixel(30, 9);
	clearPixel(32, 9);
	clearPixel(39, 9);
	clearPixel(41, 9);
	clearPixel(43, 9);
	clearPixel(48, 9);
	clearPixel(50, 9);
	clearPixel(52, 9);
	clearPixel(58, 9);
	clearPixel(60, 9);
	clearPixel(63, 9);
	clearPixel(66, 9);
	clearPixel(72, 9);
	clearPixel(74, 9);
	clearPixel(76, 9);
	clearPixel(84, 9);
	clearPixel(86, 9);
	clearPixel(91, 9);
	clearPixel(93, 9);
	
	clearArea(31, 10, 5, 1);
	clearPixel(40, 10);
	clearPixel(42, 10);
	clearPixel(47, 10);
	clearPixel(49, 10);
	clearPixel(53, 10);
	clearPixel(58, 10);
	clearPixel(60, 10);
	clearPixel(66, 10);
	clearPixel(71, 10);
	clearPixel(73, 10);
	clearPixel(77, 10);
	clearPixel(83, 10);
	clearPixel(85, 10);
	clearPixel(91, 10);
	clearArea(93, 10, 3, 1);
	
	clearPixel(34, 11);
	clearPixel(36, 11);
	clearPixel(40, 11);
	clearPixel(42, 11);
	clearPixel(47, 11);
	clearArea(49, 11, 5, 1);
	clearPixel(58, 11);
	clearPixel(60, 11);
	clearPixel(66, 11);
	clearPixel(71, 11);
	clearArea(73, 11, 5, 1);
	clearPixel(83, 11);
	clearPixel(85, 11);
	clearPixel(91, 11);
	clearPixel(93, 11);
	
	clearArea(35, 12, 2, 1);
	clearPixel(40, 12);
	clearPixel(42, 12);
	clearPixel(46, 12);
	clearPixel(48, 12);
	clearPixel(54, 12);
	clearPixel(58, 12);
	clearPixel(60, 12);
	clearPixel(66, 12);
	clearPixel(70, 12);
	clearPixel(72, 12);
	clearPixel(78, 12);
	clearPixel(82, 12);
	clearPixel(84, 12);
	clearPixel(91, 12);
	clearPixel(93, 12);
	
	clearPixel(30, 13);
	clearPixel(34, 13);
	clearPixel(36, 13);
	clearPixel(40, 13);
	clearPixel(42, 13);
	clearPixel(46, 13);
	clearPixel(48, 13);
	clearPixel(54, 13);
	clearPixel(58, 13);
	clearPixel(60, 13);
	clearPixel(66, 13);
	clearPixel(70, 13);
	clearPixel(72, 13);
	clearPixel(78, 13);
	clearPixel(82, 13);
	clearPixel(84, 13);
	clearPixel(88, 13);
	clearPixel(91, 13);
	clearPixel(93, 13);
	clearPixel(96, 13);
	
	clearArea(31, 14, 5, 1);
	clearArea(39, 14, 5, 1);
	clearArea(45, 14, 5, 1);
	clearArea(53, 14, 3, 1);
	clearArea(57, 14, 4, 1);
	clearArea(65, 14, 3, 1);
	clearArea(69, 14, 5, 1);
	clearArea(77, 14, 3, 1);
	clearArea(81, 14, 8, 1);
	clearArea(90, 14, 7, 1);
}

function drawButtons(){
	
	// L
	clearArea(116, 59, 1, 3);
	clearArea(116, 62, 3, 1);
	
	// F
	clearArea(120, 54, 1, 4);
	clearArea(121, 54, 2, 1);
	clearPixel(121, 56);
	
	// R
	clearPixel(125, 61);
	clearPixel(126, 60);
	clearPixel(125, 59);
	clearPixel(124, 59);
	clearPixel(124, 60);
	clearPixel(124, 61);
	clearPixel(124, 62);
	clearPixel(126, 62);
}

function drawDiagLines(){
	drawLine(0, 0, 129, 64, 'dotted');
	drawLine(127, 0, -2, 64, 'dotted');
}

//function drawDoorways(){
//	// 1
//	drawArea(6, 3, 1, 58);
//	clearArea(0, 0, 6, 64);
//	drawArea(0, 3, 7, 1);
//	drawArea(0, 60, 7, 1);
//	
//	// 2
//	drawArea(38, 19, 1, 26);
//	drawArea(30, 15, 1, 34);
//	clearArea(31, 15, 7, 34);
//	drawArea(31, 19, 7, 1);
//	drawArea(31, 44, 7, 1);
//	
//	// 3
//	drawArea(48, 24, 1, 16);
//	drawArea(79, 24, 1, 16);
//	drawArea(48, 24, 32, 1);
//	drawArea(48, 39, 32, 1);
//	clearArea(49, 25, 30, 14);
//	
//	// 4
//	drawArea(89, 19, 1, 26);
//	drawArea(97, 15, 1, 34);
//	clearArea(90, 15, 7, 34);
//	drawArea(90, 19, 7, 1);
//	drawArea(90, 44, 7, 1);
//	
//	// 5
//	drawArea(121, 3, 1, 58);
//	clearArea(122, 0, 6, 64);
//	drawArea(121, 3, 7, 1);
//	drawArea(121, 60, 7, 1);
//}
//
//function drawShadows(){
//	// 1
//	setPixel(0, 62);
//	setPixel(1, 61);
//	setPixel(3, 61);
//	
//	// 2
//	setPixel(31, 46);
//	setPixel(32, 45);
//	setPixel(34, 45);
//	
//	// 3
//	drawLine(52, 25, 48, 29, 'dotted');
//	drawLine(54, 25, 50, 29, 'dotted');
//	setPixel(49, 30);
//	drawLine(52, 29, 50, 31, 'dotted');
//	drawLine(55, 26, 53, 28, 'dotted');
//	drawLine(57, 26, 53, 30, 'dotted');
//	drawLine(52, 31, 49, 34, 'dotted');
//	drawLine(60, 25, 51, 34, 'dotted');
//	drawLine(56, 32, 47, 40, 'dotted');
//	drawLine(62, 25, 57, 30, 'dotted');
//	drawLine(65, 26, 53, 37, 'dotted');
//	drawLine(68, 25, 57, 35, 'dotted');
//	drawLine(60, 34, 55, 38, 'dotted');
//	drawLine(69, 27, 61, 34, 'dotted');
//	drawLine(74, 25, 64, 34, 'dotted');
//	drawLine(65, 35, 60, 38, 'dotted');
//	drawLine(78, 25, 65, 38, 'dotted');
//	drawLine(76, 30, 68, 38, 'dotted');
//	drawLine(78, 32, 73, 37, 'dotted');
//	drawLine(77, 35, 74, 38, 'dotted');
//	
//	
//	// 4
//	setPixel(95, 45);
//	setPixel(96, 46);
//	setPixel(93, 45);
//	
//	// 5
//	setPixel(126, 61);
//	setPixel(127, 62);
//	setPixel(124, 61);
//}

function drawLeft(){
	// Way
	drawArea(6, 3, 1, 58);
	clearArea(0, 0, 6, 64);
	drawArea(0, 3, 7, 1);
	drawArea(0, 60, 7, 1);
	// Shadow
	setPixel(0, 62);
	setPixel(1, 61);
	setPixel(3, 61);
}

function drawTopLeft(){
	// Way
	drawArea(38, 19, 1, 26);
	drawArea(30, 15, 1, 34);
	clearArea(31, 15, 7, 34);
	drawArea(31, 19, 7, 1);
	drawArea(31, 44, 7, 1);
	// Shadow
	setPixel(31, 46);
	setPixel(32, 45);
	setPixel(34, 45);
}

function drawTop(){
	// Way
//	drawArea(48, 24, 1, 16);
//	drawArea(79, 24, 1, 16);
//	drawArea(48, 24, 32, 1);
//	drawArea(48, 39, 32, 1);
//	clearArea(49, 25, 30, 14);
	clearArea(49, 25, 30, 14);
	// Shadow
	drawLine(52, 25, 48, 29, 'dotted');
	drawLine(54, 25, 50, 29, 'dotted');
	setPixel(49, 30);
	drawLine(52, 29, 50, 31, 'dotted');
	drawLine(55, 26, 53, 28, 'dotted');
	drawLine(57, 26, 53, 30, 'dotted');
	drawLine(52, 31, 49, 34, 'dotted');
	drawLine(60, 25, 51, 34, 'dotted');
	drawLine(56, 32, 47, 40, 'dotted');
	drawLine(62, 25, 57, 30, 'dotted');
	drawLine(65, 26, 53, 37, 'dotted');
	drawLine(68, 25, 57, 35, 'dotted');
	drawLine(60, 34, 55, 38, 'dotted');
	drawLine(69, 27, 61, 34, 'dotted');
	drawLine(74, 25, 64, 34, 'dotted');
	drawLine(65, 35, 60, 38, 'dotted');
	drawLine(78, 25, 65, 38, 'dotted');
	drawLine(76, 30, 68, 38, 'dotted');
	drawLine(78, 32, 73, 37, 'dotted');
	drawLine(77, 35, 74, 38, 'dotted');
}

function drawWallFar(){
	drawArea(48, 24, 1, 16);
	drawArea(79, 24, 1, 16);
	drawArea(48, 24, 32, 1);
	drawArea(48, 39, 32, 1);
	clearArea(49, 25, 30, 14);
}

function drawWallClose(){
	clearArea(17, 9, 94, 46);
	drawArea(16, 8, 1, 48);
	drawArea(111, 8, 1, 48);
	drawArea(16, 8, 96, 1);
	drawArea(16, 55, 96, 1);
}

function drawTopRight(){
	// Way
	drawArea(89, 19, 1, 26);
	drawArea(97, 15, 1, 34);
	clearArea(90, 15, 7, 34);
	drawArea(90, 19, 7, 1);
	drawArea(90, 44, 7, 1);
	// Shadow
	setPixel(95, 45);
	setPixel(96, 46);
	setPixel(93, 45);
}

function drawRight(){
	// Way
	drawArea(121, 3, 1, 58);
	clearArea(122, 0, 6, 64);
	drawArea(121, 3, 7, 1);
	drawArea(121, 60, 7, 1);
	// Shadow
	setPixel(126, 61);
	setPixel(127, 62);
	setPixel(124, 61);
}













