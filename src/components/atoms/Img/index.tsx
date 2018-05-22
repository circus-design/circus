import * as React from 'react';
import * as style from './style.css';

export const ImgLogo = (props: any) =>
  <img src="/static/circus-logo.png" className={ style.km_logo_beta } { ...props }/>

export const AlignLeftImg = (props: any) =>
  <img className={ style.margin40AlignLeft } { ...props }/>

const Img = (props: any) => <img { ...props } />;



export default Img;