import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Styles } from '../../styles/styled-components';

const {
    Container,
    TitleRow,
    Icon,
    Title,
    ContentRow,
    Table,
    Column,
    Cell,
    RowSpan,
    Input,
    Label,
    Text,
    ClockContainer,
    ClockImage,
    ClockBtn,
    ClockHand
} = Styles.TwoB;

const TwoB = ({ saveAnswer, title }) => {
    const [selectedPeriod, setSelectedPeriod] = useState(null);
    const [timeInfo, setTimeInfo] = useState({ hour: '', minute: '' });
    const [minuteAngle, setMinuteAngle] = useState(0);
    const [hourAngle, setHourAngle] = useState(0);

    const centerX = 75;
    const centerY = 65;
    const outerRadius = 60;
    const innerRadius = 35;

    const handlePeriodPress = (period) => {
        setSelectedPeriod(period);
        saveAnswer('period', period);
    };

    const handleTimeChange = (key, value) => {
        setTimeInfo((prev) => ({ ...prev, [key]: value }));
        saveAnswer('timeInfo', { ...timeInfo, [key]: value });
    };

    const handleMinutePress = (index) => {
        const newMinuteAngle = index * 30;
        setMinuteAngle(newMinuteAngle);

        const additionalHourRotation = newMinuteAngle / 12;
        setHourAngle((prevHourAngle) =>
            Math.floor(prevHourAngle / 30) * 30 + additionalHourRotation
        );

        saveAnswer('minuteHand', newMinuteAngle);
        saveAnswer('hourHand', hourAngle);
    };

    const handleHourPress = (index) => {
        const baseHourAngle = index * 30;
        const additionalRotation = minuteAngle / 12;
        setHourAngle(baseHourAngle + additionalRotation);
        saveAnswer('hourHand', baseHourAngle + additionalRotation);
    };

    return (
        <Container>
            <TitleRow>
                <Icon source={require('../../assets/images/questiontwo.png')} />
                <Title>{title}</Title>
            </TitleRow>

            <ContentRow>
                <Table>
                    <Column>
                        {['오전', '오후'].map((period) => (
                            <TouchableOpacity key={period} onPress={() => handlePeriodPress(period)}>
                                <Cell selected={selectedPeriod === period}>
                                    <Text>{period}</Text>
                                </Cell>
                            </TouchableOpacity>
                        ))}
                    </Column>

                    <RowSpan>
                        <Input
                            placeholder=""
                            keyboardType="numeric"
                            onChangeText={(value) => handleTimeChange('hour', value)}
                        />
                        <Label>시</Label>
                    </RowSpan>
                    <RowSpan>
                        <Input
                            placeholder=""
                            keyboardType="numeric"
                            onChangeText={(value) => handleTimeChange('minute', value)}
                        />
                        <Label>분</Label>
                    </RowSpan>
                </Table>

                <ClockContainer>
                    <ClockImage source={require('../../assets/images/clock.jpg')} />

                    {Array.from({ length: 12 }).map((_, index) => {
                        const angle = index * 30;
                        const radian = ((angle - 90) * Math.PI) / 180;
                        const x = centerX + outerRadius * Math.cos(radian);
                        const y = centerY + outerRadius * Math.sin(radian);

                        return (
                            <ClockBtn
                                key={`minute-${index}`}
                                top={y - 10}
                                left={x - 10}
                                onPress={() => handleMinutePress(index)}
                            />
                        );
                    })}

                    {Array.from({ length: 12 }).map((_, index) => {
                        const angle = index * 30;
                        const radian = ((angle - 90) * Math.PI) / 180;
                        const x = centerX + innerRadius * Math.cos(radian);
                        const y = centerY + innerRadius * Math.sin(radian);

                        return (
                            <ClockBtn
                                key={`hour-${index}`}
                                top={y - 10}
                                left={x - 10}
                                onPress={() => handleHourPress(index)}
                            />
                        );
                    })}

                    <ClockHand angle={minuteAngle} />
                    <ClockHand hour angle={hourAngle} />
                </ClockContainer>
            </ContentRow>
        </Container>
    );
};

export default TwoB;