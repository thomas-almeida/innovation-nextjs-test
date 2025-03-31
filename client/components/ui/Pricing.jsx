import currencyFormat from "@/utils/currencyFormat"

export default function Pricing({ value, type, style }) {
  return (
    <div className={type === "list" ? `text-right my-2` : `my-2`}>
      <p className={type === "list" ? `text-sm` : `hidden`}>A partir de:</p>
      <h4 className={style}>
        {currencyFormat.formatBRL(value)}
      </h4>
    </div>
  )
}