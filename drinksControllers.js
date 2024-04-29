const drinks = require("./models/drink")

const fetchAllDrinks = async(req, res) => {
    const drinks = await drinks.find();
    res.json({drinks: drinks})
}

const fetchDrink = async(req, res) => {
    const drinkId = req.params.id
    const drink = await drink.findById(drinkId)
    res.json({drink: drink})
}

const createDrink =  async (req, res) => {
    console.log(`BODY: ${req.body}`)
    const name = req.body.name
    const content = req.body.content

    const drink = await drink.create({
        name: title,
        content: content
    })
}

const updateDrink = async (req, res) => {
    const drinkId = req.params.id
    const {name,content} = req.body
    const drink = await drink.findByIdAndUpdate(drinkId,{
        name: name,
        content: content
    })
    const updateDrink = await drink.findById(drinkId)
    res.json({drink: updateDrink})
}

const deleteDrink =  async(req, res) => {
    const drinkId = req.params.id
    await drink.deleteOne({
        id: drinkId  
    })

    res.json({success: "Record deleted"})
}

module.exports = {
    fetchAllDrinks,
    fetchDrink,
    createDrink,
    updateDrink,
    deleteDrink
}