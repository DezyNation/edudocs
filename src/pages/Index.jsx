import React from 'react'

const Index = () => {
    return (
        <>
            <div className="container my-4">
                <h1>Introduction</h1>
                <p>
                    Greetings from Team DezyNation! <br />
                    We built Edulec with love and passion. This documentation will guide you in mantaining the platform's source
                    code with great ease. We have followed all the best practices of web development as per the expected scale of
                    Edulect within 5 years of its development. However, it's advisable to keep updating the code fragments (if
                    necessary) as per the ongoing standards.
                </p>
                <p>
                    The platform uses core HTML, CSS and JS to keep things simple for any team working to tweak some of the
                    layouts. For the backend, a PHP framework "Laravel" is being used along with the MySQL to manage the
                    databases. You can learn more about Laravel at their official website <a href="https://laravel.com/"
                        target="_blank">laravel.com</a><br />
                    We are using Razorpay, documentation about the same can be found <a href="https://razorpay.com/docs/get-started"
                        target="_blank">on this link</a>.
                </p>
                <p>
                    You will find more details about various third party modules being used in frontend and backend in their
                    respective sections.
                </p>
            </div>

            <div className="container my-4 pt-4">
                <h2>Folder Structure</h2>
                <p>
                    Before we begin, let's understand the folder structure of the source code first. This will help you when you
                    want to locate any code fragment or functionality of Edulec.
                </p>

                <div className="accordion mb-4" id="backdir">
                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="falsev" aria-controls="collapseOne">
                                edulec_backdir
                            </button>
                        </h3>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne">
                            <div className="accordion-body">

                                <p>
                                    .env file is located in this folder (edulec_backdir)
                                    This file is responsible for storing third party server side configuration data like SMTP credentials, Database credentials, App URL and API keys & secrets.
                                </p>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne-one" aria-expanded="false" aria-controls="collapseOne-one">
                                            Sub folder of folder 1
                                        </button>
                                    </h3>
                                    <div id="collapseOne-one" className="accordion-collapse collapse">
                                        <div className="accordion-body">
                                            <p>This is a comment added to show description about sub folder of Folder 1</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion" id="public_html">
                    <div className="accordion-item">
                        <h3 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#publicDir"
                                aria-expanded="false" aria-controls="publicDir">
                                public_html
                            </button>
                        </h3>
                        <div id="publicDir" className="accordion-collapse collapse" aria-labelledby="public_html">
                            <div className="accordion-body">

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#public_css" aria-expanded="false" aria-controls="public_css">
                                            css
                                        </button>
                                    </h3>
                                    <div id="public_css" className="accordion-collapse collapse">
                                        <div className="accordion-body">
                                            <p>
                                                Contains all style sheets for the entire website, including dashboard and admin panel as well.
                                                If you intend to make changes or edit styling of any specific element or page, do it here.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#public_favicon" aria-expanded="false" aria-controls="public_favicon">
                                            favicon
                                        </button>
                                    </h3>
                                    <div id="public_favicon" className="accordion-collapse collapse">
                                        <div className="accordion-body">
                                            <p>
                                                Contains favicons of the website.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#public_img" aria-expanded="false" aria-controls="public_img">
                                            img
                                        </button>
                                    </h3>
                                    <div id="public_img" className="accordion-collapse collapse">
                                        <div className="accordion-body">
                                            <p>
                                                Contains images of the website. <br />
                                                Course images are not stored here. They are stored in StorJ
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#public_js" aria-expanded="false" aria-controls="public_js">
                                            js
                                        </button>
                                    </h3>
                                    <div id="public_js" className="accordion-collapse collapse">
                                        <div className="accordion-body">
                                            <p>
                                                Contains javascript files of the website.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#public_storage" aria-expanded="false" aria-controls="public_storage">
                                            storage
                                        </button>
                                    </h3>
                                    <div id="public_storage" className="accordion-collapse collapse">
                                        <div className="accordion-body">
                                            <p>
                                                This a shortcut folder. It contains documents uploaded while creating the topics.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container my-4 py-4">
                <h2>Basic Understanding</h2>
                <p>
                    Let's first understand how you can use this documentation as efficiently as possible.<br />
                    We have created a menu at the top navigation bar where you will find all the relevant options like <b>courses, topics, lessons, corporate subscriptions etc.</b> 
                    These options will take you to their respective pages that contain detailed steps to manage and alter them from the backend.
                    <br />
                    <br />
                    For every action, we have used one of the 3 flags:
                    <br /><br />
                    <h5 className='mb-4'><span className='badge bg-primary'>Admin Panel</span> &nbsp;&nbsp;Can be modified through the admin panel</h5>
                    <h5 className='mb-4'><span className='badge bg-warning'>phpMyAdmin</span> &nbsp;Can be modified through the phpMyAdmin. Visit your cPanel to access it.</h5>
                    <h5 className='mb-4'><span className='badge bg-danger'>Source Code</span> &nbsp;&nbsp;Can be modified through the source code only</h5>
                    <br />
                    <br />
                    <p>
                        <b>.env</b> file contains API credentials and other credentials of third party services such as Razorpay, Google oAuth, GoDaddy SMTP, Edulec Database etc.
                        <br />
                        Log files of all the backend errors can be viewed at <b>edulec_backdir/storage/logs/</b>
                        <br /><br />
                        Video storage and streaming is being handled by <a href="https://bunny.net" target={'_blank'}>Bunny.</a>
                        <br />
                        All thumbnail images of courses are being stored in <a href="https://storj.io" target={'_blank'}>StorJ</a>
                    </p>
                </p>
            </div>
        </>
    )
}

export default Index