// Array to store talent data
const talentData = [
  {
      experienceLevel: "Entry-level",
      jobOpenings: 5000,
      availableTalent: 8000
  },
  {
      experienceLevel: "Mid-level",
      jobOpenings: 3500,
      availableTalent: 4000
  },
  {
      experienceLevel: "Senior-level",
      jobOpenings: 1500,
      availableTalent: 1000
  }
];

// Function to print job openings and calculate talent gap
function printJobOpenings(data) {
  let output = '';
  data.forEach(level => {
      output += `<p><strong>${level.experienceLevel}:</strong> ${level.jobOpenings} openings</p>`;
      const talentGap = level.jobOpenings - level.availableTalent;
      output += `<p>Talent gap: ${talentGap}</p>`;
  });
  document.getElementById('output').innerHTML = output;
}

// Call the function with the talentData array
printJobOpenings(talentData);