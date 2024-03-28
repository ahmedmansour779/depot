"use client";

import { ProductsTypes, RootState } from '@/app/types';
import { IconCaretLeftFilled, IconCaretRightFilled } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AddToCartButton from '../Cart/AddToCartButton';

type propsType = {
  product: ProductsTypes,
  productPage?: boolean,
}

export default function AddToCart(props: propsType) {
  const [count, setCount] = useState(1);
  const { quantity } = useSelector((state: RootState) => state.translations.translations)
  const { product, productPage } = props;
  const [productValue, setProduct] = useState<ProductsTypes>(product)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    product && setProduct(product)
  }, [])

  return (
    <div className="flex flex-col sm:flex-row sm:gap-0 gap-4 items-center p-4 pl-0 mt-4 transition-config">
      <div className="flex border-solid border-[1px] border-[#e1e1e1] p-[0.9rem] w-full sm:w-fit justify-between items-center">
        <p className="text-hover text-sm mr-10">{quantity}</p>
        <div className='flex'>
          <button onClick={() => increment()}><IconCaretLeftFilled className='text-hover' /></button>
          <input defaultValue={count} type="number" className="text-hover w-8 text-center" />
          <button onClick={() => decrement()}><IconCaretRightFilled className='text-hover' /></button>
        </div>
      </div>
      <button className="sm:w-fit w-full bg-black hover:opacity-50 text-white text-sm py-4 px-10"><AddToCartButton product={productValue} productPage={productPage} /></button>
      {/* <InputQuantityProductCart id={product.id} /> */}
    </div>
  )
}
