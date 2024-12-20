import React, { useState } from 'react';
import { Styles } from '../../styles/styled-components';

const {
  Container,
  TitleRow,
  Icon,
  Title,
  Description,
  ImageRow,
  ImageContainer,
  Image,
  Input
} = Styles.FourA;

export const FourA = ({ saveAnswer, title, description }) => {
  const [captions, setCaptions] = useState(['', '', '', '', '', '']);

  const images = [
    require('../../assets/images/cheongganjeong.jpg'),
    require('../../assets/images/naksansa.jpg'),
    require('../../assets/images/gyeongpodae.jpg'),
    require('../../assets/images/jukseoru.jpg'),
    require('../../assets/images/mangyangjeong.jpg'),
    require('../../assets/images/wolsongjeong.jpg'),
  ];

  const placeholders = ['청간정', '낙산사', '경포대', '죽서루', '망양정', '월송정'];

  const handleCaptionChange = (index, value) => {
    const updatedCaptions = [...captions];
    updatedCaptions[index] = value;
    setCaptions(updatedCaptions);
    saveAnswer('photoCaptions', updatedCaptions);
  };

  return (
    <Container>
      <TitleRow>
        <Icon source={require('../../assets/images/questiontwo.png')} />
        <Title>{title}</Title>
      </TitleRow>
      <Description>{description}</Description>

      <ImageRow>
        {images.map((image, index) => (
          <ImageContainer key={index}>
            <Image source={image} />
            <Input
              placeholder={placeholders[index]}
              value={captions[index]}
              onChangeText={(value) => handleCaptionChange(index, value)}
            />
          </ImageContainer>
        ))}
      </ImageRow>
    </Container>
  );
};

export default FourA;