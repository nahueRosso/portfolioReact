var hex = "#ff64c8";


export const hexRgb = (hex:string) =>{
    let red = parseInt(hex[1]+hex[2],16);
    let green = parseInt(hex[3]+hex[4],16);
    let blue = parseInt(hex[5]+hex[6],16);
    return `rgb(${red}, ${green}, ${blue})`
}

// hexRgb(hex)