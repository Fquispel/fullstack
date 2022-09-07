//Handlers
const fs = require('fs');
exports.getAllProducts = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );

  res.status(200).json({
    status: "success",
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
};

exports.addProduct = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  products.push(req.body);
  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));

  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
};
// PRACTICA 1 FERNANDO QUISPE LEFONZO CI:7057993 LP
exports.updateProduct =   (req, res) => {
  const products =   JSON.parse(fs.readFileSync
    (`${__dirname}/../data/products.json`));
  const productUpdate =  products.find((p) => p.id ==req.params.id);
  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(productUpdate));
  if(productUpdate){
  res.status(200).json({
    status: "Success",
    data:{
      product: productUpdate,
    },
  });
} else {
  res.status(404).json({
    status: "Not Found",
  })
}
};
//elimina pero no me manda el mensaje success
exports.deleteProduct = (req, res) => {
  const products = JSON.parse(fs.readFileSync
    (`${__dirname}/../data/products.json`));
  const productDelete = products.filter((p) => p.id != req.params.id);

  if(productDelete){
  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(productDelete));
  res.status(204).json({
    status: "Success",
    data:{
      product: productDelete,
    },
  });
} else {
  res.status(404).json({
    status: "Not Found",
  })
}
};

exports.getProductById = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );

  const foundProduct = products.find((p) => p.id == req.params.id);
  if (foundProduct) {
    res.status(200).json({
      status: "success",
      data: {
        product: foundProduct,
      },
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
};
