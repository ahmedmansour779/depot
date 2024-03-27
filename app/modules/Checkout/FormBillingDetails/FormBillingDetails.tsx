"use client";

import InputCountryAndDepartment from "@/app/components/form/InputCountryAndDepartment";
import InputText from "@/app/components/form/InputText";
import { RootState } from "@/app/types";
import { useSelector } from "react-redux";


export default function FormBillingDetails(props: {
  diffrent?: "billing" | "deferent"
}) {
  const {
    firstName,
    lastName,
    componyName,
    streetAddress,
    townCity,
    postCodeZip,
  } = useSelector((state: RootState) => state.translations.translations)
  const { diffrent } = props


  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex gap-4"
      >
        <InputText typeAddress={diffrent} className="md:flex-1 md:w-1/2 w-full" require label={firstName} name={diffrent == "deferent" ? `firstNameDeferent` : `firstNameBilling`} />
        <InputText typeAddress={diffrent} className="md:flex-1 md:w-1/2 w-full" require label={lastName} name={diffrent == "deferent" ? `lastNameDeferent` : `lastNameBilling`} />
      </div>
      <InputText typeAddress={diffrent} label={componyName} name={diffrent == "deferent" ? `componyNameDeferent` : `componyNameBilling`} />
      <InputCountryAndDepartment typeAddress={diffrent} />
      <InputText typeAddress={diffrent} require label={streetAddress} name={diffrent == "deferent" ? `streetAddressDeferent` : `streetAddressBilling`} />
      <InputText typeAddress={diffrent} require label={townCity} name={diffrent == "deferent" ? `townCityDeferent` : `townCityBilling`} />
      <InputText typeAddress={diffrent} type="number" require label={postCodeZip} name={diffrent == "deferent" ? `postCodeZipDeferent` : `postCodeZipBilling`} />
    </div>
  );
}