import React, { SetStateAction } from "react";

type PropsType = {
	label: string,
	stateValue: string,
	setState: React.Dispatch<SetStateAction<string>>
}

const InputComponent = ({label, stateValue, setState}: PropsType): JSX.Element => {
	return (
		<div>
			<span>{label}: </span>
			<input 
				type="text" 
				value={stateValue}
				onChange={e => setState(e.target.value)}  
			/>
		</div>
	);
}

export { InputComponent };