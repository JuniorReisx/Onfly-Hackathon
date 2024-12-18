import styled from "styled-components";

const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100vw - 320px);

  gap: 10px;

  @media (max-width: 1366px) {
    width: calc(100vw - 40px);
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  gap: 20px;

  flex-wrap: nowrap;

  & div {
    height: 230px;
    width: 350px;

    outline: none;
    background: none;
  }

  & img {
    width: 100%;
    height: 100%;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media (max-width: 1366px) {
  }

  @media (max-aspect-ratio: 1) {
    overflow-x: scroll;
    scrollbar-width: none;

    width: calc(100vw - 40px);

    & div:nth-child(n) {
      height: 150px;
      width: 200px;

      flex-shrink: 0;
    }
  }
`;

export function Carrousel({ images }) {
  return (
    <CarrouselContainer>
      <h3>Recomendações para você</h3>
      <ImagesContainer>
        {images.map((image, index) => (
          <div key={index}>
            <img style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
      </ImagesContainer>
    </CarrouselContainer>
  );
}
