function tanqueCombustivel () {
    let combustivel = 0

    if (combustivel < 10) {
         while( combustivel > 10) {
            console.log("O tanque está com " + combustivel + " de combustivel")
            combustivel++
         }
         return consule.log("O tanque está cheio de combustivel!!! com incriveis " + combustivel + "L de combustivel!!!" )
    } else {
        return console,log("O tanque está cheio com " + combustivel + "!")
    }
}

tanqueCombustivel()