
/*****************************************************************
 *             CODERBYTE HTML ELEMENTS CHALLENGE                 *
 *                                                               *
 * Problem Statement                                             *
 * Have the function HTMLElements(str) read the str parameter    *
 * being passed which will be a string of HTML DOM elements and  *
 * plain text. The elements that will be used are: b, i, em,     *
 * div, p.                                                       *
 *                                                               *
 * For example: if str is "<div><b><p>hello world</p></b></div>" *
 * then this string of DOM elements is nested correctly so your  *
 * program should return the string true.                        *
 *                                                               *
 * If a string is not nested correctly, return the first element *
 * encountered where, if changed into a different element, would *
 * result in a properly formatted string. If the string is not   *
 * formatted properly, then it will only be one element that     *
 * needs to be changed.                                          *
 *                                                               *
 * For example: if str is "<div><i>hello</i>world</b>" then your *
 * program should return the string div because if the first     *
 * <div> element were changed into a <b>, the string would be    *
 * properly formatted.                                           *
 *                                                               *
 * Examples                                                      *
 * Input 1: "<div><div><b></b></div></p>"                        *
 * Output 1: div                                                 *
 *                                                               *
 * Input 2: "<div>abc</div><p><em><i>test test test</b></em></p>"*
 * Output 2: i                                                   *
 *                                                               *
 * Solution Efficiency                                           *
 * This user scored higher than 84.5% of users who solved this   * 
 * challenge.                                                    *
 *                                                               *
 ****************************************************************/

function StringChallenge(str) {

    // code goes here  
    // const open_tags = ['<b>', '<i>', '<em>', '<div>', '<p>'];
    // const close_tags = ['</b>', '</i>', '</em>', '</div>', '</p>'];
    // const result = [];
  
    let stRegex = /\<.*?\>/g;
    let strArr = str.match(stRegex);
    const openingTags = new Array();
    const closingTags = new Array();
    let temp1 = new String("");
    let temp2 = new String("");
  
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i].startsWith("</")) {
        closingTags.push(strArr[i]);
      } else {
        openingTags.push(strArr[i]);
      }
    }
    for (let i = 0; i < openingTags.length; i++) {
      temp1 = new String("");
      for (let j = 0; j < openingTags[i].length; j++) {
        if (openingTags[i][j] !== '<' && openingTags[i][j] !== '>') {
          temp1 += openingTags[i][j];
        }
      }
      for (let a = 0; a < closingTags.length; a++) {
        temp2 = new String("");
        for (let b = 0; b < closingTags[a].length; b++) {
          if (closingTags[a][b] !== '<' && closingTags[a][b] !== "/" && closingTags[a][b] !== '>') {
            temp2 += closingTags[a][b];
          }
        }
        if (temp1 === temp2) {
          openingTags.splice(i, 1);
          i--;
          closingTags.splice(a, 1);
          break;
        }
      }
    }
    const ChallengeToken = "fqw2iexbv948";
    // return (openingTags.length === 0) ? true : (openingTags[openingTags.length - 1].slice(1).slice(0, openingTags[0].length - 2) + ChallengeToken);
  if(openingTags.length === 0) {
    return true;
  } else {
    let s =(openingTags[openingTags.length - 1].slice(1).slice(0, openingTags[0].length - 2) + ChallengeToken);
  return [...s].map((v,i) => (i+1)%4 ? v: '_').join("");
  }
  
  }
  
  // keep this function call here 
  console.log(StringChallenge(readline()));