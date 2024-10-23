import { capitalize } from "../utils/capitalize";
import { capitalizeJoin } from "../utils/capitalizeJoin";

interface CopyBuilder {
    setBrand(brand: string): CopyBuilder;
    setModel(model: string): CopyBuilder;
    setInfo(info: string): CopyBuilder;
    setRAM?(ram: number): CopyBuilder;
    setROM?(rom: number): CopyBuilder;
    setPrice?(price: number): CopyBuilder;
    setHashtags(): CopyBuilder; 
    resetBuilder(): void;
}

class TelephoneCopyBuilder implements CopyBuilder {
  private copy: string = "";
  private telephone!: Telephone;
  private hashtags: string[] = ["Smartphone", "Tecnologia", "Ccs", "Caracas"];

  constructor() {
    this.resetBuilder();
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
		this.copy += 
		`Precio:
		${this.telephone.ram}/${this.telephone.rom} $${this.telephone.price}`;
		return this;
  }

  setHashtags(): CopyBuilder {
    const brand = capitalize(this.telephone.brand);
		/** Capitalize each word and join them together */
		const model = capitalizeJoin(this.telephone.model)
		const brandModel = brand + model;
		
		this.hashtags.unshift(brand);
		this.hashtags.unshift(brandModel);

		const hashtagsString = this.hashtags.reduce((acum, curr) => `#${curr} `,"");

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

class Telephone {
	brand: string="";
	model: string="";
	ram: number = NaN;
	rom: number = NaN;
	price: number = NaN;
}

export { TelephoneCopyBuilder };