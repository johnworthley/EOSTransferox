import updaters from './blog'

export default [
  {
    actionType: "eosio.token::transfer",
    updater: updaters
  }
]