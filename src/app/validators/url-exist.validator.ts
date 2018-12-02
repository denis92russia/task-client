import { AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

import { HttpRequesterService } from '../services/http-requester.service';


export function urlExistValidator(checker: HttpRequesterService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return timer(2000).pipe(switchMap(() => {
            return checker.checkUrl(control.value).pipe(map((result: any) => {
                if (result.success) {
                    return null
                }
                return { notExist: true };
            }))
        }))
    }
}