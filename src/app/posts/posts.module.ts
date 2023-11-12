import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PostsService } from './services/posts.service';
import { PostsComponent } from './components/posts.component';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from './store/effects';



@NgModule({
  declarations:[
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers:[PostsService],
  exports:[PostsComponent]
})
export class PostsModule { }
