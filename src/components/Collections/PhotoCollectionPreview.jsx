import React from 'react';
import styled from 'styled-components/macro';

import CollectionItem from './CollectionItem';

const PhotoCollectionPreviewContainer = styled.div`
    & .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
        grid-gap: 3rem;
        margin-bottom: 1rem;
    }

    & .colTitle {
        margin-bottom: 1.3rem;
        grid-column: 1 / -1;
    }
`

const PhotoCollectionPreview = ({ title, items }) => {
    return (
        <PhotoCollectionPreviewContainer>
            <h2 className="colTitle">{title}</h2>
            <div className="grid">
                {items.filter((_, i) => i < 4).map((item) => {
                    return <CollectionItem key={item.id} id={item.id} item={item} />
                })}
            </div>
        </PhotoCollectionPreviewContainer>
    );
};

export default PhotoCollectionPreview;