import styled from 'styled-components/native';
import { Link } from 'expo-router';

export const Styles = {
    Common: {
        Container: styled.View`
      flex: 1;
      background-color: #fff;
      padding: 16px 16px 8px 16px;
    `,

        Footer: styled.Text`
      font-size: 14px;
      color: #d9534f;
      font-weight: bold;
      text-align: left;
      margin-top: 16px;
    `,

        LinkBtn: styled(Link)`
      background-color: #2196F3;
      padding: 10px;
      border-radius: 5px;
      align-items: center;
      margin-top: 16px;
    `,

        LinkTxt: styled.Text`
      color: white;
      font-size: 16px;
      text-align: center;
    `
    },


    Home: {
        Container: styled.View`
      flex: 1;
      background-color: #fff;
      align-items: center;
      justify-content: center;
    `,

        Title: styled.Text`
      font-size: 24px;
      margin-bottom: 20px;
    `,

        ScoreText: styled.Text`
      font-size: 18px;
      color: #2196F3;
      margin-bottom: 20px;
    `,

        Link: styled(Link)`
      background-color: #2196F3;
      padding: 10px 20px;
      border-radius: 5px;
    `,

        LinkText: styled.Text`
      color: white;
      font-size: 16px;
    `
    },


    TwoA: {
        Container: styled.View`
      margin-bottom: 24px;
    `,

        Row: styled.View`
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 8px;
    `,

        Icon: styled.Image`
      width: 24px;
      height: 24px;
      margin-right: 8px;
    `,

        Title: styled.Text`
      font-size: 18px;
      font-weight: bold;
      color: #333;
      flex-shrink: 1;
    `,

        InputGroup: styled.View`
      flex-direction: row;
      align-items: center;
      width: 22%;
    `,

        Input: styled.TextInput`
      border-width: 0;
      border-color: #ccc;
      padding: 4px 8px;
      text-align: center;
      flex-grow: 1;
      font-size: 16px;
    `,

        Label: styled.Text`
      margin-left: 4px;
      font-size: 16px;
      color: #333;
    `,

        IconRow: styled.View`
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 16px;
    `,

        IconText: styled.Text`
      font-size: 24px;
      ${props => props.selected && `
        border-width: 2px;
        border-color: red;
        border-radius: 12px;
        padding-horizontal: 4px;
      `}
    `,
    },

    TwoB: {
        Container: styled.View`
      margin-bottom: 24px;
    `,

        TitleRow: styled.View`
      flex-direction: row;
      align-items: center;
      margin-bottom: 8px;
      flex-wrap: wrap;
    `,

        Icon: styled.Image`
      width: 24px;
      height: 24px;
      margin-right: 8px;
    `,

        Title: styled.Text`
      font-size: 14px;
      font-weight: bold;
      color: #333;
      flex-shrink: 1;
      flex: 1;
    `,

        ContentRow: styled.View`
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    `,

        Table: styled.View`
      flex-direction: row;
      border-width: 2px;
      border-color: #000;
      margin-right: 16px;
    `,

        Column: styled.View`
      flex-direction: column;
      justify-content: space-between;
    `,

        Cell: styled.View`
      justify-content: center;
      align-items: center;
      height: 50px;
      width: 70px;
      ${props => props.selected && `
        border-width: 2px;
        border-color: red;
        border-radius: 25px;
      `}
    `,

        RowSpan: styled.View`
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 70px;
      flex-direction: row;
    `,

        Input: styled.TextInput`
      text-align-vertical: center;
      text-align: right;
      font-size: 16px;
      padding-vertical: 4px;
      width: 60%;
    `,

        Label: styled.Text`
      font-size: 16px;
      color: #333;
      margin-left: 4px;
    `,

        Text: styled.Text`
      font-size: 16px;
      font-weight: bold;
    `,

        ClockContainer: styled.View`
      position: relative;
      width: 130px;
      height: 130px;
      justify-content: center;
      align-items: center;
    `,

        ClockImage: styled.Image`
      position: absolute;
      width: 100%;
      height: 100%;
    `,

        ClockBtn: styled.TouchableOpacity`
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background-color: transparent;
      top: ${props => props.top}px;
      left: ${props => props.left}px;
      margin-left: -10px;
    `,

        ClockHand: styled.View`
      position: absolute;
      height: ${props => props.hour ? '30%' : '40%'};
      width: ${props => props.hour ? '3px' : '2px'};
      background-color: ${props => props.hour ? 'blue' : 'red'};
      top: ${props => props.hour ? '20%' : '10%'};
      left: 50%;
      transform-origin: bottom center;
      transform: ${props => `rotate(${props.angle}deg)`};
    `
    },

    TwoC: {

    },

    ThreeA: {
        Container: styled.View`
      margin-bottom: 24px;
      padding: 16px;
      background-color: #fff;
    `,

        TitleRow: styled.View`
      flex-direction: row;
      align-items: center;
      margin-bottom: 8px;
    `,

        Icon: styled.Image`
      width: 24px;
      height: 24px;
      margin-right: 8px;
    `,

        Title: styled.Text`
      font-size: 18px;
      font-weight: bold;
      color: #333;
    `,

        Description: styled.Text`
      font-size: 14px;
      color: #555;
      margin-bottom: 16px;
    `,

        Table: styled.View`
      border-width: 2px;
      border-color: #000;
      margin-bottom: 16px;
    `,

        TableRow: styled.View`
      flex-direction: row;
      justify-content: space-between;
    `,

        Cell: styled.View`
      flex-basis: ${props => props.fullWidth ? '100%' : '16.6%'};
      justify-content: center;
      align-items: center;
      border-width: 1px;
      border-color: #ccc;
      height: ${props => props.fullWidth ? 'auto' : '40px'};
    `,

        Text: styled.Text`
      font-size: ${props => props.small ? '12px' : '14px'};
      font-weight: bold;
      text-align: center;
    `,

        Input: styled.TextInput`
      text-align: center;
      font-size: ${props => props.small ? '12px' : '14px'};
      width: 100%;
    `
    },

    ThreeB: {
        Container: styled.View`
      margin-bottom: 24px;
      padding-horizontal: 16px;
      background-color: #fff;
    `,

        TitleRow: styled.View`
      flex-direction: row;
      align-items: center;
      margin-bottom: 8px;
    `,

        Icon: styled.Image`
      width: 24px;
      height: 24px;
      margin-right: 8px;
    `,

        Title: styled.Text`
      font-size: 18px;
      font-weight: bold;
      color: #333;
    `,

        Description: styled.Text`
      font-size: 14px;
      margin-bottom: 16px;
    `,

        ImageContainer: styled.View`
      flex-direction: row;
      justify-content: space-between;
    `,

        Image: styled.Image`
      width: 155px;
      height: 220px;
    `,

        BackgroundImage: styled.ImageBackground`
      width: 155px;
      height: 220px;
    `,

        InputContainer: styled.View`
      position: absolute;
      width: 50px;
      height: 35px;
      background-color: transparent;
      top: ${props => props.top}px;
      left: ${props => props.left}px;
    `,

        Input: styled.TextInput`
      text-align: center;
      font-size: 14px;
      background-color: transparent;
    `
    },

    FourA: {
        Container: styled.View`
      padding: 16px;
      background-color: #fff;
    `,

        TitleRow: styled.View`
      flex-direction: row;
      align-items: center;
      margin-bottom: 8px;
    `,

        Icon: styled.Image`
      width: 24px;
      height: 24px;
      margin-right: 8px;
    `,

        Title: styled.Text`
      font-size: 18px;
      font-weight: bold;
      color: #333;
    `,

        Description: styled.Text`
      font-size: 14px;
      color: #555;
      margin-bottom: 8px;
    `,

        ImageRow: styled.View`
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    `,

        ImageContainer: styled.View`
      align-items: center;
      width: 48%;
    `,

        Image: styled.Image`
      width: 108.2%;
      height: undefined;
      aspect-ratio: 1.1;
    `,

        Input: styled.TextInput`
      text-align: center;
      font-size: 14px;
      width: 100%;
      background-color: transparent;
    `
    },

    Result: {
        Container: styled.View`
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 16px;
      background-color: #fff;
    `,

        Title: styled.Text`
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
    `,

        AnswerText: styled.Text`
      font-size: 16px;
      margin-bottom: 8px;
    `,

        ScoreText: styled.Text`
      font-size: 20px;
      font-weight: bold;
    `,

        Link: styled(Link)`
      background-color: #2196F3;
      padding: 10px 20px;
      border-radius: 5px;
      margin-top: 20px;
    `,

        LinkText: styled.Text`
      color: white;
      font-size: 16px;
      text-align: center;
    `
    },
};
