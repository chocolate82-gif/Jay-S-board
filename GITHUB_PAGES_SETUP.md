# GitHub Pages 설정 가이드

## 문제: "There isn't a GitHub Pages site here" 에러

이 에러는 GitHub Pages가 아직 활성화되지 않았거나 배포가 완료되지 않았을 때 발생합니다.

## 해결 방법

### 1단계: GitHub Pages 설정 활성화

1. 리포지토리 페이지로 이동:
   - https://github.com/chocolate82-gif/Jay-S-board

2. **Settings** 탭 클릭

3. 왼쪽 메뉴에서 **Pages** 클릭

4. **Source** 섹션에서:
   - **Source** 드롭다운에서 **GitHub Actions** 선택
   - 또는 **Deploy from a branch** 선택 후:
     - Branch: `gh-pages` 또는 `main`
     - Folder: `/ (root)`

5. **Save** 클릭

### 2단계: 워크플로우 수동 실행

1. **Actions** 탭 클릭:
   - https://github.com/chocolate82-gif/Jay-S-board/actions

2. 왼쪽에서 **Deploy to GitHub Pages** 워크플로우 선택

3. **Run workflow** 버튼 클릭

4. **Run workflow** 확인

### 3단계: 배포 상태 확인

1. **Actions** 탭에서 워크플로우 실행 상태 확인
2. 빌드가 성공하면 자동으로 배포됩니다
3. 배포 완료 후 다음 링크에서 확인:
   - https://chocolate82-gif.github.io/Jay-S-board

## 문제 해결

### 배포가 실패하는 경우

1. **Actions** 탭에서 실패한 워크플로우 클릭
2. 빌드 로그 확인
3. 에러 메시지에 따라 수정

### 여전히 404 에러가 발생하는 경우

1. 배포가 완료될 때까지 기다리기 (2-5분)
2. 브라우저 캐시 삭제 후 재시도
3. GitHub Pages 설정에서 Source가 올바르게 설정되었는지 확인

## 참고

- 첫 배포는 보통 5-10분 소요
- 이후 업데이트는 2-3분 소요
- 배포 완료 후 사이트가 표시되는 데 몇 분 더 걸릴 수 있음
