import FormDonation from "@/components/atoms/FormDonation";
import SuggestionDonation from "@/components/atoms/SuggestionDonation";
import useDonations from "@/hooks/Donations/useDonations"

export default function Donations() {
    const {
        btnDotationWasClicked,
        valueDonation,
        handleChangeValueDonation,
        handleClickBtnDonations,
        sendDonation
    } = useDonations();

    return (<section className="flex flex-col justify-center content-center items-center columns-2">
        <SuggestionDonation onClick={handleClickBtnDonations} />
        {
            (btnDotationWasClicked) && (<FormDonation valueDonation={valueDonation}
                handleChangeValueDonation={handleChangeValueDonation}
                sendDonation={sendDonation} />)
        }
    </section>)
}