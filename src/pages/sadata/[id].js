import { data } from '@/Components/data';
import Property from '@/Components/EachProperty'
import MetaTags from '@/Components/MetaTags'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const id = () => {
    const router = useRouter();
    const {id} = router.query
    const [property, setProperty] = useState()

    useEffect(()=>{
        setProperty(data[id - 1])
    }, [data, id])
  return (
    <>
        <MetaTags title="Property"/>
        <Property property={property}/>
    </>
  )
}

export default id