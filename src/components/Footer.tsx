type Props = {
    text: string
}
export default function Footer({ text }: Props) {
  return (
    <footer>
      <span>{text}</span>
    </footer>
  )
}
