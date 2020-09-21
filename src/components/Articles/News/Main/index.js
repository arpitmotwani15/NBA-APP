import React from 'react';
import NewsSlider from '../../../widgets/Newslider/slider';
import NewsList from '../../../widgets/NewsList/newsList'
const NewsMain =()=>(
<div>
<NewsSlider type="featured"
    settings={{dots:false}}
    start={0}
    amount={3} />
    <NewsList type="cardMain"
    loadMore={false} start={3}
    amount={10} />
</div>
)
export default NewsMain;