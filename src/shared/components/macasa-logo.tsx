export function MacasaLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1296 238"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* MACASA text in dark blue */}
      <text
        x="0"
        y="160"
        fill="#003DA5"
        fontSize="180"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
        letterSpacing="-5"
      >
        MACASA
      </text>

      {/* HARDWARE & SOFTWARE subtitle in gray */}
      <text
        x="0"
        y="220"
        fill="#6B7280"
        fontSize="42"
        fontWeight="normal"
        fontFamily="Arial, sans-serif"
        letterSpacing="8"
      >
        HARDWARE & SOFTWARE
      </text>
    </svg>
  )
}
