import { ISuggestionDonation } from './SuggestionDonation.interface'

export default function SuggestionDonation({
  label = '¿Te gustaría ayudar a la Humanidad?',
  label2 = 'Tu generosidad puede cambiar vidas.',
  onClick,
}: ISuggestionDonation) {
  return (
    <div className="my-6 flex w-full flex-col items-center justify-center bg-slate-300">
      <h2 className="my-1">{label}</h2>
      <span className="my-1">{label2}</span>
      {/* <button onClick={onClick} className="basis-1/4">Donar</button> */}
    </div>
  )
}
