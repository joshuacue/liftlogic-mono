// This function generates a set of custom font sizes for Tailwind CSS.
// It loops from 1 to 100 to create font sizes from 1px to 10em.
// Forming the class names where text-0.1 == fontSize:1px to to text-10 === fontSize: 100px.
function generateSizes() {
  let sizes = {};
  for (let i = 1; i <= 100; i++) {
    let emValue = i / 10;

    // If the emValue is a whole number, we convert it to integer to remove the .0
    if (emValue === parseInt(emValue)) {
      emValue = parseInt(emValue);
    }

    sizes[emValue] = `${emValue}rem`;
  }
  return sizes;
}

module.exports = {
  generateSizes,
};
