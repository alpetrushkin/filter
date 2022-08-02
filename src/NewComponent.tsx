import React from 'react';
import {FilterValueType} from "./App";

type NewComponentType = {
   task: Array<MoneyType>
   onClickFilterHandler: (nameButton: FilterValueType) => void
}

type MoneyType = {
   banknots: string
   nominal: number
   number: string
}

export const NewComponent = (props: NewComponentType) => {
   return (
      <div className="App">
         <ul>
            {props.task.map((objFromMoneyArr, index) => {
               return (
                  <li key={index}>
                     <span> {objFromMoneyArr.banknots} </span>
                     <span> {objFromMoneyArr.nominal} </span>
                     <span> {objFromMoneyArr.number} </span>
                  </li>
               )
            })}
         </ul>
         <div>
            <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
            <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
         </div>
      </div>
   );
};
