import React, { Component } from 'react';
import Cam from './Cam';
import {
    AppContainer,
    EmojiContainer
} from './Styles'

const labels = ['angry', 'sad', 'happy']

class App extends Component {
    state = {
        points: 0,
        isTraining: false,
        isPristine: true,
    }

    features = window.ml5.featureExtractor('MobileNet');
    classifier = this.features.classification()

    render() {
        const {isPristine} = this.state

        return <AppContainer>
            <EmojiContainer isPristine>
                <button onClick={this.train}>Train</button>
            </EmojiContainer>
            {!isPristine && <Cam />}
        </AppContainer>
    }

    train = () => {
        const data = labels
            .map(label => ({
                label,
                files: Array.from({length: 4}, (_, index) => index)
                    .map(index => `/train/${label}/${label}${index}.jpg`)
                    .map(filename => {
                        const image = new Image()
                        image.src = filename
                        // document.body.appendChild(image)

                        return image
                    })
            }))
        
        data.forEach(datum => {
            const {label, files} = datum
            
            files.forEach(file => {
                this.classifier.addImage(file, label)
            })
        })
        console.log(data)
    }
}

export default App