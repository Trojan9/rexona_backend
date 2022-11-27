export default{
    name:"postedBy",
    title:"PostedBy",
    type:"reference",
    to:[{type:'user'}] //its like one-to-one mapping in typeORM
}