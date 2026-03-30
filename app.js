// Basic local identity
const clientId = Math.random().toString(36).slice(2, 10);

const playerNameInput = document.getElementById("playerName");
const roomCodeInput = document.getElementById("roomCode");
const joinRoomBtn = document.getElementById("joinRoomBtn");
const connectionStatus = document.getElementById("connectionStatus");

const gameSection = document.getElementById("gameSection");
const roomLabel = document.getElementById("roomLabel");
const hostLabel = document.getElementById("hostLabel");
const youLabel = document.getElementById("youLabel");
const questionCountLabel = document.getElementById("questionCountLabel");

const becomeHostBtn = document.getElementById("becomeHostBtn");
const startRoundBtn = document.getElementById("startRoundBtn");
const revealBtn = document.getElementById("revealBtn");
const hostHint = document.getElementById("hostHint");

const questionInput = document.getElementById("questionInput");
const askBtn = document.getElementById("askBtn");
const questionListEl = document.getElementById("questionList");

const operatorsGrid = document.getElementById("operatorsGrid");
const revealText = document.getElementById("revealText");

let channel = null;
let currentRoom = null;

// Shared game state (synced via messages)
let state = {
  hostId: null,
  hostName: null,
  questionCount: 10,
  questions: [], // {id, text, askedByName, answer: "yes"/"no"/"irrel"/null}
  eliminated: {}, // name -> true
  revealedOperator: null,
  round: 0,
};

let isHost = false;

// --- UI helpers ---

function updateHostUI() {
  isHost = state.hostId === clientId;
  hostLabel.textContent = state.hostName || "None";
  youLabel.textContent = playerNameInput.value || clientId;
  questionCountLabel.textContent = state.questionCount;

  hostHint.style.display = isHost ? "block" : "none";

  // Host-only buttons
  startRoundBtn.disabled = !isHost;
  revealBtn.disabled = !isHost;
  // Host-only UI
  if (isHost) {
    startRoundBtn.style.display = "inline-block";
    revealBtn.style.display = "inline-block";
    hostHint.style.display = "block";
  } else {
  startRoundBtn.style.display = "none";
  revealBtn.style.display = "none";
  hostHint.style.display = "none";
}

  renderQuestions();
  renderOperators();
  renderReveal();
}

function renderQuestions() {
  questionListEl.innerHTML = "";
  state.questions.forEach((q) => {
    const li = document.createElement("li");
    li.className = "question-item";

    const textDiv = document.createElement("div");
    textDiv.className = "question-text";
    textDiv.textContent = q.text;

    const metaDiv = document.createElement("div");
    metaDiv.className = "question-meta";
    metaDiv.textContent = q.askedByName
      ? `by ${q.askedByName}`
      : "";

    const rightSide = document.createElement("div");
    rightSide.style.display = "flex";
    rightSide.style.alignItems = "center";

    if (q.answer) {
      const ansSpan = document.createElement("span");
      ansSpan.style.marginLeft = "8px";
      ansSpan.style.fontSize = "0.8rem";
      ansSpan.textContent = `Answer: ${q.answer.toUpperCase()}`;
      rightSide.appendChild(ansSpan);
    } else if (isHost) {
      const btns = document.createElement("div");
      btns.className = "answer-buttons";

      const yesBtn = document.createElement("button");
      yesBtn.className = "answer-yes";
      yesBtn.textContent = "Yes";
      yesBtn.onclick = () => sendAnswer(q.id, "yes");

      const noBtn = document.createElement("button");
      noBtn.className = "answer-no";
      noBtn.textContent = "No";
      noBtn.onclick = () => sendAnswer(q.id, "no");

      const irrelBtn = document.createElement("button");
      irrelBtn.className = "answer-irrel";
      irrelBtn.textContent = "Irrelevant";
      irrelBtn.onclick = () => sendAnswer(q.id, "irrel");

      btns.appendChild(yesBtn);
      btns.appendChild(noBtn);
      btns.appendChild(irrelBtn);
      rightSide.appendChild(btns);
    }

    li.appendChild(textDiv);
    li.appendChild(metaDiv);
    li.appendChild(rightSide);
    questionListEl.appendChild(li);
  });
}

function renderOperators() {
  operatorsGrid.innerHTML = "";
  OPERATORS.forEach((op) => {
    const card = document.createElement("div");
    card.className = "operator-card";
    if (isHost) card.classList.add("host-clickable");
    if (state.eliminated[op.name]) card.classList.add("eliminated");

    const nameDiv = document.createElement("div");
    nameDiv.className = "operator-name";
    nameDiv.textContent = op.name;

    const metaDiv = document.createElement("div");
    metaDiv.className = "operator-meta";
    metaDiv.textContent =
  `${op.side} • ${op.role} • ${op.speed}-speed / ${op.armor}-armor • ` +
  `${op.uniqueWeapon ? "Unique Weapon" : "No Unique Weapon"} • ${op.season}`;


    card.appendChild(nameDiv);
    card.appendChild(metaDiv);

    if (isHost) {
      card.onclick = () => {
        sendToggleEliminate(op.name);
      };
    }

    operatorsGrid.appendChild(card);
  });
}

