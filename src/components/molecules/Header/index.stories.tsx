import * as React from 'react'

import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import {HeaderMenuIcon} from '../../atoms/Icon/index'
import Img from '../../atoms/Img/index'
import Header from './'

storiesOf('Header', module)
  .add('デフォルト', () => <p><HeaderMenuIcon/></p>)
  .add('デフォルト2', () => <div>hoge</div>)
  .add('デフォルト3', () => <Header>hoge</Header>)