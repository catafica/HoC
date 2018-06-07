var mongoose = require('mongoose');

	var itemSchema = new mongoose.Schema({
			name: {
				type: String,
				default: 'car_form_request'
			},
			completed: {
				type: Boolean,
				default: false
			},
			date_created: {
				type: Date,
				default: Date.now
			},
			// --------------------------------
			client_name: {
				type: String,
				default: '_blank_client_name_'
			},
			client_email: {
				type: String,
				default: '_blank_client_email_random_gen_2i39dfr476bel6kj'
			},
			client_phone_number: {
				type: Number,
				default: 0
			},
			client_car_make: {
				type: String,
				default: '_blank_client_car_make_'
			},
			client_car_model: {
				type: String,
				default: '_blank_client_car_model_'
			},
			client_price_min: {
				type: Number,
				default: 0
			},
			client_price_max: {
				type: Number,
				default: 0
			},
			client_car_year: {
				type: Number,
				default: 0
			},
			client_car_km_min: {
				type: Number,
				default: 0
			},
			client_car_km_max: {
				type: Number,
				default: 0
			},
			client_car_engine_cmc: {
				type: String,
				default: '_blank_client_car_engine_cmc_'
			},
			client_car_transmission: {
				type: String,
				default: '_blank_client_car_transmission_'
			},
			client_car_no_doors:{
				type: Number,
				default: 4
			},
			client_car_fuel_type: {
				type: String,
				default: 'not specified'
			}, 
			client_car_body_style:{
				type: String, 
				default: 'not specified'
			}, 
			other_options:{
				type:String, 
				default: 'not specified'
			}

		});
// model name:
var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
