// ===== TOGGLE NAVBAR =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));


// ===== DATA =====
const tutorialsData = {
  coding: {
    java: [
      { title: "Java Basics (W3Schools)", link: "https://www.w3schools.com/java/" },
      { title: "Java Full Course (YouTube)", link: "https://www.youtube.com/watch?v=grEKMHGYyns" },
      { title: "OOP Concepts in Java", link: "https://www.javatpoint.com/java-oops-concepts" },
      { title: "Spring Boot Tutorial", link: "https://spring.io/guides" },
      { title: "Java Projects", link: "https://www.geeksforgeeks.org/java-projects/" },
      { title: "Advanced Java (Oracle Docs)", link: "https://docs.oracle.com/javase/tutorial/" },
      { title: "Java Interview Prep", link: "https://www.interviewbit.com/java-interview-questions/" }
    ],

    python: [
      { title: "Python Basics", link: "https://www.w3schools.com/python/" },
      { title: "Python for Beginners", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
      { title: "NumPy Tutorial", link: "https://numpy.org/learn/" },
      { title: "Data Science with Python", link: "https://www.coursera.org/specializations/data-science-python" },
      { title: "Python Projects", link: "https://www.geeksforgeeks.org/python-projects/" },
      { title: "Machine Learning with Python", link: "https://scikit-learn.org/stable/tutorial/index.html" },
      { title: "Flask Web Dev", link: "https://flask.palletsprojects.com/en/stable/tutorial/" }
    ],

    javascript: [
      { title: "JavaScript Basics", link: "https://www.w3schools.com/js/" },
      { title: "JS Full Course", link: "https://www.youtube.com/watch?v=PkZNo7MFNFg" },
      { title: "Async JavaScript", link: "https://www.youtube.com/watch?v=PoRJizFvM7s" },
      { title: "React.js Tutorial", link: "https://react.dev/learn" },
      { title: "JavaScript Projects", link: "https://www.freecodecamp.org/news/javascript-projects-for-beginners/" },
      { title: "Node.js Crash Course", link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
      { title: "ES6 Features", link: "https://www.javascripttutorial.net/es6/" }
    ],

    c: [
      { title: "C Language Basics", link: "https://www.w3schools.com/c/" },
      { title: "C Programming Full Course", link: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
      { title: "Pointers in C", link: "https://www.geeksforgeeks.org/pointers-in-c-and-c-set-1-introduction-arithmetic-and-array/" },
      { title: "File Handling in C", link: "https://www.programiz.com/c-programming/c-file-input-output" },
      { title: "C Projects", link: "https://www.geeksforgeeks.org/c-projects/" },
      { title: "Structures and Unions", link: "https://www.tutorialspoint.com/cprogramming/c_structures.htm" }
    ],

    cpp: [
      { title: "C++ Basics", link: "https://www.w3schools.com/cpp/" },
      { title: "C++ Full Course", link: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" },
      { title: "OOP in C++", link: "https://www.geeksforgeeks.org/object-oriented-programming-in-cpp/" },
      { title: "STL Guide", link: "https://www.geeksforgeeks.org/the-c-standard-template-library-stl/" },
      { title: "C++ Projects", link: "https://www.cplusplus.com/forum/articles/12974/" },
      { title: "Advanced C++", link: "https://cplusplus.com/doc/tutorial/" }
    ],

    csharp: [
      { title: "C# Basics", link: "https://www.w3schools.com/cs/" },
      { title: "C# Full Course (YouTube)", link: "https://www.youtube.com/watch?v=GhQdlIFylQ8" },
      { title: "C# OOP Concepts", link: "https://www.geeksforgeeks.org/c-sharp-oops-concepts/" },
      { title: "ASP.NET Tutorial", link: "https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet" },
      { title: "C# Projects", link: "https://www.geeksforgeeks.org/csharp-projects/" },
      { title: "LINQ Tutorial", link: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/" }
    ],

    php: [
      { title: "PHP Basics", link: "https://www.w3schools.com/php/" },
      { title: "PHP Full Course (YouTube)", link: "https://www.youtube.com/watch?v=OK_JCtrrv-c" },
      { title: "MySQL with PHP", link: "https://www.w3schools.com/php/php_mysql_intro.asp" },
      { title: "Laravel Framework", link: "https://laravel.com/docs" },
      { title: "PHP Projects", link: "https://www.geeksforgeeks.org/php-projects/" },
      { title: "PHP Security", link: "https://www.php.net/manual/en/security.php" }
    ],

    kotlin: [
      { title: "Kotlin Basics", link: "https://kotlinlang.org/docs/home.html" },
      { title: "Kotlin for Android", link: "https://developer.android.com/kotlin" },
      { title: "Kotlin Full Course", link: "https://www.youtube.com/watch?v=EExSSotojVI" },
      { title: "Kotlin Coroutines", link: "https://kotlinlang.org/docs/coroutines-overview.html" },
      { title: "Kotlin Projects", link: "https://github.com/topics/kotlin-project" }
    ]
  },

  design: {
    uiux: [
      { title: "UI/UX Basics", link: "https://www.interaction-design.org/literature/topics/ui-design" },
      { title: "Figma UI Design", link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8" },
      { title: "Adobe XD for Beginners", link: "https://www.youtube.com/watch?v=68w2VwalD5w" },
      { title: "Canva for Beginners", link: "https://www.canva.com/learn/design-elements/" },
      { title: "UX Portfolio Tips", link: "https://uxdesign.cc/" }
    ]
  },

  communication: {
    softskills: [
      { title: "Public Speaking", link: "https://www.ted.com/topics/public+speaking" },
      { title: "Effective Communication", link: "https://www.coursera.org/learn/wharton-communication-skills" },
      { title: "Body Language Skills", link: "https://www.youtube.com/watch?v=VV1cMmCKxmY" },
      { title: "Writing Skills", link: "https://www.edx.org/learn/english" },
      { title: "Leadership Skills", link: "https://www.coursera.org/specializations/leadership" }
    ]
  },

  career: {
    finance: [
      { title: "Personal Finance 101", link: "https://www.investopedia.com/personal-finance-4689740" },
      { title: "Career Planning", link: "https://www.coursera.org/learn/career-decisions" },
      { title: "Resume Writing", link: "https://www.linkedin.com/learning/topics/resume-writing" },
      { title: "Interview Preparation", link: "https://www.geeksforgeeks.org/how-to-prepare-for-an-interview/" },
      { title: "Time Management", link: "https://www.mindtools.com/pages/main/newMN_HTE.htm" }
    ]
  }
};


// ===== MODAL HANDLER =====
function showTutorials(category) {
  const modal = document.getElementById("tutorialModal");
  const title = document.getElementById("modal-title");
  const content = document.getElementById("modal-content");

  const categoryData = tutorialsData[category];
  if (!categoryData) return;

  title.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Tutorials`;
  content.innerHTML = "";

  Object.keys(categoryData).forEach((subcat) => {
    const subHeader = document.createElement("h3");
    subHeader.textContent = subcat.charAt(0).toUpperCase() + subcat.slice(1);
    content.appendChild(subHeader);

    categoryData[subcat].forEach((tut) => {
      const div = document.createElement("div");
      div.classList.add("tutorial-item");
      div.innerHTML = `<a href="${tut.link}" target="_blank">🔗 ${tut.title}</a>`;
      content.appendChild(div);
    });

    content.appendChild(document.createElement("hr"));
  });

  modal.classList.add("show");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("tutorialModal");
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 300);
}

window.onclick = function (event) {
  const modal = document.getElementById("tutorialModal");
  if (event.target === modal) closeModal();
};
// Contact form submission (demo)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // For now, just show a thank-you message
  document.getElementById("responseMessage").innerText = `Thank you, ${name}! Your message has been sent.`;
  document.getElementById("contactForm").reset();
});
