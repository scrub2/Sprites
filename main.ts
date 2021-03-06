controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 100; index++) {
        if (Water_Alive > 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 8 . 8 8 . . . . 
                . 8 9 9 6 9 8 9 8 8 8 8 . . . . 
                . 8 9 6 8 9 8 9 9 9 8 . . . . . 
                . . 8 9 6 8 9 8 8 9 9 9 9 8 . . 
                . 8 9 8 6 8 9 9 8 8 8 8 8 8 . . 
                . . 9 9 6 6 8 8 9 9 9 . . . . . 
                . . 6 9 9 9 8 6 8 9 9 9 . . . . 
                . . . 6 8 9 9 6 9 8 8 8 . . . . 
                . . . 6 9 9 9 9 8 9 . . . . . . 
                . . . . 9 9 8 8 8 8 6 . . . . . 
                . . . . . 8 8 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Water_Spirit, -100, 0)
            pause(50)
        }
    }
})
let projectile: Sprite = null
let Water_Alive = 0
let Water_Spirit: Sprite = null
Water_Spirit = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . 8 6 8 8 . . . . . . . 
    . . . . . 9 9 8 . . . . . . . . 
    . . . . . 8 8 6 6 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 9 8 . . 8 8 8 . . . . . . . 
    . . 8 6 . 8 9 9 6 8 . 8 8 . . . 
    . . . . . 6 6 8 8 . . 6 6 . . . 
    . . . . . . . 9 8 8 . . . . . . 
    . . . . . 8 8 6 6 6 . . . . . . 
    . . . . . 9 9 6 8 . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 8 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Water_Spirit.setPosition(100, 60)
Water_Alive += 1
let Eagle = sprites.createProjectileFromSide(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ...........c..ddbc............
    .......bbdddc.1dfc............
    .....cbbbbbb5555bc............
    .....cccccb55555bccbb.........
    .....c...ccccccccccbbddd......
    ..........cccccccccbbbbb......
    ..........ccccdccccccbbb......
    .........bddccbbbb..ccccc.....
    ........ddbdbdddcbb..cccc.....
    ......ddbdbdbbbdbbc...........
    .....bbdbd...ddbccb...........
    .....11d....bbd...............
    ....1.1..2.111b...2...........
    ......12...1.1................
    .............1.2....2.........
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, -100, 0)
Eagle.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
let Golem = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ......................eee.........................
    ......................eeeeeeee....................
    .....................ee11dddddee..................
    ....................ee11111dddeeee................
    ....................ee11111ddddeee................
    .................ffee11111ddddddeee...............
    ...............ff1fedddddddddddeeeff..............
    ..............ff1ffeeeeedddddddeffff..............
    ..............f1fffffffeedddddeff11f..............
    ..........fff.fff111111feedddeef1fff..............
    .........ff1f...f11111fffeeeeeefffff..............
    .........f1ff...f1fffffffeefffeffff...............
    ........ff1ff...fffffffffeef1fffff................
    ........f1ff.....ffffffff.f11fff..................
    ........f1ff.......fffff..fffff...................
    ........f1ff........fff....ffff...................
    .......fffff...............fffff..................
    .......fffff.fffffff..fff...ffff..................
    ........fff.ff1111ff..f11ff.ffff..................
    ........ff..f11fffff..f1f1f.ffff..................
    ...........ff1ffffff..f1ffff.ff...................
    ...........ff1ffffff...fffff......................
    ............ffffffff...fffff......................
    ............fffffff....ffffff.....................
    ..............ffff......fffff.....................
    ..............fff...fffffffff.....................
    ...............f....f11ffffff.....................
    ...................f1fff..........................
    .................fff1ff..fff......................
    ................ff111ff.f11f......................
    ................f1ffff..f1ff......................
    ................ffffff..fff.......................
    ................ffffff.ffff.......................
    ................fffff..fff........................
    ................fffff.fff.........................
    ................fff...............................
    ....................fffff.........................
    ..................fff111f.........................
    .................f11fffff.........................
    .................fffffff..........................
    ..................fffff...........................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Player)
