const books = [
    {
      id: 1,
      title: "The Other Wind",
      author: "Ursula Le Guin",
      year: 2020,
      image: "image/book1.png",
      color: "#8B5A2B",
      width: 50,
      cover: "image/TheOtherWind(1stEd).jpg",
      wiki: "https://en.wikipedia.org/wiki/The_Other_Wind",
      note: "One of the most charming fantasy book I had ever read. I loved the chapter 'Dragonfly' especially. It's a story of how a woman finds her true name."
    },
    {
      id: 2,
      title: "To the Light House",
      author: "Virginia Woolf",
      year: 2018,
      image: "image/book3.png",
      color: "#5B6C8F",
      width: 44,
      cover: "image/ToTheLighthouse.jpg",
      wiki: "https://en.wikipedia.org/wiki/To_the_Lighthouse",
      note: "A book that always gives me a strange power when I feel depressed."
    },
    {
      id: 3,
      title: "The Silmarillion",
      author: "J.R.R. Tolkien",
      year: 2015,
      image: "image/book1.png",
      color: "#4A5568",
      width: 42,
      cover: "image/Silmarillion.png",
      wiki: "https://en.wikipedia.org/wiki/The_Silmarillion",
      note: "A tale of the damaged world and the hope that lingers. It is the book that shaped my view toward my life."
    },
    {
        id: 4,
        title: "Fire From Heaven",
        author: "Mary Renault",
        year: 2022,
        image: "image/book1.png",
        color: "#4A5568",
        width: 42,
        cover: "image/Fire_from_Heaven_cover.jpg",
        wiki: "https://en.wikipedia.org/wiki/Fire_from_Heaven",
        note: "Fire From Heaven is definitely not the most accurate history fiction on Alexander III of Macedon. But it is extremely charming and cruel that makes me read it over and over."
    },
    {
        id: 5,
        title: "Memoirs of Hadrian",
        author: "Marguerite Yourcenar",
        year: 2022,
        image: "image/book2.png",
        color: "#4A5568",
        width: 42,
        cover: "image/Memoirs_Hadrian.jpg",
        wiki: "https://en.wikipedia.org/wiki/Memoirs_of_Hadrian",
        note: "I actually never finished reading this book. I enjoyed starting from the middle and read several chapters."
    },
    {
        id: 6,
        title: "The Stree Of Crocodiles",
        author: "Bruno Schulz",
        year: 2018,
        image: "image/book1.png",
        color: "#4A5568",
        width: 42,
        cover: "image/TheStreetOfCrocodiles.jpg",
        wiki: "https://en.wikipedia.org/wiki/The_Street_of_Crocodiles",
        note: "Reading this book is like day dreaming."
    },
    {
        id: 7,
        title: "A Song Of Ice and Fire",
        author: "George R.R. Martin",
        year: 2016,
        image: "image/book3.png",
        color: "#4A5568",
        width: 42,
        cover: "image/ASOIAF.jpg",
        wiki: "https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire",
        note: "I would literally do anything if Martin releases the 6th book (just kidding)."
    },
    {
        id: 8,
        title: "Jin Ping Mei (金瓶梅)",
        author: "Lan Ling Xiao Xiao Sheng (兰陵笑笑生)",
        year: 2025,
        image: "image/book1.png",
        color: "#4A5568",
        width: 42,
        cover: "image/IMG_jinping.JPG",
        wiki: "https://en.wikipedia.org/wiki/Jin_Ping_Mei",
        note: "Another book that I never finished reading from the beginning to the end. It is an extraordinarily cruel story of death and desires."
    },
    {
        id: 9,
        title: "Colours in the Steel",
        author: "Tom Holt",
        year: 2023,
        image: "image/book2.png",
        color: "#4A5568",
        width: 42,
        cover: "image/Colous_in_the_Steel.webp",
        wiki: "https://parkerland.fandom.com/wiki/Colours_in_the_Steel",
        note: "A book full of technical details."
    },
    {
        id: 10,
        title: "Unfinished Tales",
        author: "J.R.R. Tolkien",
        year: 2021,
        image: "image/book1.png",
        color: "#4A5568",
        width: 42,
        cover: "image/UnfinishedTales.JPG",
        wiki: "https://en.wikipedia.org/wiki/Unfinished_Tales",
        note: "I add this book into my favorite list because the chapter named Aldarion and Erendis: The Mariner's Wife is just imcomparable. It is more like a family drama in a fantasy book. But I really loved how Tolkien depict the major characters (of how they fell in love while hating each other) and the universal dilemma of women in their family life as wife and daughter."
    }
  ];

  
