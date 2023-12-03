import FormDonation from '@/components/atoms/FormDonation'
import SuggestionDonation from '@/components/atoms/SuggestionDonation'
import useDonations from '@/hooks/Donations/useDonations'

export default function Donations() {
  const {
    btnDotationWasClicked,
    valueDonation,
    handleChangeValueDonation,
    handleClickBtnDonations,
    sendDonation,
  } = useDonations()

  return (
    <section className="flex columns-2 flex-col content-center items-center justify-center">
      <SuggestionDonation onClick={handleClickBtnDonations} />
      {btnDotationWasClicked && (
        <FormDonation
          valueDonation={valueDonation}
          handleChangeValueDonation={handleChangeValueDonation}
          sendDonation={sendDonation}
        />
      )}
    </section>
  )
}
