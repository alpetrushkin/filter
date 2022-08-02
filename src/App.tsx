import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

export type FilterValueType = 'all' | 'RUBLS' | 'Dollars'

function App() {
   const [money, setMoney] = useState([
      {banknots: 'Dollars', nominal: 100, number: ' a1234567890'},
      {banknots: 'Dollars', nominal: 50, number: ' z1234567890'},
      {banknots: 'RUBLS', nominal: 100, number: ' w1234567890'},
      {banknots: 'Dollars', nominal: 100, number: ' e1234567890'},
      {banknots: 'Dollars', nominal: 50, number: ' c1234567890'},
      {banknots: 'RUBLS', nominal: 100, number: ' r1234567890'},
      {banknots: 'Dollars', nominal: 50, number: ' x1234567890'},
      {banknots: 'RUBLS', nominal: 50, number: ' v1234567890'},
   ])

   const [filter, setFilter] = useState<FilterValueType>('all')

   let currentMoney = money
   if (filter === 'RUBLS') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
   }
   if (filter === 'Dollars') {
      currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
   }

   const onClickFilterHandler = (nameButton: FilterValueType) => {
      setFilter(nameButton)
   }

   return (
      <NewComponent
         task={currentMoney}
         onClickFilterHandler={onClickFilterHandler}
      />
      // <div className="App">
      //    <ul>
      //       {currentMoney.map((objFromMoneyArr, index) => {
      //          return (
      //             <li key={index}>
      //                <span> {objFromMoneyArr.banknots} </span>
      //                <span> {objFromMoneyArr.nominal} </span>
      //                <span> {objFromMoneyArr.number} </span>
      //             </li>
      //          )
      //       })}
      //    </ul>
      //    <div>
      //       <button onClick={() => onClickFilterHandler('all')}>all</button>
      //       <button onClick={() => onClickFilterHandler('RUBLS')}>RUBLS</button>
      //       <button onClick={() => onClickFilterHandler('Dollars')}>Dollars</button>
      //    </div>
      // </div>
   );
}

export default App;
