


import { getPlayer, IsoPlayer } from '@asledgehammer/pipewrench'
import * as Events from '@asledgehammer/pipewrench-events'


export const sayHello = (): void => {
    let player: IsoPlayer = getPlayer()

    Events.everyOneMinute.addListener(() => {
        player.setHaloNote("Hey Bitch, What's Happenin!", 500.00)
    })
}


