const express = require('express')

const app = express()

app.set('view engine','ejs')

const data = [
{
    name: 'John',
    age: 25
},
{
    name: 'doe',
    age: 24
},
{
    name: 'Jane',
    age: 26
},
{
    name: 'John can',
    age: 26
},
{
    name: 'John doe',
    age: 23
}
]

app.get('/',(req,res)=>{
    return res.render('index',{
        users : data
    })
})

const port = 8003
app.listen(port,(err)=>{
    if(err) {
        console.log(err)
       return false
    }
    console.log(`server is running on port ${port}`)
})