const createRoomForm = document.getElementById('createRoomForm');
const joinRoomForm = document.getElementById('joinRoomForm');
const roomArea = document.getElementById('roomArea');
const roomTitle = document.getElementById('roomTitle');
const seatingChart = document.getElementById('seatingChart');
const drawButton = document.getElementById('drawButton');
const winnerName = document.getElementById('winnerName');

let currentRoom = null;
let students = [];

createRoomForm.addEventListener('submit', e => {
  e.preventDefault();

  const roomName = document.getElementById('roomName').value.trim();
  const roomCode = document.getElementById('roomCode').value.trim();

  if (!roomName || !roomCode) return alert('Preencha os campos para criar a sala.');

  currentRoom = { name: roomName, code: roomCode };
  students = [];

  roomTitle.textContent = `${roomName} (${roomCode})`;
  seatingChart.innerHTML = '';
  winnerName.textContent = '';
  roomArea.style.display = 'block';

  alert(`Sala "${roomName}" criada com sucesso! Agora os alunos podem entrar usando o código.`);
  createRoomForm.reset();
});

joinRoomForm.addEventListener('submit', e => {
  e.preventDefault();

  if (!currentRoom) return alert('Nenhuma sala criada ainda.');

  const studentName = document.getElementById('studentName').value.trim();
  const joinCode = document.getElementById('joinRoomCode').value.trim();

  if (!studentName || !joinCode) return alert('Preencha os campos para entrar na sala.');

  if (joinCode !== currentRoom.code) return alert('Código da sala incorreto.');

  if (students.length >= 30) return alert('Sala cheia! Limite de 30 alunos atingido.');

  if (students.find(s => s.name.toLowerCase() === studentName.toLowerCase()))
    return alert('Aluno já está na sala.');

  students.push({ name: studentName });
  updateSeatingChart();
  joinRoomForm.reset();
});

function updateSeatingChart() {
  seatingChart.innerHTML = '';
  students.forEach((student, index) => {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.textContent = student.name;
    seatingChart.appendChild(seat);
  });
}

drawButton.addEventListener('click', () => {
  if (students.length === 0) {
    alert('Nenhum aluno na sala para sortear.');
    return;
  }
  const randomIndex = Math.floor(Math.random() * students.length);
  const selectedStudent = students[randomIndex];
  winnerName.textContent = `Aluno sorteado: ${selectedStudent.name}`;
});
