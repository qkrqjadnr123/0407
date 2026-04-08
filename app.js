const translations = {
  ko: {
    eyebrow: "SRT + KTX Travel Planner",
    heroTitle: "원하는 도착 조건에 맞춰 가장 좋은 기차를 먼저 보여줍니다.",
    heroText: "출발역, 도착역, 시간 조건만 입력하면 SRT와 KTX를 함께 비교해 가장 적합한 옵션 순서대로 정리합니다.",
    pillOne: "Apple-like spacious layout",
    pillTwo: "Airbnb-style card discovery",
    pillThree: "Fast bilingual experience",
    fromLabel: "출발역",
    toLabel: "도착역",
    dateLabel: "날짜",
    departAfterLabel: "출발 희망 시각",
    arriveBeforeLabel: "도착 마감 시각",
    passengersLabel: "인원",
    seatLabel: "좌석 선호",
    operatorLabel: "열차 선호",
    helperCopy: "결과는 소요 시간, 도착 조건, 가격, 좌석 상태를 함께 반영해 정렬됩니다.",
    searchButton: "열차 비교하기",
    featureOneKicker: "Goal-first ranking",
    featureOneTitle: "빠른 열차보다, 목적에 맞는 열차를 우선합니다.",
    featureOneText: "이른 출발, 빠른 도착, 저렴한 가격, 좌석 여유를 점수화해 한 화면에서 비교합니다.",
    featureTwoKicker: "Booking-ready guidance",
    featureTwoTitle: "SRT와 KTX 각각의 예약 흐름까지 이어집니다.",
    featureTwoText: "결과 페이지에서 운영사별 예약 가이드와 다음 행동을 바로 확인할 수 있습니다.",
    resultsEyebrow: "Ranked trip options",
    resultsTitle: "조건에 맞는 SRT와 KTX를 정렬했습니다.",
    editSearch: "검색 수정",
    rankingLogicKicker: "How ranking works",
    rankingLogicTitle: "도착 목표 중심 점수",
    rankingLogicText: "도착 마감 준수, 출발 희망 시각, 소요 시간, 가격, 좌석 선호, 열차 선호를 함께 반영합니다.",
    bookingKicker: "Booking flow",
    bookingTitle: "예매 보조 안내",
    bookingText: "실제 자동 예매 연결은 계정 정보와 라이브러리 설정이 필요합니다. 현재 UI는 결과 비교와 예약 준비에 집중합니다.",
    themeDark: "Dark",
    themeLight: "Light",
    resultSummary: ({ from, to, date, departAfter, arriveBefore, passengers }) =>
      `${date} · ${from} → ${to} · ${departAfter}${arriveBefore ? ` 이후 출발 / ${arriveBefore} 전 도착 희망` : " 이후 출발"} · ${passengers}명`,
    rankLabel: (rank) => `추천 ${rank}`,
    duration: "소요",
    price: "예상 요금",
    depart: "출발",
    arrive: "도착",
    seatGeneral: "일반실 우선",
    seatSpecial: "특실 우선",
    seatAny: "상관없음",
    operatorAny: "모두 보기",
    bookNow: "예약 준비 보기",
    closeGuide: "가이드 닫기",
    seatStatus: "좌석 상태",
    whyThis: "추천 이유",
    bookingGuide: (operator) =>
      operator === "SRT"
        ? "SRT 예매는 `SRTrain` 기반 자동화 또는 공식 예매 채널 연동이 필요합니다. 현재 결과를 바탕으로 원하는 열차를 고른 뒤 SRT 계정 설정을 연결하면 다음 단계로 확장할 수 있습니다."
        : "KTX 예매는 `korail2` 기반 helper 흐름으로 확장 가능합니다. 현재는 추천 결과를 고른 뒤 코레일 계정과 라이브러리를 연결하는 구조로 설계되어 있습니다.",
    detailsButton: "추천 근거 보기",
  },
  en: {
    eyebrow: "SRT + KTX Travel Planner",
    heroTitle: "See the best train first, ranked around when you need to arrive.",
    heroText: "Enter your route and timing goals once, then compare SRT and KTX in a single ranked view.",
    pillOne: "Apple-like spacious layout",
    pillTwo: "Airbnb-style card discovery",
    pillThree: "Fast bilingual experience",
    fromLabel: "From",
    toLabel: "To",
    dateLabel: "Date",
    departAfterLabel: "Depart after",
    arriveBeforeLabel: "Arrive before",
    passengersLabel: "Passengers",
    seatLabel: "Seat preference",
    operatorLabel: "Train preference",
    helperCopy: "Results blend duration, arrival goals, price, and seat availability into one ranking.",
    searchButton: "Compare trains",
    featureOneKicker: "Goal-first ranking",
    featureOneTitle: "Not just the fastest train. The best fit for your plan.",
    featureOneText: "Each option is scored by departure timing, arrival target, price, duration, and seat availability.",
    featureTwoKicker: "Booking-ready guidance",
    featureTwoTitle: "Continue into provider-specific booking flows.",
    featureTwoText: "Each result includes next-step guidance for both SRT and KTX booking preparation.",
    resultsEyebrow: "Ranked trip options",
    resultsTitle: "SRT and KTX options sorted for your trip goal.",
    editSearch: "Edit search",
    rankingLogicKicker: "How ranking works",
    rankingLogicTitle: "Arrival-goal ranking",
    rankingLogicText: "The score blends your latest arrival target, preferred departure time, duration, price, seat preference, and operator preference.",
    bookingKicker: "Booking flow",
    bookingTitle: "Booking guidance",
    bookingText: "A live automated booking connection needs credentials and runtime libraries. This version focuses on ranking, comparison, and booking readiness.",
    themeDark: "Dark",
    themeLight: "Light",
    resultSummary: ({ from, to, date, departAfter, arriveBefore, passengers }) =>
      `${date} · ${from} → ${to} · depart after ${departAfter}${arriveBefore ? ` / arrive before ${arriveBefore}` : ""} · ${passengers} passenger(s)`,
    rankLabel: (rank) => `Rank ${rank}`,
    duration: "Duration",
    price: "Estimated fare",
    depart: "Depart",
    arrive: "Arrive",
    seatGeneral: "General first",
    seatSpecial: "First class first",
    seatAny: "No preference",
    operatorAny: "Any operator",
    bookNow: "Show booking guide",
    closeGuide: "Close guide",
    seatStatus: "Seat status",
    whyThis: "Why this ranked well",
    bookingGuide: (operator) =>
      operator === "SRT"
        ? "SRT booking can be extended with the SRTrain-based flow from k-skill. Pick a result here, then connect account credentials and the booking runtime to continue."
        : "KTX booking can be extended with the korail2 helper flow from k-skill. Pick a result here, then connect Korail credentials and runtime libraries to continue.",
    detailsButton: "Show ranking reason",
  },
};

