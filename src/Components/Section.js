import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
function Section({ title, desc, leftBtnText, rightBtnText, backgroundImage ,tax ,lastDisc,reenigeerd,details}) {
  console.log(details);
  return (
    <Wrap BgImage={backgroundImage}>
      <Fade down>
        <ItemText>
          <h1 className= "text-4xl">{reenigeerd}</h1>
          <h1 className="text-4xl tracking-wider">{title}</h1>
          <p className="text-xl">{desc}</p>
          <p className="text-sm">{tax}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade down>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <ReightButton>{rightBtnText}</ReightButton>}
          </ButtonGroup>
        </Fade>
        
        {/* <DownArrow src="/images/down-arrow.svg" /> */}
        <DownDisc >{lastDisc} </DownDisc>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.BgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  
  
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const ReightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownDisc = styled.div`
  color:black;
  height: 40px;
  text-align: center;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  font-size: 12px;
`;

const Buttons = styled.div``;
