import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const CreatePost = () => {
  return (
    <div className='p-3 max-w-2xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
        <form action="" className="flex flex-col gap-4">
            <div className='flex flex-col sm:flex-row gap-4 justify-between'>
                <TextInput 
                    type='text'
                    placeholder='Title'
                    required
                    id='Title'
                    className='flex-1'
                />
                <Select>
                    <option value="uncategorized">Select a category</option>
                    <option value="webd">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="java">Object-Oriented Programming</option>
                </Select>
            </div>
            <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
                <FileInput
                    type='file'
                    accept='image/*'
                />
                <Button
                    type='button'
                    gradientDuoTone='purpleToBlue'
                    size='sm'
                    outline
                >
                    Upload Image
                </Button>
            </div>
            
            <ReactQuill theme="snow" placeholder='Write something...' className='h-72 mb-12' required/>
            <Button
                type='submit'
                gradientDuoTone='purpleToPink'
            >
                Publish
            </Button>
        </form>
    </div>
  )
}