const sampleTrains = [
  { operator: "KTX", code: "KTX 019", depart: "08:35", arrive: "11:14", duration: 159, price: 59800, seatGeneral: "Few seats", seatSpecial: "Available" },
  { operator: "SRT", code: "SRT 301", depart: "08:52", arrive: "11:05", duration: 133, price: 52800, seatGeneral: "Available", seatSpecial: "Few seats" },
  { operator: "KTX", code: "KTX 023", depart: "09:10", arrive: "11:52", duration: 162, price: 59800, seatGeneral: "Available", seatSpecial: "Available" },
  { operator: "SRT", code: "SRT 307", depart: "09:28", arrive: "11:45", duration: 137, price: 52800, seatGeneral: "Waitlist", seatSpecial: "Few seats" },
  { operator: "KTX", code: "KTX 031", depart: "10:04", arrive: "12:38", duration: 154, price: 59800, seatGeneral: "Available", seatSpecial: "Few seats" },
  { operator: "SRT", code: "SRT 313", depart: "10:16", arrive: "12:24", duration: 128, price: 54800, seatGeneral: "Available", seatSpecial: "Available" },
];

const state = {
  lang: localStorage.getItem("rail-atlas-lang") || "ko",
  theme: localStorage.getItem("rail-atlas-theme") || "light",
};

function setTheme(theme) {
  state.theme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem("rail-atlas-theme", theme);
  const toggle = document.querySelector('[data-action="toggle-theme"]');
  if (toggle) {
    toggle.textContent = theme === "dark" ? translations[state.lang].themeLight : translations[state.lang].themeDark;
  }
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("rail-atlas-lang", lang);
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translations[lang][node.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-option]").forEach((node) => {
    node.textContent = translations[lang][node.dataset.i18nOption];
  });
  const langButton = document.querySelector('[data-action="toggle-language"]');
  if (langButton) {
    langButton.textContent = lang === "ko" ? "EN" : "KO";
  }
  setTheme(state.theme);
}

function attachGlobalToggles() {
  document.querySelector('[data-action="toggle-language"]')?.addEventListener("click", () => {
    setLanguage(state.lang === "ko" ? "en" : "ko");
    if (document.body.dataset.page === "results") {
      renderResults();
    }
  });

  document.querySelector('[data-action="toggle-theme"]')?.addEventListener("click", () => {
    setTheme(state.theme === "dark" ? "light" : "dark");
  });
}

function timeToMinutes(value) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatPrice(price) {
  return new Intl.NumberFormat(state.lang === "ko" ? "ko-KR" : "en-US").format(price);
}

function buildSearchUrl(formData) {
  const params = new URLSearchParams(formData);
  return `./results.html?${params.toString()}`;
}

function initHome() {
  const form = document.getElementById("search-form");
  if (!form) return;

  const dateInput = form.elements.date;
  const today = new Date().toISOString().split("T")[0];
  dateInput.value = today;
  form.elements.departAfter.value = "09:00";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(form).entries());
    window.location.href = buildSearchUrl(formData);
  });
}

