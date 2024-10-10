document.addEventListener('DOMContentLoaded', function() {
   // Select the links and sections
   const aboutLink = document.querySelector('a[href="#about"]');
   const projectsLink = document.querySelector('a[href="#projects"]');
   const contactmeLink = document.querySelector('a[href="#contactme"]');
   
   const aboutSection = document.getElementById('about');
   const projectsSection = document.getElementById('projects');
   const contactmeSection = document.getElementById('contactme');

   // Function to toggle visibility of a section
   function toggleSection(section) {
      if (section.classList.contains('hidden')) {
         section.classList.remove('hidden');
         console.log(`Showing ${section.id}`);
      } else {
         section.classList.add('hidden');
         console.log(`Hiding ${section.id}`);
      }
   }

   // Event listener for the "About" link
   aboutLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      console.log('About link clicked');

      // Show or hide the "About Me" section
      toggleSection(aboutSection);

      // Optionally hide other sections
      if (!projectsSection.classList.contains('hidden')) {
         projectsSection.classList.add('hidden');
         console.log('Hiding Projects section');
      }
      if (!contactmeSection.classList.contains('hidden')) {
         contactmeSection.classList.add('hidden');
         console.log('Hiding Contact Me section');
      }
   });

   // Event listener for the "Projects" link
   projectsLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      console.log('Projects link clicked');

      // Show or hide the "Projects" section
      toggleSection(projectsSection);

      // Optionally hide other sections
      if (!aboutSection.classList.contains('hidden')) {
         aboutSection.classList.add('hidden');
         console.log('Hiding About section');
      }
      if (!contactmeSection.classList.contains('hidden')) {
         contactmeSection.classList.add('hidden');
         console.log('Hiding Contact Me section');
      }
   });

   // Event listener for the "Contact Me" link
   contactmeLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      console.log('Contact Me link clicked');

      // Show or hide the "Contact Me" section
      toggleSection(contactmeSection);

      // Optionally hide other sections
      if (!aboutSection.classList.contains('hidden')) {
         aboutSection.classList.add('hidden');
         console.log('Hiding About section');
      }
      if (!projectsSection.classList.contains('hidden')) {
         projectsSection.classList.add('hidden');
         console.log('Hiding Projects section');
      }
   });

   // Event listener for the "Download CV" button
   document.getElementById('download-cv').addEventListener('click', function() {
      console.log('Download CV button clicked');

      // URL of the CV file
      const cvUrl = 'cv.pdf'; // Ensure this path is correct
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'cv.pdf'; // Name of the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   });
});
