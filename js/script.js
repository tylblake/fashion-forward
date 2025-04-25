const outfitSuggestions = {
    work: {
      sunny: {
        small: "Charcoal blazer, white button-down, relaxed-fit slacks.",
        medium: "Charcoal blazer, white button-down, relaxed-fit slacks.",
        large: "Charcoal blazer, white button-down, relaxed-fit slacks."
      },
      rainy: {
        small: "Rain coat over suit.",
        medium: "Rain coat over suit.",
        large: "Rain coat over suit."
      },
      cold: {
        small: "A trench coat over suit.",
        medium: "Cashmere blend coat, button-down shirt, thermal trousers.",
        large: "Heavy wool coat, layered sweater, lined dress pants."
      }
    },
    casual: {
      sunny: {
        small: "A polo shirt and jeans.",
        medium: "Short-sleeve henley and chinos.",
        large: "Breathable tee and relaxed-fit shorts."
      },
      rainy: {
        small: "rain jacket over polo and denim jeans.",
        medium: "Denim jacket with hoodie, dark jeans.",
        large: "Rain hoodie and joggers."
      },
      cold: {
        small: " Button up and jeans.",
        medium: "Puffer jacket, sweatshirt, slim pants.",
        large: "Parkas, thermal shirt, lined trousers."
      }
    }
  };

  outfitImages = {
    work: {
      sunny: "blazer_and_pants.png",
      rainy: "raincoat_over_suit.png",
      cold: "trench_over_suit_cold.png",
    },
    casual: {

        sunny: "polo_shirt_and_jeans.png",
        rainy: "raincoat_over_polo_and_jeans.png",
        cold: "button_up_and_jeans.png",
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
    
  
    // const suggestion = outfitSuggestions[occ]?.[weath]?.[size] ||
    //   "Sorry, no suggestion available for this combination.";
    const suggestion = outfitSuggestions[occ]?.[weath]?.['small'] ||
      "Sorry, no suggestion available for this combination.";
    
    document.getElementById('outfit-result').textContent = suggestion;
    document.getElementById('outfit-image').innerHTML = getOutfitImage(outfitImages[occ][weath] || "", "Outfit suggestion image");
  });
  