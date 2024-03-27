// Helper function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
  }
  
  // Helper function to calculate the perimeter of a rectangle
  function calculatePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  // Example usage of helper functions
  const length = 5;
  const width = 3;
  
  console.log("Length:", length);
  console.log("Width:", width);
  console.log("Area:", calculateArea(length, width)); // Output: 15
  console.log("Perimeter:", calculatePerimeter(length, width)); // Output: 16
  