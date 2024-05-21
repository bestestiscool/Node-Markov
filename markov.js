/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let chains = {}
    for(let i = 0; i < this.words.length; i++) {
      let word = this.words[i]
      let nextWord = this.words[i + 1] || null

      if (!chains[word]) {
        chains[word] = [];
      }

      chains[word].push(nextWord)
      
    }
    this.chains = chains
  }
  

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let keys = Object.keys(this.chains);
    let key = this._getRandomElement(keys);
    let text = [];

    while (text.length < numWords && key !== null) {
      text.push(key);
      key = this._getRandomElement(this.chains[key]);
    }

    return text.join(" ");
  }
  /** get a random element from an array */
  _getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

let mm = new MarkovMachine("the cat in the hat");

console.log(mm)
mm.makeText();

mm.makeText(numWords=50);
