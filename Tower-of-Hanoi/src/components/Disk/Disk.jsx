import React from 'react';
import { useDrag } from 'react-dnd';

export const Disk = ({ size, pegIndex, topDisk, children }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'DISK',
        canDrag: topDisk,
        item: { size, fromPeg: pegIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const style = {
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: `rgba(0, 100, 200, 0.7)`,
        border: '1px solid #333',
        padding: '10px',
        margin: '5px',
        cursor: topDisk ? 'grab' : 'inherit',
        width: `${size * 30}px`, 
        textAlign: 'center',
    }

    return (
        <div ref={drag} style={style}>
            {children}
        </div>
    );
};