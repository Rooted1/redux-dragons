import { createStore } from 'redux'
import { dragons } from './dragons'

const initialState = {
    homeDragons: dragons.filter(dragon => dragon.atWar === false),
    warDragons: dragons.filter(dragon => dragon.atWar === true)
}

const reducer = (currentState, action) => {

    switch(action.type){
        case 'SEND_TO_WAR':
            return {
                ...currentState,
                warDragons: [...currentState.warDragons, action.dragon],
                homeDragons: [...currentState.homeDragons.filter(dragon => dragon !== action.dragon) ]
            }
            break;
        case 'SEND_TO_HOME':
            return {
                ...currentState,
                homeDragons: [...currentState.homeDragons, action.dragon],
                warDragons: [...currentState.warDragons.filter(dragon => dragon !== action.dragon)]
            }
            break;
    }

    return currentState
}

export const store = createStore(reducer, initialState);

// 1. Create a Store 
//  - It should use dev tools
//  - It should have an initialState object containing homeDragons and warDragons

// Check in the dev tools to see if you can find your store

// 2. Handle Actions in  your reducer
//  - Create a switch-case statement for the action.type
//  - Handle the action SEND_TO_WAR by:
//      - filtering "action.dragon" out of homeDragons 
//      - adding "action.dragon" to of warDragons 
//  - Create another action to send the dragon back home

// Uncomment this line to make your store availible in the browser:
window.store = store  

// Then test store.dispatch from the console to see if your reducer is working