import { Routes } from '@angular/router';
import { MiPerfil } from './components/mi-perfil/mi-perfil';
import { transacciones } from './models/transaccion';
import { Cuenta } from './components/cuenta/cuenta';
import { Cine } from './components/cine/cine';
import { Pagina404 } from './components/pagina404/pagina404';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';

export const routes: Routes = [
    {path: "", component: MiPerfil,  },
    {path: "inicio", component: MiPerfil,  },
    {path: "transaccion", component:Transacciones ,  },
    {path: "cuenta", component: Cuenta ,  },
    {path: "prestamos", component:Prestamos ,  },
    {path: "**", component:Pagina404 },
];
