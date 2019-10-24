import React from 'react';
import ContentBox from './UI/ContentBox';
import styled, { css } from 'styled-components/macro';

const hoverContent = css`
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        & .content {
            opacity: .9;
            transition: all .3s ease-out;
        }
    }
`

const ItemProductPreviewContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(${({ bgImage }) => bgImage});
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ show }) => !show ? hoverContent : null}
`

const ItemProductPreview = ({ bgImage, show, ...props }) => {
    return (
        <ItemProductPreviewContainer show={show} bgImage={bgImage}>
            {!show ? <ContentBox {...props} /> : null}
        </ItemProductPreviewContainer>
    );
};

export default ItemProductPreview;