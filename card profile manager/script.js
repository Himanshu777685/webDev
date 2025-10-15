 let carouselData = [
           
        ];

        const STORAGE_KEY = 'carouselCardsData';

        // --- Persistence Functions (using localStorage) ---

        /**
         * Saves the current carouselData array to localStorage.
         */
        const saveDataToLocalStorage = () => {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(carouselData));
            } catch (e) {
                console.error("Error saving data to localStorage:", e);
            }
        };

        /**
         * Loads data from localStorage on initialization, overriding default data if found.
         */
        const loadDataFromLocalStorage = () => {
            const storedData = localStorage.getItem(STORAGE_KEY);
            if (storedData) {
                try {
                    carouselData = JSON.parse(storedData);
                } catch (e) {
                    console.error("Error loading data from localStorage:", e);
                }
            } else {
                saveDataToLocalStorage();
            }
        };

        // Load data immediately upon script execution
        loadDataFromLocalStorage();

        let currentIndex = 0;
        let totalSlides = carouselData.length;
        let editingIndex = -1; // Tracks the index of the card being edited (-1 means adding new card)

        // DOM Element References
        const stackContainer = document.getElementById('card-stack');
        const contentNameEl = document.getElementById('content-name');
        const contentDescriptionEl = document.getElementById('content-description');
        const slideIndexEl = document.getElementById('slide-index');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');
        
        // Action Buttons
        const addCardButton = document.getElementById('add-card-button');
        const editCardButton = document.getElementById('edit-card-button');
        const deleteCardButton = document.getElementById('delete-card-button');

        // Modal Elements
        const modal = document.getElementById('add-card-modal');
        const form = document.getElementById('add-card-form');
        const cancelButton = document.getElementById('cancel-button');
        const modalTitle = document.getElementById('modal-title');
        const modalSubmitButton = document.getElementById('modal-submit-button');

        // --- Modal Control Functions ---

        const showAddCardModal = () => {
            modal.classList.remove('hidden');
            // Animate in
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.querySelector('.modal-content').classList.add('scale-in');
            }, 10);
        };

        const closeAddCardModal = () => {
            // Animate out
            modal.classList.add('opacity-0');
            modal.querySelector('.modal-content').classList.remove('scale-in');
            setTimeout(() => {
                modal.classList.add('hidden');
                form.reset(); // Clear the form on close
                editingIndex = -1; // IMPORTANT: Reset editing state
            }, 300);
        };

        const openAddModal = () => {
            editingIndex = -1;
            modalTitle.textContent = 'Add New Carousel Card';
            modalSubmitButton.textContent = 'Add Card';
            // Set a default placeholder URL for the image field
            document.getElementById('card-image').value = "https://placehold.co/400x500/3730A3/ffffff?text=New+Card";
            showAddCardModal();
        };

        const openEditModal = () => {
            // Only open if there are cards
            if (carouselData.length === 0) return;

            editingIndex = currentIndex;
            const item = carouselData[currentIndex];

            // Set modal state for editing
            modalTitle.textContent = `Edit Card: ${item.name}`;
            modalSubmitButton.textContent = 'Save Changes';

            // Pre-populate form fields with current card data
            document.getElementById('card-name').value = item.name;
            document.getElementById('card-description').value = item.description;
            document.getElementById('card-image').value = item.imageUrl;

            showAddCardModal();
        };


        // --- Card Management Functions ---

        /**
         * Determines the CSS class for a card based on its index relative to the current index.
         */
        const getCardClass = (cardIndex) => {
            if (cardIndex < currentIndex) {
                return 'card-past';
            } else if (cardIndex === currentIndex) {
                return 'card-active';
            } else if (cardIndex === currentIndex + 1) {
                return 'card-next-1';
            } else if (cardIndex === currentIndex + 2) {
                return 'card-next-2';
            } else {
                return 'card-hidden';
            }
        };

        /**
         * Applies the correct stacking classes to all cards based on currentIndex.
         */
        const renderCards = () => {
            Array.from(stackContainer.children).forEach(cardEl => {
                const index = parseInt(cardEl.dataset.index);
                // Preserve the base class names for styling
                cardEl.className = `carousel-card ${getCardClass(index)}`;
            });
        };

        /**
         * Clears the stack and recreates all card elements from the carouselData array.
         */
        const renderAllCards = () => {
            stackContainer.innerHTML = ''; // Clear existing cards
            carouselData.forEach((item, index) => {
                const card = document.createElement('div');
                card.className = 'carousel-card'; // Base class for styling
                card.dataset.index = index;

                const image = document.createElement('img');
                image.src = item.imageUrl;
                image.alt = `Slide ${index + 1}`;
                image.style.width = '100%';
                image.style.height = '100%';
                image.style.objectFit = 'cover';
                image.onerror = (e) => { e.target.src = 'https://placehold.co/400x500/18181B/A1A1AA?text=No+Image'; }; // Fallback
                
                card.appendChild(image);
                stackContainer.appendChild(card);
            });
            renderCards(); // Apply the stacking classes
        };

        /**
         * Updates the content (text) area with the current slide's data.
         */
        const updateContent = () => {
            if (carouselData.length === 0) {
                contentNameEl.textContent = 'No Cards Available';
                contentDescriptionEl.textContent = 'Please add a new card to begin.';
                slideIndexEl.textContent = '0/0';
                updateButtons();
                return;
            }

            const currentItem = carouselData[currentIndex];

            // Use a temporary opacity transition for content change
            contentNameEl.style.opacity = '0';
            contentDescriptionEl.style.opacity = '0';

            setTimeout(() => {
                contentNameEl.textContent = currentItem.name;
                contentDescriptionEl.textContent = currentItem.description;
                slideIndexEl.textContent = `${currentIndex + 1}/${totalSlides}`;

                contentNameEl.style.opacity = '1';
                contentDescriptionEl.style.opacity = '1';

                updateButtons();
            }, 300);
        };

        /**
         * Enables/disables navigation and action buttons.
         */
        const updateButtons = () => {
            const hasCards = carouselData.length > 0;

            prevButton.disabled = currentIndex === 0 || !hasCards;
            nextButton.disabled = currentIndex === totalSlides - 1 || !hasCards;

            editCardButton.disabled = !hasCards;
            deleteCardButton.disabled = !hasCards;
        };

        /**
         * Navigates to the next slide.
         */
        const goToNext = () => {
            totalSlides = carouselData.length;
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                renderCards();
                updateContent();
            }
        };

        /**
         * Navigates to the previous slide.
         */
        const goToPrev = () => {
            if (currentIndex > 0) {
                currentIndex--;
                renderCards();
                updateContent();
            }
        };

        /**
         * Handles the form submission for ADDING a new card or EDITING an existing one.
         */
        const handleSubmit = (event) => {
            event.preventDefault();

            const name = document.getElementById('card-name').value;
            const description = document.getElementById('card-description').value;
            const imageUrl = document.getElementById('card-image').value || 'https://placehold.co/400x500/3730A3/ffffff?text=New+Card';

            if (editingIndex > -1) {
                // *** EDIT MODE ***
                const cardToUpdate = carouselData[editingIndex];
                cardToUpdate.name = name;
                cardToUpdate.description = description;
                cardToUpdate.imageUrl = imageUrl;
                
            } else {
                // *** ADD MODE ***
                const newCard = {
                    id: Date.now(),
                    name: name,
                    description: description,
                    imageUrl: imageUrl
                };
                carouselData.push(newCard);
                currentIndex = carouselData.length - 1; // Move to the new card
            }
            
            totalSlides = carouselData.length;
            saveDataToLocalStorage(); 
            renderAllCards();
            updateContent();
            closeAddCardModal();
        };

        /**
         * Deletes the currently visible card.
         */
        const deleteCard = () => {
            if (carouselData.length === 0) return;
            
            carouselData.splice(currentIndex, 1);

            if (carouselData.length > 0) {
                // Adjust index if deleted the last card, otherwise keep index
                if (currentIndex >= carouselData.length) {
                    currentIndex = carouselData.length - 1;
                }
            } else {
                currentIndex = 0; // Reset
            }

            totalSlides = carouselData.length;
            saveDataToLocalStorage();
            renderAllCards();
            updateContent();
        };


        // --- Event Listeners ---

        prevButton.addEventListener('click', goToPrev);
        nextButton.addEventListener('click', goToNext);
        addCardButton.addEventListener('click', openAddModal);
        editCardButton.addEventListener('click', openEditModal);
        deleteCardButton.addEventListener('click', deleteCard);
        cancelButton.addEventListener('click', closeAddCardModal);
        form.addEventListener('submit', handleSubmit);


        // --- Initialization ---

        window.onload = () => {
            // Initial card generation based on loaded or default data
            renderAllCards(); 
            updateContent();
        };