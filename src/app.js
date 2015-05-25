import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Blog';
    config.map([
      { route: ['','posts'],  moduleId: './posts',      nav: true, title:'Posts' },
      { route: 'newpost',        moduleId: './newpost',       nav: true, title:'New Post' },
    ]);

    this.router = router;
  }
}
