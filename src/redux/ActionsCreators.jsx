import * as Actions from './ActionsTypes'

const addtask = (text) => {
    return {
        type : Actions.ADD_TASK,
        payload : text
    }
}

const changetask = (id) => {
    return {
        type : Actions.CHANGE_TASK,
        payload : id
    }
}

const deletetask = (id) => {
    return {
        type : Actions.DELETE_TASK,
        payload : id
    }
}


export {addtask, changetask, deletetask} 