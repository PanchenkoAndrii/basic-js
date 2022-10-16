const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	str = String(str);
	options = options !== undefined ? options : {};
	repeatTimes = options.repeatTimes === undefined ? 1 : Number(options.repeatTimes)
	separator = options.separator === undefined ? '+' : String(options.separator)
	addition = options.addition === undefined ? '' : `${options.addition}`
	additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : Number(options.additionRepeatTimes)
	additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator

	let add = [];
	for (let i = 0; i < additionRepeatTimes; i++) {
		if (addition != '') add.push(addition);
	}

	if (add.length != 0) add = add.join(additionSeparator);
	let s = [];
	for (let i = 0; i < repeatTimes; i++) {
		s.push(str + add);
	}
	if (s.length != 0 && typeof s != 'string') s = s.join(separator);
	return s;
}

module.exports = {
	repeater
};
