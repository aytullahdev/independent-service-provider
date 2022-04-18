import React from 'react';

const Blogs = () => {
    return (
        <div className='h-auto lg:h-screen'>
            <div className='text-left p-5 text-gray-500 dark:text-white'>
                <h1 className='text-xl font-semibold '> Difference between authorization and authentication?</h1>
                <p className='py-2  text-gray-500 dark:text-white'>
                    <span className='kbd'>Authentication</span> means to tell your program who you are. In Other world Telling your code who is valid person and who is not.<br/>
                    On the other hand <span className='kbd'>Authorization</span> means giving some access for some file and code that you can visite and change.

                </p>
            </div>
            <div className='text-left p-5'>
                <h1 className='text-xl font-semibold dark:text-white '> Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='py-2  text-gray-500  dark:text-white'>
                    <span className='kbd'>Firebase</span> is a google base application which provide a various services in one application. It gives Stroge Hosting, Database, Authantication and Authorization to an Program. So it is easy to use and easy to code for a Developer. Firebase Gives Email-Password authenticaton <br/>
                    Social Media Authantication and Other popular Site Autantication. To use it we have to enable it from console.firabase.com .

                </p>
            </div>
            <div className='text-left p-5'>
                <h1 className='text-xl font-semibold dark:text-white '> What other services does firebase provide other than authentication?</h1>
                <p className='py-2  text-gray-500 dark:text-white'>
                    <span className='kbd'>Firebase</span> Provide Cloude Stroage , Hostion, Database, Realtime database, Automatic Cloude Funcation fun Or auto Triggaring And Other services.

                </p>
            </div>
            
        </div>
    );
};

export default Blogs;