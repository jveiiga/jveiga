import styled from 'styled-components';

export const AboutSession = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100%; */
    background-color: #0F0F0F;
`;

export const AboutWrapper = styled.div`
    display: contents;
    width: 90%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    will-change: transform;
    transition: transform 0.1s ease-out; 
`;

export const Image = styled.img`
    opacity: 0.6;
    width: 32.5rem;
    /* border-radius: 15px; */
`;

export const AboutContentWrapper = styled.div`
    top: 10%;
    width: 100%;
    z-index: 3;
    text-align: center;
`;

export const AboutContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: relative;
    z-index: 4;
    color: #FFF;
    text-align: center;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);

    h2 {
        font-family: 'Open Sans', sans-serif;
        font-size: 2.5rem;
        font-weight: 700;
    }

    p {
        font-size: 0.8rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    align-items: center;
    padding: 0;
  }

  @media screen and (min-width: 461px) and (max-width: 580px) {
    align-items: center;
    padding: 0;
  }

  @media screen and (min-width: 581px) and (max-width: 790px) {
    align-items: center;
    padding: 0;
  }
`;

export const AboutContentOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 5%;
`;

export const AboutContentTwo = styled.div`
`;

export const ProgressBarContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ProgressBarTitle = styled.p`
  margin: 0 0 5px 0;
`;

export const ProgressBar = styled.div`
    background-color: #f3f3f3;
    border-radius: 10px;
    width: 25rem;
    height: 8px;
`;

export const Progress = styled.div`
    background-color: rgb(203, 52, 43);
    border-radius: 15px;
    height: 100%;
    width: 100%;
    transition: width 3s ease;
`;

export const AboutContentThree = styled.div`
    /* display: flex; */
`;

export const AboutContentFour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 35%;
    padding: 5rem 0;
`;

export const AboutContentFourIam = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;

    h2 {
        font-size: 1.9rem;
    }
    
    strong {
        font-size: 1.5rem;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
    }

`;

export const AboutContentFourName = styled.div`
    background-color: #FFF;
    color: #000;
    padding: 1rem 0.5rem;
    padding-right: 1.5rem;
    margin-bottom: 2rem;
    text-align: start;

    p{
       font-family: 'Raleway', sans-serif;
       font-weight: 300;
       font-size: 2rem;
       text-shadow: none;
    }
`;

export const AboutContentFourTitle = styled.div`
    margin-bottom: 0.8rem;
    text-align: start;
    p {
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        font-weight: 500;
    }

`;

export const AboutContentFourText = styled.p`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: start;
    width: 80%;
    p {
        font-size: 0.8rem;
        font-weight: 100;
    }
   
`;

export const TitleContent = styled.div`
    display: flex;
    align-items: baseline;
    height: 3rem;
    margin-bottom: 1.5rem;
    color: #FFF;

  p {
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
  }

  strong {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
    font-size: 2.5rem;
    font-weight: 100;
  }
`