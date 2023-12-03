import { ChangeEvent, FormEvent } from "react";

export interface IFormDonationProps {
    handleChangeValueDonation : (event: ChangeEvent<HTMLInputElement>) => void,
    valueDonation: number,
    sendDonation: (event: FormEvent<HTMLFormElement>) => void
}