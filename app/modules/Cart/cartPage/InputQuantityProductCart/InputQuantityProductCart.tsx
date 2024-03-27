"use client";

import { addToCartNumber } from "@/app/store/slice/authSlice";
import { ProductsTypes, RootState } from "@/app/types";
import { IconCaretLeftFilled, IconCaretRightFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type propsType = {
  id: number
}

export default function InputQuantityProductCart(props: propsType) {
  const { id } = props;
  const user = useSelector((state: RootState) => state.user)
  const lang = useSelector((state: RootState) => state.translations.language)
  const [count, setCount] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    const getCount = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${user.id}`
        const response = await fetch(url);
        const data = await response.json();
        data.cart.map((item: ProductsTypes) => {
          if (item.id === id && item.quantity) {
            setCount(item.quantity)
          }
        })
      } catch {
        console.log("error");
      }
    }
    getCount()
  }, [])

  const increment = async () => {
    setCount(count + 1);
    quantityChange(count + 1)
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      quantityChange(count - 1)
    }
  };

  // console.log(count);

  const quantityChange = async (countNumber: number) => {
    try {
      const url = `https://depot-data.onrender.com/users/${user.id}`
      const response = await fetch(url);
      const data = await response.json();
      data.cart.find((cart: { id: number }) => cart.id == id).quantity = countNumber;
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch {
      console.log("error");
    }
    dispatch(addToCartNumber());
  }

  return (
    <div className="flex justify-center font-light">
      {
        lang == "en" ?
          <>
            <button onClick={() => decrement()}><IconCaretLeftFilled size={20} className='text-hover' /></button>
            <input
              type="number"
              defaultValue={1}
              value={count}
              min={1}
              readOnly
              className="text-hover uppercase text-xs w-7" />
            <button onClick={() => increment()}><IconCaretRightFilled size={20} className='text-hover' /></button>
          </> :
          <>
            <button onClick={() => increment()}><IconCaretRightFilled size={20} className='text-hover' /></button>
            <input
              type="number"
              defaultValue={count}
              value={count}
              min={1}
              readOnly
              className="text-hover uppercase text-xs w-7" />
            <button onClick={() => decrement()}><IconCaretLeftFilled size={20} className='text-hover' /></button>
          </>
      }
    </div>
  );
}
