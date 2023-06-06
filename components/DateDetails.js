import React, { useEffect, useState } from 'react';

const DatelDetails = () => {
  const [selectedDate, setselectedDate] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDate = localStorage.getItem('selectedDate');
      setselectedDate(storedDate);
    }
  }, []);

  if (!selectedDate) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {typeof window !== 'undefined' && <h2>{selectedDate}</h2>}
      {/* Other drink details */}
    </div>
  );
};

export default DatelDetails;
