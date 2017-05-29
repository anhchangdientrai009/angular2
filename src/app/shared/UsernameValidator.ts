import { FormControl } from '@angular/forms';

export class UsernameValidator {
    static shouldBeUnique(formControl: FormControl) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(formControl.value == "hoang") {
                    return resolve({ shouldBeUnique: true });
                }                    

                return resolve(null);                
            }, 1000);
        });
    }

    static cannotContainSpace (formControl: FormControl) {
        if(formControl.value.indexOf(' ') > 0) 
            return { cannotContainSpace: true }
        
        return null;
    }
}