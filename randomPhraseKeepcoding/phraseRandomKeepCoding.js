const {writeFileSync, readFile} = require('fs');
const fetch = require('node-fetch');

const phrasesKeepcodingNet =
  'https://github.com/kasappeal/nerdquotes/blob/master/README.md';

fetch(phrasesKeepcodingNet)
  .then((response) => response.text())
  .then((data) => {
    try {
      writeFileSync('nerdquotesKeepCodingGit.md', data);

      readFile('nerdquotesKeepCodingGit.md', 'utf-8', (error, data) => {
        if (error) console.error('Error, Unread Data :( ', error.code);

        const phrases = [...data.matchAll(/(<p>)\w\s?(.+)(<\/p>)$/gm)];
        phraseRandomKeepCoding(phrases);
      });
    } catch (error) {
      console.error(err);
    }
  })
  .catch((error) => console.error(error));

const phraseRandomKeepCoding = (phrases = ' ') => {
  const numPhrases = phrases.length;
  const randomPhrase = Math.floor(Math.random() * numPhrases);
  console.log(phrases[randomPhrase][0].replace('<p>', '').replace('</p>', ''));
};

module.exports = {phraseRandomKeepCoding};
