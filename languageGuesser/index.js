const franc = require("franc")
const langs = require("langs")
const colors = require("colors")
const inp = process.argv[2]
const test = franc(inp)
if (test === 'und'){
    console.log("Sorry language cannot be identified. PLease try again with more sample text".red);
}else{
const ans =langs.where("3", test);
console.log(ans.name)}
