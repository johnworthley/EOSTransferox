import { BaseActionWatcher } from 'demux'
import { NodeosActionReader } from 'demux-eos'
import ActionHandler from './ActionHandler'
import updaters from './updaters'
import effects from './effects'

const actionHandler = new ActionHandler(updaters, effects, "mongodb://127.0.0.1/blog_platform")

const actionReader = new NodeosActionReader(
  "https://api.eosnewyork.io",
  0
)

const actionWatcher = new BaseActionWatcher(
  actionReader,
  actionHandler,
  250 // Poll at twice the block interval for less latency
)

export default actionWatcher

/*
State updated:
 {
  "volumeBySymbol": {
    "EOS": 127160.70490000499
  },
  "totalTransfers": 5834,
  "indexState": {
    "blockNumber": 49324528,
    "blockHash": "02f0a1f0ab939d34ceb0f6e536889dd14993f40ad2f666f8e7253cc31b70b5f3"
  }
}
*/