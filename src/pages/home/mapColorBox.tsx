import { TColorSpace } from "@/types/color-space";
import { isRGB, isHSL } from "@/utils/checkColorSpace";
import styles from "@/styles/Home.module.css";

const mapColorBox = (colors: Array<TColorSpace>) => {

  const getColorMap = (color: TColorSpace) => {
    if (isRGB(color)) {
      return `rgb(${color.red}, ${color.blue}, ${color.green})`
    }

    if (isHSL(color)) {
      return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
    }
  }

  return colors.map(color => (
    <div className={styles.colorBox} style={{ background: getColorMap(color) }}></div>
  ))
}

export default mapColorBox;