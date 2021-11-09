function showVerticalMessage(str) {
    let newStr = '';
    let i = 0;
    if (str[0] === 'м') {
      newStr += str[0].toUpperCase() + '\n';
      i++;
    }
    while ( i < str.length) {
        newStr += str[i] + '\n';
        i++;
        if (i > 9) {
          return newStr;
        }      
    }
    return console.log(newStr);
  };
  showVerticalMessage('Марафонdddddd')  