import React from 'react'
import Welcome from './Welcome';

export default function App() {
  return (
    <div>
      <h1>Reminder!!</h1>
      <Welcome name="Ajay" city="Raipur" />
      <Welcome name="Akash" city="Bhilai"/>      
      <Welcome name="Nishant" />      
    </div>
  )
}