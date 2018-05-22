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

export const AskingButton = (props: any) => (
  <Link href={ "https://goo.gl/forms/n2TS6klTlw8g9Iao1" }>
    <a className={ style.asking } rel={ "noreferrer noopener" } target={ "_blank" }>ご意見はこちら</a>
  </Link>
) 

export const DownloadButton = (props: any) => (
  <Link href={ "/static/logo/Logo_Package.zip" }>
    <a className={ style.download } download={ "Logo.zip" }>ロゴをダウンロード</a>
  </Link>
);




