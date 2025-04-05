// Fonction de filtrage des tutoriels
function filterTutos() {
    const category = document.getElementById('categoryFilter').value;
    const cards = document.querySelectorAll('.tuto-card');
    
    // Afficher ou masquer les vidéos en fonction de la catégorie choisie
    cards.forEach(card => {
        // Si la catégorie choisie est "all", afficher toutes les vidéos
        if (category === 'all') {
            card.style.display = 'block';
        } else {
            // Si la vidéo a la classe correspondant à la catégorie choisie, l'afficher
            if (card.classList.contains(category)) {
                card.style.display = 'block';
            } else {
                // Sinon, la masquer
                card.style.display = 'none';
            }
        }
    });
}
