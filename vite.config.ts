import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig(({ command }) => {
//   if (command === "build") {
//     return {
//       plugins: [react()],
//       base: "https://ricandres98.github.io/copy-maker/"
//     }
//   } else if (command === "serve" || command ==="dev") {
//     return {
//       plugins: [react()],
//     }
//   }
// })
export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react()],
    };
  } else {
    return {
      plugins: [react()],
      base: "https://ricandres98.github.io/copy-maker/",
    };
  }
});
