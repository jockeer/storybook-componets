import './mylabel.css'

export interface MyLabelProps {
    /**
   * Este es el texto del label
   */
    label: string
    /**
   * Este es el tamaño del Label
   */
    size: 'normal' | 'h1'| 'h2' | 'h3'
    /**
   * Este es el tamaño del Label
   */
    allCaps: boolean
    /**
     * Este es el color 
     */
    
    color?: 'primary' | 'secundary' | 'tertiary'
    /**
     * Color personalizado de la fuente
     */

    fontColor?: string

}

export const MyLabel = ( {label='No label', size = 'normal', allCaps=false, color='primary', fontColor}: MyLabelProps ) => {
  return (
    <span className={`label ${size} text-${color}`} style={{
        color:fontColor
    }}>
        {allCaps ?label.toLowerCase() : label}
    </span>
  )
}
