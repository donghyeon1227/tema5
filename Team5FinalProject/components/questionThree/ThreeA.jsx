import React, { useState } from 'react';
import { Styles } from '../../styles/styled-components';

const {
    Container,
    TitleRow,
    Icon,
    Title,
    Description,
    Table,
    TableRow,
    Cell,
    Text,
    Input
} = Styles.ThreeA;

const ThreeA = ({ saveAnswer, title, description }) => {
    const [firstLetters, setFirstLetters] = useState(['', '', '', '', '', '']);
    const [sentence, setSentence] = useState('');

    const handleLetterChange = (index, value) => {
        const updatedLetters = [...firstLetters];
        updatedLetters[index] = value;
        setFirstLetters(updatedLetters);
        saveAnswer('firstLetters', updatedLetters);
    };

    const handleSentenceChange = (value) => {
        setSentence(value);
        saveAnswer('sentence', value);
    };

    return (
        <Container>
            <TitleRow>
                <Icon source={require('../../assets/images/questiontwo.png')} />
                <Title>{title}</Title>
            </TitleRow>
            <Description>{description}</Description>

            <Table>
                <TableRow>
                    {['청간정', '낙산사', '경포대', '죽서루', '망양정', '월송정'].map((item, index) => (
                        <Cell key={index}>
                            <Text>{item}</Text>
                        </Cell>
                    ))}
                </TableRow>

                <TableRow>
                    {firstLetters.map((letter, index) => (
                        <Cell key={index}>
                            <Input
                                value={letter}
                                onChangeText={(value) => handleLetterChange(index, value)}
                            />
                        </Cell>
                    ))}
                </TableRow>

                <TableRow>
                    <Cell fullWidth>
                        <Text small>
                            청바지를 입고 낙지를 먹은 경주씨는 망양에서 월드컵을 시청했다.
                        </Text>
                    </Cell>
                </TableRow>

                <TableRow>
                    <Cell fullWidth>
                        <Input
                            small
                            value={sentence}
                            onChangeText={handleSentenceChange}
                            placeholder="문장을 따라 적어보세요."
                        />
                    </Cell>
                </TableRow>
            </Table>
        </Container>
    );
};

export default ThreeA;
