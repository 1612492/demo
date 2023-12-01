import { useReducer } from 'react';
import { Filter } from '../types';

type Action = {
  type: ActionType;
  payload: Partial<Filter>;
};

enum ActionType {
  Change,
}

function reducer(state: Filter, action: Action) {
  switch (action.type) {
    case ActionType.Change: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

function useForm(defaultFilters: Filter): [Filter, (newStates: Partial<Filter>) => void] {
  const [value, dispatch] = useReducer(reducer, defaultFilters);

  const setValue = (newStates: Partial<Filter>) =>
    dispatch({ type: ActionType.Change, payload: newStates });

  return [value, setValue];
}

export default useForm;
