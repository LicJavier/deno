export const colors: string[]= [];

export default class Colors {
    constructor() {}

    addColor(params: string){
        return  colors.push(params)
    }

    allColors(){
        return colors;
    }
}