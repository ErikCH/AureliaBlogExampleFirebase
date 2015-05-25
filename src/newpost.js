import Firebase from 'github:firebase/firebase-bower@2.2.5';
import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Newpost{
  messageRef = new Firebase('https://aureliablog.firebaseio.com');
  heading = 'New Post';
  title = '';
  description = '';
  author = '';
  date = '';
  constructor(router) {
        this.router = router;
  }
    
  post(){
    this.messageRef.push({title: this.title, description: this.description, author: this.author, date: Date()});
    this.router.navigate('posts');

  }
}

