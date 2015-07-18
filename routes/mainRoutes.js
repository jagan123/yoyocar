/*Router.route('/', function () {
  this.render('index');
});*/
Router.map(function(){
    this.route('createRide', {path: '/create'} );
    this.route('list', {path: '/view/all'});
    this.route('index', {path: '/'});
});

// Simple route example
// Router.route('/one'); 
