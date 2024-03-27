"use client";

import { RootState } from "@/app/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type handelChangeType = { target: { value: React.SetStateAction<string | undefined>; }; }
type AvailableCountriesType = {
  country: string,
  states: string[]
}
export type InputCountryAndDepartmentProps = {
  typeAddress?: "billing" | "deferent"
};
export default function InputCountryAndDepartment(props: InputCountryAndDepartmentProps,) {
  const [data, setData] = useState<AvailableCountriesType[]>([])
  const [states, setStates] = useState<any>(0)
  const [countryValue, setCountryValue] = useState<any>()
  const [stateValue, setStateValue] = useState<any>()
  const { typeAddress } = props
  const {
    Country,
    stateCounty,
    countryRegion,
    department
  } = useSelector((state: RootState) => state.translations.translations)
  useEffect(() => {
    const getData = async () => {
      try {
        const url = "https://depot-data.onrender.com/AvailableCountries"
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log("error is", err);
      }
    }
    getData()
  }, [])

  useEffect(() => {
    setStates(data.filter(item => item.country === countryValue));
  }, [countryValue])

  const handleChange = (e: handelChangeType) => {
    setCountryValue(e.target.value);
  };

  const handleChangeState = (e: handelChangeType) => {
    setStateValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          className="capitalize text-xs font-normal"
        >
          {countryRegion}
        </label>
        <select
          required
          className="px-4 py-2 text-hover w-full border-[1px] border-[#e1e1e1] border-solid bg-[#fff] focus:bg-[#fafafa]"
          onChange={handleChange}
          value={countryValue}
          defaultValue={Country}
          name={typeAddress == "deferent" ? "countryDeferent" : "countryBilling"}>
          <option className="hidden" value={"Country"}>{Country}</option>
          {data.map((item: AvailableCountriesType, index) => {
            return (
              <option key={index} value={item.country}>
                {item.country}
              </option>
            )
          })}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label>
          {department}
        </label>
        <select
          required
          className="px-4 py-2 text-hover w-full border-[1px] border-[#e1e1e1] border-solid bg-[#fff] focus:bg-[#fafafa]"
          onChange={handleChangeState}
          value={stateValue}
          defaultValue={stateCounty}
          name={typeAddress == "deferent" ? "stateDeferent" : "stateBilling"}>
          <option className="hidden" value={"Country"}>{stateCounty}</option>
          {
            states[0]?.states.map((item: AvailableCountriesType, index: number) => {
              return (
                <option key={index} value={states[0] && item}>
                  {states[0] && item}
                </option>
              )
            })}
        </select>
      </div>
    </div>
  );
}
