import * as React from 'react';
import Link from 'next/link';
import { ImgLogo } from '../../atoms/Img'
import { TextLink, TextLinkHeading, AskingButton } from '../../atoms/Button'
import * as style from './style.css';

export const SideNavigationPresenter = (
  props: any
) => (
  <nav className={ style.sidenavigation }>
    <ImgLogo/>
    <TextLinkHeading { ...props }>Circus</TextLinkHeading>
    <TextLink { ...props }>About</TextLink>
    <TextLink { ...props }>Member</TextLink>
  </nav>
);

interface sidenavCont {
  presenter: any,
  className: string,
  props: any
}

export const SideNavigationContainer =({
  presenter,
  className = '',
  ...props,
}: sidenavCont) => (
  presenter({
    className,
    ...props
  })
);

const SideNavigation = (props: any) => (
  <SideNavigationContainer presenter={ (presenterProps: any) => <SideNavigationPresenter { ...presenterProps } />} { ...props }/>
);

export default SideNavigation;