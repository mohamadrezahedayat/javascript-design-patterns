const Product = require('./Product');
const { Color, Size } = require('./Enums');
const ProductFilter = require('./ProductFilter');
const {
  ColorSpecification,
  AndSpecification,
  SizeSpecification,
} = require('./Specifications');
const BetterFilter = require('./BetterFilter');

const apple = new Product('Apple', Color.green, Size.small);
const tree = new Product('Tree', Color.green, Size.large);
const house = new Product('House', Color.blue, Size.large);
const products = [apple, tree, house];

/* bad way */
console.clear();
console.log(`\nGreen products (old):`);

const productFilter = new ProductFilter();
const filteredItems1 = productFilter.filterByColor(products, Color.green);

for (const p of filteredItems1) {
  console.log(`* ${p.name} is Green`);
}

/* best practice */
console.log(`\nGreen products (new):`);

const betterFilter = new BetterFilter();
const greenSpec = new ColorSpecification(Color.green);
const filteredItems2 = betterFilter.filter(products, greenSpec);
for (const p of filteredItems2) {
  console.log(`* ${p.name} is Green`);
}

console.log(`\n Large and Green products :`);
const greenAndLargeSpec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);
const filteredItems3 = betterFilter.filter(products, greenAndLargeSpec);
for (const p of filteredItems3) {
  console.log(`* ${p.name} is Green`);
}
