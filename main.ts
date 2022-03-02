IR.IR_callbackUser(function (message) {
    if (message == 64) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
    if (message == 65) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 20)
    }
    if (message == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    }
    if (message == 6) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    }
    if (message == 9) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 8) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 11) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
basic.forever(function () {
	
})
