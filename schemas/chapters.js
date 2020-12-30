export default{
    name:'chapter',
    title:'Chapter',
    type:'document',
    fields:[ 

        {
          name:'book',
          title:'Book',
          type:'reference',
          to:[{type:'book'}],
          description:'a chapter of the book'
        }, 


        {
           name:'name',
           title:'Name',
           type:'string',
           description:'name of this chapter'
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
          description:'title of this chapter',
          type:'string'
        },

        {
          name:'description',
          title:'Description',
          description:'an introductory comment about this page',
          type:'text'
        }
        
    ]
}