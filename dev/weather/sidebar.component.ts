import {Component} from 'angular2/core';

@Component({
    selector: 'mysidebar',
    template: `
        <h3>Saved Profiles</h3>
        <button (click)="onSaveNew()">Save List to Profile</button>
        <article class="profile" (click)="onLoadProfile()">
            <h4>Saved Profiles</h4>
            <p>Cities: New York, London</p>
            <span class="delete" (click)="onDeleteProfile($event)">X</span>
        </article>
    `,
    styleUrls: ['src/css/sidebar.css']
})
export class SidebarComponent {

}