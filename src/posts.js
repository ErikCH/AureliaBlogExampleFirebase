import Firebase from 'github:firebase/firebase-bower@2.2.5';
import $ from 'jquery';

export class Posts{
  messageRef = new Firebase('https://aureliablog.firebaseio.com');
  heading = 'Posts';
    
  attached() {
    this.messageRef.on("value", function(snapshot) {
            console.log(snapshot.val());
            $('#postsDiv').empty();
            snapshot.forEach(function(childsnapshot){
            $('<div/>').text(childsnapshot.val().title + ": " + childsnapshot.val().description).prepend($('<em/>').text(childsnapshot.val().author+': ')).appendTo($('#postsDiv'));
            });
        });
    }

}

