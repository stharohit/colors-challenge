# Colors Challenge
This application is developed using Next.js and it generates color swatches via API and displayed in frontend. You can generate more colors just by clicking __"Generete Colors"__ button. The purpose of this task is to display code extensibility.
## How to run the project?
- _npm i_
- _npm run dev_
## Adding Color Space
- #### Adding color space interface
    Add an interface in __"src/types/color-space.d.ts"__ file.
    ```
    export interface ColorSpaceInterface {
        red: number;
        blue: number;
        green: number;
        type: string;
    }
    ```
- #### declare class that implements previously created color space interface
    Declare a class named as BRGB in  __"src/pages/api/get-random-colors.ts"__ file.
    ```
    class BRGB implements Handler<ColorSpaceInterface> {
      Encode(): ColorSpaceInterface {
        return {
          blue: getRandomNumbers(0, 1000),
          green: getRandomNumbers(0, 1000),
          red: getRandomNumbers(0, 1000),
          type: 'brgb'
        }
      }
    }
    ```
- #### Add BRGB class to Controllers 
    Add previously declared class to handlers inside Controllers which is located in __"src/pages/api/get-random-colors.ts"__ file.
    ```
    private handlers: Handler<any>[] = [..., new BRGB()];
    ```
    That's it you can check the response in __Network Tab__ in developer console or add a condition in frontend to render the color.