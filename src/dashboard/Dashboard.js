import React from 'react';
import Notification from './Notification';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import  { useEffect } from 'react';

function Dashboard(props) {

    const {projects}=props;

  return (
    <div className='container'>
      <div className='row'>
        {/* for project list */}
        <div className='col-md-6'>
          <ProjectList projects={projects}/>
        </div>
        {/* for notification */}
        <div className='col-md-5'>
          <Notification />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
