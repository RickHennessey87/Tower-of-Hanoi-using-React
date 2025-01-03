import React from 'react';
import { useDrop } from 'react-dnd';
import { Disk } from '../Disk/Disk';

export const Peg = ({ pegIndex, disks, moveDisk }) => {
    const topDiskOnPeg = disks[disks.length - 1] || Infinity;

    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: 'DISK',
            canDrop: (item) => {
                return disks.length === 0 || item.size < topDiskOnPeg;
            },
            drop: (item) => {
                moveDisk(item.fromPeg, pegIndex, item.size);
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                canDrop: monitor.canDrop(),
            }),
        }),
        [topDiskOnPeg, disks.length]
    );

    const style = {
        width: '150px',
        minHeight: '200px',
        border: '2px solid black',
        margin: '10px',
        backgroundColor: isOver && canDrop ? 'lightgreen' : 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    };

    console.log(`Peg ${pegIndex} disks: `, disks);


    return (
        <div ref={drop} style={style}>
            {disks
                .slice() // Create a shallow copy of disks
                .reverse() // Reverse only for display purposes
                .map((disk, idx) => {
                    const isTopDisk = idx === 0; // The reversed array's first element is now the "top" disk
                    return (
                        <Disk
                            key={`${pegIndex}-${disk}`}
                            size={disk}
                            pegIndex={pegIndex}
                            topDisk={isTopDisk}
                        >
                            Disk {disk}
                        </Disk>
                    );
                })}
        </div>
    );
};