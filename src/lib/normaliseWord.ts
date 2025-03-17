const htmlSoftHyphen = "&shy;";
const unicodeSoftHyphen = "\u00ad";
const htmlNonBreakingSpace = "&nbsp;";
const unicodeNonBreakingSpace = "\u00a0";
const normaliseWord = (string: string): string =>
  string
    .replace(new RegExp(htmlSoftHyphen, "g"), unicodeSoftHyphen)
    .replace(new RegExp(htmlNonBreakingSpace, "g"), unicodeNonBreakingSpace);

export const formatWord = (string: string): string =>
  string
    .replace(new RegExp(htmlSoftHyphen, "g"), "")
    .replace(new RegExp(htmlNonBreakingSpace, "g"), " ");

export default normaliseWord;
