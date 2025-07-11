import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Listingitem({ listing }) {
  return (
    <div className='bg-white shadow-md hover:shadow-lg rounded-lg transition-shadow
    overflow-hidden w-full sm:w-[210px]'>
        
        {/* Listing image and name */}
        <Link to={`/listing/${listing._id}`}>
            <img src={listing.imageUrls[0] } alt='listing cover'
            className='h-[300px] sm:h-[220px] w-full object-cover
            hover:scale-105 transition-scale duration-300 rounded-lg shadow-md'
             />
             <div className='p-3 flex flex-col gap-2'>
                <p className=' truncate text-lg font-semibold text-slate-700'>{listing.name}</p>
                <div className='flex items-center gap-1'>
                  <MdLocationOn className='h-4 w-4 text-green-700'/>
                  <p className='text-sm text-slate-500 truncate'>{listing.address}</p>
                </div>
                <p className='text-sm font-semibold text-slate-700 line-clamp-2'>${listing.description}</p>
                <p className='text-slate-500 mt-2 font-semibold flex'>

                  $
                  {listing.offer ? listing.discountPrice.
                  toLocaleString('en-US') : listing.regularPrice.
                  toLocaleString('en-US')}
                  {listing.type === 'rent' && ' / month'}
                </p>

                <div className='flex text-slate-700 gap-4'>
                  <div className='font-bold text-xs'>
                    {listing.bedrooms > 1 ? `${listing.bedrooms}
                    beds` : `${listing.bedrooms} bed`}
                  </div>
                  <div className='font-bold text-xs'>
                    {listing.bathrooms > 1 ? `${listing.bathrooms}
                    baths` : `${listing.bathrooms} bath`}
                  </div>
                </div>
             </div>
        </Link>
    </div>
  )
} 

