import { addToCartNumber } from "@/app/store/slice/authSlice";
import { ProductsTypes, RootState } from "@/app/types";
import { IconX } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

type DeleteBtnCartProductProps = {
  id: number,
  setLoading: Dispatch<SetStateAction<boolean>>,
  loading: boolean,
};

export default function DeleteBtnCartProduct(props: DeleteBtnCartProductProps) {
  const { id, isLoggedIn } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const deleteFunction = async () => {
    try {
      const url = `https://depot-data.onrender.com/users/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      const newData = {
        ...data,
        cart: data.cart.filter((item: ProductsTypes) => item.id !== props.id)
      }
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
      });
      dispatch(addToCartNumber())
      props.setLoading(false)
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  const handelDeleteCartList = () => {
    if (isLoggedIn == true) {
      props.setLoading(true)
      deleteFunction()
    }
  }

  return (
    <div>
      <IconX
        size={20}
        className="hover:text-hover hover:cursor-pointer transition ease-in-out duration-300"
        onClick={() => handelDeleteCartList()} />
    </div>
  );
}


