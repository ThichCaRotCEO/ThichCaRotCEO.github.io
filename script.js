
	const recommendations = {
  developer: {
    coding: ["GitHub Copilot", "Codeium", "Cursor IDE"],
    writing: ["Notion AI", "ChatGPT"],
    research: ["Perplexity", "You.com"]
  },
  designer: {
    designing: ["Runway ML", "Uizard", "Canva AI"],
    writing: ["Notion AI", "ChatGPT"]
  },
  student: {
    research: ["Perplexity", "Wolfram Alpha", "ChatGPT"],
    writing: ["Grammarly", "Quillbot"]
  },
  marketer: {
    writing: ["Copy.ai", "Jasper", "ChatGPT"],
    communication: ["Tactiq", "Fireflies AI"]
  },
  writer: {
    writing: ["Sudowrite", "Grammarly", "ChatGPT"],
    research: ["Perplexity", "Claude"]
  }
};

function goToStep2() {
  const job = document.getElementById("job").value;
  if (!job) return alert("Please select your job.");
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
}

function goToStep3() {
  const work = document.getElementById("work").value;
  if (!work) return alert("Please select the type of work.");
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
}

function toggleOtherInput() {
  const other = document.getElementById("other");
  const input = document.getElementById("otherInput");
  input.style.display = other.checked ? "inline-block" : "none";
}

function showFinalResult() {
  const job = document.getElementById("job").value;
  const work = document.getElementById("work").value;
  const selected = [];

  document.querySelectorAll('#step3 input[type=checkbox]:checked').forEach(cb => {
    if (cb.id !== "other") selected.push(cb.value);
  });

  const otherInput = document.getElementById("otherInput").value;
  if (document.getElementById("other").checked && otherInput.trim()) {
    selected.push(otherInput.trim());
  }

  const toolList = document.getElementById("tool-list");
  toolList.innerHTML = "";

  let tools = recommendations[job]?.[work] || ["ChatGPT", "Perplexity"];
  tools = tools.filter(tool => !selected.includes(tool));

  tools.forEach(tool => {
    const li = document.createElement("li");
    li.textContent = tool;
    toolList.appendChild(li);
  });

  document.getElementById("step3").style.display = "none";
  document.getElementById("suggestions").style.display = "block";
};