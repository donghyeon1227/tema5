import React, { useState } from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  margin-bottom: 24px;
`;

const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  flex-shrink: 1;
`;

const Description = styled.Text`
  font-size: 14px;
  margin-bottom: 16px;
  color: #555;
`;

const TableContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const Table = styled.View`
  border-width: 2px;
  border-color: #000;
  width: 45%;
  padding-horizontal: 4px;
`;

const TableRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Cell = styled.View`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 52.7%;
  border-color: transparent;
  border-width: 1px;
  padding: 2px 4px;
  margin: 0px -4px;
`;

const Input = styled.TextInput`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 52.7%;
  border-color: #ccc;
  border-width: 1px;
  padding: 2px 4px;
  margin: 0px -4px;
  text-align: center;
`;

const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const TwoC = ({ saveAnswer, title, description }) => {
    const [answers, setAnswers] = useState(['', '', '', '', '', '']);

    const handleInputChange = (index, value) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = value;
        setAnswers(updatedAnswers);
        saveAnswer('locations', updatedAnswers);
    };

    return (
        <Container>
            <TitleRow>
                <Icon source={require('../../assets/images/questiontwo.png')} />
                <Title>{title}</Title>
            </TitleRow>
            <Description>{description}</Description>

            <TableContainer>
                <Table>
                    {[
                        ['청간정', '낙산사'],
                        ['경포대', '죽서루'],
                        ['망양정', '월송정'],
                    ].map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {row.map((item, colIndex) => (
                                <Cell key={`${rowIndex}-${colIndex}`}>
                                    <Text>{item}</Text>
                                </Cell>
                            ))}
                        </TableRow>
                    ))}
                </Table>

                <Table>
                    {[0, 1, 2].map((rowIndex) => (
                        <TableRow key={rowIndex}>
                            {[0, 1].map((colIndex) => (
                                <Input
                                    key={`${rowIndex}-${colIndex}`}
                                    placeholder=""
                                    onChangeText={(value) =>
                                        handleInputChange(rowIndex * 2 + colIndex, value)
                                    }
                                />
                            ))}
                        </TableRow>
                    ))}
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TwoC;