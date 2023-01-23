import Colors from "../../colors.ts"
const colorFunction = new Colors;

export const addColor = (params)=>{
    return colorFunction.addColor(params)
}

export const allColors = ()=>{
    return colorFunction.allColors();
}