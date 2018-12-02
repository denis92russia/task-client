import { AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { HttpRequesterService } from '../services/http-requester.service';

export function urlExistValidator(checker:HttpRequesterService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        console.log('444')
        return of(null);
     }
}