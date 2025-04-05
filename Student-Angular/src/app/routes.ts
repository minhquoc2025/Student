import { Routes } from '@angular/router';
import { BobComponent } from './Page/bob/bob.component';
import { StudentComponent } from './Page/student/student.component';
import { classComponent } from './Page/class/class.component';

const routeConfig: Routes = [
    {
        path:'',
        component: StudentComponent,
        title: 'Home'
    },
    {
        path:'bob',
        component: BobComponent,
        title: 'Bob page'
    },
    {
        path:'class',
        component: classComponent,
        title: 'Class page'
    },
];
export default routeConfig;