// Array to store talent data
// Each object represents a different experience level with job openings and available talent
const talentData = [
  {
      experienceLevel: "Entry-level",
      jobOpenings: 5000,
      availableTalent: 800
  },
  {
      experienceLevel: "Mid-level",
      jobOpenings: 3500,
      availableTalent: 400
  },
  {
      experienceLevel: "Senior-level",
      jobOpenings: 1500,
      availableTalent: 1000
  }
];

// Function to print job openings and calculate talent gap
function printJobOpenings(data) {
  // Initialize empty strings to store the HTML output
  let openingsOutput = '';
  let gapOutput = '';
  
  // Iterate through each item in the data array
  data.forEach(level => {
      // Add job openings information for each experience level
      openingsOutput += `<p><strong>${level.experienceLevel}:</strong> ${level.jobOpenings} openings</p>`;
      
      // Calculate the talent gap (difference between job openings and available talent)
      const talentGap = level.jobOpenings - level.availableTalent;
      
      // Add the talent gap information
      gapOutput += `<p><strong>${level.experienceLevel}:</strong> ${talentGap}</p>`;
  });
  
  // Insert the generated HTML into the respective elements in the DOM
  document.getElementById('openings-output').innerHTML = openingsOutput;
  document.getElementById('gap-output').innerHTML = gapOutput;
}

// Function to find and display the highest job opening
function displayHighestJobOpening(data) {
  // Use the reduce method to find the object with the highest job openings
  // This compares each item and keeps the one with the highest jobOpenings value
  const highestOpening = data.reduce((max, current) => 
    (current.jobOpenings > max.jobOpenings) ? current : max
  );
  
  // Create an HTML string to display information about the highest job opening
  const highestOpeningOutput = `
    <p><strong>Experience Level:</strong> ${highestOpening.experienceLevel}</p>
    <p><strong>Job Openings:</strong> ${highestOpening.jobOpenings}</p>
  `;
  
  // Insert the new HTML into the 'demand-output' element
  document.getElementById('demand-output').innerHTML = highestOpeningOutput;
}

// Call the printJobOpenings function with the talentData array
// This will display all job openings and talent gaps
printJobOpenings(talentData);

// Call the displayHighestJobOpening function with the talentData array
// This will find and display the highest job opening
displayHighestJobOpening(talentData);