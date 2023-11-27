/**
 * Хранилище состояния приложения
 */ 

class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление новой записи
   */
  addItem() {  
    const newCode = Number(sessionStorage.getItem('code')) + 1; //задача 2: получение кода из хранилища сессии и увеличение его значения на единицу
    this.setState({
      ...this.state,
      list: [...this.state.list, {code: newCode, title: 'Новая запись', count:0}] //полученное значение является кодом нового элемента
    })
    sessionStorage.setItem('code', JSON.stringify(newCode)); //добавление нового последнего значения кода в хранилище сессии
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })    
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selected = !item.selected;
          item.count = item.selected ? item.count + 1 : item.count; // задание 3: увеличение счетчика при выделении элемента
        }
        return item;
      })
    })
  }  
}

export default Store;
