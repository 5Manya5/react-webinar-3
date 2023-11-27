export default (count) => { // функция правильного склонения слова "раз"
  if(count !==0){
    const lastCountNum = Number(count.toString().slice(-1)); //получение последней цифры в числе нажатий
    if( lastCountNum < 2 || lastCountNum > 4 || (count > 10 & count < 22)) { // условие, при котором выводится фраза со словом "раз"
      return `| Выделяли ${count} раз`;      
    }
    return `| Выделяли ${count} разa`; //в другом случае выводится слово "раза"
  }
}