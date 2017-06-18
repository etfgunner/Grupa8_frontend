import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service(),
	model() {
		return this.get('ajax').request('https://grupa8.herokuapp.com/patrole/get/all', { method: 'GET' });
	}
});

