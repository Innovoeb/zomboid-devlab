/**
 * @noSelfInFile
 *
 * NOTE: Use this at the top of your TypeScript files. This prevents functions & methods
 *       from prepending a 'self' reference, which is usually not necessary and complicates
 *       rendered Lua code.
 */

// PipeWrench API.
import * as Events from '@asledgehammer/pipewrench-events'
import { sayHello } from './HelloPipeWrench'

let gameIsActive: boolean = false

// Example reference API.
// import { 
//  //addRedSquare, 
//   //alertObjectsAdded, 
//   greetPlayer 
// } from '../example/api/ExampleAPI';


// Add all initialization code here
// will run into errors if attemping to interact w/ player before onGameStart
Events.onGameStart.addListener(() => {
  gameIsActive = true
  print(`----- GAME IS ACTIVE! -----`)
  sayHello()
})