const bookshelf = document.getElementById("bookshelf");
const detailPanel = document.getElementById("book-detail");
const lampToggle = document.getElementById("lamp-toggle");
const body = document.body;

let lastFocusedBook = null;

function showBookDetail(book, triggerEl = null) {
  if (triggerEl) {
    lastFocusedBook = triggerEl;
  }

  detailPanel.innerHTML = `
    <button class="close-btn" type="button" aria-label="Close book details">&times;</button>
    <div class="book-detail-grid">
      <div class="book-detail-left">
        <img
          class="book-detail-cover"
          src="${book.cover}"
          alt="Cover of ${book.title}"
        >
      </div>

      <div class="book-detail-right">
        <h2 class="detail-title" id="book-detail-title">${book.title}</h2>
        <p class="detail-year"><strong>Year Read:</strong> ${book.year}</p>

        <div class="detail-note">
          <h3>My Thoughts</h3>
          <p>${book.note}</p>
        </div>

        <a
          class="wiki-button"
          href="${book.wiki || '#'}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to learn more
        </a>
      </div>
    </div>
  `;

  detailPanel.classList.add("active");

  const closeBtn = detailPanel.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeDetail);
  closeBtn.focus();
}


function closeDetail() {
  detailPanel.classList.remove("active");
  const allBooks = document.querySelectorAll(".book");
  allBooks.forEach((b) => b.classList.remove("active"));

  detailPanel.innerHTML = `
    <h2 id="book-detail-title">Select a Book</h2>
    <p>Click on the book to see detailed information</p>
  `;

  if (lastFocusedBook) {
    lastFocusedBook.focus();
  }
}

document.addEventListener("click", (e) => {
  const clickedBook = e.target.closest(".book");
  const clickedDetail = e.target.closest("#book-detail");

  if (!clickedBook && !clickedDetail) {
    closeDetail();
  }

  if (e.key === "Escape" && detailPanel.classList.contains("active")) {
    closeDetail();
  }
});


function renderBooks() {
  bookshelf.innerHTML = "";

  books.forEach((book) => {
    const bookEl = document.createElement("button");
    bookEl.type = "button";
    bookEl.setAttribute("aria-label", `Open details for ${book.title}`);
    bookEl.classList.add("book");
    bookEl.style.width = `${book.width}px`;

    if (book.image) {
      bookEl.style.backgroundImage = `url('${book.image}')`;
      bookEl.style.backgroundSize = "100% 100%";
      bookEl.style.backgroundRepeat = "no-repeat";
      bookEl.style.backgroundPosition = "center";
    } else {
      bookEl.style.backgroundColor = book.color;
    }

    const titleEl = document.createElement("span");
    titleEl.classList.add("book-title");
    titleEl.textContent = book.title;
    bookEl.appendChild(titleEl);

    bookEl.addEventListener("click", () => {
      showBookDetail(book, bookEl);
      setActiveBook(bookEl);
    });

    bookshelf.appendChild(bookEl);
  });
}

function setActiveBook(currentBookEl) {
  const allBooks = document.querySelectorAll(".book");
  allBooks.forEach((book) => {
    book.classList.remove("active");
  });

  currentBookEl.classList.add("active");
}

function toggleLamp() {
  if (body.classList.contains("lamp-on")) {
    body.classList.remove("lamp-on");
    body.classList.add("lamp-off");
    lampToggle.setAttribute("aria-label", "Turn lamp on");
  } else {
    body.classList.remove("lamp-off");
    body.classList.add("lamp-on");
    lampToggle.setAttribute("aria-label", "Turn lamp off");
  }
}

lampToggle.addEventListener("click", toggleLamp);
lampToggle.setAttribute("aria-label", "Turn lamp off");

renderBooks();


const audioToggle = document.getElementById("audio-toggle");
const bgm = document.getElementById("bgm");

function playMusic() {
  bgm.play()
    .then(() => {
      audioToggle.classList.remove("paused");
      audioToggle.classList.add("playing");
      audioToggle.setAttribute("aria-label", "Pause background music");
    })
    .catch((error) => {
      console.log("Audio playback failed:", error);
    });
}

function stopMusic() {
  bgm.pause();
  bgm.currentTime = 0;
  audioToggle.classList.remove("playing");
  audioToggle.classList.add("paused");
  audioToggle.setAttribute("aria-label", "Play background music");
}

function toggleMusic() {
  if (bgm.paused) {
    playMusic();
  } else {
    stopMusic();
  }
}

audioToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMusic();
});

audioToggle.classList.add("paused");
audioToggle.setAttribute("aria-label", "Play background music");