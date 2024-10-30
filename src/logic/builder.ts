import { capitalize } from "../utils/capitalize";
import { capitalizeJoin } from "../utils/capitalizeJoin";
import type { PhoneInfo } from "../utils/filterPhoneInfo";

interface CopyBuilder {
  setBrand(brand: string): CopyBuilder;
  setModel(model: string): CopyBuilder;
  setInfo(info: string): CopyBuilder;
  setRAM(ram: number): CopyBuilder;
  setROM(rom: number): CopyBuilder;
  setPrice(price: number): CopyBuilder;
  setLocations(): CopyBuilder
  setHashtags(): CopyBuilder;
  setLineBreak(): CopyBuilder;
  resetBuilder(): void;
}

class TelephoneCopyBuilderHC implements CopyBuilder {
  private copy: string = "";
  private telephone!: Telephone;
  private hashtags: string[] = ["Smartphone", "Tecnologia", "Ccs", "Caracas"];
  private locations: string[] = [
    "CC. Sambil la candelaria. Nivel Miranda.",
    "CC. El Recreo. Nivel C2 - Plaza central.",
    "CC. Sambilito de Petare. Nivel PB (por el lado del estacionamiento).",
  ];

  constructor() {
    this.resetBuilder();
  }

  setLineBreak(): CopyBuilder {
    this.copy += "\n";
    return this;
  }
  setBrand(brand: string): CopyBuilder {
    this.telephone.brand = brand;
    return this;
  }

  setModel(model: string): CopyBuilder {
    this.telephone.model = model;
    return this;
  }

  setInfo(info: string): CopyBuilder {
    this.copy += info;
    return this;
  }

  setRAM(ram: number): CopyBuilder {
    this.telephone.ram = ram;
    return this;
  }

  setROM(rom: number): CopyBuilder {
    this.telephone.rom = rom;
    return this;
  }

  setPrice(price: number): CopyBuilder {
    this.telephone.price = price;
	this.copy += "Precio:";
	this.setLineBreak();
    this.copy += this.telephone.ram && this.telephone.rom 
		? `${this.telephone.ram}/${this.telephone.rom} GB $${this.telephone.price}`
		: `$${this.telephone.price}`;
	this.setLineBreak();
    this.copy += `Precios válidos sólo para pagos en divisas ‼️\n⚠️ También disponible para adquirir en cuotas ⚠️`;
	this.setLineBreak();
	this.setLineBreak();
    return this;
  }

  setLocations(): CopyBuilder {
    this.copy += "Visítanos en:";
    this.setLineBreak();
    this.locations.forEach((location) => {
      this.copy += "📍 " + location;
      this.setLineBreak();
    });
    this.copy += "📲 Whatsapp por tienda (link en la bio)";
    this.setLineBreak();

    return this;
  }

  setHashtags(): CopyBuilder {
    const brand = capitalize(this.telephone.brand);
    /** Capitalize each word and join them together */
    const model = capitalizeJoin(this.telephone.model);
    const brandModel = brand + model;

    this.hashtags.unshift(brand);
    this.hashtags.unshift(brandModel);

    const hashtagsString = this.hashtags.reduce(
      (acum, curr) => acum + `#${curr} `,
      ""
    );

    this.copy += hashtagsString;

    return this;
  }

  resetBuilder(): void {
    this.copy = "";
    this.telephone = new Telephone();
  }

  build(): string {
    const finalCopy = this.copy;
    this.resetBuilder();
    return finalCopy;
  }
}

class Director {
  private _phoneInfo: PhoneInfo | undefined;
  constructor(private copyBuilder: CopyBuilder) {}

  setPhoneInfo(phoneInfo: PhoneInfo) {
    this._phoneInfo = phoneInfo;
  }

  constructCopy(copyInfo: string) {
    if (this._phoneInfo) {
      this.copyBuilder
        .setInfo(copyInfo)
		.setLineBreak()
		.setLineBreak()
        .setBrand(this._phoneInfo.brand)
        .setModel(this._phoneInfo.model)
        .setRAM(this._phoneInfo.ram)
        .setROM(this._phoneInfo.rom)
        .setPrice(this._phoneInfo.price)
		.setLocations()
		.setLineBreak()
        .setHashtags();
    }
  }
}

class Telephone {
  brand: string = "";
  model: string = "";
  ram: number = NaN;
  rom: number = NaN;
  price: number = NaN;
}

export { TelephoneCopyBuilderHC, Director };
