import logUpdate from './blog'

export default [
  {
    actionType: "eosio.token::transfer",
    effect: logUpdate
  }
]