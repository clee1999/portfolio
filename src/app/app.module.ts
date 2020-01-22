import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";

import { TypingAnimationModule } from "../../node_modules/angular-typing-animation/typing-animation.module";
import { AboutmeComponent } from "./main/aboutme/aboutme.component";
import { SkillsComponent } from "./main/skills/skills.component";
import { ParcoursComponent } from "./main/parcours/parcours.component";
import { ProjetsComponent } from "./main/projets/projets.component";
import { ContactsComponent } from "./main/contacts/contacts.component";

import { NgwWowModule } from "ngx-wow";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    AboutmeComponent,
    SkillsComponent,
    ParcoursComponent,
    ProjetsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    TypingAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
