import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProjectSummary({project}) {
  const navigate=useNavigate();
  return (
    <div className='col-md-8 col-sm-6 width:18rem;'>
    <div className='card'>
        <div className='card-body'>
            <h5 className='card-title'>{project.title}</h5>
            <h6 className='card-subtitle text-muted'>{project.technologies}</h6>
            <p className='card-text'>{project.description}</p>
            <button onClick={()=>{navigate('/project_detail')}} className='btn btn-success card-link m-1' >Download </button>
            <a href='#' className='btn btn-secondary card-link m-1' >About Developer</a>
        </div>
    </div>
</div>
  )
}
