import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Styles } from '../styles/styled-components';

const { Container, Title, ScoreText, Link, LinkText } = Styles.Home;

const Home = () => {
    const { score } = useLocalSearchParams();

    return (
        <Container>
            <Title>관동팔경 문제</Title>
            {score ? (
                <ScoreText>점수 : {score}점</ScoreText>
            ) : (
                <Link href="/pagetwo">
                    <LinkText>2~4 페이지 문제풀기</LinkText>
                </Link>
            )}
        </Container>
    );
};

export default Home;
