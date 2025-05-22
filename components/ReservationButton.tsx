'use client';
import React, { useState } from 'react';

interface ReservationButtonProps {
  id: string;
  initialStock: number;
}

export default function ReservationButton({ id, initialStock }: ReservationButtonProps) {
  const [stock, setStock] = useState(initialStock);
  const [message, setMessage] = useState<string | null>(null);

  const handleReserve = async () => {
    if (stock <= 0) {
      alert('재고가 없습니다.');
      return;
    }
    try {
      const res = await fetch(`/api/accommodations/${id}/reserve`, { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message);
      } else {
        setStock(data.stock);
        setMessage('예약이 성공적으로 완료되었습니다!');
      }
    } catch (e) {
      console.error(e);
      alert('예약 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <div className="mt-2">잔여 재고: {stock}</div>
      <button
        onClick={handleReserve}
        className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        disabled={stock <= 0}
      >
        {stock > 0 ? '예약하기' : '재고 없음'}
      </button>
      {message && <div className="mt-2 text-green-600">{message}</div>}
    </div>
  );
} 