import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore, hasMoreImages }) => {
  return (
    <div className={css.loadMoreBtnContainer}>
      {hasMoreImages && (
        <button onClick={onLoadMore} className={css.loadMoreBtn}>
          Load more
        </button>
      )}
    </div>
  );
};

export default LoadMoreBtn;