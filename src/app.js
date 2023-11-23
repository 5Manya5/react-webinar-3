import React from 'react';
import {createElement} from './utils.js';
import './styles.css';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {

  const list = store.getState().list;
  sessionStorage.setItem('id', list.length+1); // добавление в хранилище сессии идентификатора равного числу элементов увеличенного на 1
  return (
    <div className='App'>
      <div className='App-head'>
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className='App-controls'>
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className='App-center'>
        <div className='List'>{          
          list.map(item =>
            <div key={item.code} className='List-item'>
              <div className={'Item' + (item.selected ? ' Item_selected' : '')}

                   onClick={(e) => {            
                      list.forEach( el => {
                          el === item ? store.selectItem(item.code) : el.selected = false; // задание 1: выделение нажатого элемента(если не выделен ранее), сбрасывание выделения у остальных
                      });
                       
                    item.selected ? item.count += 1 : item.count; // задание 3: увеличение счетчика при выделении элемента
                   }}>
                <div className='Item-code'>{item.code}</div>
                <div className='Item-title'>{item.title} {item.count !==0 && '| Выделяли ' + item.count + ' раз'}</div> {/* задание 3: выведение количества выделений элемента, если выделений больше нуля */}
                <div className='Item-actions'>
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
