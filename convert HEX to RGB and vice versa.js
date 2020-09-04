//Write a function that converts HEX to RGB and vise versa.
//Then make that function auto-detect the formats
//so that if you enter HEX color format it returns RGB
//and if you enter RGB color format it returns HEX.

const colorConvert = ((input1=0,input2=0,input3=0) =>{

    const RGBtoHEX = ((r,g,b) => `${rgbComponentToHex(r)}${rgbComponentToHex(g)}${rgbComponentToHex(b)}`);

    const HEXtoRGB = (hex => {
        //convert input to string
        const hexColor = String(hex);
        //remove hash (if any)
        if (hexColor.includes("#")) {
            hexColor = hexColor.substring(1)
        }
        //convert hex to decimal    
        const red = parseInt(hexColor[0],16)*16 + parseInt(hexColor[1],16);
        const green =  parseInt(hexColor[2],16)*16 + parseInt(hexColor[3],16);
        const blue = parseInt(hexColor[4],16)*16 + parseInt(hexColor[5],16);

        return `rgb(${red},${green},${blue})`;
    });

    if (String(input1).length<6){
        return RGBtoHEX(input1,input2,input3);
    }
    else return HEXtoRGB(input1);

});