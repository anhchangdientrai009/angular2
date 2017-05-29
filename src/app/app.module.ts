import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//App root
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar.component';
import { NotFoundComponent } from './notfound.component';

//Feature module
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

//Routing module
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,  
    CoreModule,
    HomeModule, 
    AppRoutingModule
  ],
  declarations: [     
    AppComponent,   
    NavBarComponent,    
    NotFoundComponent,
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { 

}
