


import { getPlayer, IsoPlayer } from '@asledgehammer/pipewrench'


let player: IsoPlayer = getPlayer()

export const sayHello = () => {
    player.setHaloNote("Excited to Work With Pipewrench!", 500.00);
}


