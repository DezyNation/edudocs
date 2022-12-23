import React from 'react'
import { Link } from 'react-router-dom'

const Lessons = () => {

  return (
    <>
      <div className="container m-8 py-4">
        <h2>Create and manage lessons <span className='badge bg-primary ms-4'>Admin Panel</span></h2>
        <p className='lh-lg'>
          Lessons can be created easily from the admin panel.<br />
          <b>Make sure you have <Link to="/backend/topics">created the topic</Link> properly before adding lessons to it.</b>
          <br /><br />
          To create a lesson, you must be logged in as admin. Once you succesfully login, click on the <b>Topics</b> option in the sidepanel of the dashboard.
          Afterwards, click on the <span className='badge bg-primary'>+ Add Lesson</span> button to create and add a lesson to any topic.
          You can <a href="https://edulec.in/admin/add-lesson" target={'_blank'}>click on this link</a> to directly navigate to the lesson creation page.
          <br /><br />
          The lesson creation form, has following attributes:
          <br />
          <i className='bi-record-circle'></i> <b>Lesson Name</b>- The name of the topic
          <br />
          <i className='bi-record-circle'></i> <b>Lesson Video URL</b>- Upload your lesson videos to Bunny and paste it's unique ID. <Link to='/backend/storage-and-streaming'>View more info about Bunny uploads</Link>.
          <br />
          <i className='bi-record-circle'></i> <b>Topic</b>- Select the topic with which you will like to attach this lesson. If you can't see your topic, create it by following <Link to="/backend/topics">these steps</Link>.
          <br />
          <i className='bi-record-circle'></i> <b>Serial Number</b>- By default, lessons are added to the topic as per the time when they were created. You can enter any number of your choice here to change the order.
          <br />
          <i className='bi-record-circle'></i> <b>Status</b>- Enable or disable any lesson for the audience.
          <br />
          <i className='bi-record-circle'></i> <b>Lesson Description</b>- Enter description about your lesson here.

          <br /><br />
          <b>NOTE: </b>
          <br />
          You must create the topic before adding any lesson into it.
          <br />
          Serial number must be in number (e.g. 1, 2, 3, 10, 999 etc.)
          <br /><br />
        </p>
        <h3>Edit Lesson</h3>
        <p className='lh-lg'>
          Visit the lessons section of your admin panel and click on the pen icon (<i className='bi-pen-fill'></i>) to edit the details of any lesson.
          <br /><br />
        </p>
      </div>
    </>
  )
}

export default Lessons