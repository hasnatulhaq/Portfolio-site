function filterProjects(type) {
    let projects = document.querySelectorAll('.project-box');

    projects.forEach((project) => {
        if (project.classList.contains(type) || type === 'all') {
            project.classList.remove('hidden');
        } else {
            project.classList.add('hidden');
        }
    });
}

// Initialize with all projects visible
filterProjects('all');