function computeResults(query) {
  const departAfter = timeToMinutes(query.departAfter || "00:00");
  const arriveBefore = query.arriveBefore ? timeToMinutes(query.arriveBefore) : null;

  return sampleTrains
    .filter((train) => (query.operator === "any" ? true : train.operator === query.operator))
    .map((train) => {
      const depart = timeToMinutes(train.depart);
      const arrive = timeToMinutes(train.arrive);
      let score = 100;

      score -= Math.max(0, depart - departAfter) * 0.22;
      if (depart < departAfter) score -= 24;
      if (arriveBefore !== null) score -= Math.max(0, arrive - arriveBefore) * 0.4;
      score -= train.duration * 0.05;
      score -= (train.price - 50000) / 700;

      if (query.seatClass === "general") {
        if (train.seatGeneral === "Waitlist") score -= 18;
        if (train.seatGeneral === "Few seats") score -= 8;
      }
      if (query.seatClass === "special") {
        if (train.seatSpecial === "Waitlist") score -= 18;
        if (train.seatSpecial === "Few seats") score -= 8;
      }
      if (query.operator !== "any" && train.operator === query.operator) score += 10;

      const reasons = [];
      if (arriveBefore && arrive <= arriveBefore) reasons.push(state.lang === "ko" ? "도착 마감 시각 안에 도착합니다." : "Arrives before your latest arrival target.");
      if (depart >= departAfter) reasons.push(state.lang === "ko" ? "희망 출발 시각 이후 열차입니다." : "Leaves after your preferred departure time.");
      if (train.duration <= 140) reasons.push(state.lang === "ko" ? "상대적으로 소요 시간이 짧습니다." : "Keeps travel time relatively short.");
      if (train.price <= 54000) reasons.push(state.lang === "ko" ? "비교적 저렴한 운임입니다." : "Keeps fare relatively low.");

      return { ...train, score, reason: reasons[0] || (state.lang === "ko" ? "전체 조건 균형이 좋은 편입니다." : "A balanced option across your constraints.") };
    })
    .sort((a, b) => b.score - a.score);
}

function createMetric(label, value) {
  const chip = document.createElement("span");
  chip.className = "metric-chip";
  chip.textContent = `${label} · ${value}`;
  return chip;
}

function renderResults() {
  const params = Object.fromEntries(new URLSearchParams(window.location.search).entries());
  const defaults = {
    from: state.lang === "ko" ? "서울" : "Seoul",
    to: state.lang === "ko" ? "부산" : "Busan",
    date: new Date().toISOString().split("T")[0],
    departAfter: "09:00",
    arriveBefore: "",
    passengers: "1",
    seatClass: "general",
    operator: "any",
  };
  const query = { ...defaults, ...params };

  const summary = document.getElementById("query-summary");
  if (summary) summary.textContent = translations[state.lang].resultSummary(query);

  const list = document.getElementById("results-list");
  if (!list) return;
  list.innerHTML = "";

  const template = document.getElementById("result-card-template");
  computeResults(query).forEach((train, index) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector(".result-rank").textContent = translations[state.lang].rankLabel(index + 1);
    node.querySelector(".train-route").textContent = `${query.from} → ${query.to}`;
    node.querySelector(".operator-badge").textContent = `${train.operator} · ${train.code}`;

    const timeBox = node.querySelector(".train-times");
    timeBox.append(
      createMetric(translations[state.lang].depart, train.depart),
      createMetric(translations[state.lang].arrive, train.arrive),
      createMetric(translations[state.lang].duration, `${train.duration}m`)
    );

    const metrics = node.querySelector(".train-metrics");
    metrics.append(
      createMetric(translations[state.lang].price, `₩${formatPrice(train.price)}`),
      createMetric(`${translations[state.lang].seatStatus} G`, train.seatGeneral),
      createMetric(`${translations[state.lang].seatStatus} S`, train.seatSpecial)
    );

    node.querySelector(".train-reason").textContent = `${translations[state.lang].whyThis}: ${train.reason}`;

    const panel = node.querySelector(".booking-panel");
    panel.textContent = translations[state.lang].bookingGuide(train.operator);

    const bookButton = node.querySelector(".book-button");
    bookButton.textContent = translations[state.lang].bookNow;
    bookButton.addEventListener("click", () => {
      const hidden = panel.hasAttribute("hidden");
      if (hidden) {
        panel.removeAttribute("hidden");
        bookButton.textContent = translations[state.lang].closeGuide;
      } else {
        panel.setAttribute("hidden", "");
        bookButton.textContent = translations[state.lang].bookNow;
      }
    });

    const detailButton = node.querySelector(".detail-button");
    detailButton.textContent = translations[state.lang].detailsButton;
    detailButton.addEventListener("click", () => {
      panel.removeAttribute("hidden");
      bookButton.textContent = translations[state.lang].closeGuide;
    });

    list.appendChild(node);
  });
}

function init() {
  attachGlobalToggles();
  setLanguage(state.lang);
  setTheme(state.theme);
  initHome();
  if (document.body.dataset.page === "results") {
    renderResults();
  }
}

init();
