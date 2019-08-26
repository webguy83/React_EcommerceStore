import React from 'react';

export default ({ title, items }) => {
    return (
        <div className="photo-collection-preview">
            <h2>{title}</h2>
            {items.map(({ id, imageUrl, name, price }) => {
                return <div key={id}>
                    <img src={imageUrl} alt={name} />
                    <p>${price}</p>
                </div>
            })}
        </div>
    );
};