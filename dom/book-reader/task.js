const fontSizes = document.querySelectorAll(".font-size");
for (const fontSize of fontSizes) {
    fontSize.addEventListener('click', (event) => {
        const bookCurrent = document.querySelector('.book')
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        if (fontSize.classList.contains('font-size_small')) {
            
            bookCurrent.classList.remove('book_fs-big');
            bookCurrent.classList.add('book_fs-small');
            event.preventDefault();
        }
        else if (fontSize.classList.contains('font-size_big')) {

            bookCurrent.classList.remove('book_fs-small');
            bookCurrent.classList.add('book_fs-big');
            event.preventDefault();
            
        }
        else {

            bookCurrent.classList.remove('book_fs-small');
            bookCurrent.classList.remove('book_fs-big');
            event.preventDefault();
        }
        fontSize.classList.add('font-size_active');
    })
}