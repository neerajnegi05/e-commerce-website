function Shallow_component(){
    var a = [1,2,3];
    var b = [1,2,3];
    var c = a;
    var ab_eq = (a === b);
var ac_eq = (a ===c);
console.log(ab_eq);
console.log(ac_eq);
    return (
        <div>

        </div>
    )
}
export  default Shallow_component