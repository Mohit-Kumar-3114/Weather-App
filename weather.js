let searchelement = document.getElementById("searchelement")
let icon = document.getElementsByClassName("icon")
let crt_temp= document.querySelector(".curnt_temp")
let feel = document.querySelector(".feels_like")
let max = document.querySelector(".max_temp")
let min = document.querySelector(".min_temp")



function tocelcius(temp){
    temp = (temp-273).toString()
    if(temp.indexOf(".") !== -1){
        temp= temp.substring(0, temp.indexOf(".")+4)
    }
    return temp;
}

icon[0].addEventListener("click",(e)=>{
    let searchop= searchelement.value;
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchop}&appid=63cb9f6f0482d7f61376edf323f1d739`;
    fetch(url,{
        method: "GET"
    }).then((data)=>{
        return data.json()
    }).then((result)=>{
    
        crttemp=result.main.temp
        crt_temp.innerText = `${tocelcius(crttemp)}°C `;
                
        
        feellike = result.main.feels_like
        feel.innerText = `Feels Like => ${tocelcius(feellike)} °C `


        maxt = result.main.temp_max
        max.innerText = `Max => ${tocelcius(maxt)} °C`
        
        
        mint = result.main.temp_min
        min.innerText = `Min => ${ tocelcius(mint)} °C`

        searchelement.value=""
    })
})