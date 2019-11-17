import React from "react";
import styled, { css } from "styled-components/macro";
import { withRouter } from "react-router-dom";
import ItemProductPreview from "./ItemProductPreview";
import { lowerCaseCountry } from "../helpers/generic";
import LazyLoad from "react-lazyload";

// css

const big = css`
  grid-column: 1 / -1;

  @media (max-width: 750px) {
    grid-column: auto;
  }
`;

const ShopItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid var(--prim);
  overflow: hidden;

  ${({ size }) => {
    return size === "big" ? big : null;
  }}
`;
// jsx

const ShopItem = ({ title, image, size, history, match, wideImages }) => {
  return (
    <LazyLoad height="100%">
      <ShopItemContainer
        size={size}
        onClick={() =>
          history.push(`${match.url}shop/${lowerCaseCountry(title)}`)
        }
      >
        <ItemProductPreview
          wideImages={wideImages}
          bgImage={image}
          title={title}
          textContent="Shop for photos now!"
        />
      </ShopItemContainer>
    </LazyLoad>
  );
};

export default withRouter(ShopItem);
