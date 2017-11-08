import { Component, ViewChild } from '@angular/core';
import { SettingsService } from '@core/services/settings.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(public settings: SettingsService) { }

    toggleCollapsedSideabar() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }

}
