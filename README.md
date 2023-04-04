# Agent_Randomizer
Valorant agent randomizer changelog

Apr 04/23: Added inputs type = image each with a picture of one of the four valorant roles. Each input acts as a filter. When one filter is clicked, it will lower the opacity of all agents not in that role. All agents are given a class corresponding with their role.

Expanded the filters to the agent randomizer. Sliced the array containing all agents into four new arrays grouping agents based on their roles. If a filter is selected, the agents with the corresponding role will be randomized and one will be selected. If no filter is selected, all agents will be randomized. 

Apr 01/23: Created array with all valorant agents.

Used math.floor(math.random) to randomly select one agent when "Choose My Agent!" button is clicked.

Added img of all agents currently available in the game.