function renderReveal() {
  if (state.revealedOperator) {
    revealText.textContent = `Host revealed: ${state.revealedOperator}`;
  } else {
    revealText.textContent = "No operator revealed yet.";
  }
}

// --- Messaging helpers ---

function sendMessage(type, payload = {}) {
  if (!channel) return;
  channel.publish(type, {
    ...payload,
    _from: clientId,
  });
}

// --- Actions ---

function joinRoom() {
  const roomCode = roomCodeInput.value.trim();
  if (!roomCode) return;

  currentRoom = roomCode;
  roomLabel.textContent = roomCode;

  connectionStatus.textContent = "Connecting...";
  channel = getChannelForRoom(roomCode);

  channel.subscribe((msg) => {
    handleMessage(msg.name, msg.data);
  });
  
  sendMessage("request_state", {});
  
  channel.attach((err) => {
    if (err) {
      connectionStatus.textContent = "Error connecting.";
      return;
    }
    connectionStatus.textContent = "Connected.";
    gameSection.style.display = "block";
    updateHostUI();
  });
}

function becomeHost() {
  const name = playerNameInput.value.trim() || clientId;

  // If you're already host, ignore
  if (isHost) return;

  // If there is NO host yet → instantly become host
  if (!state.hostId) {
    sendMessage("become_host", {
      hostId: clientId,
      hostName: name
    });
    return;
  }

  // Otherwise → request permission from current host
  sendMessage("request_host", {
    requesterId: clientId,
    requesterName: name
  });
}



function startNewRound() {
  if (!isHost) return;
  sendMessage("start_round", {
    questionCount: 10,
  });
}

function askQuestion() {
  const text = questionInput.value.trim();
  if (!text) return;
  const name = playerNameInput.value.trim() || clientId;
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

  sendMessage("ask_question", {
    id,
    text,
    askedByName: name,
  });

  questionInput.value = "";
}

function sendAnswer(questionId, answer) {
  if (!isHost) return;
  sendMessage("answer_question", {
    id: questionId,
    answer,
  });
}

function sendToggleEliminate(opName) {
  if (!isHost) return;
  sendMessage("toggle_eliminate", {
    name: opName,
  });
}

function revealOperator() {
  if (!isHost) return;
  const opName = prompt("Type the operator name to reveal:");
  if (!opName) return;
  sendMessage("reveal_operator", {
    name: opName,
  });
}

// --- Message handler ---

function handleMessage(type, data) {
  switch (type) {
    case "become_host": {
      state.hostId = data.hostId;
      state.hostName = data.hostName;
      updateHostUI();
      break;
    }
    case "start_round": {
      state.questionCount = data.questionCount || 10;
      state.questions = [];
      state.eliminated = {};
      state.revealedOperator = null;
      state.round = (state.round || 0) + 1;
      updateHostUI();
      break;
    }
    
    case "ask_question": {
      state.questions.push({
        id: data.id,
        text: data.text,
        askedByName: data.askedByName,
        answer: null,
      });
      renderQuestions();
      break;
    }
    case "answer_question": {
      const q = state.questions.find((x) => x.id === data.id);
      if (q && !q.answer) {
        q.answer = data.answer;
        if (state.questionCount > 0) {
          state.questionCount -= 1;
        }
      }
      updateHostUI();
      break;
    }
    case "toggle_eliminate": {
      const name = data.name;
      if (state.eliminated[name]) {
        delete state.eliminated[name];
      } else {
        state.eliminated[name] = true;
      }
      renderOperators();
      break;
    }
    case "reveal_operator": {
      state.revealedOperator = data.name;
      renderReveal();
      break;
    }
    case "request_state": {
      if (isHost) {
        sendMessage("full_state", { state });
      }
      break;
    }
    case "full_state": {
      state = data.state;
      updateHostUI();
      break;
    }
    case "request_host": {
      if (isHost) {
        const accept = confirm(`${data.requesterName} wants to become host. Allow?`);
        if (accept) {
          sendMessage("become_host", {
          hostId: data.requesterId,
          hostName: data.requesterName
        });
      }
    }
  break;
}

    default:
      break;
  }
}

// --- Wire up UI ---

joinRoomBtn.addEventListener("click", joinRoom);
becomeHostBtn.addEventListener("click", becomeHost);
startRoundBtn.addEventListener("click", startNewRound);
revealBtn.addEventListener("click", revealOperator);
askBtn.addEventListener("click", askQuestion);
questionInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") askQuestion();
});

// Initial labels
youLabel.textContent = clientId;
