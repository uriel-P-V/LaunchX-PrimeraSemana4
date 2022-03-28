const fetchPokemon = () =>{
    const pokeName = ((document.getElementById("pokeName")||{}).value)||"";
    let pokeInput = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        console.log(res.status);
        if(res.status != "200"){
            console.log(res);
            pokeImage("./images/pikachu_duda.gif");

        }
        else{
            return res.json();
        }
        return res.json();
    }).then((data)=> {
        console.log(data);
        let pokeimg = data.sprites.other["official-artwork"].front_default;
        
        let poken= data.name;

        let pokepeso= data.weight;
    
        let poketip= data.types["0"].type.name;

        let healt=data.stats["0"].base_stat;
        let atak=data.stats["1"].base_stat;
        let defse=data.stats["2"].base_stat;
        let satak=data.stats["3"].base_stat;
        let sdefse=data.stats["4"].base_stat;
        let speed=data.stats["5"].base_stat;

        let numid=data.id;

        let altura=data.height;

        let ablty=data.abilities["0"].ability.name;
        let ablty2=data.abilities["1"].ability.name;

        pokeImage(pokeimg,poken,pokepeso,poketip,healt,atak,defse,satak,sdefse,speed,numid,altura,ablty,ablty2);
    })
}


const pokeImage = (url,poken,pokepeso,poketip,healt,atak,defse,satak,sdefse,speed,numid,altura,ablty,ablty2) =>{
    const pokeImg= document.getElementById("pokeImg");
    pokeImg.src = url;
    
    const pokeNombre=document.getElementById("pokeNombre");
    pokeNombre.innerHTML=`#${numid}`+'<br>'+'<br>'+`${poken.toUpperCase()}`;
    
    const peso=document.getElementById("peso");
    peso.innerHTML="PESO: "+(pokepeso/10)+" kg."
    
    const poketipo=document.getElementById("poketipo");
    poketipo.innerHTML='TIPO: "'+ (poketip.toUpperCase()) +'"'
    
    const stat1=document.getElementById("stat1");
    stat1.value=healt;

    const stat2=document.getElementById("stat2")
    stat2.value=atak;

    const stat3=document.getElementById("stat3");
    stat3.value=defse;

    const stat4=document.getElementById("stat4");
    stat4.value=satak;
    const stat5=document.getElementById("stat5");
    stat5.value=sdefse;
    const stat6=document.getElementById("stat6");
    stat6.value=speed;
    const alturaP=document.getElementById("alturaP").innerHTML="ALTURA: "+(altura/10)+" m.";

    const pokeablty=document.getElementById("pokeablty").innerHTML="HABILIDADES: "+(ablty.toUpperCase())+", "+(ablty2.toUpperCase());
};




