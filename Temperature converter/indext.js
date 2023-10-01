const celciusE1=document.getElementById("celcius");
    const faherientE1=document.getElementById("faherient");
    const kelvinE1=document.getElementById("kelvin");


function computeTemp()
{
    const currentValue=event.target.value;

    switch(event.target.name)
    {
        case "celcius":
        kelvinE1.value = currentValue+273.15 ;
        faherientE1.value=currentValue*1.8+32;
        break;

        case "faherient":
        kelvinE1.value=(currentValue -32)/1.8+273.15;
        celciusE1.value=(currentValue-32)/1.8;
        break;

        case "kelvin":
        celciusE1.value=currentValue - 273.15;
        faherientE1.value=(currentValue-273.15)*1.8+32;
        break;

        

    }
    
}

