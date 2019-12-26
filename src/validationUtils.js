export function validateField(self, fieldName, value){
    let emsg = [];
    let checkNameRegex;
    const {validations} = self.state.formfields[fieldName]        
    if(validations.isName){
        checkNameRegex = /^[a-zA-Z ]*$/
        let msg = checkNameRegex.test(value)? null:'Name should only contain alfa....';
        if(msg){
            emsg.push(msg) 
        }
    }
    if(validations.min){        
        let msg = value.length>=validations.min? null:`Min ${validations.min}.....`;
        if(msg){
            emsg.push(msg) 
        }
    }
    if(validations.isNumeric){        
        checkNameRegex = /^[0-9]*$/
        let msg = checkNameRegex.test(value)? null:'Age should only contain digits....';        
        if(msg){
            emsg.push(msg) 
        }
    }
    return emsg.join(" ; ");
}

export function isFormValid(prevState){
    let isValid = true;
    let {formfields} = prevState;
    for (const key in formfields) {
        const field = formfields[key];
        isValid = isValid && !field.error
    }
    return isValid;
}
