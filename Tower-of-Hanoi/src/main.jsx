import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <DndProvider backend={HTML5Backend}>
    <App />
  </DndProvider>,
  document.getElementById('root')
)
