import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'
import Map from '../components/Map'

function Search({searchResults}) {

    const router = useRouter();
    const {location, startDate, endDate, numOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate),'MM/dd/yyyy');
    const formattedEndDate = format(new Date(endDate),'MM/dd/yyyy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

            <main className='flex'>
                <section className='flex=grow pt-14 px-6'>
                    <p className='text-xs'>300+ Stays - {range} - for {numOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 
                    text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>

                    <div className='flex flex-col'>
                        {searchResults.map(({img, location, title, description, 
                        star, price, total}) => (
                            <InfoCard  
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                    
                </section>

                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults} />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://api.npoint.io/6bfc443e0b2a6f97e750').
    then(res=>res.json());

    return {
        props: {
            searchResults,
        },
    };
}