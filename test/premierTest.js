var taux = require('../lib/calculTaux.js');
var assert = require('assert');

	describe('taux', function(){
		describe('evolution', function(){

			it('donner l\'evolution du taux', function(){
				assert.equal(taux.evolution(100, 200),100)
			})
		})

	})
