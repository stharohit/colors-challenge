export interface RGBColor {
    red: number;
    green: number;
    blue: number;
    type: string;
}

export interface HSLColor {
    hue: number;
    saturation: number;
    lightness: number;
    type: string;
}

export type TColorSpace = RGBColor | HSLColor;