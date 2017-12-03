/**
      * @param {org.acme.model.supplychain.Order} makeOrder
       * @transaction 
 */
function makeOrder(Order) 
{
    var listing = Order.listing;
  	var buyer = listing.warehouse;	
  	var buyer1= listing.consumer;
    if (listing.state == 'HARVEST') {
        throw new window.alert('Vegetable not ready for delivery !!');
    }
  	else if(listing.state=='HARVESTED'){
    	listing.state='IN_DELIVER_W';
    }
  	else if(listing.state=='IN_DELIVER_W'){
    	throw new window.alert('Arriving soon at warehouse !!');
    }
  
  	else if(listing.state=='DELIVERED' ){
    	
      
      
    }
    
   return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            // save the vegetable listing
            return vegetableListingRegistry.update(listing);
        });
  
   return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(vegetableRegistry) {
            // save the vegetable
            return vegetableRegistry.update(listing.vegetable);
        });
  
}





/**
      * @param {org.acme.model.supplychain.Harvested} harvest
       * @transaction 
 */
function harvest(Harvested){
	var listing=Harvested.listing;
  	if(listing.state=='HARVEST'){
    	listing.state='HARVESTED';
    }
  	else if(listing.state=='HARVESTED'){
    	throw new window.alert('Vegetable Already Harvested');
    }
  else if(listing.state=='DELIVERED'){
  	throw new window.alert('Vegetable Delivered ');
  }
  	else{
    	throw new window.alert('Out For Delivery');
    }
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            // save the vegetable listing
            return vegetableListingRegistry.update(listing);
        });
}




/**
      * @param {org.acme.model.supplychain.Delivery} delivery
       * @transaction 
 */
function delivery(Delivery){
  	var temp = Delivery.asset;
	var listing =Delivery.listing;
  	if(listing.state=='IN_DELIVER_W'){
    	listing.state='DELIVERED';
      //owner is warehouse
      Order.asset.owner = 'Warehouse';
      	throw new window.alert(temp);
    }
  else if(listing.state=='IN_DELIVERY_C'){
  	listing.state=='DELIVERED';
    //owner is consumer
  }
  else if (listing.state=='DELIVERED'){
  	throw window.alert('Already Delivered');
    
  }
  else{
  	throw window.alert('Not ready for delivery');
  }
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(vegetableRegistry) {
            // save the vegetable
            return vegetableRegistry.update(listing.vegetable);
        });
  
}