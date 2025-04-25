const outfitSuggestions = {
    work: {
      sunny: {
        small: "Charcoal blazer, white button-down, relaxed-fit slacks.",
        medium: "Charcoal blazer, white button-down, relaxed-fit slacks.",
        large: "Charcoal blazer, white button-down, relaxed-fit slacks."
      },
      rainy: {
        small: "Waterproof trench coat, button-up shirt, dress pants.",
        medium: "Rainproof suit jacket, sweater, dark trousers.",
        large: "Water-resistant overcoat, collared shirt, dress slacks."
      },
      cold: {
        small: "Wool overcoat, turtleneck sweater, wool dress pants.",
        medium: "Cashmere blend coat, button-down shirt, thermal trousers.",
        large: "Heavy wool coat, layered sweater, lined dress pants."
      }
    },
    casual: {
      sunny: {
        small: "Cotton polo shirt and slim-fit jeans.",
        medium: "Short-sleeve henley and chinos.",
        large: "Breathable tee and relaxed-fit shorts."
      },
      rainy: {
        small: "Light waterproof jacket and denim jeans.",
        medium: "Denim jacket with hoodie, dark jeans.",
        large: "Rain hoodie and joggers."
      },
      cold: {
        small: "Quilted vest, long-sleeve tee, jeans.",
        medium: "Puffer jacket, sweatshirt, slim pants.",
        large: "Parkas, thermal shirt, lined trousers."
      }
    }
  };

  outfitImages = {
    work: {
      sunny: "BLAZER AND PANTS.png",
      rainy: "Raincoat over suit.png",
      cold: "trench over suit cold.png",
    },
    casual: {

        sunny: "polo shirt and jean.png",
        rainy: "RAINCOAT OVER POLO AND JEANS.png",
        cold: "BUTTON UP AND Jean.png",
    },
  }
  
  function getOutfitImage(src, alt) {
    return `<img src="images/${src}" alt="${alt}" class="image">`;
  }

  document.getElementById('outfit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const occ = document.getElementById('occasion').value;
    const weath = document.getElementById('weather').value;
    const size = document.getElementById('size').value;
  
    const suggestion = outfitSuggestions[occ]?.[weath]?.[size] ||
      "Sorry, no suggestion available for this combination.";
  
    document.getElementById('outfit-result').textContent = suggestion;
    document.getElementById('outfit-image').innerHTML = getOutfitImage(outfitImages[occ][weath] || "", "Outfit suggestion image");
  });
  