
const questions = [

    // تمرین دونفره
    {
      category: "تمرین دونفره 💕",
      text: "اگه یه روز کامل با هم وقت آزاد داشتیم، چیکار می‌کردیم؟",
      options: ["کافه‌گردی و گپ زدن ☕", "قدم زدن و تفریح بیرون 🌳", "فیلم دیدن 🎬", "رفتن به یه جای جدید 🎡"],
      mine: [1],
      same: "بهبههه! 😂❤️ پس سلیقه‌مون یکیه!",
      different: "اینم انتخاب من بودااا! ولی خب جواب تو قشنگ‌تره 😍"
    },
    {
      category: "تمرین دونفره 💕",
      text: "اگه با هم بیرون بودیم و بارون می‌گرفت، چیکار می‌کردیم؟",
      options: ["زیر یه چتر قدم می‌زدیم ☔", "می‌رفتیم کافه ☕", "زیر بارون می‌دویدیم 😂", "یه جای سرپوشیده پیدا می‌کردیم", "یه گوشه پناه می‌گرفتیم و حرف می‌زدیم ❤️"],
      mine: [4],
      same: "عههه! این لحظه رو باید تجربه کرد! ❤️",
      different: "جواب من این بودااا! ولی انتخاب تو هم خیلی قشنگه 🥹"
    },
    {
      category: "تمرین دونفره 💕",
      text: "اگه قرار بود یه خاطره فراموش‌نشدنی بسازیم، چی انتخاب می‌کردیم؟",
      options: ["عکس‌های دونفره و یادگاری 📸", "یه سفر یه‌روزه 🚗", "یه روز پر از خنده 😂", "یه گفت‌وگوی طولانی ❤️"],
      mine: [0],
      same: "بهبه! پس یه خاطره مشترک هم تو ذهنمونه! 📸❤️",
      different: "اینم انتخاب من بودااا! ولی خب جواب تو قشنگ‌تره 😍"
    },
    {
      category: "تمرین دونفره 💕",
      text: "اگه با هم می‌رفتیم شهربازی، اول کجا می‌رفتیم؟",
      options: ["ترن هوایی 🎢", "چرخ‌وفلک 🎡", "ماشین برقی 🚗", "بازی‌های جایزه‌دار 🎯", "فرقی نداره، مهم اینه کنار هم خوش بگذره ❤️"],
      mine: [4],
      same: "بهبههههه! 😂❤️ دقیقاً همین!",
      different: "منم گزینه آخر رو انتخاب کرده بودم! ولی خب جواب تو هم قشنگه 😁"
    },
  
    // سؤال‌های شخصی
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "وقتی ناراحتم یا حوصله هیچ‌کس رو ندارم، چیکار می‌کنم؟",
      options: ["آهنگ گوش می‌دم 🎧", "می‌خوابم 😴", "بازی می‌کنم 🎮", "تنهایی رو ترجیح می‌دم", "با یه نفر درد دل می‌کنم 💬", "می‌رم باشگاه 💪"],
      mine: [5]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "بیشتر چه چیزی توی آدم‌ها برام جذابه؟",
      options: ["شوخ‌طبعی 😂", "مهربونی و توجه ❤️", "باهوش بودن 🧠", "اعتمادبه‌نفس 😎", "صداقت و قابل اعتماد بودن 🤝"],
      mine: [1, 4],
      multi: true
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "اگه یه روز کامل برای خودم وقت داشته باشم، چیکار می‌کنم؟",
      options: ["باشگاه و ورزش 💪", "بازی و سرگرمی 🎮", "فیلم و سریال 🎬", "بیرون رفتن 🚗", "استراحت 😴", "موسیقی 🎧"],
      mine: [0]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "بزرگ‌ترین چیزی که دوست دارم توی زندگی بهش برسم چیه؟",
      options: ["موفقیت مالی 💰", "رسیدن به جایگاه بالا و موفقیت 🏆", "رابطه واقعی ❤️", "سفر و تجربه زندگی 🌍", "زندگی آروم 🏡", "بهترین نسخه خودم 💪"],
      mine: [1]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "وقتی یه هدف بزرگ دارم، چه مدلی پیش می‌رم؟",
      options: ["با تمام توان تلاش می‌کنم 💪", "با برنامه جلو می‌رم 🧠", "ریسک می‌کنم 🔥", "با انگیزه ادامه می‌دم 😎", "حتی اگه سخت بشه ولش نمی‌کنم 🏆"],
      mine: [4]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "دوست دارم دیگران منو با چه ویژگی‌هایی بشناسن؟",
      options: ["قوی و بااراده 💪", "مهربون و بااحساس ❤️", "باهوش و منطقی 🧠", "خوش‌انرژی و شوخ‌طبع 😂", "موفق و پرتلاش 🏆", "قابل اعتماد و بامعرفت 🤝"],
      mine: [0, 1, 2, 3, 4, 5],
      multi: true
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "بزرگ‌ترین نقطه‌ضعفم از نظر خودم چیه؟",
      options: ["زیادی فکر کردن به همه‌چیز 🧠", "زود وابسته شدن", "لجبازی و غرور", "زود عصبی شدن", "سخت اعتماد کردن", "پنهان کردن ناراحتی‌هام"],
      mine: [0]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "بیشتر چه چیزی بهم انگیزه می‌ده؟",
      options: ["موفقیت 🏆", "خوشحال کردن خانواده ❤️", "ثابت کردن توانایی‌هام 💪", "آینده قشنگ 🚀", "رقابت و پیشرفت 🔥", "خدا و توکل بهش 🤍"],
      mine: [5]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "وقتی به آینده فکر می‌کنم، بیشتر دوست دارم چی داشته باشم؟",
      options: ["ثروت و رفاه 💰", "موفقیت و جایگاه اجتماعی بالا 🏆", "عشق واقعی ❤️", "خانواده خوشحال 👨‍👩‍👦", "آزادی و تجربه‌های جدید 🌍", "زندگی‌ای که خدا ازش راضی باشه 🤍"],
      mine: [1]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "اگه کسی بهم بی‌احترامی کنه، معمولاً چیکار می‌کنم؟",
      options: ["سکوت می‌کنم", "همون لحظه جواب می‌دم", "ناراحت می‌شم ولی چیزی نمی‌گم", "فاصله می‌گیرم", "با منطق حلش می‌کنم"],
      mine: [2]
    },
    {
      category: "حالا یه کم بیشتر منو بشناس 😎",
      text: "بیشتر چه چیزی باعث می‌شه به یه نفر اعتماد کنم؟",
      options: ["صداقت توی حرف‌هاش", "رفتارش وقتی بهش نیاز دارم", "رازدار بودن", "یکی بودن حرف و عملش", "کنارم موندن توی شرایط سخت"],
      mine: [0]
    }
  ];
  
  const app = document.getElementById("app");
  
  let current = 0;
  let answers = [];
  let matches = 0;
  
  document.getElementById("startBtn").addEventListener("click", () => {
    current = 0;
    answers = [];
    matches = 0;
    showQuestion();
  });
  
  function showQuestion() {
    const q = questions[current];
  
    app.innerHTML = `
      <section class="welcome">
        <div class="decoration">🎀 💗 🎀</div>
        <div class="teddy">🧸</div>
        <p>${q.category}</p>
        <h2>${q.text}</h2>
        <p>سؤال ${current + 1} از ${questions.length}</p>
        <div class="progress">
          <div class="progress-fill" style="width:${((current + 1) / questions.length) * 100}%"></div>
        </div>
        <div class="options">
          ${q.options.map((option, i) => `
            <button class="option-btn" data-index="${i}">
              ${option}
            </button>
          `).join("")}
        </div>
        ${q.multi ? '<p class="hint">می‌تونی چند گزینه انتخاب کنی 💕</p>' : ""}
        <button id="confirmBtn" class="confirm-btn" style="${q.multi ? "" : "display:none"}">
          انتخابم اینه ❤️
        </button>
      </section>
    `;
  
    let selected = [];
  
    const buttons = app.querySelectorAll(".option-btn");
  
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const index = Number(btn.dataset.index);
  
        if (q.multi) {
          if (selected.includes(index)) {
            selected = selected.filter(x => x !== index);
            btn.classList.remove("selected");
          } else {
            selected.push(index);
            btn.classList.add("selected");
          }
          app.querySelector("#confirmBtn").style.display =
            selected.length ? "block" : "none";
        } else {
          selected = [index];
          buttons.forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
  
          setTimeout(() => submitAnswer(selected), 350);
        }
      });
    });
  
    const confirm = document.getElementById("confirmBtn");
    if (confirm) {
      confirm.addEventListener("click", () => {
        submitAnswer(selected);
      });
    }
  }
  
  function submitAnswer(selected) {
    if (!selected.length) return;
  
    const q = questions[current];
    const mine = q.mine;
  
    const same = selected.length === mine.length &&
      selected.every(x => mine.includes(x));
  
    if (same) matches++;
  
    answers.push({ selected, same });
    showReaction(q, selected, same);
  }
  
  function showReaction(q, selected, same) {
    const mineText = q.mine.map(i => q.options[i]).join(" و ");
    const herText = selected.map(i => q.options[i]).join(" و ");
  
    let reaction = same
      ? (q.same || "بهبههه! 😂❤️ پس انتخابمون یکی بود!")
      : (q.different || "اینم جواب من بودااا! ولی خب جواب ها فرق دارن😍");
  
    app.innerHTML = `
      <section class="welcome reaction">
        <div class="decoration">🎀 ✨ 💗 ✨ 🎀</div>
        <div class="teddy">${same ? "🥰" : "🧸"}</div>
        <h1>${same ? "وای چه تفاهمییی!" : "عههه! چه جالب! 😂"}</h1>
  
        <div class="answer-card">
          <p>💗 انتخاب رکسانا:</p>
          <h3>${herText}</h3>
        </div>
  
        <div class="answer-card mine-card">
          <p>🙈 انتخاب من این بود:</p>
          <h3>${mineText}</h3>
        </div>
  
        <h2>${reaction}</h2>
  
        <button id="nextBtn">
          ${current === questions.length - 1 ? "دیدن سورپرایز آخر 🎂" : "سؤال بعدی 💌"}
        </button>
      </section>
    `;
  
    document.getElementById("nextBtn").addEventListener("click", () => {
      current++;
  
      if (current < questions.length) {
        showQuestion();
      } else {
        showFinal();
      }
    });
  }
  
 
