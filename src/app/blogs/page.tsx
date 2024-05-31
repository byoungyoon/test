import React from 'react';

import CustomBlogSection from '@/app/blogs/_component/CustomBlogSection';
import CustomBlogTable from '@/app/blogs/_component/CustomBlogTable';
import CustomDonutChart from '@/app/blogs/_component/CustomDonutChart';
import CustomRelatedTermTable from '@/app/blogs/_component/CustomRelatedTermTable';
import CustomSearchBar from '@/app/blogs/_component/CustomSearchBar';

interface DashboardProps {
  searchParams: {
    search: string;
  };
}

export default function page({ searchParams: { search } }: DashboardProps) {
  return (
    <>
      <div className='total'>
        <div className='contbody'>
          <CustomSearchBar defaultValue={search} />
          {/* 섹션정보_블로그 분포 */}
          <div className='contBody_top'>
            <div className='topL'>
              <CustomBlogSection search={search} />
            </div>

            {/* 블로그 분포 도넛차트 */}
            <div className='topR'>
              <div className='topR_box'>
                <div className='box_stt'>블로그 분포</div>
                <div className='chart_info'>
                  <div className='w-88 h-88' id='chart'>
                    <CustomDonutChart keyword={search} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1 ~ 10위까지의 블로그 테이블 */}
          <div className='view_list'>
            <div className='view_list_box'>
              <div className='viewList_tbl'>
                <CustomBlogTable keyword={search} />
              </div>
            </div>
          </div>

          {/* 추천키워드 테이블 */}
          <div className='view_list'>
            <div className='view_list_box'>
              <div className='viewList_tbl'>
                <CustomRelatedTermTable keyword={search} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
