import React from 'react'
import { Link } from 'react-router-dom'

const Topics = () => {

  return (
    <>
      <div className="container m-8 py-4">
        <h2>Create and manage topics <span className='badge bg-primary ms-4'>Admin Panel</span></h2>
        <p className='lh-lg'>
          Course topics can be created easily from the admin panel.<br />
          <b>Make sure you have <Link to="/backend/courses">created the course</Link> properly before creating its topics.</b>
          <br /><br />
          To create a topic, you must be logged in as admin. Once you succesfully login, click on the <b>Topics</b> option in the sidepanel of the dashboard.
          Afterwards, click on the <span className='badge bg-primary'>+ Add Topic</span> button to create and add a topic to any course.
          You can <a href="https://edulec.in/admin/add-topic" target={'_blank'}>click on this link</a> to directly navigate to the course creation page.
          <br /><br />
          The topic creation form, has following attributes:
          <br />
          <i className='bi-record-circle'></i> <b>Topic Name</b>- The name of the topic
          <br />
          <i className='bi-record-circle'></i> <b>Document</b>- Documents have to be attached to each topic. Upload your document to Storj and paste it's link here. <Link to='/backend/storage-and-streaming'>View more info about Storj uploads</Link>.
          <br />
          <i className='bi-record-circle'></i> <b>Course</b>- Select the course with which you will like to attach this topic. If you can't see your course, create it by following <Link to="/backend/courses">these steps</Link>. 
          <br />
          <i className='bi-record-circle'></i> <b>Serial Number</b>- By default, topics are added to the course as per the time when they were created. You can enter any number of your choice here to change the order. 
          <br />
          <i className='bi-record-circle'></i> <b>Status</b>- Enable or disable any topic for the audience. 
          <br />
          <i className='bi-record-circle'></i> <b>Topic Description</b>- Enter description about your topic here. 
          
          <br /><br />
          <b>NOTE: </b>
          <br />
          You must create the course before adding any topic into it.
          <br />
          Serial number must be in number (e.g. 1, 2, 3, 10, 999 etc.)
          <br /><br />
        </p>
        <h3>Edit Topics</h3>
        <p className='lh-lg'>
          Visit the topics section of your admin panel and click on the pen icon (<i className='bi-pen-fill'></i>) to edit the details of any topic.
          <br /><br />
          <b>NOTE:</b>
          <br />
          Document link of any topic can be changed through cPanel only <span className='badge bg-warning'>phpMyAdmin</span>
        </p>
    </div>

    </>
  )
}

export default Topics