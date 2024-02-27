const button = document.getElementById('fetch-button');
const baconIpsumDiv = document.getElementById('bacon-ipsum');

async function fetchBaconIpsum() {
  try {
    const response = await fetch('https://baconipsum.com/api/?type=all');
    const data = await response.json();
    baconIpsumDiv.textContent = data.join('\n\n'); // Join paragraphs with double newline
  } catch (error) {
    console.error('Error fetching data:', error);
    baconIpsumDiv.textContent = 'Failed to fetch Bacon Ipsum.';
  }
}

button.addEventListener('click', fetchBaconIpsum);
