import { IFormDonationProps } from './FormDonation.interfaces'

export default function FormDonation({
  valueDonation,
  handleChangeValueDonation,
  sendDonation,
}: IFormDonationProps) {
  return (
    <form
      onSubmit={sendDonation}
      className="my-6 flex w-2/6 content-center items-start justify-center space-x-4"
    >
      <span className="bg-prosperity flex">
        <input
          type="number"
          pattern="[0-9]*[.]?[0-9]*"
          placeholder="1000 Celo"
          value={valueDonation}
          className="bg-prosperity text-right"
          onChange={handleChangeValueDonation}
        />
        <span className="text-3xl">CELO</span>
      </span>
      <button className="rounded-md">Hacer donación</button>
    </form>
  )
}
