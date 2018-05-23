import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return ['Zen Pandawan', 'Obi-Wan Kenobi', 'Yoda'];
  }
});
