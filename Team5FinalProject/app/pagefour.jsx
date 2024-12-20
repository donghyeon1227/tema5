import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from "expo-router";
import { FourA } from '../components/questionFour/FourA';
import { Styles } from '../styles/styled-components';

const { Container, Footer, LinkBtn, LinkTxt } = Styles.Common;

const titles = {
    FourA: "관동팔경 기억하기"
};

const descriptions = {
    FourA: "앞서 기억해 둔 관동팔경의 사진입니다. 명승지의 사진과 이름을 함께 확인하며 따라 적어보세요."
};

const Pagefour = () => {
    const [answers, setAnswers] = useState({});
    const { answers: prevAnswers } = useLocalSearchParams();

    useEffect(() => {
        if (prevAnswers) {
            setAnswers(JSON.parse(prevAnswers));
        }
    }, [prevAnswers]);

    const saveAnswer = (key, value) => {
        setAnswers(prev => ({
            ...prev,
            [`Pagefour_${key}`]: value,
        }));
    };

    return (
        <Container>
            <FourA saveAnswer={saveAnswer} title={titles.FourA} description={descriptions.FourA}/>

            <Footer>관동팔경을 기억해 주세요.</Footer>

            <LinkBtn href={{
                pathname: "/result",
                params: { answers: JSON.stringify(answers) }
            }}>
                <LinkTxt>Submit</LinkTxt>
            </LinkBtn>
        </Container>
    );
};

export default Pagefour;
