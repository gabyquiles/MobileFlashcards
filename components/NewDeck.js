import React, {Component} from 'react'
import {Container, Field, Row, SubmitButton, Title} from "./Common"
import {getDecks, saveDeckTitle} from "../utils/api"

class NewDeck extends Component {
    state = {
        title: null
    }

    submit = () => {
        const {title} = this.state

        // TODO: Navigate to Home

        // Save new deck
        saveDeckTitle(title)

        console.log(getDecks())


        // TODO: Clear local notification

    }

    render() {
        const {title} = this.state
        return (
            <Container>
                <Title>What is the title of your new deck?</Title>
                <Row>
                    <Field value={title} onChangeText={text => this.setState({title: text})}/>
                </Row>
                <SubmitButton text="Submit" onPress={this.submit}/>
            </Container>
        )
    }

}

export default NewDeck