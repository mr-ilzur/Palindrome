let inputIn = document.querySelector('.entered_data');
let button = document.querySelector('button');
let out_result = document.querySelector('.data_obtained');

button.onclick = function(){
  let str = inputIn.value;
  const isPalindrome = (str) => {
  let strIn = String(str);
  strIn = strIn.toLocaleLowerCase().replace(/\s/g,'');
    if (strIn.length === 1) {
      return true;
    }
    if (strIn.length === 0) {
      return 'Ошибка: Пустая строка';
    }
    if (strIn[0] === strIn[strIn.length - 1]) {
      return isPalindrome (strIn.slice(1, strIn.length - 1));
    }
    return false;
};
  const result = isPalindrome(str);
  out_result.innerHTML = result;
}
  inputIn.value = '';
