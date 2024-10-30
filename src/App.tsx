import { useState } from 'react'
import './App.css'
import { filterPhoneInfo } from './utils/filterPhoneInfo';
import { Director, TelephoneCopyBuilderHC } from './logic/builder';
import { InputComponent } from './components/InputComponent';

function App() {
  const [phone, setPhone] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [finalCopy, setFinalCopy] = useState<string>("");

  const run = () => {
    const copyBuilder = new TelephoneCopyBuilderHC();
    const director = new Director(copyBuilder);
    director.setPhoneInfo(filterPhoneInfo(phone));
    director.constructCopy(description);
    const copy = copyBuilder.build();
    console.log(copy);
    setFinalCopy(copy);
  }

  return (
    <>
      <div>
        <InputComponent
          label="Teléfono"
          stateValue={phone}
          setState={setPhone}
        />
        <InputComponent
          label="Descripción"
          stateValue={description}
          setState={setDescription}
        />
        <button
          onClick={() => {
            if (phone && description) run();
          }}
        >
          Test
        </button>
      </div>
      <textarea name="" id="" value={finalCopy} />
    </>
  );
}

export default App
