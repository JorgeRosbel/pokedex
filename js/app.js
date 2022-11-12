const cardContent = document.querySelector(".pokemon");
const card = document.querySelector(".card");


const fetchData = async (id_pokemon) => {
    console.log(id_pokemon);
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id_pokemon}`)
    const data = await res.json()

    var img = data.sprites.other.dream_world.front_default;
    var name = data.forms[0].name;
    var skill_1 = data.abilities[0].ability.name;
    var skill_2 = data.abilities[1].ability.name;
    var base_experience = data.base_experience;
    var stats = data.stats[0].base_stat

    let image = document.querySelector("img").setAttribute('src', img);
    let namePoke = document.querySelector("h1").innerHTML = name;
    let skill_1_ = document.querySelector(".skill-1").innerHTML = skill_1;
    let skill_2_ = document.querySelector(".skill-2").innerHTML = skill_2;
    let exp = document.querySelector(".exp").innerHTML = base_experience;
    let hp = document.querySelector(".hp").innerHTML = stats ;

}




card.addEventListener("submit", (e)=>{
    e.preventDefault();
    let id_pokemon = document.querySelector(".id_pokemon").value.toLowerCase();
    fetchData(id_pokemon);
})








