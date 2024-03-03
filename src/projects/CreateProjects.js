import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {createproject} from '../../src/store/actions/projectActions'

function CreateProject(props) {
    const navigate=useNavigate();
    const {projects}=props;
    const error_style = {
        color: 'red'
    }
    const formInitialValues = {
        name: '',
        email: '',
        project: ''
    };

    const formik = useFormik({
        initialValues: formInitialValues,

        onSubmit: (values) => {
            // Remove values.preventDefault(); as it is not needed
            console.log('before dispatch');
            createproject(values);
            console.log('After dispatch');

        // console.log(this.state);
            //navigate('/');
            // Add your submission logic here
            // window.location.reload();   
        },
        validate: (values) => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Project Name is Required!';
            }

            if (!values.email) {
                errors.email = 'Description is Required!';
            }
            /* ZIP FILE VALIDATION
                            if (!values.project || !values.project.name) {
        errors.project = 'Project File is Required! ';
    } else {
        // Validate file input for .zip extension
        const allowedExtensions = ['.zip'];
        const fileExtension = values.project.name.lastIndexOf('.');
        const filename = values.project.name.substring(fileExtension);
        if (allowedExtensions[0] !== filename) {
            errors.project = 'Only .zip files are allowed!';
        }
    }
            */

            return errors;
        }

    });

    return (
        <>
            <div className='display-4 lead m-3 text-white'>Create New Project</div>
            <div className='m-5 col-md-6 col-sm-12 '>
                <form className='p-4 form' onSubmit={formik.handleSubmit}>
                    <label className='form-label'>Enter Project Name: </label>
                    <input
                        name='name'
                        type='text'
                        className='form-control'
                        placeholder='i.e. Student-management-system'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name ? <span style={error_style}>{formik.errors.name}</span> : null}
                    <br />
                    <label>Enter Project Description (less than 30 words): </label>
                    <textarea
                        name='email'
                        type='text'
                        className='form-control'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email ? <span style={error_style}>{formik.errors.email}</span> : null}
                    <br />

                    {/*                
                <label>Upload the Zip File: </label>
                <input
                     name='project'
                      type='file'
                  className='form-control'
                 onBlur={formik.handleBlur}
                 onChange={formik.handleChange}
                 value={formik.values.project}
                         />
                {formik.errors.project && formik.touched.project ? <span  style={error_style}>{formik.errors.project}</span> : null}
                <br /> */}
                    <input type='submit' className='btn btn-primary form-control' value={'submit'} />
                </form>
            </div>
        </>
    );
}
const mapDispachToProps=(dispatch)=>{
    return{
        createproject:(project)=>dispatch(createproject(project))
    }
    
}
export default connect(null,mapDispachToProps)(CreateProject);
