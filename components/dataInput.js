import React from 'react';
import PatchEvent, {set, unset} from 'part:@sanity/form-builder/patch-event';


function createPatchFrom(value){
    PatchEvent.from(value === '' ? unset() : set(value))
}




export default function dataInput({type, value, onChange, inputComponent}){ 
    const ref = React.forwardRef
    return(
        <div>
            <h4>{type.title}</h4> 
            <input type={type.name} 
            value={value} 
            ref={inputComponent}
            //class="DefaultTextInput_input_3BjJK text-input_textInput_2rEOM text-input_root_2Mz4y"
            onChange={event =>onChange(createPatchFrom(event.target.value))}
            />
        </div>
    )

}

dataInput.focus = function(){
    this._inputElement.focus();
}