import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewContainerRef } from '@angular/core';

import { loadRemoteModule } from '@angular-architects/module-federation'
import { Store } from '@ngrx/store';

const MFE_CONFIGURATION = {
  'header': {
    remoteEntry: 'http://localhost:3003/remoteEntry.js',
    remoteName: 'header',
    exposedModule: './HeaderComponent'
  },
  'footer': {
    remoteEntry: 'http://localhost:3004/remoteEntry.js',
    remoteName: 'footer',
    exposedModule: './FooterComponent'
  }
}
@Component({
  selector: 'app-mfe-wrapper',
  templateUrl: './mfe-wrapper.component.html',
  styleUrls: ['./mfe-wrapper.component.css']
})
export class MfeWrapperComponent implements OnInit {

  @Input() componentName: 'header' | 'footer' = 'header';
  headerRef: ComponentRef<any>;

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _viewContainerRef: ViewContainerRef,
    private store: Store
  ) {

    this.store.select(store => store).subscribe((state: any) => {
      if (this.headerRef) {
        this.headerRef.instance.todosCount = state.todos?.todos?.length;
        this.headerRef.instance.habitsCount = state.tracker?.habits?.length;
      }
    })

  }

  async ngOnInit() {
    try {
      const { HeaderComponent, FooterComponent } = await loadRemoteModule(MFE_CONFIGURATION[this.componentName]);
      if (this.componentName === 'header') {
        this.headerRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(HeaderComponent));
        this.headerRef.instance.title = 'Module Federation';
      } else {
        const componentRef: ComponentRef<{}> = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(FooterComponent));
      }
    } catch (error) {
      console.log(error);
    }

  }

}
