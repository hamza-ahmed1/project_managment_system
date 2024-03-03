import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectDetail() {
  const navigate=useNavigate();
  return (
    <div class="card">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body align-item-center">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <button onClick={()=>{navigate('/')}} class="btn btn-warning">Back</button>
      <button class="btn btn-primary">Download</button>
    </div>
  </div>
  )
}
