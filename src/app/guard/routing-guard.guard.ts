import { CanActivateFn } from '@angular/router';
import { retry } from 'rxjs';

export const routingGuardGuard: CanActivateFn = (route, state) => {
      if(sessionStorage.getItem('user') === 'admin'){
        return true;
      }
      window.location.href = '/login';
      return false
};
