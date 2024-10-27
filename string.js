
//string Methodes Part1//
const a = "  rahul  "
const b = "   vinesh"
const c = "vishnu   "
const d = "karthik"
const e = "mohan"
console.log(d.endsWith("ik"))
console.log(d.startsWith("ik"))
console.log(a.toLowerCase())
console.log(a.toUpperCase())
console.log(e.charAt(1))
console.log(e.indexOf("n"))
console.log(e.lastIndexOf("n"))
console.log(a.trim())
console.log(b.trimStart())
console.log(c.trimEnd())


//String Method Part2//

//Concate method//
z = "Rahul";
x = "boda";
z + " " + x
console.log(z.concat(" ", x))
console.log(z + " " + x)
j = "abcd"
f = "ABCD"
console.log(j.localeCompare(f))
k = "banana"
v = "apple"
console.log(k.localeCompare(v))
n = "APPLE"
m = "APPLE"
console.log(n.localeCompare(m))

//slice method//
var string1 = "my self Rahul"
console.log(string1.slice(8))
console.log(string1.slice(0, 7))
console.log(string1.slice(8, -1))
console.log(string1.slice(-4, -1))
console.log(string1.slice(-6, -11))// it will not give answer//it canot read backview//

//split method//
var string2 = "id=12&class=10"
var s3 = string2.split("=")
 console.log(s3)
var s4 = s3.join(" ")
 console.log(s4)
var s5 = s4.split("&")
console.log(s5)
var s6 = s5.join(" ")
console.log(s6)
var string2 = "im=rahul-here..any one-intrest=to -dance"
var move = string2.split("=")
 console.log(move)

//replace method//
var string3 = "lazy"
console.log(string3.replace("z", "g"))
//repat method//

//valueof method//
let str = new String("Hello, World!");  // String object
console.log(str.valueOf());             // Output: "Hello, World!"
console.log(typeof str.valueOf());      // Output: "string"

// Comparing valueOf with the original string
let primitiveStr = "Hello, World!";     // Primitive string
console.log(str.valueOf() === primitiveStr);  // Output: true