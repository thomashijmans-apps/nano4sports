import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: 'tabs',
        component:HomePage,
        children:[
            {
                path: 'profile',
                children:[
                    {
                        path: '',
                        loadChildren: './profile/profile.module#ProfilePageModule',
                    }
                ]

            },
            {
                path: 'run',
                children:[
                    {
                        path: '',
                        loadChildren: './run/run.module#RunPageModule',
                    },
                    {
                        path: 'start',
                        loadChildren: './run/start/start.module#StartPageModule',
                    },
                    {
                        path: 'sensors',
                        loadChildren: './run/sensors/sensors.module#SensorsPageModule',
                    },
                    {
                        path: 'music',
                        loadChildren: './run/music/music.module#MusicPageModule',
                    },
                    {
                        path: 'soundvfx',
                        loadChildren: './run/soundvfx/soundvfx.module#SoundvfxPageModule',
                    },
                    {
                        path: 'volume',
                        loadChildren: './run/volume/volume.module#VolumePageModule',
                    }

                ]
            },
            {
                path: 'data',
                children:[
                    {
                        path: '',
                        loadChildren: './data/data.module#DataPageModule',
                    }
                ]
            }
        ]
    },
    {
        path:'',
        redirectTo:'/home/tabs/run',
        pathMatch:'full'
    },
  { path: 'soundvfx', loadChildren: './run/soundvfx/soundvfx.module#SoundvfxPageModule' },
  { path: 'music', loadChildren: './run/music/music.module#MusicPageModule' },
  { path: 'sensors', loadChildren: './run/sensors/sensors.module#SensorsPageModule' },
  { path: 'volume', loadChildren: './run/volume/volume.module#VolumePageModule' },
  { path: 'start', loadChildren: './run/start/start.module#StartPageModule' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule  {}
