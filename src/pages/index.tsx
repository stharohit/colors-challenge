import { TColorSpace } from '@/types/color-space';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { isHSL, isRGB } from '../utils/checkColorSpace';

const Home: NextPage = () => {

  const [colors, setcolors] = useState<Array<TColorSpace>>();

  const callHello = () => {
    fetch('/api/get-random-colors').then(res => res.json()).then(res => setcolors(res))
  }

  const generateColors = () => {
    callHello()
  }

  useEffect(() => {

    callHello()
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.swatchPanel}>
        {mapColors(colors)}
      </div>
      <button className={styles.generateBtn} onClick={generateColors}>Generate Colors</button>
    </div>
  )
}

const mapColors = (colors: Array<TColorSpace> | undefined) => {

  const getColorMap = (color: TColorSpace) => {
    if (isRGB(color)) {
      return `rgb(${color.red}, ${color.blue}, ${color.green})`
    }

    if (isHSL(color)) {
      return `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`
    }
  }

  if (!colors) return null;

  return colors.map(color => (
    <div className={styles.colorBox} style={{ background: getColorMap(color) }}></div>
  ))
}

export default Home
