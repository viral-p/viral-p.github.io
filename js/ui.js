(function(window, document) {

    var layout = document.getElementById('layout'),
        menu = document.getElementById('menu'),
        menuLink = document.getElementById('menuLink'),
        content = document.getElementById('main')
    experience = document.getElementById('experience'),
        experience_menu = document.getElementById('experience-menu'),
        projects = document.getElementById('projects'),
        projects_menu = document.getElementById('projects-menu'),
        about = document.getElementById('about'),
        about_menu = document.getElementById('about-menu');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for (; i < length; i++) {
            if (classes[i] === className) {
                classes.splice(i, 1);
                break;
            }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(layout, active);
        toggleClass(menu, active);
        toggleClass(menuLink, active);
    }

    menuLink.onclick = function(e) {
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

    experience_menu.onclick = function(e) {
        experience.hidden = false;
        projects.hidden = true;
        about.hidden = true;
    };

    projects_menu.onclick = function(e) {
        experience.hidden = true;
        projects.hidden = false;
        about.hidden = true;
    };

    about_menu.onclick = function(e) {
        experience.hidden = true;
        projects.hidden = true;
        about.hidden = false;
    };

}(this, this.document));