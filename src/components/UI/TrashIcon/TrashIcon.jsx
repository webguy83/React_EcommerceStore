import React from 'react';

import {TrashIconContainer} from './TrashIcon.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const TrashIcon = () => {
    return (
        <span className={TrashIconContainer}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </span>
    );
};

export default TrashIcon;