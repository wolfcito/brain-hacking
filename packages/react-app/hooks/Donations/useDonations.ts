import { ChangeEvent, FormEvent, useState } from "react";
import { IUseDonations } from "./useDonations.interfaces";
import { AlertSuccess } from "@/components/atoms/Alerts/AlertSuccess";

export default function useDonations() : IUseDonations {
    const [btnDotationWasClicked, setBtnDotationWasClicked ] = useState(false)
    const [valueDonation, setValueDonation] = useState(0);

    const handleClickBtnDonations = () => {
        setBtnDotationWasClicked(true)
    }

    const handleChangeValueDonation = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);

        if(newValue > 0)
            setValueDonation(newValue)
    }

    const sendDonation = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTimeout(() => {
            AlertSuccess.fire({
                icon: "success",
                title: "Agradecemos su contribución"
            })
        }, 2000);
    }

    return {
        btnDotationWasClicked,
        valueDonation,
        handleClickBtnDonations,
        handleChangeValueDonation,
        sendDonation
    }
}