"use client"

import { addToWishListNumber } from "@/app/store/slice/authSlice";
import { ProductsTypes, RootState } from "@/app/types";
import { IconCheck, IconHeartFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginFirst from "../Notifications/LoginFirst";
import Loader from "./Loader";

type propsType = {
    product: ProductsTypes
}

export default function AddToWishlistButton(props: propsType) {
    const { name, isLoggedIn, id } = useSelector((state: RootState) => state.user)
    const [inList, setInList] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const [showNotification, setShowNotification] = useState(false)

    useEffect(() => {
        const handelWishList = async () => {
            try {
                const url = `https://depot-data.onrender.com/users/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                dispatch(addToWishListNumber(data.wishList.length))
                const foundElement = data.wishList.find((item: ProductsTypes) => item.id === props.product.id)
                if (foundElement) {
                    setInList(true)
                }
            } catch (error) {
                console.error('Error updating data:', error);
                setInList(false)
            }
        }
        name !== "" && handelWishList()
        isLoggedIn == false && setInList(false)
    }, [name])

    const handelWishList = async () => {
        try {
            const url = `https://depot-data.onrender.com/users/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            const foundElement = data.wishList.find((item: ProductsTypes) => item.id === props.product.id)
            if (foundElement) {
                console.log('Array contains the element');
            } else {
                data.wishList.push(props.product);
                setInList(true);
                dispatch(addToWishListNumber(data.wishList.length));
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

    const addToWishList = () => {
        if (isLoggedIn == true) {
            setLoading(true)
            handelWishList()
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
                    <Loader /> :
                    inList ?
                        <IconCheck style={{ color: "#fff" }} size={15} /> :
                        <IconHeartFilled onClick={() => addToWishList()} style={{ color: "#fff" }} size={15} />
            }
        </div>
    )
}
