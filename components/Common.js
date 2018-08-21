import React from 'react'
import styled from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Row = styled.View`
    flex-direction: row;
`

export const Title = styled.Text`
    font-size: 30;
`

export const Field = styled.TextInput`
    flex: 1;
    border-width: 2;
    border-color: #000000;
    border-radius: 5;
    margin-top: 20;
    margin-bottom: 20;
    margin-left: 20;
    margin-right: 20;
    font-size: 22;
`

export const SubmitButton = ({...props}) => (
    <ButtonTouchable>
        <ButtonText>{props.text}</ButtonText>
    </ButtonTouchable>
)


const ButtonTouchable = styled.TouchableOpacity`
    background-color: #000000;
    border-radius: 5;
    padding-right: 30;
    padding-left: 30;
    padding-top: 10;
    padding-bottom: 10;
`

const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 22;
    text-align: center;
`