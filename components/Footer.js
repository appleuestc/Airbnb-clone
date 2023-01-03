import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32
    py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p className='cursor-pointer'>How Airbnb works</p>
            <p className='cursor-pointer'>Newsroom</p>
            <p className='cursor-pointer'>Investors</p>
            <p className='cursor-pointer'>Airbnb Plus</p>
            <p className='cursor-pointer'>Airbnb Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p className='cursor-pointer'>Accessibility</p>
            <p className='cursor-pointer'>This is not a real site</p>
            <p className='cursor-pointer'>It's a pretty awesome clone</p>
            <p className='cursor-pointer'>Referrals accepted</p>
            <p className='cursor-pointer'>Ambrose</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p className='cursor-pointer'>Ambrose Feng</p>
            <p className='cursor-pointer'>Graduate student</p>
            <p className='cursor-pointer'>ECE</p>
            <p className='cursor-pointer'>UC San Diego</p>
            <p className='cursor-pointer'>La Jolla</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Say Hi YouTube</p>
            <p>Easter Eggs</p>
            <p>For the Win</p>
        </div>
    </div>
  )
}

export default Footer