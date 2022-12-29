import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
    return (
        <>

            <div className="container m-8 py-4">
                <h2>Manage users <span className='badge bg-primary ms-4'>Admin Panel</span></h2>
                <p className='lh-lg'>
                    You can keep an eye on user activities from here. 
                    <br /><br />
                    At first the basic data of each and every user will be presented to you in a basic<b> tabular</b> form.
                    For detailed infornation you can click on user's  <span className='badge bg-primary'>user@gmail.com</span> link.
                    You can <a href="https://edulec.in/admin/users" target={'_blank'}>click on this link</a> to directly navigate to the users page.
                    <br /><br />
                    The information of users will have following :
                    <br />
                    <i className='bi-record-circle'></i> <b>Affiliate Code</b>- User's Affiliate code. Further clicking on the code you will be redirected to the page where all affiliate information of the user is presented.
                    <br />
                    <i className='bi-record-circle'></i> <b>Courses</b>- All courses purchase by the user.
                    <br />
                    <i className='bi-record-circle'></i> <b>Plans</b>- All the active subscription plans of the users will be displayed here.
                    <br />
                    <i className='bi-record-circle'></i> <b>Lesson QnA</b>- Lesson queries send by users will be displayed here. Click on the box to reply the concerned user.
                    <br /><br />
                    <b>NOTE: </b>
                    <br />
                    If the user haven't purchased anything then there will be empty screen.
                    <br /><br />
                </p>
            </div>

        </>
    )
}

export default Users