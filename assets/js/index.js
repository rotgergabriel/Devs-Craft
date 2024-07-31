// index.html gallery filter

document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterItems = document.querySelectorAll('.filter-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            filterItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        });
    });

    // Initialize all items to show if filter is 'all'
    filterItems.forEach(item => {
        if (item.classList.contains('cumpleanos')) {
            item.classList.add('active');
        }
    });
});
