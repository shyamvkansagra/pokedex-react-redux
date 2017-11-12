// @flow

export type pokemonData = {
  name: string,
  type: string,
  stage: string,
  caught: string,
  species: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionType = 'SET_SEARCH_TERM';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

export type Action = ActionT<'SET_SEARCH_TERM', string>;
