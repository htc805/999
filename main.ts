let 餘數 = 0
let 距離 = 500
let 步數 = 999
for (let index = 0; index <= 步數 - 1; index++) {
    餘數 = index % 7
    if (餘數 == 5 || 餘數 == 6) {
        距離 += 0.32
    } else {
        距離 += -0.55
    }
}
game.splash("剩餘距離=", Math.round(距離 * 100) / 100)
