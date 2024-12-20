import React from 'react';
import { useLocalSearchParams } from "expo-router";

import { Styles } from '../styles/styled-components';

const {
  Container,
  Title,
  AnswerText,
  ScoreText,
  Link,
  LinkText
} = Styles.Result;

const Result = () => {
    const { answers: answersParam } = useLocalSearchParams();
    const answers = answersParam ? JSON.parse(answersParam) : {};

    const correctAnswers = {
        Pagetwo_locations: ["청간정", "낙산사", "경포대", "죽서루", "망양정", "월송정"],
        Pagethree_firstLetters: ["청", "낙", "경", "죽", "망", "월"],
        Pagethree_sentence: "청바지를 입고 낙지를 먹은  경주씨는 망양에서 월드컵을 시청했다.",
        Pagethree_mapLocations: ["청간정", "낙산사", "경포대", "죽서루", "망양정", "월송정"],
        Pagefour_photoCaptions: ["청간정", "낙산사", "경포대", "죽서루", "망양정", "월송정"]
    };

    const now = new Date();
    const currentYear = now.getFullYear().toString();
    const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = now.getDate().toString().padStart(2, '0');
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentWeekday = ['일', '월', '화', '수', '목', '금', '토'][now.getDay()];

    const dynamicAnswers = {
        Pagetwo_minuteHand: (currentMinute) * 6,
        Pagetwo_hourHand: (currentHour % 12) * 30 + currentMinute * 0.5,
        Pagetwo_dateInfo: {
            년: currentYear,
            월: currentMonth,
            일: currentDay,
            요일: currentWeekday
        },
        Pagetwo_period: currentHour < 12 ? '오전' : '오후',
        Pagetwo_timeInfo: {
            hour: currentHour.toString(),
            minute: currentMinute.toString()
        }
    };

    const calculateScore = () => {
        let score = 0;
        let resultDetails = {};

        Object.keys(correctAnswers).forEach((key) => {
            if (JSON.stringify(answers[key]) === JSON.stringify(correctAnswers[key])) {
                score += 10;
                resultDetails[key] = '(정답)';
            } else {
                resultDetails[key] = '(오답)';
            }
        });

        Object.keys(dynamicAnswers).forEach((key) => {
            if (key === 'Pagetwo_weather') {
                if ('Pagetwo_weather' in answers && answers['Pagetwo_weather'] !== null && answers['Pagetwo_weather'] !== undefined) {
                    score += 10;
                    resultDetails['Pagetwo_weather'] = '(정답)';
                } else {
                    resultDetails['Pagetwo_weather'] = '(오답)';
                }
                return;
            }

            if (key === 'Pagetwo_minuteHand') {
                const answerMinuteAngle = answers[key];
                const lowerBound = (currentMinute - 15) * 6;
                const upperBound = (currentMinute + 15) * 6;
                if (answerMinuteAngle >= lowerBound && answerMinuteAngle <= upperBound) {
                    score += 10;
                    resultDetails[key] = '(정답)';
                } else {
                    resultDetails[key] = '(오답)';
                }
                return;
            }

            if (key === 'Pagetwo_hourHand') {
                const answerHourAngle = answers[key];
                const baseHourAngle = (currentHour % 12) * 30 + currentMinute * 0.5;
                const lowerBoundHourAngle = baseHourAngle - 30;
                const upperBoundHourAngle = baseHourAngle + 30;

                if (
                    answerHourAngle >= lowerBoundHourAngle &&
                    answerHourAngle <= upperBoundHourAngle
                ) {
                    score += 10;
                    resultDetails[key] = '(정답)';
                } else {
                    resultDetails[key] = '(오답)';
                }
                return;
            }

            if (key === 'Pagetwo_timeInfo') {
                const answerTimeInfo = answers[key];

                if (!answerTimeInfo || !answerTimeInfo.hour || !answerTimeInfo.minute) return;

                const answerHour24Format = parseInt(answerTimeInfo.hour, 10);
                const answerMinute = parseInt(answerTimeInfo.minute, 10);

                const totalCurrentMinutes = currentHour * 60 + currentMinute;
                const totalAnswerMinutes = answerHour24Format * 60 + answerMinute;

                if (
                    totalAnswerMinutes >= totalCurrentMinutes - 30 &&
                    totalAnswerMinutes <= totalCurrentMinutes + 30

                ) {
                    score += 10;
                    resultDetails[key] = '(정답)';
                } else {
                    resultDetails[key] = '(오답)';
                }

                return;
            }

            if (JSON.stringify(answers[key]) === JSON.stringify(dynamicAnswers[key])) {
                score += 10;
                resultDetails[key] = '(정답)';
            } else {
                resultDetails[key] = '(오답)';
            }
        });

        return { score, resultDetails };
    };

    const { score, resultDetails } = calculateScore();

    return (
        <Container>
            <Title>결과</Title>
            {Object.entries(answers).map(([key, value], index) => (
                <AnswerText key={index}>
                    {`${key}: ${JSON.stringify(value)} ${resultDetails[key]}`}
                </AnswerText>
            ))}
            <ScoreText>총 점수 : {score}</ScoreText>
            
            <Link href={{
                pathname: "./first",
                params: { score: score }
            }}>
                <LinkText>다음</LinkText>
            </Link>
        </Container>
    );
};

export default Result;