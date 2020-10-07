function Cake (type,flavour,level,price,Occation) {
    this.type = type;
    this.flavour = flavour;
    this.level = level; 
    this.price = price;
    this.Occation = Occation;
    this.describe = function() {
       var description = "type is : "+this.type+"flavour is : "+ this.flavour+"lable is : "+this.level+"price is : "+this.price+"Occation is : "+this.Occation;
       return description;
    }
};

var c = new Cake('cool','chocolate',3,500,'FriendShipDay');
document.write(c.describe());