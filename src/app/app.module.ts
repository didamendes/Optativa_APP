import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

// IMPORT PAGES HERE
import {UsuarioPagePage} from '../pages/usuario-page/usuario-page';
import {UsuarioFormPage} from '../pages/usuario-form/usuario-form';
import {UsuarioDetailPage} from '../pages/usuario-detail/usuario-detail';
import {ProdutoPagePage} from '../pages/produto-page/produto-page';
import {ProdutoFormPage} from '../pages/produto-form/produto-form';
import {ProdutoDetailPage} from '../pages/produto-detail/produto-detail';

// import providers here
import {UsuarioProvider} from '../providers/usuario-provider';
import {ProdutoProvider} from '../providers/produto-provider';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    UsuarioPagePage,
    UsuarioFormPage,
    UsuarioDetailPage,
    ProdutoPagePage,
    ProdutoFormPage,
    ProdutoDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    UsuarioPagePage,
    UsuarioFormPage,
    UsuarioDetailPage,
    ProdutoPagePage,
    ProdutoFormPage,
    ProdutoDetailPage
  ],
  providers: [UsuarioProvider, ProdutoProvider]
})
export class AppModule {}
