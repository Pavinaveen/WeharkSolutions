function showPage(pageId) {
            const pages = document.getElementsByClassName('page');
            for (let page of pages) {
                page.classList.remove('active');
            }
            document.getElementById(pageId).classList.add('active');
        }

        function scrollToService(serviceId) {
            setTimeout(() => {
                const element = document.getElementById(serviceId);
                element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            }, 100);
        }

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        });

        
        document.addEventListener('click', function(e) {
            var isDropdownButton = e.target.matches('[data-dropdown-button]');
            if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

            let currentDropdown;
            if (isDropdownButton) {
                currentDropdown = e.target.closest('[data-dropdown]');
                currentDropdown.classList.toggle('touch-active');
            }

            document.querySelectorAll('[data-dropdown].touch-active').forEach(dropdown => {
                if (dropdown === currentDropdown) return;
                dropdown.classList.remove('touch-active');
            });
        });