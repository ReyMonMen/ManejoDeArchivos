class ProductManager {  
    // products = [];
  
    constructor () {
      this.id = 1;
      this.products = [];
      
    }
    

    addProduct (product){
          

        const findCode = this.products.find(products => products.code === product.code);

        if(findCode){
            console.log(`El codigo de producto ${product.code} ya esta en uso`);
        }
        else{
            product.id = this.id++;
        this.products.push(product);

        }
    }

    getProductById(id){
      
        const findId = this.products.find(product => product.id === id);
      
        if(!findId){
          return "Producto no encontrado"
        }
      
        return findId
    }
    
    getProducts(){

        return this.products;
    }

} 

const productoPrueba1 = {
    name: "Producto de prueba",
    description: "No sirve para un carajo",
    price: 2000,
    thumbnail: "Sin Imagen",
    code: "abc123",
    stock: 25
}

const productoPrueba2 = {
    name: "Producto de prueba2",
    description: "No sirve para un jocara",
    price: 500,
    thumbnail: "Sin Imagen",
    code: "123abc",
    stock: 12
}

const manager = new ProductManager();

console.log(manager.getProducts());

manager.addProduct(productoPrueba1);

console.log(manager.getProducts());

manager.addProduct(productoPrueba2);

console.log(manager.getProducts());

manager.addProduct(productoPrueba1);

console.log(manager.getProductById(2))

console.log(manager.getProductById(0))