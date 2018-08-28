import React, {Component} from 'react'
import {StackActions} from 'react-navigation'
import {Button, Container, Error, Field, Row} from "./Common";
import {handleAddCard} from "../actions";
import {connect} from 'react-redux'

class NewCard extends Component {
    static navigationOptions = {
        title: 'Add Card'
    }

    state = {
        error: null,
        question: "",
        answer: ""

    }

    toDeck = () => {
        const {navigation} = this.props
        const {deckTitle} = navigation.state.params
        this.props.navigation.dispatch(StackActions.pop({n: 1}))
    }

    submit = () => {
        const {question, answer} = this.state
        if (question === "" || answer === "") {
            this.setState(() => ({error: "Please enter a question and an aswer before submitting"}))
            return;
        }
        const {dispatch, deckTitle} = this.props
        dispatch(handleAddCard(deckTitle, question, answer))
        this.toDeck()
    }

    render() {
        const {question, answer} = this.state
        return (
            <Container>
                <Error>{this.state.error}</Error>
                <Row>
                    <Field value={question} onChangeText={text => this.setState({question: text})}
                           placeholder="Enter question"/>
                </Row>
                <Row>
                    <Field value={answer} onChangeText={text => this.setState({answer: text})}
                           placeholder="Enter the answer"/>
                </Row>
                <Button primary text="Submit" onPress={this.submit}/>
            </Container>
        )
    }
}

function mapStateToProps(state, {navigation}) {
    const {deckTitle} = navigation.state.params
    return {
        deckTitle
    }
}

export default connect(mapStateToProps)(NewCard)