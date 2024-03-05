"use client";

import { RootState } from "@/app/types";
import { useSelector } from "react-redux";

export type ShoppingTypeProps = {
  // props go here
};
export default function ShippingType(props: ShoppingTypeProps) {
  const {
    shipping,
    shippingType1,
    shippingType2,
    shippingType3
  } = useSelector((state: RootState) => state.translations.translations)

  return (
    <div>
      <h1>{shipping}</h1>
      <form>
        <div>
          <input type="radio" name="shipValue" id="valueOne" />
          <label htmlFor="valueOne">{shippingType1}</label>
        </div>
        <div>
          <input type="radio" name="shipValue" id="valueTwo" />
          <label htmlFor="valueTwo">{shippingType2}</label>
        </div>
        <div>
          <input type="radio" name="shipValue" id="valueThree" />
          <label htmlFor="valueThree">{shippingType3}</label>
        </div>
      </form>
    </div>
  );
}
