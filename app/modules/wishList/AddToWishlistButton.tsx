"use client"

import { ProductsTypes, RootState } from "@/app/types";
import { IconCheck, IconHeartFilled } from "@tabler/icons-react";
import { useSelector } from "react-redux";

type propsType = {
    product: ProductsTypes
}

export default function AddToWishlistButton(props: propsType) {
    const { isLoggedIn, wishList, id } = useSelector((state: RootState) => state.user)
    const addToWashList = () => {
        console.log("clack");

        // try {
        //     const url = `https://depot-data.onrender.com/users/${id}`;
        //     const response = await fetch(url);
        //     const data = await response.json();
        //     console.log(data);
        //     //     const updatedData = { ...data, isFavourite: true }; // Update isFavourite to true
        //     //     const updateResponse = await fetch(url, {
        //     //         method: 'PUT',
        //     //         headers: {
        //     //             'Content-Type': 'application/json'
        //     //         },
        //     //         body: JSON.stringify(updatedData)
        //     //     });
        //     //     const updatedDataResponse = await updateResponse.json();
        //     //     console.log('Updated data:', updatedDataResponse);

        // } catch (error) {
        //     console.error('Error updating data:', error);
        // }
    }

    return (
        <div>
            {
                props.product.isFavorite ?
                    <IconCheck style={{ color: "#fff" }} size={15} /> :
                    <IconHeartFilled onClick={() => addToWashList()} style={{ color: "#fff" }} size={15} />
            }
        </div>
    )
}
