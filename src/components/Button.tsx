import { ReactComponent as Check } from '../assets/SVG/check-solid.svg'

type Props = {
  buttonText: string
  isSent: boolean
  loading: boolean
}

export default function Button({ buttonText, isSent, loading }: Props) {
  return (<button type="submit" className="button" disabled={isSent}>
      {loading ? <Check className="button-check" /> : buttonText}
  </button>)
}
