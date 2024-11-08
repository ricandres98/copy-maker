import { useState } from "react";
import { filterPhoneInfo } from "./utils/filterPhoneInfo";
import { Director, TelephoneCopyBuilderHC } from "./logic/builder";
import { InputComponent } from "./components/InputComponent";
import { ActionButton } from "./components/ActionButton";
import "./App.css";
import { CopyToClipboardButton } from "./components/CopyToClipboardButton/CopyToClipboardButton";

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
  };

  const reset = () => {
    setPhone("");
    setDescription("");
  };

  return (
    <>
      <div className="main-container">
        <main>
          <div className="main-container__input-sections">
            <InputComponent
              label="Teléfono"
              stateValue={phone}
              setState={setPhone}
              placeholder="Ej: Samsung S24 Ultra 12/512 GB $980"
            />
            <InputComponent
              label="Descripción"
              stateValue={description}
              setState={setDescription}
            />
            <div className="main-container__buttons">
              <ActionButton
                onClick={() => {
                  if (phone && description) run();
                }}
              >
                Generar
              </ActionButton>
              <ActionButton onClick={reset} negative={true}>Borrar</ActionButton>
            </div>
          </div>
          <textarea 
            value={finalCopy}
            onChange={(e) => setFinalCopy(e.target.value)} />

          <CopyToClipboardButton value={finalCopy}>
            Copiar al portapapeles
          </CopyToClipboardButton>
        </main>
      </div>
    </>
  );
}

export default App;
