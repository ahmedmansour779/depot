import { addTowishListNumber } from "@/app/store/slice/authSlice";
import { ProductsTypes, RootState } from "@/app/types";
import { IconX } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";

type propsType = {
    product: ProductsTypes
}

export default function DeleteWishlist(props: propsType) {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    const deleteFunction = async () => {
        try {
            const url = `https://depot-data.onrender.com/users/${user.id}`;
            const response = await fetch(url);
            const data = await response.json();
            const newData = {
                ...data,
                wishList: data.wishList.filter((item: ProductsTypes) => item.id !== props.product.id)
            }
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            });
            dispatch(addTowishListNumber(newData.wishList.length))
        } catch (error) {
            console.error('Error updating data:', error);
        }
    }

    const handelDeletewishList = () => {
        deleteFunction()
    }

    return (
        <div>
            <IconX
                size={20}
                className="hover:text-hover hover:cursor-pointer transition ease-in-out duration-300"
                onClick={() => handelDeletewishList()} />
        </div>
    )
}
