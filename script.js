const agents = ["Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Reyna", "Raze", "Breach", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", "Harbor", "Gekko"];

function agentRandomizer(){
    var randomAgent = agents[Math.floor(Math.random()*agents.length)];
    return randomAgent;
};

const container = document.querySelector('#container');

const runRandomizer = document.querySelector('#randomizer');
runRandomizer.addEventListener('click', ()=>{
    console.log(agentRandomizer());   
});