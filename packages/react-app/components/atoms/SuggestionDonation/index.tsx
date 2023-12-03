import { ISuggestionDonation } from "./SuggestionDonation.interface";

export default function SuggestionDonation({ label = "Aportar al proyecto", onClick }: ISuggestionDonation) {
    return (
        <div className="flex flex-row w-2/6 my-6">
            <h2 className="basis-3/4 my-1">{label}</h2>
            <button onClick={onClick} className="basis-1/4">Donar</button>
        </div>
    )
}