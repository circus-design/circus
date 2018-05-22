import * as React from 'react';
import { ColorPalleteGreen, ColorPalleteBrown, ColorPalleteBlue, ColorPalleteRed, ColorPalleteOrange, ColorPalleteYellow, ColorPalletePink, ColorPalleteMarron, ColorPalleteGray,  ColorPalleteContainer } from '../../atoms/Color'
import * as style from './style.css'

export const BlandColorPalleteContainer = () => {
  const BlandColorArr: any[] = [
    <ColorPalleteGreen/>,
    <ColorPalleteBrown/>
  ];
  return ColorPalletesContainer(BlandColorArr)
}

export const CreativeColorPalleteContainer = () => {
  const CreativeColorArr: any[] = [
    <ColorPalleteBlue/>,
    <ColorPalleteRed/>,
    <ColorPalleteOrange/>,
    <ColorPalleteYellow/>,
    <ColorPalletePink/>,
    <ColorPalleteMarron/>,
  ];
  return ColorPalletesContainer(CreativeColorArr)
}

export const GrayColorPalleteContainer = () => {
  const GrayColorArr: any[] = [
    <ColorPalleteGray/>
  ];
  return ColorPalletesContainer(GrayColorArr)
}

export const ColorPalletesContainer = (props: any) => (
  <div className={ style.ColorPalleteContainer }>
    { ...props }
  </div>
)