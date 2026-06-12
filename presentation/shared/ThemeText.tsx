import { View, Text, TextProps } from 'react-native'

//. Tipos de texto estrictos

type TextTypes = "normal" | "h1" | "h2" | "semi-bold" | "link"

//. Text props

interface Props extends TextProps{

    className?: string;
    type?: TextTypes;
}


const ThemeText = ({ className, type="normal", ...rest }: Props) => {
  return (
    
    <Text className={[ 
        
        //. color base que reacciona al sistema
        "text-light-text dark:text-dark-text",
        //. intectadas segun el type
        type === "h1" ? "text-3xl " : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "link" ? "font-normal" : undefined,
        type === "normal" ? "font-normal" : undefined,

        // cualquier clase
        className,
    ].join(" ")} {...rest}
    
    />


        
    
    
  )
}

export default ThemeText