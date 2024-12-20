import React, { useState } from 'react';
import { Styles } from '../../styles/styled-components';

const {
  Container,
  TitleRow,
  Icon,
  Title,
  Description,
  ImageContainer,
  Image,
  BackgroundImage,
  InputContainer,
  Input
} = Styles.ThreeB;

const ThreeB = ({ saveAnswer, title, description }) => {
  const [locations, setLocations] = useState(['', '', '', '', '', '']);

  const handleLocationChange = (index, value) => {
    const updatedLocations = [...locations];
    updatedLocations[index] = value;
    setLocations(updatedLocations);
    saveAnswer('mapLocations', updatedLocations);
  };

  const positions = [
    { top: -9, left: 37 }, 
    { top: 11, left: 44 }, 
    { top: 43, left: 69 },
    { top: 90, left: 95 }, 
    { top: 136, left: 119 }, 
    { top: 159, left: 121 }
  ];

  return (
    <Container>
      <TitleRow>
        <Icon source={require('../../assets/images/questiontwo.png')} />
        <Title>{title}</Title>
      </TitleRow>
      <Description>{description}</Description>

      <ImageContainer>
        <Image source={require('../../assets/images/map.png')} />
        <BackgroundImage source={require('../../assets/images/blankmap.png')}>
          {positions.map((pos, index) => (
            <InputContainer key={index} top={pos.top} left={pos.left}>
              <Input
                placeholder=""
                onChangeText={(value) => handleLocationChange(index, value)}
              />
            </InputContainer>
          ))}
        </BackgroundImage>
      </ImageContainer>
    </Container>
  );
};

export default ThreeB;
