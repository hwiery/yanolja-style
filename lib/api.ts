/**
 * API 호출 헬퍼 함수 모음
 * 백엔드 `/api/accommodations` 엔드포인트와 연동합니다.
 */

/**
 * 숙소 정보 타입 정의
 */
export interface Accommodation {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * 전체 숙소 목록을 불러옵니다.
 * @returns 숙소 배열
 */
export async function fetchAccommodations(): Promise<Accommodation[]> {
  const res = await fetch('/api/accommodations');
  if (!res.ok) {
    throw new Error('숙소 목록을 불러오는 중 오류가 발생했습니다.');
  }
  const data: Accommodation[] = await res.json();
  // DB에서 전달된 imageUrl을 그대로 사용
  return data.map(item => ({ ...item }));
}

/**
 * ID에 해당하는 숙소 정보를 불러옵니다.
 * @param id 숙소 고유 ID
 * @returns 숙소 정보 객체
 */
export async function fetchAccommodationById(id: string): Promise<Accommodation> {
  const res = await fetch(`/api/accommodations/${id}`);
  if (res.status === 404) {
    throw new Error('해당 ID의 숙소를 찾을 수 없습니다.');
  }
  if (!res.ok) {
    throw new Error('숙소 정보를 불러오는 중 오류가 발생했습니다.');
  }
  const data: Accommodation = await res.json();
  // DB에서 전달된 imageUrl을 그대로 사용
  return { ...data };
} 