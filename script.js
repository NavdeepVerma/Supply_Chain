/**
      * @param {org.acme.model.supplychain.Orderw} makeOrderw
       * @transaction 
 */
function makeOrderw(Orderw) 
{
    var listing = Orderw.listing;
    if (listing.state == 'HARVEST') {
        throw new window.alert('Vegetable not ready for delivery !!');
    }
  	else if(listing.state=='HARVESTED'){
    	listing.state='IN_DELIVER_W';
    }
  	else if(listing.state=='IN_DELIVER_W'){
    	throw new window.alert('Arriving soon at warehouse !!');
    }
  else if(listing.state=='DELIVERED_W'){
  		throw new window.alert('Already delivered at warehouse');
  }
    
   return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            // save the vegetable listing
            return vegetableListingRegistry.update(listing);
        });
   
}

/**
      * @param {org.acme.model.supplychain.Orderc} makeOrderc
       * @transaction 
 */
function makeOrderc(Orderc) 
{
    var listing = Orderc.listing;
  	if(listing.state=='IN_DELIVER_C'){
    	throw new window.alert('About to deliver to consumer !!');
    }
  
  	else if(listing.state=='DELIVERED_W' ){
   		listing.state='IN_DELIVER_C';
    }
  else{
  	throw new window.alert('Out of Stock !!');
  }
    
   return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            // save the vegetable listing
            return vegetableListingRegistry.update(listing);
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
  else if(listing.state=='DELIVERED_W'){
  	throw new window.alert('Vegetable Delivered at the warehouse');
  }
  else if(listing.state=='DELIVERED_C'){
  	throw new window.alert('Vegetable Delivered to the consumer');
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
      * @param {org.acme.model.supplychain.deliver_w} Deliver_w
       * @transaction 
 */

function Deliver_w(deliver_w){
  var listing=deliver_w.listing;
  var vege=deliver_w.vegetable_id;
  var member=deliver_w.ware;
  if(listing.state=='IN_DELIVER_W'){
    vege.owner=member.uid;
    listing.state='DELIVERED_W';
  }
  else if(listing.state=='DELIVERED_W'){
   throw window.alert('Delivered at the warehouse');
  }
  else {
  	throw window.alert('Order is not for warehouse');
  }
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            return vegetableListingRegistry.update(listing);
        });
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(assetRegistry) {
            return assetRegistry.update(vege);
        });
}

/**
      * @param {org.acme.model.supplychain.deliver_c} Deliver_c
       * @transaction 
 */

function Deliver_c(deliver_c){
  var listing=deliver_c.listing;
  var vege=deliver_c.vegetable_id;
  var member=deliver_c.ware;
  if(listing.state=='IN_DELIVER_C'){
    vege.owner=member.uid;
    listing.state='DELIVERED_C';
  }
  else if(listing.state=='DELIVERED_C'){
   throw window.alert('Delivered at the consumer');
  }
  else {
  	throw window.alert('Order is not for consumer');
  }
  return getAssetRegistry('org.acme.model.supplychain.VegetableListing')
        .then(function(vegetableListingRegistry) {
            return vegetableListingRegistry.update(listing);
        });
  return getAssetRegistry('org.acme.model.supplychain.Vegetable')
        .then(function(assetRegistry) {
            return assetRegistry.update(vege);
        });
}