function showFinal() {
    let message = "";
  
    if (matches >= 12) {
      message = "وای! انگار خیلی جاها شبیه هم فکر می‌کنیم! 🥹❤️";
    } else if (matches >= 7) {
      message = "کلی سلیقه مشترک داریم، ولی تفاوت‌هامون هم قشنگه! 💕";
    } else {
      message = "هنوز کلی چیز برای شناختن همدیگه داریم! 😍";
    }
  
    app.innerHTML = `
      <section class="welcome final-screen">
        <div class="decoration">🎀 ✨ 🎀</div>
        <div class="teddy">🧸</div>
  
        <h1>رکسانای عزیز، تولدت مبارک! 🎂</h1>
  
        <h2>${message}</h2>
  
        <div class="answer-card">
          <h3>نتیجه بازی ما 💗</h3>
          <p>${matches} جواب مشترک از ${questions.length} سؤال</p>
        </div>
  
        <p class="birthday-message">
          امیدوارم همیشه بخندی،
          به آرزوهات برسی و قشنگ‌ترین اتفاق‌های زندگی برات رقم بخوره.
        </p>
  
        <div class="envelope" id="openLetter">
          <div class="envelope-icon">💌</div>
          <h2>یه نامه کوچولو برات دارم...</h2>
          <p>برای باز کردنش روی پاکت کلیک کن</p>
          <button>باز کردن نامه ❤️</button>
        </div>
  
        <div id="letterArea"></div>
        <div id="fireworks"></div>
      </section>
    `;
  
    document.getElementById("openLetter").addEventListener("click", openLetter);
  }
  
  function openLetter() {
    const area = document.getElementById("letterArea");
  
    area.innerHTML = `
      <div class="letter">
        <div class="letter-bow">🎀</div>
        <h2>برای رکسانا جان ❤️</h2>
  
        <p>
          سلام رکسانای عزیزم...
          <br><br>
          اول از همه تولدت مبارک! 🎂
          <br><br>
          می‌دونم یکم دیر شده و بابت این موضوع واقعاً ببخشید.
          <br><br>
          امیدوارم سال جدید زندگیت پر از آرامش،
          خنده‌های از ته دل، موفقیت و اتفاق‌های قشنگ باشه.
          <br><br>
          امیدوارم به تک‌تک آرزوهات برسی و همیشه
          دلت خوش و لبت خندون باشه.
          <br><br>
          این سایت رو با کلی ذوق درست کردم
          تا یه سورپرایز کوچولو برای روز تولدت داشته باشی.
          <br><br>
          امیدوارم خوشت اومده باشه...
          <br><br>
          <strong>تولدت مبارک! ❤️</strong>
        </p>
  
        <div class="letter-footer">با آرزوی بهترین‌ها برای تو 💗</div>
      </div>
    `;
  
    launchFireworks();
  
    area.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  
    document.getElementById("openLetter").style.display = "none";
  }
  
  function launchFireworks() {
    const container = document.getElementById("fireworks");
  
    for (let i = 0; i < 90; i++) {
      const particle = document.createElement("span");
  
      particle.className = "firework";
      particle.textContent = ["✨", "💗", "🎉", "⭐", "💕"][
        Math.floor(Math.random() * 5)
      ];
  
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 70 + "%";
      particle.style.animationDelay = Math.random() * 2 + "s";
  
      container.appendChild(particle);
    }
  }
  