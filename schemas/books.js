export default{
    name:'book',
    title:'Book',
    type:'document',
    fields:[ 

        {
            name:'name',
            title:'Name',
            description:'name of this book',
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
            description:'tilte of this book',
            type:'string'
        },

        {
            name:'url',
            title:'Url',
            type:'url'
        },

        {
            name:'description',
            title:'Description',
            type:'text',
            description:'an introductory comment about this book'
        }
    ]
}