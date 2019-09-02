import * as React from 'react'
//import { render } from 'react-dom'
import ReactDOM from 'react-dom';

import { rows } from './data'
import Thead from './thead'
import Tbody from './tbody'


const Component: React.FC = () => (
    <div>
        <h1>健康に関する調査</h1>
        <table>
            <Thead />
            <Tbody rows={rows}/>
        </table>
    </div>
)



ReactDOM.render(<Component />, document.getElementById('root'))