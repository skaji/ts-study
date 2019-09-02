import * as React from 'react'
import TR from './tr'

const Component = props => (
    <tbody>
        {props.rows.map(row => (
            <TR key={row.id} {...row} />
        ))}
    </tbody>
)

export default Component