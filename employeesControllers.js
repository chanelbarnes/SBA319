const Employees = require("./models/employee")

const fetchAllEmployees = async(req, res) => {
    const employees = await employee.find();
    res.json({employees: employees})
}

const fetchEmployee = async(req, res) => {
    const employeeId = req.params.id
    const employee = await employee.findById(employeeId)
    res.json({employee: employee})
}

const createEmployee =  async (req, res) => {
    console.log(`BODY: ${req.body}`)
    const name = req.body.name
    const title = req.body.title

    const employee = await employee.create({
        name: title,
        title: body
    })
}

const updateEmployee = async (req, res) => {
    const employeeId = req.params.id
    const {name,title} = req.body
    const employee = await employee.findByIdAndUpdate(employeeId,{
        name: name,
        title: title
    })
    const updateEmployee = await employee.findById(employeeId)
    res.json({employee: updateEmployee})
}

const deleteEmployee =  async(req, res) => {
    const employeeId = req.params.id
    await employee.deleteOne({
        id: employeeId  
    })

    res.json({success: "Record deleted"})
}

module.exports = {
    fetchAllEmployees,
    fetchEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}