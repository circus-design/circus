import * as React from 'react';
import SideNavigation from '../../organisms/SideNavigation';
import * as style from '../../utils/clean.css';

interface Props {
  url: {
    pathname: string
  },
  message: string,
  children: any
}

export default class App extends React.Component<Props> {
  render() {
    return(
      <main className={ style.flex }>
        <SideNavigation { ...this.props }/>
        <div className={ style.width100 }>
          {this.props.children}
        </div>
      </main>
    )
  }
}

