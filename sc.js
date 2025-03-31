document.addEventListener('DOMContentLoaded', function () {
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const chatMessages = document.getElementById('chat-messages');

  sendButton.addEventListener('click', function () {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'outgoing');
      messageElement.textContent = messageText;

      chatMessages.appendChild(messageElement);

setTimeout(function () {
  const responseType = messageText.toLowerCase();
  let responseText;

  switch (responseType) {
    case 'hello': 
    case 'helloo':         
    case 'hi':
    case 'hii':
    case 'hiii':
      responseText = 'Hey, GATBOT here, how can I help you!!!<br>Type "ab" to know about the college.<br>Type "adm" for Admission queries.<br>Type "loc" for Location queries.<br>Type "dep" for Departmental queries.<br>Type "fee" for Fees queries.';
      break;
    case 'adm':
      responseText = 'Admission queries<br>Type "exm" for Entry Exams<br>';
      break;
    case 'loc':
      responseText = 'Location queries<br>Type "mf1" for main building(Floor1) map. <br>Type "mf2" for main building(Floor2) map. <br>Type "mf3" for main building(Floor3) map. <br>Type "mfg" for main building(groundFloor) map.';
      break;
    case 'dep':
      responseText ='Departmental queries<br>Type "CSE" for Computer Science Engineering.<br>Type "ISE" for Information Science Engineering.<br>Type "ECE" for Electronics and Communication Engineering.<br>Type "EEE" for Electricals and Electronics Engineering.'; 
      break;
    case 'fee':
      responseText ='Fee queries<br>Type "Y1" for 1st Year Fees.<br>Type "Y2" for 2nd Year Fees.<br>Type "Y3" for 3rd Year Fees.<br>Type "Y4" for 4th Year Fees.';
      break;
    case 'exm':
      responseText ='-CET <br>-COMED-K <br>-MANAGEMENT(Without Exam)<br>';
      break;
    case 'ab':
      responseText ='Global Academy of Technology (GAT), established in the year 2001, is one of the most sought-after engineering and management colleges in Bengaluru, Karnataka. Located in a sprawling campus of 10-acre land, GAT is a campus ideal for students to hone their academics in an atmosphere of optimism.<br>GAT provides ample opportunities for various co-curricular and extra-curricular activities for the students. The campus brims with more than 3500 students and 300 experienced staff involved in effective Teaching and Learning Process. Academics is supplemented with mentoring, peer learning and counselling to ensure holistic development of students. GAT has academic alliances with various institutions, industries, and research organizations to provide industry perspective to the students.<br>';
      break;
    case 'cse':
      responseText ='The Department of Computer Science at Global Academy of Technology is focused on disseminating the most updated and sophisticated technical knowledge to the students who enroll in the course. The Department has well experience and quality faculty to guide the students through their academic endeavours.The Department also has excellent classrooms and well-equipped laboratories along with a rich collection of books in the department library. ';
      break;
    case 'ece':
      responseText ='People across the world can connect in no time because of fast growth in the field of Electronics and Communication. To contribute to the global growth, Department of Electronics and Telecommunication Engineering at Global Academy of Technology came into existence in 2001 with the approval of AICTE. Since its commencement, the primary objective of the department has been to impart quality technical education to the students. Currently the department has strength of 650 students guided by a team of 35 devoted and diligent staff members. Undergraduate course of Electronics and Communication engineering covers the major fields of electronics like Digital Signal Processing, Embedded Systems, VLSI Technology Design, Microprocessor and Micro controllers, Microwave Engineering, RADARs, Digital Communication, Satellite Communication and Mobile Communication apart from basic engineering subjects.';
      break;
    case 'ise':
      responseText ='The ever-expanding role of IT in Education, Entertainment, Business Enterprises, Industry, Science, and Public & Private Sectors has influenced personal lives to a great extent. This has compelled the need to remain on the cutting edge of the technology to provide quick and easy access to information.ISE@GAT responds to this by producing graduates with much needed technical knowledge & skills capable of developing professional products and services. The friendly and supportive environment in the department encourages our students to develop innovative ideas for implementation.';
      break;
    case 'eee':
      responseText =' The department of Electrical and Electronics Engineering is a field of study that is growing rapidly with advancements that plays an increasingly important role in making a positive contribution to the betterment of society and the human condition. Its sound foundation is the plinth on which new branches have emerged rapidly. We strive to be in the forefront in educating our students in fundamentals as well as emerging technologies. Our aim is to prepare students for the continually changing, high-technology world of electrical engineering, by providing solid theoretical foundation in science, mathematics, and engineering with substantial hands-on laboratory experience, and a curriculum that challenges students.';
      break;
    case 'y1':
      responseText ='Tution Fees:Rs.90,200<br>Hostel Fees:RS80,000';
      break;
    case 'y2':
      responseText ='Tution Fees:Rs.93,200<br>Hostel Fees:RS80,000 ';
      break;
    case 'y3':
      responseText ='Tution Fees:Rs.91,200<br>Hostel Fees:RS80,000 ';
      break;
    case 'y4':
      responseText ='Tution Fees:Rs.89,200<br>Hostel Fees:RS80,000 ';
      break;

  case 'mf1':
       responseText ='<img src="1st floor.jpg" alt="ground floor " style="width: 450px; height: auto;">';
      break;
  case 'mf2':
      responseText ='<img src="2nd floor.jpg" alt="ground floor " style="width: 450px; height: auto;">';
      break;
  case 'mf3':
       responseText ='<img src="3rd floor.jpg" alt="ground floor " style="width: 450px; height: auto;">';
      break;
  case 'mfg':
      responseText ='<img src="ground floor.jpg" alt="ground floor " style="width: 450px; height: auto;">';
      break;

    default:
      responseText = 'Sorry fo the inconvinenience.<BR>Contact Helpdesk<BR>+91-95915-10211 <BR>+91-91082-75635 <BR>+91-92431-90105 <BR>+91-80-28603158';
  }

  const responseElement = document.createElement('div');
  responseElement.classList.add('message', 'incoming');
  responseElement.innerHTML = responseText; // Use innerHTML instead of textContent

  chatMessages.appendChild(responseElement);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}, 0);


      messageInput.value = '';
    }
  });

  messageInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      sendButton.click();
      event.preventDefault();
    }
  });
});
