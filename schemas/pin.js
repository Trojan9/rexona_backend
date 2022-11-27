// this pin schema holds info about all images posted

export default{
    name:"pin",
    title:"Pin",
    type:"document",
    fields:[
        {
            name:"title",
            tiTle:"Title",
            type:"string"
        },
        {
            name:"about",
            tiTle:"About",
            type:"string"
        },
        {
            name:"category",
            tiTle:"Category",
            type:"string"
        },
        {
            name:"destination",
            tiTle:"Destination",
            type:"url"
        },
        {
            name:"image",
            tiTle:"Image",
            type:"image",
            options:{
                hotspot:true
            }
        },
        {
            name:"userId",
            tiTle:"UserID",
            type:"string"
        },
        {
            name:"postedBy",
            tiTle:"PostedBy",
            type:"postedBy"
        },
        
        {
            name:"save",
            tiTle:"Save",
            type:"array",
            of:[{type:"save"}]  //like one-to-many mapping in typeORM

        },
        {
            name:"comments",
            tiTle:"Comments",
            type:"array",
            of:[{type:"comment"}]  //like one-to-many mapping in typeORM

        },]
}