import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className='min-h-screen mt-20'>
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                <div className="flex-1">
                    <Link to='/' className='text-4xl font-bold text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-600 rounded-md'>
                        <span>BlogSite</span>
                    </Link>
                    <p className='text-sm mt-5'>
                        Signup using your username and password or with Google.
                    </p>
                </div>
                <div className="flex-1">
                    <form action="" className='flex flex-col gap-4'>
                        <div>
                            <Label value='Your username'/>
                            <TextInput type='text' placeholder='Username' id='username'/>
                        </div>  
                        <div>
                            <Label value='Your email'/>
                            <TextInput type='email' placeholder='name@company.com' id='email'/>
                        </div>  
                        <div>
                            <Label value='Your password'/>
                            <TextInput type='password' placeholder='Password' id='password'/>
                        </div>
                        <Button gradientDuoTone='purpleToPink' type='submit'> Sign Up </Button>  
                    </form>
                    <div className='flex gap-2 text-sm mt-5'>
                        <span>Have an account?</span>
                        <Link to='/sign-in' className='text-blue-500'>Sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
