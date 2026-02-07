document.addEventListener('DOMContentLoaded', function() {
    
    // --- INITIALIZE AOS ---
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // --- ADMISSION FORM LOGIC ---
    const admissionForm = document.getElementById('admissionForm');
    const studentPhoto = document.getElementById('studentPhoto');
    const photoPreview = document.getElementById('photoPreview');
    const studentNameInput = document.getElementById('studentName');
    const fatherNameInput = document.getElementById('fatherName');

    // Photo Preview Logic
    if (studentPhoto && photoPreview) {
        studentPhoto.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    photoPreview.innerHTML = `<img src="${e.target.result}" alt="Student Photo" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`;
                }
                reader.readAsDataURL(file);
            }
        });
    }

    // Dynamic Pledge Names
    if (studentNameInput) {
        studentNameInput.addEventListener('input', function() {
            const val = this.value || '________________';
            const pledgeChildName = document.getElementById('pledgeChildName');
            const collegePledgeStudentName = document.getElementById('collegePledgeStudentName');
            if (pledgeChildName) pledgeChildName.textContent = val;
            if (collegePledgeStudentName) collegePledgeStudentName.textContent = val;
        });
    }

    if (fatherNameInput) {
        fatherNameInput.addEventListener('input', function() {
            const val = this.value || '________________';
            const pledgeParentName = document.getElementById('pledgeParentName');
            if (pledgeParentName) pledgeParentName.textContent = val;
        });
    }

    // Form Submission
    if (admissionForm) {
        admissionForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const docUpload = document.getElementById('documentUpload');
            const uploadError = document.getElementById('uploadError');
            
            if (docUpload && (!docUpload.files || docUpload.files.length === 0)) {
                if (uploadError) uploadError.style.display = 'block';
                docUpload.classList.add('is-invalid');
                return;
            } else if (docUpload) {
                if (uploadError) uploadError.style.display = 'none';
                docUpload.classList.remove('is-invalid');
            }

            // Collect Data
            const studentClassElement = document.getElementById('studentClass');
            const studentClass = studentClassElement ? studentClassElement.value : 'School';
            const studentData = {
                studentClass: studentClass,
                studentName: document.getElementById('studentName').value,
                fatherName: document.getElementById('fatherName').value,
                surnameMotherTongue: document.getElementById('surnameMotherTongue').value,
                fatherCnic: document.getElementById('fatherCnic').value,
                dob: document.getElementById('dob').value,
                pob: document.getElementById('pob').value,
                age: document.getElementById('age').value,
                bFormNo: document.getElementById('bFormNo').value,
                gender: document.getElementById('gender').value,
                religion: document.getElementById('religion').value,
                occupation: document.getElementById('occupation').value,
                muetEmployee: document.getElementById('muetEmployee').value,
                designation: document.getElementById('designation').value,
                department: document.getElementById('department').value,
                permanentAddress: document.getElementById('permanentAddress').value,
                rollNumber: (studentClass === 'BABY DAY CARE' ? 'BDC-' : (studentClass.includes('Class 11') || studentClass.includes('Class 12') ? 'COL-' : 'MU-')) + Math.floor(1000 + Math.random() * 9000),
                submissionDate: new Date().toLocaleDateString(),
                fileName: docUpload && docUpload.files[0] ? docUpload.files[0].name : 'No file'
            };

            // Save to LocalStorage
            localStorage.setItem('studentData', JSON.stringify(studentData));
            
            // Redirect to Dashboard
            alert('Application Submitted Successfully!');
            window.location.href = 'dashboard.html';
        });
    }

    // --- DASHBOARD LOGIC ---
    const detailsTable = document.getElementById('detailsTable');
    if (detailsTable) {
        const data = JSON.parse(localStorage.getItem('studentData'));

        if (data) {
            if(document.getElementById('sidebarName')) document.getElementById('sidebarName').textContent = data.studentName;
            if(document.getElementById('sidebarClass')) document.getElementById('sidebarClass').textContent = data.studentClass;
            if(document.getElementById('welcomeName')) document.getElementById('welcomeName').textContent = data.studentName.split(' ')[0];
            if(document.getElementById('dashRoll')) document.getElementById('dashRoll').textContent = '#' + data.rollNumber;

            let rows = `
                <tr><th width="40%">${data.studentClass === 'BABY DAY CARE' ? 'Child Name' : 'Student Name'}</th><td>${data.studentName}</td></tr>
                <tr><th>Father's Name</th><td>${data.fatherName}</td></tr>
                <tr><th>Class Seeking Admission</th><td>${data.studentClass}</td></tr>
                <tr><th>Roll Number</th><td>${data.rollNumber}</td></tr>
                <tr><th>Date of Birth</th><td>${data.dob}</td></tr>
                <tr><th>Age</th><td>${data.age}</td></tr>
                <tr><th>Gender</th><td>${data.gender}</td></tr>
                <tr><th>B.Form No.</th><td>${data.bFormNo}</td></tr>
                <tr><th>Father's CNIC</th><td>${data.fatherCnic}</td></tr>
                <tr><th>Religion</th><td>${data.religion}</td></tr>
                <tr><th>MUET Employee</th><td>${data.muetEmployee}</td></tr>
                <tr><th>Uploaded Document</th><td><i class="fas fa-file-pdf me-2"></i>${data.fileName}</td></tr>
                <tr><th>Submission Date</th><td>${data.submissionDate}</td></tr>
            `;

            detailsTable.innerHTML = rows;
        }
    }

    // --- CONTACT FORM ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // --- CONDITIONAL VISIBILITY FOR MUET EMPLOYEES ---
    const muetEmployeeSelect = document.getElementById('muetEmployee');
    const designationField = document.getElementById('designationField');
    const departmentField = document.getElementById('departmentField');
    const muetDocBullet = document.getElementById('muetDocBullet');

    if (muetEmployeeSelect) {
        muetEmployeeSelect.addEventListener('change', function() {
            const isVisible = this.value === 'Yes';
            if (designationField) designationField.style.display = isVisible ? 'block' : 'none';
            if (departmentField) departmentField.style.display = isVisible ? 'block' : 'none';
            if (muetDocBullet) muetDocBullet.style.display = isVisible ? 'list-item' : 'none';
        });
    }

    // --- DYNAMIC FORM ROUTING ---
    const nextBtn1 = document.getElementById('nextBtn1');
    const studentClassSelect = document.getElementById('studentClass');

    if (nextBtn1 && studentClassSelect) {
        nextBtn1.addEventListener('click', function() {
            const selectedClass = studentClassSelect.value;
            if (!selectedClass) {
                alert('Please select a class first.');
                return;
            }

            if (selectedClass === 'BABY DAY CARE') {
                window.location.href = 'admission-daycare.html';
            } else if (selectedClass.includes('Class 11') || selectedClass.includes('Class 12')) {
                window.location.href = 'admission-college.html';
            } else {
                window.location.href = 'admission-school.html';
            }
        });
    }
});
