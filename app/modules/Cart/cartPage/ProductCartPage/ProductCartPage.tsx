import { ProductsTypes, RootState } from "@/app/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import AllPriceProductCart from "../AllPriceProductCart";
import DeleteBtnCartProduct from "../DeleteBtnCartProduct";
import InputQuantityProductCart from "../InputQuantityProductCart";

export type ProductCartPageProps = {
  product: ProductsTypes
};
export default function ProductCartPage(props: ProductCartPageProps) {
  const { image, title, price, id, quantity: count } = props.product
  const { quantity } = useSelector((state: RootState) => state.translations.translations)
  const [loading, setLoading] = useState(false)

  return (
    <div
      className="flex w-full items-center justify-between transition ease-in-out duration-300"
      style={{ opacity: loading == true ? "0.5" : "1" }}
    >
      <div className="flex gap-4 items-center">
        <DeleteBtnCartProduct loading={loading} setLoading={setLoading} id={props.product.id} />
        <div className="h-20 w-20">
          <img src={image} alt={title} className="h-full mx-auto" />
        </div>
        <div
          className="font-medium uppercase w-44"
        >
          {
            title.length > 15 ?
              title.slice(0, 15) + "..." :
              title
          }
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <div
          className="text-hover uppercase text-xs w-7 flex justify-center"
        >
          {price}$
        </div>
        <div className="flex items-center gap-4 border-solid border-[1px] border-[#e1e1e1] py-2 px-4">
          <div
            className="text-hover uppercase text-xs"
          >
            {quantity}
          </div>
          <InputQuantityProductCart id={id} />
        </div>
        <AllPriceProductCart count={count} price={price} />
      </div>
    </div>
  );
}
