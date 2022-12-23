import React from 'react'

const Misc = () => {
    return (
        <>
            <div className="container m-8 py-4">
                <h2>Create and manage lessons <span className='badge bg-primary ms-4'>Admin Panel</span></h2>
                <p className='lh-lg'>
                    We are using <a href="https://storj.io" target='_blank'>Storj</a> as our static files storage & hosting provider.
                    <br />
                    For the purpose of storing and streaming lesson videos, we are using <a href="https://bunny.net" target='_blank'>Bunny</a>.
                    <br />
                </p>
                <br /><br />
                <h3>Storj</h3>
                <p className="lh-lg">
                    To upload and obtain the public URL of any static file from Storj, follow the following steps.
                    <br />
                    <b>#1: </b> Login to your Storj dashboard.
                    <br />
                    <b>#2: </b> Go to your buckets section (by clicking on the <b>Buckets</b> in the left sidepanel of your dashboard).
                    <br />
                    <b>#3: </b> Select the bucket where you would like to upload your staic file(s).
                    <br />
                    <b>#4: </b> Enter your bucket's passphrase to manage your bucket.
                    <br />
                    <b>#5: </b> Upload your static file(s) in the bucket.
                    <br />
                    <b>#6: </b> Once the upload is finished, click on the file that you have uploaded.
                    <br />
                    <b>#7: </b> Click on the <b>Share</b> button to get a shareable link of the file that you've selected. 
                    <br />
                    <b>#8: </b> Copy the link you just received and remove and add <b>s/</b> just after https://link.storjshare.io/
                    <br />
                    <b>#9: </b> Replace all <b>%2F</b> with a single slash <b>/</b> in the shareable URL
                    <br /><br />
                    For example, if your shareable URL is <b>https://link.storjshare.io/jxove4ij6ej5rvfs7h7d3bt6m5ma/website-assets%2Fconfetti.png</b> <br />
                    Then your final URL should look like <b style={{color:'rgb(150,150,150)'}}>https://link.storjshare.io/<span style={{color: 'black'}}>s/</span>jxove4ij6ej5rvfs7h7d3bt6m5ma/website-assets<span style={{color: 'black'}}>/</span>confetti.png</b>
                    <br /><br />
                    Your URL is ready to be used anywhere in the Edulec website. You can use this process to <a href="/backend/topics">add Document to a topic</a>.
                </p>
                <br /><br /><br />
                <h3>Bunny</h3>
                <p className='lh-lg'>
                    We are using Bunny to store and serve lesson videos in the Edulec platform.
                    <br />
                    You can add your video ID while <a href="/backend/lessons">creating the lessons</a>. To get the unique ID of videos from Bunny, follow these steps:
                    <br />
                    <b>#1: </b> Login to your Bunny dashboard.
                    <br />
                    <b>#2: </b> Navigate to <b>Stream</b> section from the left sidepanel.
                    <br />
                    <b>#3: </b> Click on the <b>Edulec</b> library. Libraries are like folders in Bunny that are used to keep your content well-sorted.
                    <br />
                    <b>#4: </b> Upload your video and wait till it gets uploaded and processed.
                    <br />
                    <b>#5: </b> Once the processing gets finished. Click on the video you just uploaded and a dialogue box will appear with all the details of the video.
                    <br />
                    <b>#6: </b> Copy the <b>Video ID</b> from the right-hand-side of the dialogue box that just appeared.
                    <br /><br />
                    Use this unique video ID while <a href="/backend/lessons">creating the lessons</a> through the Edulec admin panel.
                </p>
            </div>
        </>
    )
}

export default Misc