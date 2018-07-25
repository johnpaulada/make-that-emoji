import React, { Component } from 'react';
import Cam from './Cam';
import {
    AppContainer,
    EmojiContainer
} from './Styles'

class App extends Component {
    render() {
        return <AppContainer>
            <EmojiContainer>
                <button onClick={this.train}>Train</button>
            </EmojiContainer>
            <Cam />
        </AppContainer>
    }

    train = () => {
        
    }
}

export default App