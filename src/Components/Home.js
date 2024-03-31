import React from "react";
import styled from "styled-components";
import Section from "./Section";
import data from "./Data.json";
function Home() {
  return (
    <Container>

      {
        data.map((item , idx) =>{
          return(
            <Section title={item.title}
            desc={item.price}
            tax= {item.tax}
            backgroundImage={item.backgroundImage}
            leftBtnText={item.btnLeft}
            rightBtnText={item.rightbtn}
            lastDisc={item.about}
            reenigeerd = {item.reenigeerd}
            details = {item.details}
            />
          )
        })
      }
      
      {/* <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        desc="From $ 36,490* "
        tax = "After Federal Tax Credit"
        backgroundImage="model-y.jpg"
        leftBtnText="Shop Available"
        rightBtnText="Demo Drive"
        lastDisc = "*Price before incentives is $36,490, excluding taxes and fees. Subject to change."
      />
      <Section
      
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        backgroundImage="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in American"
        desc="Money-back  gurantee"
        backgroundImage="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImage="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        desc=""
        backgroundImage="accessories.jpg"
        leftBtnText="Shop now"
      /> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
