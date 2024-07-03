const name = {
    firstName: "Nemil",
    lastName: "Shah",
    fullName : function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}