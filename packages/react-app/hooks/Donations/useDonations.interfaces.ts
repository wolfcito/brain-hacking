import { ChangeEvent, FormEvent } from "react";

export interface IUseDonations {
    btnDotationWasClicked: boolean,
    valueDonation: number,
    handleClickBtnDonations: () => void,
    handleChangeValueDonation : (event: ChangeEvent<HTMLInputElement>) => void,
    sendDonation: (event: FormEvent<HTMLFormElement>) => void
}