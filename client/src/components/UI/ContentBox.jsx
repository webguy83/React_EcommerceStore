import React from 'react';
import styled from 'styled-components/macro';

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: .1rem solid var(--prim);
    background-color: white;
    padding: 1.3rem;
    opacity: .6;

    & > h2 {
        text-transform: uppercase;
    }
    & > p {
        font-size: 1.3rem;
    }
    ${({ style }) => style}
`

const ContentBox = ({ title, textContent, ...props }) => {
    return (
        <Content className="content" {...props}>
            <h2>{title}</h2>
            <p>{textContent}</p>
        </Content>
    );
};

export default ContentBox;