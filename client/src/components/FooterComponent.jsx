import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs'

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="three">
            <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-600 rounded-md'>
              <span>BlogSite</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About Me" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target='_black' rel='noopener noreferrer'>
                  My Online Portfolio
                </Footer.Link>
                <Footer.Link href="/" target='_black' rel='noopener noreferrer'>
                  My Other Projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target='_black' rel='noopener noreferrer'>
                  Linked In
                </Footer.Link>
                <Footer.Link href="/" target='_black' rel='noopener noreferrer'>
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Other Details" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target='_black' rel='noopener noreferrer'>
                  Terms & Conditions
                </Footer.Link>
                <Footer.Link href="/" target='_black' rel='noopener noreferrer'>
                  Privacy Policy
                </Footer.Link>
              
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider/>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright href="/" by="z3rr" year={new Date().getFullYear()}/>
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='/' icon={BsFacebook}/>
            <Footer.Icon href='/' icon={BsInstagram}/>
            <Footer.Icon href='/' icon={BsDiscord}/>
            <Footer.Icon href='/' icon={BsGithub}/>
            <Footer.Icon href='/' icon={BsLinkedin}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}
