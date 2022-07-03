// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { RGBColor, HSLColor } from '@/types/color-space';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Handler<T> {
  Encode(color: any): T
}

class RGB implements Handler<RGBColor> {
  Encode(color: any): RGBColor {
    return {
      blue: getRandomNumbers(0, 255),
      green: getRandomNumbers(0, 255),
      red: getRandomNumbers(0, 255),
      type: 'rgb'
    }
  }
}

class HSL implements Handler<HSLColor> {
  Encode(color: any): HSLColor {
    return {
      hue: getRandomNumbers(1, 360),
      saturation: getRandomNumbers(0, 100),
      lightness: getRandomNumbers(0, 100),
      type: 'hsl',

    }
  }
}

class Controller {
  private handlers: Handler<any>[] = [new RGB(), new HSL()];
  getResponse = () => {
    return getRandomColors(5).map(x => {
      return this.handlers[getRandomNumbers(0, this.handlers.length)].Encode(x);
    })
  }
}

const getRandomNumbers = (min: number, max: number) => Math.floor(Math.random() * max + min);

const getRandomColors = (count: number) => {
  return Array(count).fill('');
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const controller = new Controller();
    res.status(200).json(controller.getResponse())
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error })
  }
}
