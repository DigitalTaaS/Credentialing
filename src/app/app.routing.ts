import { LoginComponent } from "./login/login.component";
import { QueueComponent } from "./review/queue/queue.component";
import { AuthGuardService } from "./login/auth-guard.service";
import { CertificationComponent } from "./review/certification/certification.component";

export const routes = [
    {path:'',component:LoginComponent},
    {path:'queue', component:QueueComponent, canActivate: [AuthGuardService]},
    {path:'cert', component:CertificationComponent, canActivate: [AuthGuardService]},
    // otherwise redirect to home
   { path: '**', redirectTo: '' }
   ]
 