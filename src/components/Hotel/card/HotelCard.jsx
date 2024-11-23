/* eslint-disable react/prop-types */

import styled from "styled-components";
import { CardCategory } from "./CardCategory";

const HotelCardContainer = styled.div`
  display: flex;

  /* /* width: 1220px; */
  height: 280px;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & img {
    width: 385px;
    height: 280px;
  }

  & .infos-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    background: var(--card-background);

    flex-grow: 1;

    padding: 50px;
  }

  & .button-container {
    display: flex;
    margin-top: auto;
  }

  & button {
    margin-left: auto;
  }
`;

const CardTitle = styled.h3`
  font-size: 32px;
  margin: 0;
  padding: 0;
`;

const CardDescription = styled.p`
  font-size: 20px;
  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
`;

const AboutButton = styled.button`
  padding: 15px 30px;

  border-radius: 10px;
  border: none;

  color: var(--card-button-foreground);
  background-color: var(--card-button-background);
`;

export function HotelCard({ hotel }) {
  const { name, description, thumb, category } = hotel;

  return (
    <HotelCardContainer>
      <img src={thumb} alt="" />
      <div className="infos-container">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardCategory category={category} />
        <div className="button-container">
          <AboutButton>Saiba Mais</AboutButton>
        </div>
      </div>
    </HotelCardContainer>
  );
}
