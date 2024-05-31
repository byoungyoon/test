import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef } from 'react';

interface SlickProps {
  list: { id: number; label: string; active: boolean; activeUrl?: string }[];
  icon?: React.ReactNode;
}

const Slick = ({ list, icon }: SlickProps) => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollDirection = useRef<number>(0);
  const requestRef = useRef<number>();
  const startTimeRef = useRef<number>();

  const openWebpage = useCallback((url: string) => {
    window.open(
      url,
      'Webpage Pop-up',
      'width=800, height=600, top=100, left=100, resizable=yes, scrollbars=yes'
    );
  }, []);

  const animate = useCallback(
    (time: number) => {
      if (startTimeRef.current != undefined) {
        const elapsedTime = time - startTimeRef.current;
        if (elapsedTime > 50) {
          startTimeRef.current = time;

          if (scrollContainer.current) {
            scrollContainer.current.scrollTo({
              left:
                scrollContainer.current.scrollLeft + scrollDirection.current,
              behavior: 'smooth',
            });
          }
        }
      } else {
        startTimeRef.current = time;
      }
      requestRef.current = requestAnimationFrame(animate);
    },
    [scrollDirection]
  );

  const handleMouseDown = useCallback(
    (direction: number) => {
      scrollDirection.current = direction;
      requestRef.current = requestAnimationFrame(animate);
    },
    [animate]
  );

  const handleMouseUp = useCallback(() => {
    if (requestRef.current !== undefined) {
      scrollDirection.current = 0;
      cancelAnimationFrame(requestRef.current);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (requestRef.current !== undefined) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className='section_top_grp'>
      <div className='section_ico'>{icon}</div>
      <div className='section_info_row'>
        <div onMouseDown={() => handleMouseDown(-14)} onMouseUp={handleMouseUp}>
          <ChevronLeft
            size={35}
            className='cursor-pointer text-[#888]/30 hover:scale-110 hover:text-[#888] active:scale-90'
            color='#adadad'
          />
        </div>

        <div ref={scrollContainer} className='section_list'>
          {list.map(({ id, label, active, activeUrl }) => (
            <div
              key={id}
              className={`section_item ${active ? 'active ' : ''} ${
                active ? 'cursor-pointer' : ''
              }`}
              onClick={
                active && activeUrl ? () => openWebpage(activeUrl) : undefined
              }
            >
              <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
            </div>
          ))}
        </div>

        <div onMouseDown={() => handleMouseDown(14)} onMouseUp={handleMouseUp}>
          <ChevronRight
            size={35}
            className='cursor-pointer text-[#888]/30 hover:scale-110 hover:text-[#888] active:scale-90'
            color='#adadad'
          />
        </div>
      </div>
    </div>
  );
};

export default Slick;
