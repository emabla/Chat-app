export function randomHexColor() {
    var colorValue= Math.floor(Math.random()*16777215).toString(16);
    return '#' + colorValue;
    // pronašla na https://css-tricks.com/snippets/javascript/random-hex-color/
  }