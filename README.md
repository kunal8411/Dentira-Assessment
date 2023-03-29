# Dentira-Assessment



## Getting Started







First, install dependencies & run the development server:

$npm install & then 
$node index.js



Next to see the result, add some data in collections(i.e. amazon, flipcart, chroma, digital)

To add the data in amazon collection use below post API with the body mentioned below

API : http://localhost:5000/api/amazon/add-product

Body: JSON {name:"macbook", price:100, image:"any image"}
 Likewise add data in chroma(http://localhost:5000/api/chroma/add-product), flipcart(http://localhost:5000/api/flipcart/add-product), reliance digital(http://localhost:5000/digital/chroma/add-product)

Open [http://localhost:5000/api/search?q=sam] on postman/browser to see the result
