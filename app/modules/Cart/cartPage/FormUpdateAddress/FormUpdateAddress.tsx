"use client";
import { RootState } from "@/app/types";
import {
  Accordion,
  AccordionBody,
  AccordionHeader
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type handelChangeType = { target: { value: React.SetStateAction<string | undefined>; }; }
type AvailableCountriesType = {
  country: string,
  states: string[]
}

export default function FormUpdateAddress() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [data, setData] = useState<AvailableCountriesType[]>([])
  const [dataUser, setDataUser] = useState<any>([])
  const [countryValue, setCountryValue] = useState<any>()
  const [stateValue, setStateValue] = useState<any>()
  const [states, setStates] = useState<any>(0)
  const [cityValue, setCityValue] = useState<string | undefined>()
  const [postcodeValue, setPostcodeValue] = useState<string | undefined>()
  const { id, cartEvent, wishListNumbers } = useSelector((state: RootState) => state.user)
  const {
    changeAddress,
    Country,
    stateCounty,
    city,
    postCodeZip,
    update
  } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)

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
    const getDataUSer = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`
        const response = await fetch(url);
        const data = await response.json();
        setDataUser(data);
      } catch (err) {
        console.log("error is", err);
      }
    }
    getDataUSer()
  }, [cartEvent, wishListNumbers])
  useEffect(() => {
    setStates(data.filter(item => item.country === countryValue));
  }, [countryValue])

  const handleChange = (e: handelChangeType) => {
    setCountryValue(e.target.value);
  };
  const handleChangeState = (e: handelChangeType) => {
    setStateValue(e.target.value);
  };

  const handelSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const url = `https://depot-data.onrender.com/users/${id}`
    try {
      const newAddress = {
        country: countryValue,
        city: cityValue,
        state: stateValue,
        postcode: postcodeValue
      }
      dataUser.address = newAddress
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
      });
    } catch (err) {
      console.log("error is", err);
    }
    handleOpen(0)
  }

  function Icon({ id, open }: { id: any, open: any }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-3 w-3 transition ease-in-out duration-300`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
  }

  return (
    <>
      <Accordion
        placeholder="test"
        open={open === 1}
        icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          placeholder="test"
          onClick={() => handleOpen(1)}
          className={`uppercase text-sm font-semibold ${lang == "en" && "tracking-widest"}`}>
          {changeAddress}
        </AccordionHeader>
        <AccordionBody>
          <form
            onSubmit={(e) => handelSubmit(e)}
            className="flex flex-col gap-2">
            <select
              required
              className="p-2 w-full bg-white border-solid border-[1px] border-[#e1e1e1] text-hover hover:text-black transition ease-in-out duration-300 hover:cursor-pointer"
              onChange={handleChange}
              value={countryValue}
              defaultValue={Country}>
              <option className="hidden" value={"Country"}>{Country}</option>
              {data.map((item: AvailableCountriesType) => {
                return (
                  <option value={item.country}>
                    {item.country}
                  </option>
                )
              })}
            </select>
            <select
              required
              className="p-2 w-full bg-white border-solid border-[1px] border-[#e1e1e1] text-hover hover:text-black transition ease-in-out duration-300 hover:cursor-pointer"
              onChange={handleChangeState}
              value={stateValue}
              defaultValue={stateCounty} >
              <option className="hidden" value={"Country"}>{stateCounty}</option>
              {
                states[0]?.states.map((item: AvailableCountriesType) => {
                  return (
                    <option value={states[0] && item}>
                      {states[0] && item}
                    </option>
                  )
                })}
            </select>
            <input
              required
              onChange={(e: handelChangeType) => setCityValue(e.target.value)}
              className="p-2 w-full bg-white border-solid border-[1px] border-[#e1e1e1] text-hover hover:text-black transition ease-in-out duration-300"
              placeholder={city}
              type="text"
              name="" id="" />
            <input
              required
              onChange={(e: handelChangeType) => setPostcodeValue(e.target.value)}
              className="p-2 w-full bg-white border-solid border-[1px] border-[#e1e1e1] text-hover hover:text-black transition ease-in-out duration-300"
              placeholder={postCodeZip}
              type="text"
              name=""
              id="" />
            <button
              type="submit" className={`bg-black text-white p-3 uppercase font-semibold text-sm opacity-50 hover:opacity-100 transition ease-in-out duration-300 ${lang == "en" && "tracking-widest"}`}>
              {update}
            </button>
          </form>
        </AccordionBody>
      </Accordion>
    </>
  );
}
