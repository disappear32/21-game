import Button from './Button.js'

export default class StakeButton extends Button {
    constructor(scene, x, y, key) {
        const width = 550
        const height = 100
        const text = `💰 Your value: ${scene.stake} FUN`
        const font = {
            fontFamily: 'Inter',
            fontSize: 36,
            color: '#FFFFFF',
            align: 'center'
        }

        const callback = function () {
        }

        super(scene, x, y, width, height, key, text, font, callback)
    }

    updateText(sum, scene) {
        this.list[1].setText(`💰 Your value: ${sum} FUN`)

        const timeline = scene.tweens.timeline({
            onComplete: () => {
                timeline.destroy()
            }
        })

        timeline.add({
            targets: this.list[1],
            scale: 1.1,
            duration: 40
        })

        timeline.add({
            targets: this.list[1],
            scale: 1,
            duration: 80
        })

        timeline.play()

        return this
    }
}