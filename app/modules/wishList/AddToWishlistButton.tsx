"use client"

import { addToWashListNumber } from "@/app/store/slice/authSlice";
import { ProductsTypes, RootState } from "@/app/types";
import { IconCheck, IconHeartFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

type propsType = {
    product: ProductsTypes
}

export default function AddToWishlistButton(props: propsType) {
    const user = useSelector((state: RootState) => state.user)
    const [inList, setInList] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const handelWashList = async () => {
            try {
                const url = `https://depot-data.onrender.com/users/${user.id}`;
                const response = await fetch(url);
                const data = await response.json();
                dispatch(addToWashListNumber(data.washList.length))
                const foundElement = data.washList.find((item: ProductsTypes) => item.id === props.product.id)
                if (foundElement) {
                    setInList(true)
                }
            } catch (error) {
                console.error('Error updating data:', error);
                setInList(false)
            }
        }
        user.name !== "" && handelWashList()
    }, [user.name])

    const handelWashList = async () => {
        try {
            const url = `https://depot-data.onrender.com/users/${user.id}`;
            const response = await fetch(url);
            const data = await response.json();
            const foundElement = data.washList.find((item: ProductsTypes) => item.id === props.product.id)
            if (foundElement) {
                console.log('Array contains the element');
            } else {
                data.washList.push(props.product);
                setInList(true);
                dispatch(addToWashListNumber(data.washList.length));
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
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }

    const addToWashList = () => {
        if (user.isLoggedIn == true) {
            setLoading(true)
            handelWashList()
        } else {
            console.log("not");
        }
    }

    return (
        <div>
            {
                loading ?
                    <Loader /> :
                    inList ?
                        <IconCheck style={{ color: "#fff" }} size={15} /> :
                        <IconHeartFilled onClick={() => addToWashList()} style={{ color: "#fff" }} size={15} />
            }
        </div>
    )
}
