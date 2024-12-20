import React, { useState, useEffect } from 'react';
import { useLocalSearchParams } from "expo-router";
import ThreeA from '../components/questionThree/ThreeA';
import ThreeB from '../components/questionThree/ThreeB';
import { Styles } from '../styles/styled-components';

const { Container, Footer, LinkBtn, LinkTxt } = Styles.Common;

const titles = {
    ThreeA: "관동팔경 기억하기",
    ThreeB: "관동팔경 기억하기"
};

const descriptions = {
    ThreeA: "앞서 기억해 둔 관동팔경의 6가지 경치이름을 쉽게 기억하기 위해 각 명승지 이름의 첫 글자를 적고, 아래 문장을 따라 적어보세요.",
    ThreeB: "앞서 기억해 둔 관동팔경의 위치를 지도에 표시했습니다. 오른쪽 빈칸에 6가지 명승지의 이름을 따라 적어보세요."
};

const Pagethree = () => {
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
            [`Pagethree_${key}`]: value,
        }));
    };

    return (
        <Container>
            <ThreeA saveAnswer={saveAnswer} title={titles.ThreeA} description={descriptions.ThreeA}/>
            <ThreeB saveAnswer={saveAnswer} title={titles.ThreeB} description={descriptions.ThreeB}/>

            <Footer>관동팔경을 기억해 주세요.</Footer>

            <LinkBtn href={{
                pathname: "/pagefour",
                params: { answers: JSON.stringify(answers) }
            }}>
                <LinkTxt>Next</LinkTxt>
            </LinkBtn>
        </Container>
    );
};

export default Pagethree;
