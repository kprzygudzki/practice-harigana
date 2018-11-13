export { Char, allChars };

class Char {
	constructor(hiragana, latin) {
		this.hiragana = hiragana;
		this.latin = latin;
	}
}

const allChars = [[
		new Char('あ', 'a'), new Char('い', 'i'), new Char('う', 'u'),
	 	new Char('え', 'e'), new Char('お', 'o')
	], [
		new Char('か', 'ka'), new Char('き', 'ki'), new Char('く', 'ku'),
		new Char('け', 'ke'), new Char('こ', 'ko')
	], [
		new Char('さ', 'sa'), new Char('し', 'shi'), new Char('す', 'su'),
		new Char('せ', 'se'), new Char('そ', 'so')
	], [
		new Char('た', 'ta'), new Char('ち', 'chi'), new Char('つ', 'tsu'),
		new Char('て', 'te'), new Char('と', 'to')
]];
