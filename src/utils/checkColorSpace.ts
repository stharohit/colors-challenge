import { TColorSpace, RGBColor, HSLColor } from "@/types/color-space";

export function isRGB(pet: TColorSpace): pet is RGBColor {
    return (<RGBColor>pet).type === 'rgb';
}

export function isHSL(pet: TColorSpace): pet is HSLColor {
    return (<HSLColor>pet).type === 'hsl';
}