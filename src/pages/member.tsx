import * as React from 'react';
import App from '../components/templates/App';
import Header from '../components/molecules/Header';
import { HeadingText, ContentText } from '../components/atoms/Text'
import * as style from './style.css';

interface Props {
  url: {
    pathname: string
  },
  message: string,
  children: any
}

export default class Index extends React.Component<Props> {
  render() {
    return (
    <App { ...this.props }>  
      <Header>Member</Header>
    </App>
    )
  }
}