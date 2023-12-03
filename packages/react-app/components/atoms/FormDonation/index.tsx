import { IFormDonationProps } from "./FormDonation.interfaces";

export default function FormDonation({ valueDonation, handleChangeValueDonation, sendDonation } : IFormDonationProps)  {
    return (<form onSubmit={sendDonation} className="flex flex-row w-2/6 my-6 space-x-4 justify-center content-center items-center"> 
        <input  type="text" pattern="[0-9]" value={valueDonation} onChange={handleChangeValueDonation} />
        <button >Hacer donación</button>
    </form>)
}