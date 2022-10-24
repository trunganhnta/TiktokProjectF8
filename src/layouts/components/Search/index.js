import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [arrResultSearch, setArrResultSearch] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();
    useEffect(() => {
        if (!debounce.trim()) {
            setArrResultSearch([]);
            return;
        }

        const fetchApi = async () => {
            setIsLoading(true);
            const result = await searchService.search(debounce);
            setArrResultSearch(result);
            setIsLoading(false);
        };
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                placement="bottom-end"
                visible={!!searchValue && !!showResult && arrResultSearch.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            My tippy box
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {arrResultSearch.map((result) => (
                                <AccountItem key={result.id} data={result} onClick={() => setShowResult(false)} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => setShowResult(false)}
            >
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Search account or videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleSearch}
                        onFocus={() => {
                            searchValue && setShowResult(true);
                        }}
                        ref={inputRef}
                    />
                    <button
                        className={cx('clear-btn')}
                        onClick={() => {
                            setSearchValue('');
                            setArrResultSearch([]);
                            inputRef.current.focus();
                        }}
                    >
                        {!!searchValue && !isLoading && <FontAwesomeIcon className="btn" icon={faCircleXmark} />}
                    </button>
                    {isLoading && <FontAwesomeIcon className={cx('btn ', 'loading')} icon={faSpinner} />}
                    <button className={cx('btn', 'search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
