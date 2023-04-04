const valorantAgents = ["Brimstone", "Viper", "Omen", "Killjoy", "Cypher", "Sova", "Sage", "Phoenix", "Jett", "Reyna", "Raze", "Breach", "Skye", "Yoru", "Astra", "KAY/O", "Chamber", "Neon", "Fade", "Harbor", "Gekko"];

function agentRandomizer(){
    var randomAgent = valorantAgents[Math.floor(Math.random()*valorantAgents.length)];
    return randomAgent;
};

const container = document.querySelector('#container');
const agentSelector = document.querySelectorAll('.Agent');
const runRandomizer = document.querySelector('#randomizer');

const controllersSelected = document.querySelector('#selectControllers');
const controllerAgents = document.querySelectorAll('.Controllers');

const duelistsSelected = document.querySelector('#selectDuelists');
const duelistAgents = document.querySelectorAll('.Duelists');

const initiatorsSelected = document.querySelector('#selectInitiators');
const initiatorAgents = document.querySelectorAll('.Initiators');

const sentinelsSelected = document.querySelector('#selectSentinels');
const sentinelAgents = document.querySelectorAll('.Sentinels');

runRandomizer.addEventListener('click', ()=>{
    console.log(agentRandomizer());
    agentSelector.forEach((img) => {
        img.classList.add('randomizerClicked');
    })
    if(controllersSelected.clicked == true){
        controllerAgents.classList.remove('randomizerClicked')
    };
});

controllersSelected.addEventListener('click', ()=>{
    duelistAgents.forEach((duelistAgents)=>{
        duelistAgents.classList.toggle('greyOut');
    })
});
controllersSelected.addEventListener('click', ()=>{
    initiatorAgents.forEach((initiatorAgents)=>{
        initiatorAgents.classList.toggle('greyOut');
    })
});
controllersSelected.addEventListener('click', ()=>{
    sentinelAgents.forEach((sentinelAgents)=>{
        sentinelAgents.classList.toggle('greyOut');
    })
});
controllersSelected.addEventListener('click', ()=>{
    selectDuelists.classList.toggle('greyOut');
    selectInitiators.classList.toggle('greyOut');
    selectSentinels.classList.toggle('greyOut');
});

duelistsSelected.addEventListener('click', ()=>{
    controllerAgents.forEach((controllerAgents)=>{
        controllerAgents.classList.toggle('greyOut');
    })
});
duelistsSelected.addEventListener('click', ()=>{
    initiatorAgents.forEach((initiatorAgents)=>{
        initiatorAgents.classList.toggle('greyOut');
    })
});
duelistsSelected.addEventListener('click', ()=>{
    sentinelAgents.forEach((sentinelAgents)=>{
        sentinelAgents.classList.toggle('greyOut');
    })
});
duelistsSelected.addEventListener('click', ()=>{
    selectControllers.classList.toggle('greyOut');
    selectInitiators.classList.toggle('greyOut');
    selectSentinels.classList.toggle('greyOut');
});

initiatorsSelected.addEventListener('click', ()=>{
    duelistAgents.forEach((duelistAgents)=>{
        duelistAgents.classList.toggle('greyOut');
    })
});
initiatorsSelected.addEventListener('click', ()=>{
    controllerAgents.forEach((controllerAgents)=>{
        controllerAgents.classList.toggle('greyOut');
    })
});
initiatorsSelected.addEventListener('click', ()=>{
    sentinelAgents.forEach((sentinelAgents)=>{
        sentinelAgents.classList.toggle('greyOut');
    })
});
initiatorsSelected.addEventListener('click', ()=>{
    selectDuelists.classList.toggle('greyOut');
    selectControllers.classList.toggle('greyOut');
    selectSentinels.classList.toggle('greyOut');
});

sentinelsSelected.addEventListener('click', ()=>{
    duelistAgents.forEach((duelistAgents)=>{
        duelistAgents.classList.toggle('greyOut');
    })
});
sentinelsSelected.addEventListener('click', ()=>{
    initiatorAgents.forEach((initiatorAgents)=>{
        initiatorAgents.classList.toggle('greyOut');
    })
});
sentinelsSelected.addEventListener('click', ()=>{
    controllerAgents.forEach((controllerAgents)=>{
        controllerAgents.classList.toggle('greyOut');
    })
});
sentinelsSelected.addEventListener('click', ()=>{
    selectDuelists.classList.toggle('greyOut');
    selectInitiators.classList.toggle('greyOut');
    selectControllers.classList.toggle('greyOut');
});