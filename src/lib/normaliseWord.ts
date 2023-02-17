const htmlSoftHyphen = "&shy;";
const unicodeSoftHyphen = "\u00ad";
const normaliseWord = (string: string): string =>
  string.replace(new RegExp(htmlSoftHyphen, "g"), unicodeSoftHyphen);

export default normaliseWord;
