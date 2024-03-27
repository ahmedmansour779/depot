"use client";
import InputText from "@/app/components/form/InputText";
import { RootState } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderDone from "../../Notifications/OrderDone";
import ButtonSubmitDetails from "../ButtonSubmitDetails";
import DiffrentAddress from "../DiffrentAddress";
import FormBillingDetails from "../FormBillingDetails";

export default function BillingDetailsSection() {
  const {
    billingDetails,
    phone,
    emailAddress
  } = useSelector((state: RootState) => state.translations.translations)
  const lang = useSelector((state: RootState) => state.translations.language)
  const id = useSelector((state: RootState) => state.user.id)
  const router = useRouter();
  const [items, setItems] = useState()
  const [custom, setCustom] = useState<any>()
  const [show, setShow] = useState<boolean>(false)


  useEffect(() => {
    const handelData = async () => {
      try {
        const url = `https://depot-data.onrender.com/users/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setItems(data.cart)
        setCustom({
          name: data.name,
          email: data.email,
          shippingType: data.shippingType
        })
      } catch {
        console.log("error");
      }
    }
    handelData()
  }, [])

  const handelSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData: any = {};
    let billingData: any = {};
    let deferentData: any = {};
    let orderNotesValue: any = ""

    formData.forEach((value, key) => {
      if (key.includes("Billing")) {
        billingData[key] = value;
      } else if (key.includes("Deferent")) {
        deferentData[key] = value;
      } else if (key == "orderNotes") {
        orderNotesValue = value;
      } else if (key == "phone" || key == "emailAddress") {
        billingData[key] = value;
      }
    })

    userData.BillingAddress = billingData
    userData.differentAddress = deferentData
    userData.orderNotes = orderNotesValue
    userData.items = items
    userData.custom = custom

    const postData = async () => {
      try {
        const url = 'https://depot-data.onrender.com/orders';
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    postData();
    setShow(true)
    setTimeout(() => {
      router.push("/")
    }, 3000);
  }

  return (
    <form
      onSubmit={(e) => handelSubmit(e)}
      className="flex flex-col gap-4">
      {
        show && <OrderDone />
      }
      <div className="flex gap-4">
        <div
          className="py-6 flex flex-col gap-6 bigTablet:flex-1 bigTablet:w-1/2 w-full"
        >
          <h1
            className={`uppercase font-semibold text-xl ${lang == "en" && "tracking-wide"} `}
          >
            {billingDetails}
          </h1>
          <div className="flex flex-col gap-4">
            <FormBillingDetails diffrent="billing" />
            <InputText type="number" require label={phone} name="phone" />
            <InputText type="email" require label={emailAddress} name="emailAddress" />
          </div>
        </div>
        <DiffrentAddress />
      </div>
      <ButtonSubmitDetails />
    </form>
  );
}


