import { ProductsTypes, RootState } from "@/app/types";
import { useState } from "react";
import { useSelector } from "react-redux";
import DeleteBtnCartProduct from "../DeleteBtnCartProduct";

export type ProductCartPageProps = {
  product: ProductsTypes
};
export default function ProductCartPage(props: ProductCartPageProps) {
  const { image, title, price } = props.product
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
        <div
          className="text-hover uppercase text-xs"
        >
          {quantity}
        </div>
        <div>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="text-hover uppercase text-xs w-7" />
        </div>
        <div
          className="text-hover uppercase text-xs"
        >
          {price}$
        </div>
      </div>
    </div>
  );
}
