const courses = [
  {
    subject: 'CSE',
    number: 110,
    title: 'Introduction to Programming',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce students to programming...',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 130,
    title: 'Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course introduces students to the World Wide Web...',
    technology: ['HTML', 'CSS'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 111,
    title: 'Programming with Functions',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'CSE 111 students become more organized, efficient...',
    technology: ['Python'],
    completed: true
  },
  {
    subject: 'CSE',
    number: 210,
    title: 'Programming with Classes',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course will introduce the notion of classes and objects...',
    technology: ['C#'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 131,
    title: 'Dynamic Web Fundamentals',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience in Web Fundamentals...',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: true
  },
  {
    subject: 'WDD',
    number: 231,
    title: 'Frontend Web Development I',
    credits: 2,
    certificate: 'Web and Computer Programming',
    description: 'This course builds on prior experience with Dynamic Web...',
    technology: ['HTML', 'CSS', 'JavaScript'],
    completed: false
  }
];
// can I also add other classes that I have taken? Could also repeat this type of
// code for other certificates or for whole degree to show progress

const courseSection = document.querySelector(".web-courses ul");
const totalCreditsDisplay = document.createElement("p");
totalCreditsDisplay.id = "creditTotal";
document.querySelector(".web-courses").appendChild(totalCreditsDisplay);

function renderCourses(filteredCourses) {
  courseSection.innerHTML = "";

  let totalCredits = 0;
  filteredCourses.forEach((course) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "course-link";
    a.textContent = `${course.subject} ${course.number}: ${course.title}`;
    a.href = "#"; 

    if (course.completed) {
      a.classList.add("completed");
    }

    li.appendChild(a);
    courseSection.appendChild(li);

    totalCredits += course.credits;
  });

  totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
}

function filterCourses(type) {
  if (type === "All") {
    renderCourses(courses);
  } else {
    const filtered = courses.filter((course) => course.subject === type);
    renderCourses(filtered);
  }
}

// Initial render
renderCourses(courses);

// Buttons
const allBtn = document.createElement("button");
allBtn.textContent = "All Courses";
allBtn.addEventListener("click", () => filterCourses("All"));

const wddBtn = document.createElement("button");
wddBtn.textContent = "WDD Courses";
wddBtn.addEventListener("click", () => filterCourses("WDD"));

const cseBtn = document.createElement("button");
cseBtn.textContent = "CSE Courses";
cseBtn.addEventListener("click", () => filterCourses("CSE"));

const filterContainer = document.createElement("div");
filterContainer.className = "filter-buttons";
filterContainer.append(allBtn, wddBtn, cseBtn);
document.querySelector(".web-courses").insertBefore(filterContainer, courseSection);