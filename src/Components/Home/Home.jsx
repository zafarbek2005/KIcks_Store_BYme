import React from 'react'
import Banner from '../Banner/Banner'
import Product from '../../Pages/Product/Product'
import { useGetProductsQuery } from '../../context/Api/productapi'
import { useGetCategoryQuery } from "../../context/Api/Catigory";
const Home = () => {
  const {data,isLoading,isError,isSuccess,isFetching} = useGetProductsQuery()
  const {data:catigoryData} = useGetCategoryQuery()
  
  return (
    <div>
        <Banner/>
        <Product catigoryData={catigoryData}  data={data} isError={isError} isLoading={isLoading} isSuccess={isSuccess} isFetching={isFetching}/>
    </div>
  )
}

export default Home