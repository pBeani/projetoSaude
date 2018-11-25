import React from 'react';
import TableauView from '../TableauView/TableauView';
import './TableauHolder.css';

const tableauHolder = (props) => {
    const hideClass = props.show ? '' : 'hide';

    return (
        <div className={'viewHolder  ' + (props.className || '') + ' ' + hideClass}>
            <h3>{props.title}</h3>
            <TableauView url={props.url} />
        </div>
    );
}

export default tableauHolder;