const inputProcurar = document.querySelector('.inputProcurar');const inputBtn = document.querySelector('.pokemons > header > nav > input[type="submit"]');const btnMostrar = document.querySelector('.btnMostarMais button');const backgroundPokemon = document.querySelector('.imgWindowPokemon');
let a = 0;let tipos = [];
async function activePokemon(){
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${a}&limit=20`);const response = await request.json();
        response.results.map((item, index) => {activePokemonList(item);})
        a += 20 ;
}
activePokemon();
async function activePokemonList(item){
    const request1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + item.url.substr(-4).replace('/','').replace('/','').replace('n',''));const response1 = await request1.json();let pokemonIndividual = document.querySelector('.models .pokemonIndividual').cloneNode(true);pokemonIndividual.setAttribute('data-key', item.url.substr(-4).replace('/','').replace('/','').replace('n',''));pokemonIndividual.querySelector('.imgPokemon').src = Object.entries(response1.sprites)[4][1];pokemonIndividual.querySelector('.nomePokemon').innerHTML = item.name.replace(/\w/, c => c.toUpperCase());
    pokemonClickModel(pokemonIndividual);
    switch(response1.types[0].type.name){
        case "grass":
            pokemonIndividual.style.background = 'urL("img/backGrass.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "fire":
            pokemonIndividual.style.background = 'urL("img/backFire.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "poison":
            pokemonIndividual.style.background = 'urL("img/backPoison.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "water":
            pokemonIndividual.style.background = 'urL("img/backWater.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "bug":
            pokemonIndividual.style.background = 'urL("img/backBug.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "dark":
            pokemonIndividual.style.background = 'urL("img/backDark.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "dragon":
            pokemonIndividual.style.background = 'urL("img/backDragon.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "electric":
            pokemonIndividual.style.background = 'urL("img/backElectric.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "fairy":
            pokemonIndividual.style.background = 'urL("img/backFairy.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "fighting":
            pokemonIndividual.style.background = 'urL("img/backFighting.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "flying":
            pokemonIndividual.style.background = 'urL("img/backFlying.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover';
        break;
        case "ghost":
            pokemonIndividual.style.background = 'urL("img/backGhost.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "ground":
            pokemonIndividual.style.background = 'urL("img/backGround.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "ice":
            pokemonIndividual.style.background = 'urL("img/backIce.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "normal":
            pokemonIndividual.style.background = 'urL("img/backNormal.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "psychic":
            pokemonIndividual.style.background = 'urL("img/backPichic.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "rock":
            pokemonIndividual.style.background = 'urL("img/backRock.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "steel":
            pokemonIndividual.style.background = 'urL("img/backSteel.jpg") no-repeat center';pokemonIndividual.style.backgroundSize = 'cover'
        break;
    }
    document.querySelector('.listaPokemon').append(pokemonIndividual);
}



async function activePokemonInput(){
    let valueInput = inputProcurar.value.toLowerCase();console.log(valueInput);const request1 = await fetch('https://pokeapi.co/api/v2/pokemon/' + valueInput);const response1 = await request1.json(); const pokemonList = document.querySelectorAll('.listaPokemon .pokemonIndividual');let pokemonIndividual = document.querySelector('.models .pokemonIndividual').cloneNode(true);pokemonIndividual.setAttribute('data-key', response1.id);pokemonIndividual.querySelector('.imgPokemon').src = Object.entries(response1.sprites)[4][1];pokemonIndividual.querySelector('.nomePokemon').innerHTML = response1.name.replace(/\w/, c => c.toUpperCase());pokemonClickModel(pokemonIndividual);
    switch(response1.types[0].type.name){
        case "grass":
            pokemonIndividual.style.background = 'urL("img/backGrass.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "fire":
            pokemonIndividual.style.background = 'urL("img/backFire.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "poison":
            pokemonIndividual.style.background = 'urL("img/backPoison.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "water":
            pokemonIndividual.style.background = 'urL("img/backWater.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "bug":
            pokemonIndividual.style.background = 'urL("img/backBug.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "dark":
            pokemonIndividual.style.background = 'urL("img/backDark.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "dragon":
            pokemonIndividual.style.background = 'urL("img/backDragon.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "electric":
            pokemonIndividual.style.background = 'urL("img/backElectric.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "fairy":
            pokemonIndividual.style.background = 'urL("img/backFairy.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "fighting":
            pokemonIndividual.style.background = 'urL("img/backFighting.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "flying":
            pokemonIndividual.style.background = 'urL("img/backFlying.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "ghost":
            pokemonIndividual.style.background = 'urL("img/backGhost.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "ground":
            pokemonIndividual.style.background = 'urL("img/backGround.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "ice":
            pokemonIndividual.style.background = 'urL("img/backIce.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "normal":
            pokemonIndividual.style.background = 'urL("img/backNormal.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "psychic":
            pokemonIndividual.style.background = 'urL("img/backPichic.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "rock":
            pokemonIndividual.style.background = 'urL("img/backRock.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
        case "steel":
            pokemonIndividual.style.background = 'urL("img/backSteel.jpg") no-repeat center'
            pokemonIndividual.style.backgroundSize = 'cover'
        break;
    }
    pokemonList.forEach(item => {document.querySelector('.listaPokemon').replaceChild(pokemonIndividual, item);});
    a = 0;
}



function pokemonClickModel(pokemonQuery){
    pokemonQuery.addEventListener('click', (event)=> {let key = event.target.closest('.pokemonIndividual').getAttribute('data-key');fetch('https://pokeapi.co/api/v2/pokemon/' + key).then((requestPoke) => requestPoke.json()).then(responsePoke => {document.querySelector('.imgWindowPokemon img').src = Object.entries(responsePoke.sprites)[4][1];document.querySelector('.nomeWindowPokemon').innerHTML = responsePoke.name.replace(/\w/, c => c.toUpperCase());
            for(let i=0; i < responsePoke.types.length ;i++){
                tipos.push(responsePoke.types[i].type.name);let span = document.createElement('span');span.innerHTML = tipos[i];
                switch(tipos[i]){
                    case "grass":
                        span.style.background = 'linear-gradient(to right, #20ba20, #21d121)'
                    break;
                    case "fire":
                        span.style.background = 'linear-gradient(to right, #e33719,#e86a20)'
                    break;
                    case "poison":
                        span.style.background = 'linear-gradient(to right, #6510b5, #8217e8)'
                    break;
                    case "water":
                        span.style.background = 'linear-gradient(to right, #2951d6, #3f6bfc)'
                    break;
                    case "bug":
                        span.style.background = 'linear-gradient(to right, #d99e30, #e6aa3c)'
                    break;
                    case "dark":
                        span.style.background = 'linear-gradient(to right, #1c1c1b, #3d3d3b)'
                    break;
                    case "dragon":
                        span.style.background = 'linear-gradient(to right, #0d52db, #1463ff)'
                    break;
                    case "electric":
                        span.style.background = 'linear-gradient(to right, #ded90b, #e3df27)'
                    break;
                    case "fairy":
                        span.style.background = 'linear-gradient(to right, #e67cd7, #f090e2)'
                    break;
                    case "fighting":
                        span.style.background = 'linear-gradient(to right, #6b4f16, #806021)'
                    break;
                    case "flying":
                        span.style.background = 'linear-gradient(to right, #0b65b3, #1d85de)'
                    break;
                    case "ghost":
                        span.style.background = 'linear-gradient(to right, #652eb3, #7339c4)'
                    break;
                    case "ground":
                        span.style.background = 'linear-gradient(to right, #bf8a4d, #d49a57)'
                    break;
                    case "ice":
                        span.style.background = 'linear-gradient(to right, #17bdb8, #19d1cc)'
                    break;
                    case "normal":
                        span.style.background = 'linear-gradient(to right, #9e9e9e, #ababab)'
                    break;
                    case "psychic":
                        span.style.background = 'linear-gradient(to right, #cf0c6a, #e60e76)'
                    break;
                    case "rock":
                        span.style.background = 'linear-gradient(to right, #b38000, #bf8900)'
                    break;
                    case "steel":
                        span.style.background = 'linear-gradient(to right, #7e8b8c, #92a0a1)'
                    break;
                }
                document.querySelector('.atributosWindowPokemon').append(span);
            }

            switch(responsePoke.types[0].type.name){
                case "grass":
                    backgroundPokemon.style.background = 'urL("img/backGrass.jpg") no-repeat center'
                break;
                case "fire":
                    backgroundPokemon.style.background = 'urL("img/backFire.jpg") no-repeat center'
                break;
                case "poison":
                    backgroundPokemon.style.background = 'urL("img/backPoison.jpg") no-repeat center'
                break;
                case "water":
                    backgroundPokemon.style.background = 'urL("img/backWater.jpg") no-repeat center'
                break;
                case "bug":
                    backgroundPokemon.style.background = 'urL("img/backBug.jpg") no-repeat center'
                break;
                case "dark":
                    backgroundPokemon.style.background = 'urL("img/backDark.jpg") no-repeat center'
                break;
                case "dragon":
                    backgroundPokemon.style.background = 'urL("img/backDragon.jpg") no-repeat center'
                break;
                case "electric":
                    backgroundPokemon.style.background = 'urL("img/backElectric.jpg") no-repeat center'
                break;
                case "fairy":
                    backgroundPokemon.style.background = 'urL("img/backFairy.jpg") no-repeat center'
                break;
                case "fighting":
                    backgroundPokemon.style.background = 'urL("img/backFighting.jpg") no-repeat center'
                break;
                case "flying":
                    backgroundPokemon.style.background = 'urL("img/backFlying.jpg") no-repeat center'
                break;
                case "ghost":
                    backgroundPokemon.style.background = 'urL("img/backGhost.jpg") no-repeat center'
                break;
                case "ground":
                    backgroundPokemon.style.background = 'urL("img/backGround.jpg") no-repeat center'
                break;
                case "ice":
                    backgroundPokemon.style.background = 'urL("img/backIce.jpg") no-repeat center'
                break;
                case "normal":
                    backgroundPokemon.style.background = 'urL("img/backNormal.jpg") no-repeat center'
                break;
                case "psychic":
                    backgroundPokemon.style.background = 'urL("img/backPichic.jpg") no-repeat center'
                break;
                case "rock":
                    backgroundPokemon.style.background = 'urL("img/backRock.jpg") no-repeat center'
                break;
                case "steel":
                    backgroundPokemon.style.background = 'urL("img/backSteel.jpg") no-repeat center'
                break;
            }
            
            if(responsePoke.height.toString().length < 2){document.querySelector('.pesoAlturaPokemon span:nth-child(1)').innerHTML = 'Altura: 0,' + responsePoke.height + ' m';}
            else{document.querySelector('.pesoAlturaPokemon span:nth-child(1)').innerHTML = 'Altura: ' + responsePoke.height.toString().substring(0,responsePoke.height.toString().length -1 ) + ',' + responsePoke.height % 10 + ' m';}

            if(responsePoke.weight.toString().length < 2){document.querySelector('.pesoAlturaPokemon span:nth-child(2)').innerHTML = 'Peso: 0,' + responsePoke.weight + ' kg';}
            else if(responsePoke.weight.toString().length < 3){document.querySelector('.pesoAlturaPokemon span:nth-child(2)').innerHTML = 'Peso: ' + responsePoke.weight.toString().replace(responsePoke.weight.toString().slice(-1),',')+ responsePoke.weight.toString().substr(-1) + ' kg';
            }else{document.querySelector('.pesoAlturaPokemon span:nth-child(2)').innerHTML = 'Peso: ' + responsePoke.weight.toString().substring(0, responsePoke.weight.toString().length - 1) + ',' + responsePoke.weight % 10  + ' kg';}
            document.querySelector('.hpPokemonNum').innerHTML = responsePoke.stats[0].base_stat ;document.querySelector('.atkPokemonNum').innerHTML = responsePoke.stats[1].base_stat;document.querySelector('.defPokemonNum').innerHTML = responsePoke.stats[2].base_stat;document.querySelector('.spAtkPokemonNum').innerHTML = responsePoke.stats[3].base_stat;document.querySelector('.spDefPokemonNum').innerHTML = responsePoke.stats[4].base_stat;document.querySelector('.speedPokemonNum').innerHTML = responsePoke.stats[5].base_stat;

            if(window.innerWidth <= 900){
                setTimeout(() => {
                    document.querySelector('.progressBar1').style.width = responsePoke.stats[0].base_stat + 'px';document.querySelector('.progressBar2').style.width = responsePoke.stats[1].base_stat + 'px';document.querySelector('.progressBar3').style.width = responsePoke.stats[2].base_stat + 'px';document.querySelector('.progressBar4').style.width = responsePoke.stats[3].base_stat + 'px';document.querySelector('.progressBar5').style.width = responsePoke.stats[4].base_stat + 'px';document.querySelector('.progressBar6').style.width = responsePoke.stats[5].base_stat + 'px';
                },600)
                document.querySelector('.pokemonWindow').style.opacity = 0;document.querySelector('.pokemonWindow').style.display = 'flex';
                setTimeout(()=> {document.querySelector('.pokemonWindow').style.opacity = 1;},200)
            }else{
                setTimeout(() => {document.querySelector('.progressBar1').style.width = responsePoke.stats[0].base_stat + 'px';document.querySelector('.progressBar2').style.width = responsePoke.stats[1].base_stat + 'px';document.querySelector('.progressBar3').style.width = responsePoke.stats[2].base_stat + 'px';document.querySelector('.progressBar4').style.width = responsePoke.stats[3].base_stat + 'px';document.querySelector('.progressBar5').style.width = responsePoke.stats[4].base_stat + 'px';document.querySelector('.progressBar6').style.width = responsePoke.stats[5].base_stat + 'px';},1100)
                document.querySelector('.pokemonWindow').style.opacity = 0;document.querySelector('.pokemonWindow').style.display = 'flex';
                setTimeout(()=> {document.querySelector('.pokemonWindow').style.opacity = 1;
                    setTimeout(() => {document.querySelector('.btnCloseWindow').classList.add('ativoBtnPokemon');document.querySelector('.dadosPokemon').classList.add('ativoDadosPokemon');document.querySelector('.imgWindowPokemon').classList.add('ativoImgWindow');},200)},200)
            }
            
        })
    })
}

function clickFora(event){
    if(event.target === this){closeWindow();}
}

function closeWindow(){
    if(window.innerWidth <= 900){
        document.querySelector('.pokemonWindow').style.opacity = 0;
        setTimeout(()=> {document.querySelectorAll('.atributosWindowPokemon span').forEach(item => {document.querySelector('.atributosWindowPokemon').removeChild(item);});document.querySelector('.pokemonWindow').style.display = 'none';},200)
    }else{
        document.querySelector('.btnCloseWindow').classList.remove('ativoBtnPokemon');document.querySelector('.dadosPokemon').classList.remove('ativoDadosPokemon');document.querySelector('.imgWindowPokemon').classList.remove('ativoImgWindow');
        setTimeout(() => {document.querySelector('.pokemonWindow').style.opacity = 0;},1000)
        setTimeout(()=> {document.querySelectorAll('.atributosWindowPokemon span').forEach(item => {document.querySelector('.atributosWindowPokemon').removeChild(item);})
            document.querySelector('.pokemonWindow').style.display = 'none';
        },1400)
    }
    var index = tipos.length;
    tipos.splice(0,index);
}


btnMostrar.addEventListener('click', activePokemon);
inputBtn.addEventListener('click',function(){ 
    if(inputProcurar.value.length > 0){
        btnMostrar.style.display = 'none'; activePokemonInput();
    }else{
        const pokemonList = document.querySelectorAll('.listaPokemon .pokemonIndividual');
        console.log(pokemonList.length);
        if(pokemonList.length > 1){
            alert('Na home é preciso digitar o nome do pokemon.');
        }else{
            pokemonList.forEach(item => {
                document.querySelector('.listaPokemon').removeChild(item);
            })
            btnMostrar.style.display = 'block';
            activePokemon();
        }
    }
})
document.querySelector('.btnCloseWindow').addEventListener('click', closeWindow)
document.querySelector('.pokemonWindow').addEventListener('click', clickFora)



























/*


async function activePokemonClick(){
    const request = await fetch('https://pokeapi.co/api/v2/pokemon/' + inputProcurar.value)
    const response = await request.json();

    response.forms.map((item, index) => {
        let pokemonIndividual = document.querySelector('.models .pokemonIndividual').cloneNode(true);

        pokemonIndividual.querySelector('.imgPokemon').src = Object.entries(response.sprites)[4][1];
        pokemonIndividual.querySelector('.nomePokemon').innerHTML = item.name.replace(/\w/, c => c.toUpperCase());
        pokemonIndividual.querySelector('.tipoPokemon').innerHTML = response.types[0].type.name

        document.querySelector('.listaPokemon').replaceChild(pokemonIndividual)
        
    })
    
}

inputBtn.addEventListener('click',activePokemon)

*/