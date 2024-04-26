// the ungreggening
GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
})

ServerEvents.recipes(event =>{
    event.remove({ mod: 'gtceu' })
})