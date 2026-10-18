# 海の中に咲く花

캐릭터 페어의 프로필, 글, 이미지를 담는 반응형 정적 웹사이트입니다.

## 로컬 실행

```sh
cd /workspace/a
python3 -m http.server 3000 --bind 0.0.0.0
```

빌드나 패키지 설치는 필요하지 않습니다. 정적 파일을 GitHub Pages 등으로 배포할 수 있습니다.

- `index.html`: 페이지 구성 및 임시 프로필
- `style.css`: 디자인 및 모바일 대응
- `script.js`: 메뉴, 글 분류, 글 읽기와 이미지 확대
- `assets/garden.svg`: 직접 제작한 수중 화원 일러스트

프로필 A/B와 예시 기록은 실제 캐릭터 설정으로 교체하세요. 글 내용은 `script.js`의 `entries`에 있습니다. 갤러리와 글은 파일을 편집하여 관리하는 구성으로, 업로드나 관리자 기능은 없습니다.

Google Fonts에 접근하지 못해도 시스템 serif 글꼴로 동작합니다.
