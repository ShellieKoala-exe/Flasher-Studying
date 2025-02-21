// Sample Data
let flashcards = [];
let currentUser = null;

// DOM Elements
const authSection = document.getElementById('auth-section');
const appSection = document.getElementById('app-section');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const createSection = document.getElementById('create-section');
const studySection = document.getElementById('study-section');
const settingsSection = document.getElementById('settings-section');
const flashcardForm = document.getElementById('flashcard-form');
const flashcardDisplay = document.getElementById('flashcard-display');
const flashcardQuestion = document.getElementById('flashcard-question');
const flashcardAnswer = document.getElementById('flashcard-answer');
const flipCardButton = document.getElementById('flip-card');
const nextCardButton = document.getElementById('next-card');
const themeSettings = document.getElementById('theme-settings');
const fontSizeSelect = document.getElementById('font-size');

// Event Listeners
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  login(username, password);
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('new-username').value;
  const password = document.getElementById('new-password').value;
  signup(username, password);
});

signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

document.getElementById('study-mode').addEventListener('click', () => {
  createSection.classList.add('hidden');
  settingsSection.classList.add('hidden');
  studySection.classList.remove('hidden');
  loadFlashcard();
});

document.getElementById('create-flashcard').addEventListener('click', () => {
  studySection.classList.add('hidden');
  settingsSection.classList.add('hidden');
  createSection.classList.remove('hidden');
});

document.getElementById('settings').addEventListener('click', () => {
  studySection.classList.add('hidden');
  createSection.classList.add('hidden');
  settingsSection.classList.remove('hidden');
});

document.getElementById('logout').addEventListener('click', () => {
  currentUser = null;
  authSection.classList.remove('hidden');
  appSection.classList.add('hidden');
});

flashcardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;
  flashcards.push({ question, answer });
  flashcardForm.reset();
});

flipCardButton.addEventListener('click', () => {
  flashcardAnswer.classList.toggle('hidden');
});

nextCardButton.addEventListener('click', () => {
  loadFlashcard();
});

themeSettings.addEventListener('change', (e) => {
  document.body.className = e.target.value === 'dark' ? 'dark-theme' : '';
});

fontSizeSelect.addEventListener('change', (e) => {
  document.body.style.fontSize = e.target.value === 'small' ? '14px' : e.target.value === 'medium' ? '16px' : '18px';
});

// Functions
function login(username, password) {
  // Simulate login
  currentUser = username;
  authSection.classList.add('hidden');
  appSection.classList.remove('hidden');
}

function signup(username, password) {
  // Simulate signup
  currentUser = username;
  authSection.classList.add('hidden');
  appSection.classList.remove('hidden');
}

function loadFlashcard() {
  if (flashcards.length === 0) {
    flashcardQuestion.textContent = 'No flashcards available.';
    flashcardAnswer.textContent = '';
    return;
  }
  const randomIndex = Math.floor(Math.random() * flashcards.length);
  flashcardQuestion.textContent = flashcards[randomIndex].question;
  flashcardAnswer.textContent = flashcards[randomIndex].answer;
  flashcardAnswer.classList.add('hidden');
}
