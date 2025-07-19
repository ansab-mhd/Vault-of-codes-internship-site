function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim().toLowerCase();
  const resultBox = document.getElementById('result');

  if (!id || !id.includes('@')) {
    return showToast('❌ Please enter a valid Email address', 'error');
  }

  showSpinner(true);

  setTimeout(() => {
    resultBox.innerHTML = ''; // clear previous


    // List of valid students (add more objects for more students)
    const students = [
      {
        name: "Mohammed Ansab uk",
        email: "Ansab38@gmail.com",
        mobile: "9279547211",
        domain: "Python web development",
        college: "APJ Abdul Kalam Technological University",
        start: "01 June 2025",
        duration: "1 Month",
        photo: "https://via.placeholder.com/130", // Replace with your photo link if you have one!
        assignments: [true, true, true, true],
        certificate: "https://your-certificate-link-here.com" // Replace with real link
      }
    ];

    // Find student by case-insensitive email
    const student = students.find(s => s.email.toLowerCase() === id);
    if (student) {
      const html = `
        <div class="card">
          <h3>${student.name}</h3>
          <p>Email: ${student.email}</p>
          <p>Mobile: ${student.mobile}</p>
          <p>Domain: ${student.domain}</p>
          <p>College: ${student.college}</p>
          <p>Start Date: ${student.start}</p>
          <p>Duration: ${student.duration}</p>
          <h4>Assignment Status</h4>
          <div class="assignment-status">
            ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
          </div>
          <p>Status: Completed</p>
          <a href="${student.certificate}" target="_blank">View Certificate</a>
        </div>
      `;
      resultBox.innerHTML = html;
      showToast('✅ Verified successfully!', 'success');
    } else {
      showToast('❌ Invalid Email entered!', 'error');
    }

    showSpinner(false);
  }, 1000);
}

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.style.backgroundColor = type === 'error' ? '#e74c3c' : '#27ae60';
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').classList.toggle('hidden', !show);
}

function toggleMode() {
  document.body.classList.toggle('dark');
}