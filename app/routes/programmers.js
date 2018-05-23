import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [{'name': 'Zen Pandawan'},
      {'name': 'Obi-Wan Kenobi'}, 
      {'name': 'Yoda'}
    ];
  }});
