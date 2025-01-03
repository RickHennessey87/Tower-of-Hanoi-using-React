import { useState } from 'react'
import { Peg } from './components/Peg/Peg';
import './App.css'

function App() {
  const [pegs, setPegs] = useState([
    [3, 2, 1],
    [],
    [],
  ]);

  const [dummy, setDummy] = useState(false);

  const moveDisk = (fromPeg, toPeg, diskSize) => {
    setPegs((prev) => {
      const newPegs = [...prev].map((peg) => [...peg]);
      newPegs[fromPeg].pop();
      newPegs[toPeg].push(diskSize);
      return newPegs;
    });
    setDummy((prev) => !prev);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React DnD Tower of Hanoi</h1>
      <div style={containerStyle}>
        {pegs.map((pegDisks, pegIndex) => (
          <Peg
            key={pegIndex}
            pegIndex={pegIndex}
            disks={pegDisks}
            moveDisk={moveDisk}
            dummy={dummy}
          />
        ))}
      </div>
    </div>
  )
}

export default App
