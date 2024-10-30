//Example input: Infinix Smart 9 8/256 GB $90

interface PhoneInfo {
  brand: string;
  model: string;
  ram: number;
  rom: number;
  price: number;
}

function filterPhoneInfo(phoneInfo: string): PhoneInfo {
  const [brandModelRamRom, price] = phoneInfo.split("$");
  const [brandModelRam, romString] = brandModelRamRom.split("/");
  const brandModelRamArray = brandModelRam.split(" ");

  const ram = parseInt(brandModelRamArray.pop()!);
  const brand = brandModelRamArray.shift()!;

  const model = brandModelRamArray.join(" ");

  return {
    brand,
    model,
    ram,
    rom: parseInt(romString),
    price: parseInt(price),
  };
}

export { filterPhoneInfo };
export type { PhoneInfo };
