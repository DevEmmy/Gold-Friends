import { data } from '@/Components/data';
import Property from '@/Components/EachProperty'
import MetaTags from '@/Components/MetaTags'
import { getAProperty } from '@/Components/services/Services';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const id = () => {
    const router = useRouter();
    let {id} = router.query
    const [property, setProperty] = useState()

    const getProperty = async ()=>{
      let result = await getAProperty(id);
      console.log(result)
      setProperty(result)
    }

    useEffect(()=>{
        getProperty()
    }, [])
  return (
    <>
        <MetaTags title="Property"/>
        <Property property={property}/>
    </>
  )
}

export default id