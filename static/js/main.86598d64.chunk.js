(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{19:function(e,t,i){},27:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),r=i(21),c=i.n(r),s=(i(27),i(13)),o=i(14),l=i(4),d=i(2),h=(i(19),i(8)),u=i(0),p=function(e){var t=e.cartQuantity;return Object(u.jsxs)("nav",{className:"nav-container",children:[Object(u.jsx)("h3",{children:"Olive Hut"}),Object(u.jsxs)("ul",{className:"nav-links",children:[Object(u.jsx)(l.b,{to:"/shopping-cart/",children:Object(u.jsx)("li",{children:"Home"})}),Object(u.jsx)(l.b,{to:"/shopping-cart/shop",children:Object(u.jsx)("li",{children:"Shop"})}),Object(u.jsx)(l.b,{to:"/shopping-cart/cart",children:Object(u.jsxs)("li",{children:["Cart (",t,")"]})})]})]})},m=function(e){e.goToShop;return Object(u.jsx)("div",{className:"homepage-container",children:Object(u.jsxs)("div",{className:"homepage-content",children:[Object(u.jsx)("h3",{children:"Olive Hut"}),Object(u.jsx)("p",{children:"Order fresh Olives via the online store, and have it prepared and delivered to your door next day. We have a superb range of mouth-watering Mediterranean Olives available, sourced from Greece, Italy and Spain and regularly visited by us to ensure you only receive top quality ingredients."}),Object(u.jsx)("p",{children:"We also have the option for you to book regular deliveries, have the products you want, delivered to your door at regular intervals that suit you."}),Object(u.jsx)(l.b,{to:"/shopping-cart/shop",children:Object(u.jsx)("button",{className:"homepage-btn",children:"See Our Olives"})})]})})},j=function(e){var t=e.name,i=e.quantity,a=e.findItem,n=e.updateCartItems,r=e.formatCurrency,c=e.removeItem,s=a(t);return Object(u.jsxs)("div",{className:"cart-item-container",children:[Object(u.jsx)("div",{className:"cart-item-img",children:Object(u.jsx)("img",{src:s.img_url,alt:s.name})}),Object(u.jsx)("div",{className:"cart-item-name",children:t}),Object(u.jsx)("div",{className:"cart-item-price",children:r(s.price100g)}),Object(u.jsxs)("div",{className:"cart-quantity",children:[Object(u.jsx)("input",{onChange:function(e){var t=parseInt(document.getElementById(s.id).value);n(s.name,t)},defaultValue:i,className:"amount",id:s.id,type:"number",min:"1"}),Object(u.jsx)("div",{onClick:function(){return c(t)},className:"remove",children:"remove"})]}),Object(u.jsx)("div",{className:"cart-item-total",children:r(i*s.price100g)})]})},b=function(e){var t=e.items,i=e.findItem,a=e.updateCartItems,n=e.subTotal,r=e.formatCurrency,c=e.removeItem,s=e.handlePayment;return t.length<1?Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"It's looking a little empty in here... Add some olives to your cart!"}),Object(u.jsx)(l.b,{to:"/shopping-cart/shop",children:Object(u.jsx)("button",{className:"button",children:"View Our Olives"})})]}):Object(u.jsxs)("div",{className:"cart-container",children:[Object(u.jsxs)("div",{className:"cart-grid-header",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{children:"Item"}),Object(u.jsx)("div",{children:"Price"}),Object(u.jsx)("div",{children:"Quantity"}),Object(u.jsx)("div",{children:"Total"})]}),Object(u.jsxs)("div",{className:"cart-grid-header-mobile",children:[Object(u.jsx)("div",{children:"Item"}),Object(u.jsx)("div",{children:"Price"}),Object(u.jsx)("div",{children:"Quantity"}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{children:"Total"})]}),t.map((function(e){return Object(u.jsx)(j,{name:e.name,quantity:e.quantity,price:e.price,findItem:i,updateCartItems:a,formatCurrency:r,removeItem:c},e.name)})),Object(u.jsxs)("div",{className:"cart-grid",children:[Object(u.jsx)("h3",{className:"text",children:"Subtotal"}),Object(u.jsx)("div",{className:"amount",children:r(n)}),Object(u.jsx)("h3",{className:"text",children:"Delivery"}),Object(u.jsx)("div",{className:"amount",children:r(h.delivery_fee)}),Object(u.jsx)("h3",{className:"text",children:"Total"}),Object(u.jsx)("div",{className:"amount",children:r(n+h.delivery_fee)}),Object(u.jsx)(l.b,{to:"/shopping-cart/",children:Object(u.jsx)("button",{className:"button",onClick:s,children:"Checkout and Pay"})}),Object(u.jsx)(l.b,{to:"/shopping-cart/shop",children:Object(u.jsx)("button",{className:"button",children:"Continue Shopping"})})]})]})},g=function(e){var t=h.products.filter((function(t){return e.product.name===t.name}))[0];return Object(u.jsxs)("div",{className:"product-container",children:[Object(u.jsx)("div",{className:"left-col",children:Object(u.jsx)("img",{src:t.img_url,alt:t.name})}),Object(u.jsxs)("div",{className:"right-col",children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsx)("p",{children:t.description}),Object(u.jsxs)("div",{className:"product-add",children:[Object(u.jsxs)("div",{children:[e.formatCurrency(t.price100g)," (100g)"]}),"Quanitity:",Object(u.jsxs)("select",{name:"",id:"quantity",className:"",children:[Object(u.jsx)("option",{value:"1",children:"1"}),Object(u.jsx)("option",{value:"2",children:"2"}),Object(u.jsx)("option",{value:"3",children:"3"}),Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"5",children:"5"}),Object(u.jsx)("option",{value:"6",children:"6"}),Object(u.jsx)("option",{value:"7",children:"7"}),Object(u.jsx)("option",{value:"8",children:"8"}),Object(u.jsx)("option",{value:"9",children:"9"}),Object(u.jsx)("option",{value:"10",children:"10"})]}),Object(u.jsx)("div",{children:Object(u.jsx)(l.b,{to:"/shopping-cart/cart",children:Object(u.jsx)("button",{className:"button",onClick:function(){var i=parseInt(document.getElementById("quantity").value),a={name:t.name,quantity:i,price:t.price100g};e.addCartItem(a)},children:"Add to Basket"})})})]})]})]})},v=function(e){return Object(u.jsxs)("div",{className:"item-container",children:[Object(u.jsx)(l.b,{to:"/shopping-cart"+"/shop/".concat(e.name),children:Object(u.jsx)("img",{src:e.img_url,alt:e.name})}),Object(u.jsx)("p",{children:e.name}),Object(u.jsx)("p",{children:e.formatCurrency(e.price100g)}),Object(u.jsx)(l.b,{to:"/shopping-cart"+"/shop/".concat(e.name),children:Object(u.jsx)("button",{className:"button",children:"View Product"})})]})},y=function(e){var t=e.formatCurrency;return Object(u.jsxs)("div",{className:"shop-container",children:[Object(u.jsx)("h2",{className:"center",children:"Olives"}),Object(u.jsx)("p",{children:"Take your pick from our wide selection of whole or pitted olives."}),Object(u.jsx)("div",{className:"shop-items",children:h.products.map((function(e){return Object(u.jsx)(v,{name:e.name,price100g:e.price100g,img_url:e.img_url,formatCurrency:t},e.id)}))})]})},O=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),i=t[0],n=t[1],r=Object(a.useState)(),c=Object(o.a)(r,2),j=c[0],v=c[1],O=Object(a.useState)(),f=Object(o.a)(O,2),x=f[0],w=f[1];Object(a.useEffect)((function(){C(),P()}),[i]);var k=function(e){return h.products.find((function(t){return t.name===e}))},N=function(e){i.some((function(t){return t.name===e.name}))?i.forEach((function(t){t.name===e.name&&(t.quantity+=e.quantity,n(Object(s.a)(i)))})):n([].concat(Object(s.a)(i),[e]))},C=function(){v(i.length)},P=function(){var e=0;i.forEach((function(t){e+=t.quantity*t.price})),w(e)},T=function(e){return e.toLocaleString("en-UK",{style:"currency",currency:"GBP"})};return Object(u.jsx)(l.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{cartQuantity:j}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/shopping-cart/",children:Object(u.jsx)(m,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/shopping-cart/shop",children:Object(u.jsx)(y,{formatCurrency:T})}),Object(u.jsx)(d.a,{exact:!0,path:"/shopping-cart/shop/:id",render:function(e){return Object(u.jsx)(g,{product:k(e.match.params.id),addCartItem:N,formatCurrency:T})}}),Object(u.jsx)(d.a,{exact:!0,path:"/shopping-cart/cart",children:Object(u.jsx)(b,{items:i,totalCost:x,findItem:k,formatCurrency:T,updateCartItems:function(e,t){i.forEach((function(a){a.name===e&&(a.quantity=t,n(Object(s.a)(i)))}))},subTotal:x,removeItem:function(e){return n(i.filter((function(t){return t.name!==e})))},handlePayment:function(){alert("Thank you for shopping with us :)"),n([])}})})]})]})})},f=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,35)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()},8:function(e){e.exports=JSON.parse('{"delivery":3.95,"delivery_fee":3.95,"products":[{"id":0,"name":"Kalamata Pitted Olives","type":"Pitted","description":"The Kalamata olive is a large, dark purple olive with a smooth, meaty texture, named after the city of Kalamata in the southern Peloponnese, Greece.","price100g":2.9,"img_url":"http://www.tasteofsicily.co.uk/wp-content/uploads/2014/11/olive-kalamata-intera.jpg"},{"id":1,"name":"Moroccan Pitted Olives","type":"Pitted","description":"These are a great olive. They are dry cured giving them a lovely rich salty flavour which we might be slightly addicted to.... Traditionally in Morocco they are used in tagines and salads but also a good olive for aperitifs and pasta sauces.","price100g":2.9,"img_url":"https://sardofoods.ca/wp-content/uploads/2020/01/Pitted-Sundried-Black.png"},{"id":2,"name":"Basil and Garlic Pitted Olives","type":"Pitted","description":"Plump succulent olives lovingly marinated with a sprinkle of zingy basil and garlic. These olives are a perfect, 100% natural, treat for snacking on the go and for lunch boxes. olives bring you the tastiest olives, freshly packed and in a range of delicious flavours. Bursting with natural goodness, they\'re high in loveliness and really low in calories","price100g":2.35,"img_url":"https://www.olivesdirect.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/po02.jpg"},{"id":3,"name":"Green Colossal Pitted Olives","type":"Pitted","description":"They are from the Halkidiki rgion of Greece. They are hand picked, naturally cured in light sea salt brine, by age old methods. They make a perfect snack, add marvelous zest to any salad, are wonderful Antipasti and an excellent addition to sauces. Not to forget: olives are synonymous with vitality and energy.","price100g":2.35,"img_url":"http://en.soleenatura.com/wp-content/uploads/2015/04/olive-colossal-in-salamoia.jpg"},{"id":4,"name":"Chilli Pitted Olives","type":"Pitted","description":"For those of you that like and enjoy the taste of something warm! This mix of plump Greek Kalamata and green pitted olives is for you! The warmth of the chilies gently comes through and is comfortably warm and spicy, in this marinade made with roasted chilies, fresh garlic, bay with extra virgin olive oil.","price100g":2.35,"img_url":"https://mksfooddistribution.com/wp-content/uploads/2018/12/Green-Olives-Chilli-Pitted.jpg"},{"id":5,"name":"Sicilian Pitted Olives","type":"Pitted","description":"Juicy pitted Greek Kalamata olives in a marinade of roasted red peppers, caper berries, fresh garlic, parsley with extra virgin olive oil.","price100g":2.9,"img_url":"https://i.ebayimg.com/images/g/7kkAAOSwnGldvYe7/s-l300.jpg"},{"id":6,"name":"Alfonso Pitted Olives","type":"Pitted","description":"The Alphonso Olive tree cultivar was developed in Chile. It is also grown in Argentina and Peru. Chilean black Alphonso Olives tend to be cured in red wine vinegar, which deepens their purple colour. Alphonso Olives from Argentina and Peru tend to be cured in brine and packed in vinegar or brine. They have a tart taste with a hint of bitterness.","price100g":2.9,"img_url":"https://pbs.twimg.com/media/D2C8XqbX4AUEbsy.png"},{"id":7,"name":"Kalamata Whole Olives","type":"Whole","description":"The Kalamata olive is a large, dark purple olive with a smooth, meaty texture, named after the city of Kalamata in the southern Peloponnese, Greece.","price100g":2.9,"img_url":"http://www.tasteofsicily.co.uk/wp-content/uploads/2014/11/olive-kalamata-intera.jpg"},{"id":8,"name":"Moroccan Whole Olives","type":"Whole","description":"These are a great olive. They are dry cured giving them a lovely rich salty flavour which we might be slightly addicted to.... Traditionally in Morocco they are used in tagines and salads but also a good olive for aperitifs and pasta sauces.","price100g":2.9,"img_url":"https://sardofoods.ca/wp-content/uploads/2020/01/Pitted-Sundried-Black.png"},{"id":9,"name":"Basil and Garlic Whole Olives","type":"Whole","description":"Plump succulent olives lovingly marinated with a sprinkle of zingy basil and garlic. These olives are a perfect, 100% natural, treat for snacking on the go and for lunch boxes. olives bring you the tastiest olives, freshly packed and in a range of delicious flavours. Bursting with natural goodness, they\'re high in loveliness and really low in calories","price100g":1.9,"img_url":"https://www.olivesdirect.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/o/po02.jpg"},{"id":10,"name":"Green Colossal Whole Olives","type":"Whole","description":"They are from the Halkidiki rgion of Greece. They are hand picked, naturally cured in light sea salt brine, by age old methods. They make a perfect snack, add marvelous zest to any salad, are wonderful Antipasti and an excellent addition to sauces. Not to forget: olives are synonymous with vitality and energy.","price100g":1.9,"img_url":"http://en.soleenatura.com/wp-content/uploads/2015/04/olive-colossal-in-salamoia.jpg"},{"id":11,"name":"Chilli Whole Olives","type":"Whole","description":"For those of you that like and enjoy the taste of something warm! This mix of plump Greek Kalamata and green pitted olives is for you! The warmth of the chilies gently comes through and is comfortably warm and spicy, in this marinade made with roasted chilies, fresh garlic, bay with extra virgin olive oil.","price100g":1.9,"img_url":"https://mksfooddistribution.com/wp-content/uploads/2018/12/Green-Olives-Chilli-Pitted.jpg"},{"id":12,"name":"Sicilian Whole Olives","type":"Whole","description":"Juicy pitted Greek Kalamata olives in a marinade of roasted red peppers, caper berries, fresh garlic, parsley with extra virgin olive oil.","price100g":2.9,"img_url":"https://i.ebayimg.com/images/g/7kkAAOSwnGldvYe7/s-l300.jpg"},{"id":13,"name":"Alfonso Whole Olives","type":"Whole","description":"The Alphonso Olive tree cultivar was developed in Chile. It is also grown in Argentina and Peru. Chilean black Alphonso Olives tend to be cured in red wine vinegar, which deepens their purple colour. Alphonso Olives from Argentina and Peru tend to be cured in brine and packed in vinegar or brine. They have a tart taste with a hint of bitterness.","price100g":2.9,"img_url":"https://pbs.twimg.com/media/D2C8XqbX4AUEbsy.png"}]}')}},[[34,1,2]]]);
//# sourceMappingURL=main.86598d64.chunk.js.map