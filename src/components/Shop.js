import React,{ useState , useEffect } from 'react'
import Product from './Product'

const Shop = () => {

    const [products, setProduct] = useState([])

    useEffect(() => {
        
        let products = [
            {
                id    : 1,
                brand : 'Nokia',
                model : 'Lumia',
                price : 25000
            },
            {
                id    : 2,
                brand : 'Oppo',
                model : 'Reno',
                price : 35000
            },
            {
                id    : 3,
                brand : 'Samsung',
                model : 'Galaxy',
                price : 55000
            },
            {
                id    : 4,
                brand : 'Apple',
                model : 'Iphone-6',
                price : 90000
            },
            {
                id    : 5,
                brand : 'Sony',
                model : 'Experia',
                price : 60000
            },
            {
                id    : 6,
                brand : 'Xiaomi',
                model : 'Redmi',
                price : 6000
            },
            {
                id    : 7,
                brand : 'LG',
                model : 'Old',
                price : 6000
            },
            {
                id    : 8,
                brand : 'Walton',
                model : 'New',
                price : 6000,
            },
            {
                id    : 9,
                brand : 'symphony',
                model : 'New Model',
                price : 12000,
            }
            
            ];

            setProduct(products)


    }, [])
    
    



    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {
                        products.map((product)=><Product productData = {product}></Product>)
                    }
                 
                 </div>
            </div>
           
        </>
    )
}

export default Shop
