import * as React from 'react';
import * as style from './style.css';

interface textFac{
  tag: string,
  size: string,
  className: string,
  props: any,
  style: {key?: string} 
}

const textFactory = (role: any) => ({
  tag:Tag = 'p',
  size = 'm',
  className,
  ...props
 }: textFac) => (
  <Tag className={ [ style[role], style[size], className ].join(' ') } { ...props } />
);


export const HeadingText = (props: any) => (
  <div className={ style.h1Container}>
    <h1 className={ style.h1 } { ...props } />
  </div>
);

export const ContentText = (props: any) => (
  <p className={ style.maintext } { ...props } />
);

export const LongContentText = (props: any) => {
  return (
    <div className={ style.lcContainer}>
      { props.children.split("\\n").map(child => {return (<p className={ style.longtext }>{ child.replace(' ', '').replace('___',' ') }</p>)}
      )}
    </div>
  )
}


const Txt = textFactory('default');
export default Txt;

