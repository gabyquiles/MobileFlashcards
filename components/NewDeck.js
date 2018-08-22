import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Field, Row, SubmitButton, Title} from "./Common"
import {addDeck, handleAddDeck} from "../actions";

class NewDeck extends Component {
    state = {
        title: null
    }

    submit = () => {
        const {title} = this.state


        //dispath addDeck to update store
        this.props.dispatch(handleAddDeck(title))

        //reset state
        this.setState(() => ({title: null}))

        // TODO: Navigate to Home
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

export default connect()(NewDeck)