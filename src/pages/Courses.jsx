import React from 'react'
import {useState} from 'react'

const Courses = () => {
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [commission, setCommission] = useState(0)
  const [amount, setAmount] = useState(0)

  const handleChange = () => {
    var deduction = discount + commission
    var payment = price - price*((deduction)/100)
    var fees = payment*0.02 + (payment*0.02)*0.18
    setAmount(deduction)
    setAlert("d-none")
  }

  return (
    <>
        <div className="container m-8 py-4">
            <h2>Create Course <span className='badge bg-primary ms-4'>Admin Panel</span></h2>
            <p className='lh-lg'>
                Courses can be created easily from the admin panel.
                Please note that, if any 2 courses have different name/category/language/price then they must be created separately.
                <br /><br />
                To create a course, you must be logged in as admin. Once you succesfully login, click on the <b>Courses</b> option in the sidepanel of the dashboard. 
                Afterwards, click on the <span className='badge bg-primary'>+ Create Course</span> button to create a course. 
                You can <a href="https://edulec.in/admin/course-create" target={'_blank'}>click on this link</a> to directly navigate to the course creation page.
                <br /><br />
                The course creation form, has following attributes:
                <br />
                <i className='bi-record-circle'></i> <b>Course Name</b>- The name of the course
                <br />
                <i className='bi-record-circle'></i> <b>Course Duration</b>- The duration of the entire course in hours
                <br />
                <i className='bi-record-circle'></i> <b>Course Thumbnail</b>- The URL of the course thumbnail image taken from the Storj bucket. To know about copying URLs from Storj, <a href="https://storj.io">click here.</a>
                <br />
                <i className='bi-record-circle'></i> <b>Intro Video</b>- The introduction video ID (from Bunny) of the course that will be shown in the overview page before purchasing it. To know about copying video IDs from Bunny, <a href="https://bunny.net">click here.</a>
                <br />
                <i className='bi-record-circle'></i> <b>Coming Soon?</b>- The introduction video ID (from Bunny) of the course that will be shown in the overview page before purchasing it. To know about copying video IDs from Bunny, <a href="https://bunny.net">click here.</a>
                <br />
                <i className='bi-record-circle'></i> <b>Category</b>- The category of the course.
                <br />
                <i className='bi-record-circle'></i> <b>Language</b>- The language of the course.
                <br />
                <i className='bi-record-circle'></i> <b>Level</b>- The level of the course.
                <br />
                <i className='bi-record-circle'></i> <b>Status</b>- The status of the course. Doesn't work as of now.
                <br />
                <i className='bi-record-circle'></i> <b>Target Audience</b>- A short text. It will be shown in the <b>Target Audience</b> section of the course overview page.
                <br />
                <i className='bi-record-circle'></i> <b>Course Description</b>- A long descriptive text about course. It will be shown below the intro video in the course overview page.
                <br />
                <i className='bi-record-circle'></i> <b>Course Price</b>- Course price in INR
                <br />
                <i className='bi-record-circle'></i> <b>Discount</b>- Discount in percentage (%) with respect to the Course Price.
                <br />
                <i className='bi-record-circle'></i> <b>Commission</b>- Commission to be disbursed on each successful affiliate sale of the course.
                <br /><br />
                <b>NOTE: </b>
                <br />
                The sum of Discount and Commission percentage must not be more than 100%
                <br />
                For e.g., if you have set the discount to 20%, the commission must be less than or euqal to 80%
                <br /><br />
            </p>

            <h5>How much amount will I receive on each purchase?</h5>
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
              <div className="container-fluid">
                <p>
                  Suppose, for a course you've set 
                  <br />
                  Price = <i className='bi-currency-rupee'></i>1000
                  <br />
                  Discount = 10% (<i className='bi-currency-rupee'></i>100)
                  <br />
                  Commission = 10% (<i className='bi-currency-rupee'></i>100)
                  <br /><br />
                  Effective Price = 1000 - 100 - 100 = <i className='bi-currency-rupee'></i>800
                  <br />
                  Transaction Fees = 2% of 800 = 16
                  <br />
                  GST = 18% of 16 = <i className='bi-currency-rupee'></i>2.88
                  <br /><br />
                  Amount you'll get = 800 - 18.88 = <i className='bi-currency-rupee'></i>781.12
                </p>
              </div>
              <form className="container-fluid" onChange={(e)=>{handleChange()}}>
                <h4 className='mb-4'>Payment Calculator</h4>

                <label htmlFor="price">Course Price</label>
                <input type="tel" className='form-control mb-3' name="price" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

                <label htmlFor="discount">Discount (in %)</label>
                <input type="tel" className='form-control mb-3' name="discount" id="discount" value={discount} onChange={(e)=>{setDiscount(e.target.value)}}/>

                <label htmlFor="commission">Commission (in %)</label>
                <input type="tel" className='form-control mb-3' name="commission" id="commission" value={commission} onChange={(e)=>{setCommission(e.target.value)}}/>

                <div className="w-full d-flex flex-row align-items-center justify-content-between">
                  <div className="w-full d-flex flex-column align-start justify-start">
                    <p>You will get</p>
                    <h4><i className='bi-currency-rupee'></i>{amount}</h4>
                  </div>
                  <div>
                    <button type="submit" className='btn btn-primary'>Check</button>
                  </div>
                </div>
              </form>

            </div>

            <h3>Add Objectives & Requirements</h3>
            <p>
              To add objectives, open the course creation form and click on the top right button <span className='badge bg-primary'>Add Objectives</span>
              <br />
              You can <a href="https://edulec.in/admin/objective-form" target={'_blank'}>click on this link</a> to visit the page directly.
              <br /><br />
              To add requirements, open the course creation form and click on the top right button <span className='badge bg-primary'>Add Requirements</span>
              <br />
              You can <a href="https://edulec.in/admin/requirement-form" target={'_blank'}>click on this link</a> to visit the page directly.
              <br /><br />
            </p>
        </div>

    </>
  )
}

export default Courses