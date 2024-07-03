const req = new XMLHttpRequest();

req.onload = function () {
    console.log("IT LOADED!!!")
    const data = JSON.parse(this.responseText)
    console.log(data)
}
req.onerror = function () {
    console.log("ERROR!!")
    console.loh(this)
}

req.open("GET", "https://swapi.dev/api/people/1/")
req.send()