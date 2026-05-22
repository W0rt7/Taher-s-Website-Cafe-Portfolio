// I didn't want to comment anymore but the only interactive thing is the button and menu so yeah 
function buildSprite(rows, palette, scale) {
  const half = scale / 2;
  const shadows = [];
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    for (let c = 0; c < row.length; c++) {
      const colour = palette[row[c]];
      if (colour) {
        shadows.push(
          (c * scale + half) + 'px ' +
          (r * scale + half) + 'px 0 ' +
          half + 'px ' + colour
        );
      }
    }
  }
  return shadows.join(',');
}

const CP = {
  W: '#f0e8d5',
  H: '#c9a87c',
  S: '#ffd5a8',
  E: '#5c3a1a',
  r: '#f5b8b0',
  B: '#8fa8c8',
  A: '#fffaf0',
  D: '#3d2010',
  N: '#ffecd8',
};

const BODY = [
  '   WWWWWWWW   ',
  '  WWWWWWWWWW  ',
  ' WWWWWWWWWWWW ',
  ' WWHSSSSSSHWW ',
  ' WWHSSSSSSHWW ',
  ' WWHSESSESHWW ',
  ' WWHSRSSRSHWW ',
  '  WWHSSSSHWW  ',
  '   DNNNNNND   ',
  '  DBBBBBBBBBD ',
  '  DBAAAAAAABD ',
  '  DBAAAAAAABD ',
  '  DBAAAAAAABD ',
  '  DBBBBBBBBBD ',
  '  DBBBBBBBBBD ',
  '  DBBBBBBBBBD ',
  '   DBB   BBD  ',
  '   DBB   BBD  ',
  '   DBB   BBD  ',
  '   DDD   DDD  ',
];

const ACP = {
  A: '#fffaf0',
  S: '#ffd5a8',
  X: '#7a4f2e',
  L: '#c8854a',
  D: '#3d2010',
};

const ARM = [
  'ASSSS ',
  'ASSSS ',
  'ASSXXX',
  '   XXX',
  '   LLL',
  '   DDD',
];

const SCALE       = 4;
const ARM_COL_OFF = 11;
const ARM_ROW_OFF = 10;

function initCaroline() {
  const body = document.getElementById('carolineBody');
  const arm  = document.getElementById('carolineArm');
  if (!body || !arm) return;

  body.style.boxShadow = buildSprite(BODY, CP, SCALE);
  arm.style.boxShadow  = buildSprite(ARM, ACP, SCALE);

  arm.style.left = (ARM_COL_OFF * SCALE) + 'px';
  arm.style.top  = (ARM_ROW_OFF * SCALE) + 'px';
}

function startPortfolio() {
  const startEl     = document.getElementById('start-screen');
  const portfolioEl = document.getElementById('portfolio');

  portfolioEl.style.display = 'block';
  initCaroline();

  portfolioEl.getBoundingClientRect();

  portfolioEl.classList.add('visible');
  startEl.classList.add('fade-out');

  setTimeout(function () {
    startEl.style.display = 'none';
  }, 900);
}
