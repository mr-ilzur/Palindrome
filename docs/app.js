let inputIn = document.querySelector('.entered_data');
let button = document.querySelector('button');
let out_result = document.querySelector('.data_obtained');

button.onclick = function(){
  let str = inputIn.value;
  const isPalindrome = (str) => {
    let strIn = String(str);
    strIn = strIn.toLocaleLowerCase().replace(/\s/g,'');
    if (strIn.length < 2) {
      return true;
    };
    if (strIn[0] === strIn[strIn.length - 1]) {
      return isPalindrome (strIn.slice(1, strIn.length - 1));
    };
    return false;
  };
  const result = isPalindrome(str);
  out_result.innerHTML = result;
  text.select();
  document.execCommand("copy");
};
  inputIn.value = '';
