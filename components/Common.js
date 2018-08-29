import React from 'react'
import styled, {css} from 'styled-components'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Row = styled.View`
    flex-direction: row;
`

export const CenteredColumn = styled.View`
    flex:1;
    align-items: center;
`

export const Card = styled.TouchableOpacity`
    border-width: 2;
    border-radius: 10;
    border-color: #000000;
    justify-content: center;
    align-items: center;
    margin-top: 20;
    margin-bottom: 20;
    margin-left: 20;
    margin-right: 20;
`

export const Title = styled.Text`
    font-size: 30;
`
export const SubTitle = styled.Text`
    font-size: 25;
    color: #757575;
`
export const Error = styled.Text`
    font-size: 25;
    color: #FF0000;
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

export const Button = ({children, onPress, primary, style = {}, textStyle = {}}) => {
    return (
        <ButtonTouchable primary={primary} style={style} onPress={onPress}>
            <ButtonText primary={primary} style={textStyle}>{children}</ButtonText>
        </ButtonTouchable>
    )
}

const ButtonTouchable = styled.TouchableOpacity`
    background-color: #FFFFFF;
    border-color: #000000;
    border-radius: 5;
    border-width: 2;
    padding-right: 30;
    padding-left: 30;
    padding-top: 10;
    padding-bottom: 10;
    margin-top: 5;
    margin-bottom: 5;
    
    ${props => props.primary && css`
        background-color: #000000;
    `}
`

const ButtonText = styled.Text`
    color: #000000;
    font-size: 22;
    text-align: center;
    border-width: 0 !important
    ${props => props.primary && css`
        color: #FFFFFF;
    `}
`