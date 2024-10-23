import { capitalize } from "./capitalize";

/** Capitalize each separate word in a string and the joins them all */
function capitalizeJoin(string: string): string {
    return string.split(" ").reduce((prev, curr) => prev + capitalize(curr), "");
}

export { capitalizeJoin };