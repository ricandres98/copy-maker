import { PropsWithChildren } from "react";
import { ActionButton } from "../ActionButton";

type PropsType = {
	value: string
}

const CopyToClipboardButton = ({ value, children }: PropsWithChildren<PropsType>) => {

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(value);
			console.log("Copiado exitosamente al portapapeles");
		} catch(e) {
			console.error(e);
		}
	}

  return (
		<ActionButton onClick={copyToClipboard}>
			{children}
		</ActionButton>
	)
}

export { CopyToClipboardButton };