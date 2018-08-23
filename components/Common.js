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

export const MainButton = ({...props}) => (
    <MainTouchable {...props}>
        <MainButtonText {...props}>{props.text}</MainButtonText>
    </MainTouchable>
)

const MainTouchable = styled.TouchableOpacity`
    background-color: #000000;
    border-radius: 5;
    border-width: 2;
    padding-right: 30;
    padding-left: 30;
    padding-top: 10;
    padding-bottom: 10;
    margin-top: 5;
    margin-bottom: 5;
`

const MainButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 22;
    text-align: center;
    border-width: 0 !important
`

export const SecondaryButton = styled(MainButton)`
    color: #000000;
    backgroundColor: #FFFFFF;
    border-color: #000000;
`