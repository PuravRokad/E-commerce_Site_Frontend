import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import all_product from '../Components/Assets/all_product.js'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum.jsx';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay.jsx';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox.jsx';
import { RelatedProduct } from '../Components/RelatedProject/RelatedProduct.jsx';

export const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox />
        <RelatedProduct /> 
    </div>
  )
}
