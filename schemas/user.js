// create the use schema
export default{
     name:'user',  //name of schema
    title:'User',  //title of schema
    type:'document', //obviously a document type
    fields:[
        // list of columns in the schema
        {
            name:'userName',
            title:'UserName',
            type:'string'
        },
        {
            name:'image',
            title:'Image',
            type:'string' //a url string
        }

    ]
}