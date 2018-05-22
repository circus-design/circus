import * as React from 'react';
import * as style from './style.css';
import { containPresenter } from '../../utils/contain';
import { width100 } from '../../utils/clean.css';

export const ColorPalleteList = {
  Green: {
    LightGreen: "#47C089",
    Green: "#37A070",
    DarkGreen: "#207D67",
  },
  Brown: {
    LightBrown: "#A18772",
    Brown: "#7D6755",
    DarkBrown: "#5C4C40",
  },
  Blue: {
    LightBlue: "#5D93CD",
    Blue: "#3775B9",
    DarkBlue: "#225791",
  },
  Red: {
    LightRed: "#EA7D6E",
    Red: "#E44D38",
    DarkRed: "#C94230",
  },
  Orange: {
    LightOrange: "#E4A65E",
    Orange: "#DE8C2D",
    DarkOrange: "#C07622",
  },
  Yellow: {
    LightYellow: "#EEE17A",
    Yellow: "#E7D446",
    DarkYellow: "#D4BE1E",
  },
  Pink: {
    LightPink: "#ED83B6",
    Pink: "#DD5697",
    DarkPink: "#CC3C82",
  },
  Marron: {
    LightMarron: "#C45D55",
    Marron: "#A9352C",
    DarkMarron: "#7A231C",
  },
  Gray: {
    Gray900: "#000000",
    Gray800: "#333A37",
    Gray700: "#454D48",
    Gray600: "#666A67",
    Gray500: "#919896",
    Gray400: "#B5B7B6",
    Gray300: "#D8DaD9",
    Gray200: "#EEEFEF",
    Gray100: "#F6F6F6",
    Gray50: "#FAFAFA",
    Gray0: "#FFFFFF"
  }
};

interface colorpresenter {
  colorName: string,
  width: number,
  height: number,
  props: any
}

export const ColorPalletePresenter =({
  colorName,
  width = 240,
  height = 60,
  ...props,
}: colorpresenter) => {
  const colorCategory = ColorPalleteList[colorName];
  const colorPalletes: any[] = [];
  for(let key in colorCategory) { 
    colorPalletes.push(
      <div style={ { backgroundColor:colorCategory[key]} }>
        <p className={ style.colorPalleteBoxName }>{ key }</p>
        <p className={ style.colorPalleteBoxColorCode }>{ colorCategory[key] }</p>
      </div>
    )
  }
  return ColorBox(colorPalletes)
};

export const ColorBox = (props: any) => (
  <div className={ style.colorPalleteBoxContainer }>  { ...props } </div>
)

export const ColorPalleteContainer = ({
  presenter,
  className,
  ...props
}) => {
  return presenter({ className, ...props })
};

export const ColorPalleteFactory = (colorName: string) => (props: any) => {
  const ColorPallete = containPresenter(ColorPalletePresenter, ColorPalleteContainer);
  return <ColorPallete { ...{ colorName, ...props} } />;
};

export const ColorPalleteGreen = ColorPalleteFactory("Green");
export const ColorPalleteBrown = ColorPalleteFactory("Brown");
export const ColorPalleteBlue = ColorPalleteFactory("Blue");
export const ColorPalleteRed = ColorPalleteFactory("Red");
export const ColorPalleteOrange = ColorPalleteFactory("Orange");
export const ColorPalleteYellow = ColorPalleteFactory("Yellow");
export const ColorPalletePink = ColorPalleteFactory("Pink");
export const ColorPalleteMarron = ColorPalleteFactory("Marron");
export const ColorPalleteGray = ColorPalleteFactory("Gray");


