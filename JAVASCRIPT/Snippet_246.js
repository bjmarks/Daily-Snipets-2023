let x = 5 << 1;
// 00000000000000000000000000000101
// 00000000000000000000000000001010
// 10
// JavaScript (Zero Fill) Bitwise Left Shift
// <<	Zero fill left shift	
// Shifts left by pushing zeros in from the right and let the leftmost bits fall off

let y = -5 >> 1;
// 11111111111111111111111111111011
// 11111111111111111111111111111101
// -3
// JavaScript (Sign Preserving) Bitwise Right Shift
// >>	Signed right shift	
// Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

let z = 5 >>> 1;
// 00000000000000000000000000000101
// 00000000000000000000000000000010
// 2
// JavaScript (Zero Fill) Right Shift
// >>>	Zero fill right shift	
// Shifts right by pushing zeros in from the left, and let the rightmost bits fall off