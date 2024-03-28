"uce client";

import { addToCartNumber } from "@/app/store/slice/authSlice";
import { ProductsTypes, RootState } from "@/app/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginFirst from "../../Notifications/LoginFirst";

type propsType = {
  product: ProductsTypes
  productPage?: boolean,
}

export default function AddToCartButton(props: propsType) {
  const { name, isLoggedIn, id, cartEvent } = useSelector((state: RootState) => state.user)
  const { addToCart, addingToCart, viewCart } = useSelector((state: RootState) => state.translations.translations)
  const [inList, setInList] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handelCartList = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        const foundElement = data.cart.find((item: ProductsTypes) => item.id === props.product.id)
        if (foundElement) {
          setInList(true)
        }
      } catch (error) {
        console.error('Error updating data:', error);
        setInList(false)
      }
    }
    name !== "" && handelCartList()
    isLoggedIn == false && setInList(false)
  }, [name, cartEvent])

  const handelCartList = async () => {
    try {
      const url = `https://depot-data.onrender.com/users/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      const foundElement = data.cart.find((item: ProductsTypes) => item.id === props.product.id)
      if (foundElement) {
        console.log('Array contains the element');
      } else {
        data.cart.push(props.product);
        setInList(true);
        setLoading(false);
      }
      const updatedData = data;
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      dispatch(addToCartNumber());
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  const addToCartList = () => {
    if (isLoggedIn == true) {
      setLoading(true)
      handelCartList()
    } else {
      setShowNotification(true)
    }
  }

  setTimeout(() => {
    setShowNotification(false)
  }, 3000)

  return (
    <div>
      {
        showNotification && <LoginFirst />
      }
      {
        loading ?
          <p className={`uppercase font-medium  ${props.productPage ? "text-white" : "text-black"}"`}>
            {addingToCart}
          </p>
          :
          inList ?
            <Link href="/cart" className={`uppercase font-medium ${props.productPage ? "text-white" : "text-black"}`} >
              {viewCart}
            </Link>
            :
            <p
              onClick={() => addToCartList()}
              className={`text-hover ${props.productPage ? "hover:text-white" : "hover:text-black"} hover:cursor-pointer uppercase font-medium transition ease-in-out duration-300`}>
              {addToCart}
            </p>
      }
    </div>
  );
}
