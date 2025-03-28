/**
 * 환경변수에 등록된 값을 가져오는 유틸리티 함수
 *
 * @author Jason
 */
function getEnvironmentVal(key: string): string {
  const val = process.env[key];
  return val ?? '';
}

export default getEnvironmentVal;
