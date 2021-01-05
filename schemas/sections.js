import dataInput from './../components/dataInput';

 export default{
    name:'section',
    title:'Section',
    type:'object',
    fields: [ 
    
        {
        name: 'name',
        type: 'string', 
        title: 'Section name'
    },
      
    {
        name:'title',
        title:'Section title',
        type:'string',
    }, 

    {
      name:'url',
      title:'Url',
      type:'url'
  },

    {
        name:'content',
        title:'Content',
        type:'text',
        inputComponent:dataInput,
    }
      ]
} 