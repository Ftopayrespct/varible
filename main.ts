input.onButtonPressed(Button.A, function () {
    basic.showNumber(Counter,50)
Counter += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Counter,50)
Counter = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Counter)
    Counter += -1
})
let Counter = 0
basic.showNumber(Counter,50)
Counter = 0
basic.forever(function () {
	
})
