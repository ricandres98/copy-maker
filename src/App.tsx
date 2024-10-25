import { useState } from 'react'
import './App.css'
import { filterPhoneInfo } from './utils/filterPhoneInfo';
import { Director, TelephoneCopyBuilder } from './logic/builder';

function App() {
  const [phone, setPhone] = useState<string>("");

  const test = () => {
    const copyBuilder = new TelephoneCopyBuilder();
    const director = new Director(copyBuilder);
    director.setPhoneInfo(filterPhoneInfo(phone));
    director.constructCopy();
    const copy = copyBuilder.build();
    console.log(copy);
  }

  return (
    <>
      <span>Teléfono</span>
      <input 
        type="text" 
        value={phone}
        onChange={e => setPhone(e.target.value)}  
      />
      <button
        onClick={() => {
          if(phone)
            test();
        }}
      >Test</button>
    </>
  )
}

export default App
