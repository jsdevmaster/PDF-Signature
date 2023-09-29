export function ggID() {
  let id = 0;
  return function genId() {
    return id++;
  };
}
export function timeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
export const noop = () => {};
export function hexToRgb(hex) {
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        hex = hex.replace('#', '');

        // Convert 3-digit hex to 6-digits
        if (hex.length === 3) {
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]; 
        }

        const r = parseInt(hex.substring(0, 2), 16) / 255;
        const g = parseInt(hex.substring(2, 4), 16) / 255; 
        const b = parseInt(hex.substring(4, 6), 16) / 255;

        return {r, g, b};
  }
  throw new Error('Bad Hex');
}