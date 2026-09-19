/**
 * Logotipo MACASA — unica via valida para colocar la marca.
 *
 * El manual de identidad (pag. 2) autoriza dos versiones y nada mas:
 *   - `color`  : logotipo original. Solo sobre blanco o gris muy claro.
 *   - `blanco` : knockout blanco. Obligatorio sobre azul, gris o fondo oscuro.
 *
 * El logotipo a color sobre azul queda practicamente invisible (el azul del
 * wordmark es el mismo azul del fondo), por eso la version blanca no es una
 * preferencia estetica sino un requisito del manual.
 */

type Variante = 'color' | 'blanco'

const FUENTES: Record<Variante, string> = {
  color: '/logo-macasa-transparent.png',
  blanco: '/marca/logo-macasa-blanco.png',
}

interface MacasaLogoProps {
  /** `blanco` para fondos azules, grises u oscuros. Default: `color`. */
  variante?: Variante
  className?: string
}

export function MacasaLogo({
  variante = 'color',
  className = 'h-10 w-auto',
}: MacasaLogoProps) {
  return (
    <img
      src={FUENTES[variante]}
      alt="MACASA Hardware & Software"
      className={className}
      width={1600}
      height={304}
    />
  )
}
