import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { isHSL, isRGB } from '../utils/checkColorSpace';
import { HSLColor, RGBColor } from './api/get-random-colors';

export type TColorSpace = RGBColor | HSLColor;

const Home: NextPage = () => {

  const [colors, setcolors] = useState<Array<TColorSpace>>();

  useEffect(() => {
    const callHello = () => {
      fetch('/api/get-random-colors').then(res => res.json()).then(res => setcolors(res))
    }

    callHello()
  },[])
  

  return (
    <div className={styles.container}>
      <div className={styles.swatchPanel}>
        {mapColors(colors)}
      </div>
    </div>
  )
}

const mapColors = (colors: Array<TColorSpace> | undefined) => {

  const getColorMap = (color: TColorSpace) => {
    if (isRGB(color)) {
      console.log('rgb');
      
      return `rgb(${color.red}, ${color.blue}, ${color.green})`
    }

    if (isHSL(color)) {
      console.log('hsl');
      return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
    }
  }

  if (!colors) return null;

  return colors.map(color => (
    <div className={styles.colorBox} style={{background: getColorMap(color)}}></div>
  ))
}

export default Home
