import Component from '@ember/component';

export default Component.extend({
  actions: {
    showPersonObj(person){
      alert('Name: '+person.name);
    }
  }
});
