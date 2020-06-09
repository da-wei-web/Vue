// function add(x:number, y:number):number{
//     return x + y;
// }

// function subtraction(x:number, y:number):number{
//     return x - y;
// }

// module.exports = {
//     add, subtraction
// }




class Music{
    public mc:string;
    constructor(mc:string){
        this.mc = mc;
    }

    change(music:string):void{
        console.log(music);
    }
}


export {
    Music
}
