const pages = ['home', 'profile', 'writing', 'gallery'];
function showPage(page) {
  if (!pages.includes(page)) page = 'home';
  document.querySelectorAll('.page').forEach(el => el.classList.toggle('active', el.id === page));
  document.querySelectorAll('nav [data-page]').forEach(el => {
    const active = el.dataset.page === page;
    el.classList.toggle('active', active);
    if (active) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current');
  });
  window.scrollTo({top: 0, behavior: 'instant'});
}
document.querySelectorAll('[data-page]').forEach(el => el.addEventListener('click', () => {
  location.hash = el.dataset.page;
  showPage(el.dataset.page);
}));
window.addEventListener('hashchange', () => showPage(location.hash.slice(1)));
showPage(location.hash.slice(1));
const entries = [
  {type: 'ARCHIVE NOTICE · 예시 기록', title: '이 작은 화원에 오신 것을 환영합니다.', text: '「海の中に咲く花」는 두 캐릭터의 프로필과 이야기, 그림을 모아두는 개인 아카이브입니다.\n\n현재 프로필과 기록은 구성을 보여드리기 위한 임시 내용입니다. 캐릭터의 이름과 설정, 작품은 차례로 이곳에 담길 예정입니다.\n\n부디 이 작은 바다에서 천천히 머물다 가세요.'},
  {type: 'STORY FRAGMENT · 창작 예시', title: '바다가 꽃을 돌려주는 밤', text: '그 마을에서는 바다에 꽃을 버리지 않았다.\n\n물속에서 피어난 꽃은, 반드시 누군가의 문 앞에 돌아온다고 했다.\n\n나는 젖은 구두를 벗지도 못한 채 서 있었다. 문틈에는 작은 꽃잎이 끼어 있었다. 이상할 만큼 부드러운 분홍색이었다.\n\n— 디자인 시안을 위한 짧은 예시이며, 캐릭터의 공식 설정이 아닙니다.'}
];
const dialog = document.querySelector('#reader');
const content = document.querySelector('#dialog-content');
let opener;
function openDialog() {opener = document.activeElement; dialog.showModal();}
document.querySelectorAll('[data-entry]').forEach(el => el.addEventListener('click', () => {
  const entry = entries[Number(el.dataset.entry)];
  content.replaceChildren();
  const label = document.createElement('span'); label.className = 'small-label'; label.textContent = entry.type;
  const title = document.createElement('h2'); title.textContent = entry.title;
  const body = document.createElement('p'); body.textContent = entry.text;
  content.append(label, title, body); openDialog();
}));
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {if (e.target === dialog && (e.clientX < dialog.getBoundingClientRect().left || e.clientX > dialog.getBoundingClientRect().right || e.clientY < dialog.getBoundingClientRect().top || e.clientY > dialog.getBoundingClientRect().bottom)) dialog.close();});
dialog.addEventListener('close', () => opener?.focus());
document.querySelectorAll('[data-filter]').forEach(el => el.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => {b.classList.toggle('active', b === el); b.setAttribute('aria-pressed', String(b === el));});
  document.querySelectorAll('[data-kind]').forEach(row => {row.hidden = el.dataset.filter !== 'all' && el.dataset.filter !== row.dataset.kind;});
}));
document.querySelector('#open-art').addEventListener('click', () => {
  content.replaceChildren();
  const img = document.createElement('img'); img.src = 'assets/garden.svg'; img.alt = '어두운 바닷속에 피어난 파스텔 꽃들';
  const text = document.createElement('p'); text.textContent = '바닷속에 피는 꽃 · 사이트를 위해 제작한 SVG 일러스트';
  content.append(img, text); openDialog();
});
