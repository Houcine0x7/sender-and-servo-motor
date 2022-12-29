input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(0)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(180)
})
radio.setGroup(1)
