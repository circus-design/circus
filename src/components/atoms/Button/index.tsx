import * as React from 'react';
import Link from 'next/link';
import Img from '../Img';
import * as style from './style.css';

export const TextLinkHeading = ({
  className = '',
  hrefName = '',  
  ...props,
}) => {
  hrefName = '/' + props.children.toLowerCase();
  className += props.url.pathname === hrefName ? style.isActive : '';
  if(hrefName.toLowerCase() === 'circus') hrefName = '';
  return <Link href={ hrefName }>
    <p className={ style.header }><a className={ [style.black_bold, className].join(" ") } { ...props }/></p>
  </Link>
};

export const TextLink = ({
  className = '',
  hrefName = '',  
  ...props,
}) => {
  hrefName = '/' + props.children.toLowerCase();
  className += props.url.pathname === hrefName ? style.isActive : '';
  return <Link href={ hrefName }>
    <p className={ style.content }><a className={ [style.black, className].join(" ") } { ...props }/></p>
  </Link>
};




