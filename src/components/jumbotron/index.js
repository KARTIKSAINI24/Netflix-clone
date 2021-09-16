import React from 'react'
import {Inner} from './styles/jumbotron'

export default function Jumbotron({children,direction='row', ...resrProps}) {
    return (
        <Inner direction={direction}> 
            <p>I am a jumbotron</p>
        </Inner>
    )
}

// Jumbotron.Container = function Jumbotron({ children, ...resrProps }) {
//     return <Container {}
// }

