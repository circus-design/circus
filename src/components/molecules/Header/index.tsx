import * as React from 'react';
import Img from '../../atoms/Img/index';
import { HeaderMenuIcon } from '../../atoms/Icon/index'
import Link from 'next/link';
import * as style from './style.css';

const Header = ({children}: {children: any}) => (
  <header className={ style.bg }>
    {children}
  </header>
);

export default Header;