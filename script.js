const valorantAgents = ["Astra", "Brimstone", "Harbor", "Omen", "Viper", "Jett", "Neon", "Phoenix", "Raze", "Reyna", "Yoru", "Breach", "Fade", "Gekko", "KAY/O", "Skye", "Sova", "Chamber", "Cypher", "Killjoy", "Sage"];
const controllerArray = valorantAgents.slice(0,5);
const duelistArray = valorantAgents.slice(5,11);
const initiatorArray = valorantAgents.slice(11,17);
const sentinelArray = valorantAgents.slice(17);

var controllerFilter = "";
var duelistFilter = "";
var initiatorFilter = "";
var sentinelFilter = "";

function agentRandomizer(){
    if(controllerFilter == true){
        var randomController = controllerArray[Math.floor(Math.random()*controllerArray.length)];
    return randomController;
    }else if(duelistFilter == true){
        var randomDuelist = duelistArray[Math.floor(Math.random()*duelistArray.length)];
    return randomDuelist;
    }else if(initiatorFilter == true){
        var randomInitiator = initiatorArray[Math.floor(Math.random()*initiatorArray.length)];
    return randomInitiator;
    }else if(sentinelFilter == true){
        var randomSentinel = sentinelArray[Math.floor(Math.random()*sentinelArray.length)];
    return randomSentinel;
    }else{
    var randomAgent = valorantAgents[Math.floor(Math.random()*valorantAgents.length)];
    return randomAgent;
    };
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
    if(controllerFilter == true){
        controllerAgents.forEach((controllerAgents)=>{
            controllerAgents.classList.add('randomizerClicked');
        })
    }else if(duelistFilter == true){
        duelistAgents.forEach((duelistAgents)=>{
            duelistAgents.classList.add('randomizerClicked');
        })
    }else if(initiatorFilter == true){
        initiatorAgents.forEach((initiatorAgents)=>{
            initiatorAgents.classList.add('randomizerClicked');
        })
    }else if(sentinelFilter == true){
        sentinelAgents.forEach((sentinelAgents)=>{
            sentinelAgents.classList.add('randomizerClicked');
        })
    }else{
        agentSelector.forEach((img) => {
            img.classList.add('randomizerClicked');
        })
    }
});

controllersSelected.addEventListener('click', ()=>{
    duelistAgents.forEach((duelistAgents)=>{
        duelistAgents.classList.toggle('greyOut');
    })
     controllerFilter = true;
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
    duelistFilter = true;
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
    initiatorFilter = true;
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
    sentinelFilter = true;
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