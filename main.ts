enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const other = SpriteKind.create()
    export const sea = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.wawawawaa.play()
    info.changeScoreBy(-2)
    otherSprite.destroy()
})
let anim3: animation.Animation = null
let 水蛇: Sprite = null
let anim: animation.Animation = null
let 小丑魚: Sprite = null
let 鯊魚 = sprites.create(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
. . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
. . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
. . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
. . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
. f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
. . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
. . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
. . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
. . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(鯊魚)
info.setScore(0)
鯊魚.setFlag(SpriteFlag.StayInScreen, true)
scene.setBackgroundColor(8)
info.startCountdown(30)
game.onUpdateInterval(Math.randomRange(1000, 2000), function () {
    小丑魚 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . . . 
. . . c 4 d 4 4 4 4 4 1 c . c c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
. c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
. f 4 4 4 4 1 c 4 f 4 d f f f f 
. . f f 4 d 4 4 f f 4 c f c . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`, SpriteKind.Food)
    anim = animation.createAnimation(ActionKind.Walking, 50)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . . . 
. . . c 4 d 4 4 4 4 4 1 c . c c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
. c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
. f 4 4 4 4 1 c 4 f 4 d f f f f 
. . f f 4 d 4 4 f f 4 c f c . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . c c c c c . . . . 
. . . . . . c d d d d d c . . . 
. . . . . . c c c c c d c . . . 
. . . . . c 4 4 4 4 d c c . . . 
. . . . c d 4 4 4 4 4 1 c . . . 
. . . c 4 4 1 4 4 4 4 4 1 c . . 
. . c 4 4 4 4 1 4 4 4 4 1 c c c 
. c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
. c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
. f 4 4 4 4 1 4 4 4 4 c b c f f 
. . f f f d 4 4 4 4 c d d c . . 
. . . . . f f f f f c c c . . . 
. . . . . . . . . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . c c c c . . . . 
. . . . . . c c d d d d c . . . 
. . . . . c c c c c c d c . . . 
. . . . c c 4 4 4 4 d c c . c c 
. . . c 4 d 4 4 4 4 4 1 c c 4 c 
. . c 4 4 4 1 4 4 4 4 d 1 c 4 f 
. c 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f 
f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f 
f 4 4 4 4 4 1 4 4 f 4 4 d f f f 
. f 4 4 4 4 1 c c 4 4 d f f . . 
. . f f 4 d 4 4 4 4 4 c f . . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . c c d d d d c . . 
. . . . . c c c c c c d d c . . 
. . . c c c 4 4 4 4 d c c c c c 
. . c 4 4 1 4 4 4 4 4 1 c c 4 f 
. c 4 4 4 4 1 4 4 4 4 d 1 f 4 f 
f 4 4 4 4 4 1 4 4 4 4 4 1 f 4 f 
f 4 4 f 4 4 1 4 c f 4 4 1 4 4 f 
f 4 4 4 4 4 1 c 4 f 4 4 1 f f f 
. f 4 4 4 4 1 4 4 f 4 4 d f . . 
. . f 4 4 1 4 c c 4 4 d f . . . 
. . . f d 4 4 4 4 4 4 c f . . . 
. . . . f f 4 4 4 4 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`)
    animation.attachAnimation(小丑魚, anim)
    animation.setAction(小丑魚, ActionKind.Walking)
    小丑魚.setFlag(SpriteFlag.AutoDestroy, true)
    小丑魚.setVelocity(Math.randomRange(-150, 50), Math.randomRange(-20, 30))
    小丑魚.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    if (小丑魚.vx >= 0) {
        animation.setAction(小丑魚, ActionKind.Idle)
        小丑魚.image.flipX()
    }
})
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        鯊魚.setImage(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
. . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
. . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
. . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
. . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
. f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
. . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
. . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
. . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
. . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`)
        鯊魚.image.flipX()
    } else if (controller.left.isPressed()) {
        鯊魚.setImage(img`
. . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
. . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
. . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
. . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
. . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
. f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
. . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
. . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
. . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
. . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
. . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
`)
    }
    if (info.score() >= 10) {
        game.over(true)
    }
})
game.onUpdateInterval(1000, function () {
    if (info.score() > 5) {
        水蛇 = sprites.createProjectileFromSide(img`
. . . . 2 . . . . . 2 . . . . 2 2 . 2 . 
. . c c 8 5 c c . . . 2 . . . . . d . . 
c . b b 8 b b c . . . . 2 . . b b d d . 
b 8 5 c . . 8 8 . . . . . b b c b 8 f b 
. 8 c c . . b 5 c 8 5 . 8 5 c c 8 5 b c 
. . 2 . . . b b b 8 c b b 8 c . . c c . 
. 2 . . . . . . 2 c b b c c . . . . d d 
. . . . . . 2 2 . c c c c . . . . . . . 
`, 0, 0)
        水蛇.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
        anim3 = animation.createAnimation(ActionKind.Walking, 50)
        anim3.addAnimationFrame(img`
. . . . 2 . . . . . . . . . . . 2 . . . 
. . c c 8 5 c c . . . . . . . . . d . . 
c . b b 8 b b c . . . . 2 . . b b d d . 
b 8 5 c . . 8 8 . . . . . b b c b 8 f b 
. 8 c c . . b 5 c 8 5 . 8 5 c c 8 5 b c 
. . 2 . . . b b b 8 c b b 8 c . . c c . 
. . . . . . . . 2 c b b c c . . . . d d 
. . . . . . . . . c c c c . . . . . . . 
`)
        anim3.addAnimationFrame(img`
. . . 2 2 . . . . . . . . . . 2 2 . . . 
. . c c 8 5 c c . . 2 2 . . . . . d 2 2 
c . b b 8 b b c . . . . 2 . . b b d d . 
b 8 5 c . . 8 8 . . . . . b b c b 8 f b 
. 8 c c . . b 5 c 8 5 . 8 5 c c 8 5 b c 
. . 2 2 . . b b b 8 c b b 8 c . . c c . 
. 2 . . . . . . 2 c b b c c . 2 2 . d d 
. . . . . . . 2 . c c c c . . . . . . . 
`)
        anim3.addAnimationFrame(img`
. . 2 2 2 . . . . . 2 . . . 2 2 2 . 2 . 
. . c c 8 5 c c . . 2 2 . . . . . d 2 2 
c . b b 8 b b c . . . 2 2 . . b b d d . 
b 8 5 c . . 8 8 . . . . . b b c b 8 f b 
. 8 c c . . b 5 c 8 5 . 8 5 c c 8 5 b c 
. . 2 . . . b b b 8 c b b 8 c . . c c . 
. 2 2 . . . . 2 2 c b b c c . . 2 . d d 
2 2 . . . . 2 2 . c c c c . 2 2 2 . . . 
`)
        animation.attachAnimation(水蛇, anim3)
        animation.setAction(水蛇, ActionKind.Walking)
        水蛇.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
