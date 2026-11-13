const details = {
  "minimed-manufacturing": {
    category: "Engineering experience",
    title: "R&D Manufacturing Engineer Contractor",
    organization: "MiniMed · Harvey Mudd Engineering Clinic Program",
    location: "Claremont, CA",
    date: "Aug 2026 — Present",
    summary:
      "Designing a fixture concept to make continuous glucose monitor sensor plate electroplating more efficient and ergonomic.",
    highlights: [
      "Design and prototype a clamping mechanism in SolidWorks to secure continuous glucose monitor sensor plates to electroplating fixtures, cutting cycle time for 192 torquing motions per lot and improving ergonomics",
      "Collaborate with MiniMed engineers and a student team through weekly design reviews, incorporating manufacturing and quality feedback to align the fixture with production requirements",
    ],
  },
  "water-resources-internship": {
    category: "Engineering experience",
    title: "Water Resource Control Engineer Intern",
    organization: "California State Water Resources Control Board",
    location: "Los Angeles, CA",
    date: "May 2026 — Aug 2026",
    summary:
      "Supported landfill permit oversight by automating regulatory reporting and building interactive mapping tools.",
    highlights: [
      "Automated regulatory reporting for 400+ permitted facilities with R scripts, replacing a manual staff workflow",
      "Built an ArcGIS Pro map and Experience Builder dashboard with dynamic search, charts, and distance filtering",
      "Inspected landfills for permit compliance, flagging leachate collection deficiencies and communicating findings to dischargers",
    ],
  },
  "bioprinting-research": {
    category: "Engineering experience",
    title: "Undergraduate Researcher · Bioprinting Lab",
    organization: "Harvey Mudd College · Department of Engineering",
    location: "Claremont, CA",
    date: "Jan 2026 — Present",
    summary:
      "Developing printhead and UV-curing hardware for precise bioink dispensing and PEG-acrylate hydrogel tissue models.",
    highlights: [
      "Design and prototype a multichannel printhead in SolidWorks for precise, consistent bioink dispensing",
      "Engineer a UV print bed (8–10 mW/cm²) to photopolymerize PEG-acrylate hydrogels for tissue models",
      "Design acrylic UV enclosure to protect users and remove environmental variables from the curing process",
    ],
  },
  "cad-tutor": {
    category: "Engineering experience",
    title: "CAD Tutor & Lab Grader",
    organization: "Harvey Mudd College · Department of Engineering",
    location: "Claremont, CA",
    date: "Aug 2026 — Present",
    summary:
      "Help students build confidence with SolidWorks, CAD, finite element analysis, and engineering simulation.",
    highlights: [
      "Lead weekly SolidWorks office hours, teaching CAD, FEA, and simulation to support the course's team projects",
      "Grade SolidWorks lab assignments and give feedback to reinforce CAD proficiency across the course",
    ],
  },
  "fpga-display-keypad": {
    category: "Engineering project",
    title: "FPGA Dual 7-Segment Display & Keypad",
    organization: "Independent coursework project",
    date: "Sep 2026",
    summary:
      "Built a modular FPGA design that combines a multiplexed dual hexadecimal display with a scanned keypad and LED feedback.",
    highlights: [
      "Designed SystemVerilog modules to time-multiplex a dual hexadecimal display through one shared seven-segment decoder.",
      "Allowed each displayed digit to be controlled with DIP switches.",
      "Built a counter-based scanner to drive keypad rows, read columns, and light an LED on each keypress.",
    ],
  },
  "fpga-keypad-scanner": {
    category: "Engineering project",
    title: "FPGA Keypad Scanner",
    organization: "Independent coursework project",
    date: "Sep 2026",
    summary:
      "Created a debounced 4×4 keypad scanner that displays the last two hexadecimal keypresses.",
    highlights: [
      "Programmed a dual seven-segment display to show the last two hexadecimal digits pressed on a 4×4 keypad.",
      "Handled switch bounce so each press registers once regardless of how long the key is held.",
      "Ignored additional keypresses while a key was held.",
    ],
  },
  "stm32-digital-audio": {
    category: "Engineering project",
    title: "STM32 Digital Audio",
    organization: "Independent coursework project",
    date: "Sep 2026",
    summary:
      "Used STM32 timer drivers to generate notes and play tunes through an LM386 audio amplifier.",
    highlights: [
      "Wrote TIM6 and TIM7 drivers to control note frequency and duration.",
      "Derived prescaler and auto-reload values for the minimum and maximum note frequencies.",
      "Played tunes through an LM386 amplifier, with each note within 1% of its target pitch.",
    ],
  },
  "stm32-motor-encoder": {
    category: "Engineering project",
    title: "STM32 Motor Speed & Direction",
    organization: "Independent coursework project",
    date: "Oct 2026",
    summary:
      "Measured a motor's speed and direction from its quadrature encoder using STM32 interrupts.",
    highlights: [
      "Read the two channels of a quadrature encoder using interrupts on both sensors.",
      "Used encoder transitions to measure motor speed and determine rotation direction.",
    ],
  },
  "autonomous-surface-vehicle": {
    category: "Engineering project",
    title: "Autonomous Surface Vehicle",
    organization: "Engineering team project",
    date: "Mar 2026 — Apr 2026",
    summary:
      "Built and deployed a low-cost surface vehicle for measuring ocean pollution at depths of 0–2 meters.",
    highlights: [
      "Built and deployed the vehicle on a $50 budget.",
      "Designed and waterproofed analog signal-conditioning circuits for pressure, turbidity, and temperature sensors.",
      "Integrated environmental sensors to support measurements at multiple depths.",
    ],
  },
  "autonomous-underwater-robot": {
    category: "Engineering project",
    title: "Autonomous Underwater Robot",
    organization: "Engineering team project",
    date: "Aug 2025 — Nov 2025",
    summary:
      "Integrated depth-sensing electronics and a proportional control system for autonomous underwater depth tracking.",
    highlights: [
      "Soldered PCB circuitry to integrate a pressure sensor and thermistor.",
      "Validated signal integrity on an oscilloscope.",
      "Programmed a LabVIEW proportional controller for autonomous depth tracking and step-response analysis.",
    ],
  },
};

const page = document.querySelector("[data-detail-id]");
const detail = details[page?.dataset.detailId];

if (!page || !detail) {
  document.querySelector("[data-detail-error]").hidden = false;
  console.error(`Portfolio detail not found: ${page?.dataset.detailId ?? "missing page id"}`);
} else {
  document.title = `${detail.title} | Emily Ing`;
  document.querySelector('meta[name="description"]').content = detail.summary;
  document.querySelector("[data-detail-category]").textContent = detail.category;
  document.querySelector("[data-detail-title]").textContent = detail.title;
  document.querySelector("[data-detail-organization]").textContent = detail.organization;
  document.querySelector("[data-detail-date]").textContent = detail.date;
  document.querySelector("[data-detail-summary]").textContent = detail.summary;

  const location = document.querySelector("[data-detail-location]");
  if (detail.location) {
    location.textContent = detail.location;
  } else {
    location.remove();
  }

  const backLink = document.querySelector("[data-detail-back]");
  backLink.href = `../index.html#${detail.category === "Engineering experience" ? "experience" : "projects"}`;
  backLink.textContent = `← Back to ${detail.category === "Engineering experience" ? "experience" : "projects"}`;

  const highlights = document.querySelector("[data-detail-highlights]");
  for (const text of detail.highlights) {
    const item = document.createElement("li");
    item.textContent = text;
    highlights.append(item);
  }
}
