import React, { useState } from 'react';
import { Styles } from '../styles/styled-components';
import TwoA from '../components/questionTwo/TwoA';
import TwoB from '../components/questionTwo/TwoB';
import TwoC from '../components/questionTwo/TwoC';

const { Container, Footer, LinkBtn, LinkTxt } = Styles.Common;

const titles = {
    TwoA: "오늘의 날짜를 적고, 날씨에 동그라미 하세요.",
    TwoB: "현재 시각(24시간 형식)을 적고, 오른쪽 시계를 눌러서 시간을 표시해보세요. 시계의 가장자리를 누르면 분침이 이동하고, 시계의 안쪽을 누르면 시침이 이동합니다.",
    TwoC: "관동팔경 기억하기"
};

const descriptions = {
    TwoC: "관동팔경은 강원도 대관령의 동쪽인 '관동'과 8가지 아름다운 경치인 '팔경'을 합쳐 부르는 말입니다. 아래 빈칸에 따라 적어보세요."
};

const Pagetwo = () => {
    const [answers, setAnswers] = useState({});

    const saveAnswer = (key, value) => {
        setAnswers(prev => ({
            ...prev,
            [`Pagetwo_${key}`]: value,
        }));
    };

    return (
        <Container>
            <TwoA saveAnswer={saveAnswer} title={titles.TwoA} />
            <TwoB saveAnswer={saveAnswer} title={titles.TwoB} />
            <TwoC saveAnswer={saveAnswer} title={titles.TwoC} description={descriptions.TwoC} />

            <Footer>관동팔경을 기억해 주세요.</Footer>

            <LinkBtn href={{
                pathname: "/pagethree",
                params: { answers: JSON.stringify(answers) }
            }}>
                <LinkTxt>Next</LinkTxt>
            </LinkBtn>
        </Container>
    );
};

export default Pagetwo;
