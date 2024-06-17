export function sidebarJs() {
    const siteHeader = document.querySelector('.site-header__burger');
    const sideBar = document.getElementById('sidebar');
    const sidebarClose = document.querySelector('.sidebar__close-sidebar');

    siteHeader.addEventListener("click", () => {
        sideBar.classList.toggle('active');
        siteHeader.classList.toggle('active');

        if (sidebarClose.classList.contains('left')) {
            sidebarClose.classList.remove('left');
            sidebarClose.classList.add('right');
        } else {
            sidebarClose.classList.add('left');
            sidebarClose.classList.remove('right');

        }
    });

    sidebarClose.addEventListener("click", () => {
        sideBar.classList.toggle('active');
        siteHeader.classList.toggle('active');

        if (sidebarClose.classList.contains('left')) {
            sidebarClose.classList.remove('left');
            sidebarClose.classList.add('right');
        } else {
            sidebarClose.classList.add('left');
            sidebarClose.classList.remove('right');

        }
    });
}