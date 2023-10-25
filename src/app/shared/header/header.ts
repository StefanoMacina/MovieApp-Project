import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector : 'header-component',
    templateUrl : './header.html',
    styleUrls : ['./header.scss']
})
export class HeaderComponent{
    title = 'Films'


}