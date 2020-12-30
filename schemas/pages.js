export default{
    name:'page',
    title:'Page',
    type:'document',
    fields:[
        {
            name:'book',
            title:'Book',
            description:'page of what book',
            type:'reference',
            to:[{type:'book'}]
        },
        {
            name:'chapter',
            title:'Chapter',
            description:'chapter of page',
            type:'reference',
            to:[{type:'chapter'}]
        },

        {
            name:'name',
            title:'Name',
            description:'name of the page',
            type:'string'

        }, 

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 100,
            },
          },

        {
            name:'title',
            title:'Title',
            description:'title of this page',
            type:'string',
            
        },
        {
            name:'description',
            title:'Description',
            description:'an introductory comment about this page',
            type:'text'
        },


        {
            name:'section',
            title:'Section',
            type:'array',
            of: [{type: 'section'}]

        }
        
    ]
}