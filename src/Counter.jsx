
// import { observer } from 'mobx-react-lite'
// import React from 'react'

// const Counter =observer(({store})) => {
  
//   return (
//           <div>
//         <p>Count: {store.count}</p>
//         <p>Computed Count: {store.doubledCount}</p>
//         <button onClick={() => store.increment()}>+</button>
//         <button onClick={() => store.decrement()}>-</button>
//       </div>
//   )
// }

// export default Counter


import React, { Component } from "react";
import { observer} from "mobx-react";
import store from "./store";

const Counter =()=>{
  return (
    <div>
      <p>Count: {store.count}</p>
      {store.showComputedValue&&<p>Computed Count: {store.doubledCount}</p>}
      <button onClick={() => store.increment()}>Increment</button>
      <br />
      <br />
      <button onClick={() => store.decrement()}>Decrement</button>
      <br/>
      <br/>
      <button onClick={() => store.toggleComputedValue()}>get computed value</button>
      <br />
      <br />
      <button onClick={() => store.disposer()}>clear autoRun</button>
    </div>
  );
}
 

export default (observer(Counter));