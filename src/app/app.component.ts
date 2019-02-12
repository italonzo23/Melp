import {Pipe, PipeTransform, Component } from '@angular/core';
// tslint:disable-next-line:use-pipe-transform-interface
@Pipe( {
  name: 'orderBy'
  } )

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Melp';
}
