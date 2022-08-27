import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutes: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

type Action = {
  type:
    | 'INTERRUPT_CURRENT_CYCLE'
    | 'ADD_NEW_CYCLE'
    | 'MARK_CURRENT_CYCLE_AS_FINISHED'
  payload?: {
    newCycle?: Cycle
    activeCycleId?: string | null
  }
}

export function cyclesReducer(state: CyclesState, action: Action): CyclesState {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      if (action.payload?.newCycle) {
        return {
          ...state,
          cycles: [...state.cycles, action.payload?.newCycle],
          activeCycleId: action.payload?.newCycle?.id,
        }
      }
      return state
    }
    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    }
    default: {
      return state
    }
  }
}
