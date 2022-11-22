import * as Actions from './ActionsTypes'

const addtask = (text) => {
    return {
        type : Actions.ADD_TASK,
        payload : text
    }
}


export {addtask} 