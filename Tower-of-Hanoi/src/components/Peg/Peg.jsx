import React from 'react';
import { useDrop } from 'react-dnd';
import { Disk } from '../Disk/Disk';

export const Peg = ({ pegIndex, disks, moveDisk }) => {
    const topDiskOnPeg = disks[disks.length - 1] || Infinity;

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: 'DISK',
        canDrop: (item) => {
            return item.size < topDiskOnPeg;
        },
        drop: (item) => {
            moveDisk(item.fromPeg, pegIndex, item.size);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

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

    return (
        <div ref={drop} style={style}>
            {disks.map((disk, idx) => {
                const isTopDisk = idx === disks.length - 1;
                return (
                    <Disk
                        key={disk}
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