import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Styles } from '../../styles/styled-components';

const {
    Container,
    Icon,
    Title,
    Row,
    InputGroup,
    Input,
    Label,
    IconRow,
    IconText
} = Styles.TwoA;

const TwoA = ({ saveAnswer, title }) => {
    const [dateInfo, setDateInfo] = useState({});
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleDateChange = (key, value) => {
        setDateInfo((prev) => ({ ...prev, [key]: value }));
        saveAnswer('dateInfo', { ...dateInfo, [key]: value });
    };

    const handleIconPress = (index) => {
        setSelectedIcon(index);
        saveAnswer('weather', index);
    };

    return (
        <Container>
            <Row>
                <Icon source={require('../../assets/images/questiontwo.png')} />
                <Title>{title}</Title>
            </Row>

            <Row>
                {['년', '월', '일'].map((label, index) => (
                    <InputGroup key={index}>
                        <Input
                            placeholder=""
                            keyboardType="numeric"
                            onChangeText={(value) => handleDateChange(label, value)}
                        />
                        <Label>{label}</Label>
                    </InputGroup>
                ))}
                <InputGroup>
                    <Input
                        placeholder=""
                        keyboardType="default"
                        onChangeText={(value) => handleDateChange('요일', value)}
                    />
                    <Label>요일</Label>
                </InputGroup>
            </Row>

            <IconRow>
                {['☀️', '🌤️', '☁️', '🌧️', '⛈️'].map((icon, index) => (
                    <TouchableOpacity key={index} onPress={() => handleIconPress(index)}>
                        <IconText selected={selectedIcon === index}>
                            {icon}
                        </IconText>
                    </TouchableOpacity>
                ))}
            </IconRow>
        </Container>
    );
};

export default TwoA;
