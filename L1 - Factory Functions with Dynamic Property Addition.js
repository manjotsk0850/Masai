function createInventoryItem(name, category, price) {
    return {
      name: name,
      category: category,
      price: price,
      describeItem: function() {
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
      }
    };
  }
  
  function addItemDiscount(inventoryItem, discountPercent) {
    const discountedItem = { ...inventoryItem };  
  
    
    discountedItem.discountedPrice = discountedItem.price * (1 - discountPercent / 100);
    
    discountedItem.applyDiscount = function() {
      console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
    };
    
    return discountedItem;
  }

  const item = createInventoryItem("Laptop", "Electronics", 1500);
  item.describeItem(); 
  const discountedItem = addItemDiscount(item, 10);
  discountedItem.applyDiscount();
  