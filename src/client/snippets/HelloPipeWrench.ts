


import { getPlayer, IsoPlayer } from '@asledgehammer/pipewrench'


let player: IsoPlayer = getPlayer()

export const sayHello = () => {
    player.setHaloNote("Hello Zomboid!", 500.00);
}


