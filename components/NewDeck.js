import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container, Field, Row, SubmitButton, Title} from "./Common"

class NewDeck extends Component {
    render() {
        return (
            <Container>
                <Title>What is the title of your new deck?</Title>
                <Row>
                    <Field/>
                </Row>
                <SubmitButton text="Submit"/>
            </Container>
        )
    }

}

export default NewDeck