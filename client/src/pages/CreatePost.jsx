import React,{useState} from 'react'
import {useNavigate} from "react-router-dom" 

import {preview} from "../assets";
import {getRandomPrompt} from "../utils";
import { FormField, Loader} from "../components"


const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = () =>{

  }

  const handleChange = (e) =>{

  }
  const handleSurpriseMe = () =>{

  }
  return (
    <section className='max-w-7xl mx-auto'>
    <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
         Create
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
          Create imaginative and visually stunning images through DALL-E AI 
          and share them with the community
         </p>
      </div>
      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
           labelName="Your name"
           type="text"
           name="name"
           placholder="Lake Lake"
           value={form.name}
           hanleChange={handleChange}
          />
          <FormField 
           labelName="Prompt"
           type="text"
           name="prompt"
           placholder="a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers"
           value={form.prompt}
           hanleChange={handleChange}
           isSurpiseMe
           handleSurpriseMe={handleSurpriseMe}
          />
          <div className='relative bg-gray-50 border first-letter:
           border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
           focus:border-blue-500
          '>

          </div>
        </div>
      </form>
    </section>
  )
}

export default CreatePost