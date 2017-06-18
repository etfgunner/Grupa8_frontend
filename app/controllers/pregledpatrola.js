import Ember from 'ember';

export default Ember.Controller.extend({
	ajax: Ember.inject.service(),
    actions: {
    	uklonipatrolu: function(id){
			this.get('ajax').request('https://grupa8.herokuapp.com/patrole/delete?id='+id, { method: 'GET' });
    	}
    }
});