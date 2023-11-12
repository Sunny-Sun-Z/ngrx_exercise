import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { PostsService } from './services/posts.service';
import { PostsComponent } from './components/posts.component';



@NgModule({
  declarations:[
    PostsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers)
  ],
  providers:[PostsService],
  exports:[PostsComponent]
})
export class PostsModule { }
