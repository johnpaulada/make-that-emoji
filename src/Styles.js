import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const EmojiContainer = styled.div`
    width: 100vw;
    height: ${props => props.isPristine ? '100vh' : '50vh'};
`