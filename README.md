# Supply_Chain

> This is an interactive, distributed, farm products supply demo. Make product ready for sale after it had been harvested then transfer asset from participant to participant through an asset ID to easily traceback the supply chain and maintaing high transparency in the supply chain.

>The distributed hyper ledger will provide elimination of the intermediaries in the chain so that we can give better remuneration to the farmers for their hard work and investment, also deliver low cost and quality farm products for the consumer.

The business network defines:

**Paticipants:** `Farmer` `Transporter` `Warehouse` `Consumer`

**Assets:** `Vegetable` `VegetableListing`

**Transactions:** `Orderw` `Orderc` `Deliver` `Harvested`

The `harvest` function is called when an `Harvested` transaction is submitted by the warehouse. The logic simply checks that the listing for the Vegetable is harvest, and then updates the VegetableListing status to harvested  **(_= participant intials)**

The `makeOrderw` function is called when an `Order` transaction is submitted by the warehouse. The logic simply checks that the listing for the Vegetable is harvested and up for sale, and then updates the VegetableListing status to indeliver_w  **(_= participant intials)**

The `makeOrderc` function is called when an `Order` transaction is submitted by the consumer. The logic simply checks that the listing for the vegetable is delivered_w and warehouse is the owner, and then updates the VegetableListing status to indeliver_c  **(_= participant intials)**

The `Deliver` function is called when a `Delivery` transaction is submitted. The logic simply checks that the listing status is "indeliver_c" or "indeliver_w", and then updates the vegetableListing owner to the next participant in the chain and status to delivered.

In the `Consumer` participant registry, create a new participant.

```
{
	"$class": "org.acme.model.supplychain.consumer",
    "vorder": "t12",
    ""uid": "1911"
}
```

In the `Farmer` participant registry, create a new participant

```
{
	"$class": "org.acme.model.supplychain.Farmer",
    "name": "Ashok Rana",
    "uid": "6399"
}
```

In the `transporter` participant registry, create a new participant

```
{
	"$class": "org.acme.model.supplychain.Transporter",
    "name": "Harpreet",
    "uid" : "0299"
}
```

In the `Warehouse` participant registry, create a new participant

```
{
	"$class": "org.acme.model.supplychain.Warehouse",
    "name": "Padmavati",
    "uid": "1055"
}
```

In the `Vegetable` asset registry, create a new asset of a vegetable owned by `uid` **1596**

```
{
	"$class": "org.acme.model.supplychain.Warehouse",
    "vin": "t12",
    "owner": "resources:org.acme.model.supplychain.Farmer#1596"
}
```

In the `VegetableListing` asset registry, create vegetable listing for vegetable `t12`

```
{
	"$class": "org.acme.model.supplychain.VegetableListing",
    "listingId": "5914",
    "state": "HARVEST",
    "vegetable": "resource:org.acme.model.supplychain.Vegetable#t12"
}
```
